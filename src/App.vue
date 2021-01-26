<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>TodoList Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-icon>fas fa-lock</v-icon>
      <TodoInput @addTodos="addTodoItems"/>
      <TodoList :todos="todos"/>
      <TodoFooter/>
    </v-main>
  </v-app>
</template>

<script>
// import {mapGetters, mapActions} from 'vuex'
import localStorageApi from './api/localStorage'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  data() {
    return {
      drawer: null,
      todos: []
    }
  },
  components: {
    TodoInput,
    TodoList,
    TodoFooter
  },
  methods: {
    addTodoItems(todo) {
      this.todos.push({ title: todo , content: todo })
      localStorageApi.addTodo(todo)
    }
  },
  created() {
    const todos = localStorageApi.getTodos()
    this.todos = todos ? JSON.parse(todos) : []
  },
}
</script>

<style>
</style>
