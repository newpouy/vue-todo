<template>
<div>
  <v-list-item-group
      v-model="todos"
      multiple
    >
      <v-list-item v-for="todo in todos" v-bind:key="todo.id">
          <v-list-item-action>
            <v-checkbox
              :input-value="todo.checked"
              color="primary"
              @click="checkTodo(todo.id)"
            ></v-checkbox>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ todo.title }}</v-list-item-title>
            <v-list-item-subtitle>{{ todo.content }}</v-list-item-subtitle>
          </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
</div>
</template>

<script>
export default {
  name: "TodoList",
  data() {
    return {
      todos: [
        { id: 1, title: 'eat burger', content: 'eat many burgers', checked: false },
        { id: 2, title: 'drink beer', content: 'drink various beer', checked: false }
      ]
    }
  },
  methods: {
    checkTodo(id) {
      console.log('checkkkkkk')
      this.todos = this.todos.map(todo => {
        console.log(todo)
        if(todo.id == id) {
          todo.checked = !todo.checked
        }
        return todo
      })
    }
  }
}
</script>

<style scoped>

</style>