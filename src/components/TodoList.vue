<template>
<div>
  <v-list-item v-for="todo in todos" v-bind:key="todo.id">
      <v-list-item-action>
        <v-checkbox
          :input-value="todo.checked"
          color="primary"
        ></v-checkbox>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>{{ todo.title }}</v-list-item-title>
        <v-list-item-subtitle>{{ todo.content }}</v-list-item-subtitle>
      </v-list-item-content>
  </v-list-item>
</div>
</template>

<script>
// import localStorageApi from '../api/localStorage'

export default {
  name: "TodoList",
  props: ['todos'],
  data() {
    return {
      todosOld: [
        { id: 1, title: 'eat burger', content: 'eat many burgers', checked: false },
        { id: 2, title: 'drink beer', content: 'drink various beer', checked: false }
      ]
    }
  },
  // computed: {
  //   todos: {
  //     get() {
  //       const todos = localStorageApi.getTodos()
  //       console.log(JSON.parse(todos), 'in todolist computed')
  //       return JSON.parse(todos)
  //     },
  //     set() {}
  //   }
  // },
  methods: {
    // checkTodo(id) {
    //   console.log('checkkkkkk')
    //   this.todos = this.todos.map(todo => {
    //     console.log(todo)
    //     if(todo.id == id) {
    //       todo.checked = !todo.checked
    //     }
    //     return todo
    //   })
    //   console.log(this.todos)
    // }
  },
}
</script>

<style scoped>

</style>