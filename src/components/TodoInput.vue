<template>
    <v-text-field label="Regular" @keyup="handleKeyup" v-model="todoInput">
    </v-text-field>
</template>

<script>
import EventBus from '../EventBus'
export default {
    name: "TodoInput",
    data() {
        return {
            todoInput: ''
        }
    },
    methods: {
        handleKeyup(e) {
            console.log('handleKeyup', e, this.todoInput)
            if(e.keyCode == 13) EventBus.$emit('write-todo', this.todoInput)
        }
    }
}
</script>

<style scoped>

</style>