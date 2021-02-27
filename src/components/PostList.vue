<template>
<div>PostList
<button @click="handleClick">getPost</button>
<p v-if="posts.onGetRequest">요청중</p>
<p v-for="el in posts.list" :key="el">{{el.title}}</p>
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
      vuex_todos: state => state.todos,
      posts: state => state.posts
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