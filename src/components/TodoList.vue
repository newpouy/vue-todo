<template>
<div>TodoList
<p v-for="el in vuex_todos" :key="el" @click="handleClick(el)">{{el}}</p>
</div>
</template>

<script>
import EventBus from '../EventBus'
import { mapState } from 'vuex'

export default {
  name: "TodoList",
  props: ['proptodos'],
  // data() {
  //   return {
  //     todos: []
  //   }
  // },
  computed: {
    ...mapState({
      vuex_todos: state => state.todos
    })
  },
  created() {
    EventBus.$on('write-todo', (payload) => {
      console.log(payload)
      this.todos.push(payload)
    })
  },
  methods: {
    handleClick(todo) {
      console.log('hihi')
      this.$router.push(`/todo/${todo}`)
    }
  },
}
</script>

<style scoped>

</style>