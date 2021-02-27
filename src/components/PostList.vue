<template>
<div>PostList
<!-- <p v-for="el in vuex_todos" :key="el" @click="handleClick(el)">{{el}}</p> -->
<button @click="handleClick">getPost</button>
</div>
</template>

<script>
import EventBus from '../EventBus'
import { mapState, mapActions } from 'vuex'

export default {
  name: "PostList",
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
    ...mapActions([
      'getPosts'
    ]),
    handleClick() {
      this.getPosts()
    }
  },
}
</script>

<style scoped>

</style>