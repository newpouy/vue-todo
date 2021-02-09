<template>
<div>TodoList</div>

</template>

<script>
import EventBus from '../EventBus'

export default {
  name: "TodoList",
  data() {
    return {
      todos: []
    }
  },
  created() {
    EventBus.$on('write-todo', (payload) => {
      console.log(payload)
    })
  },
}
</script>

<style scoped>

</style>