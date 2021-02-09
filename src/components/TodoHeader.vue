<template>
    <div>TodoHeader
        <h1>{{ title  }}</h1>
    </div>
</template>

<script>
import EventBus from '../EventBus'
export default {
name: "TodoHeader",
props: ['title'],
created() {
    EventBus.$on('write-todo', (payload) => {
        console.log(payload, ' here is header')
    })
},
}
</script>

<style scoped>

</style>