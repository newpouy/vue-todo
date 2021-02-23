<template>
    <v-text-field label="Regular" @keyup="handleKeyup" v-model="todoInput">
    </v-text-field>
</template>

<script>
// import EventBus from '../EventBus'
import { mapActions } from 'vuex'

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
            if(e.keyCode == 13) {
                // this.$emit('write-todo', this.todoInput)
                this.addTodo(this.todoInput)
            }
        },
        ...mapActions([
            'addTodo'
        ])
    }
}
</script>

<style scoped>

</style>