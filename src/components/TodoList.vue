<template>
<div>TodoList
<p v-for="el in proptodos" :key="el">{{el}}</p>
</div>
</template>

<script>
import EventBus from '../EventBus'

export default {
  name: "TodoList",
  props: ['proptodos'],
  data() {
    return {
      todos: []
    }
  },
  created() {
    EventBus.$on('write-todo', (payload) => {
      console.log(payload)
      this.todos.push(payload)
    })
  },
}
</script>

<style scoped>

</style>