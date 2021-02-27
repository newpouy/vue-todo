import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    todos: [],
    posts: {
      onGetRequest: false,
      list: []
    }
  },
  mutations: {
    ['ADD_TODO'] (state, todo) {
      state.todos.push(todo)
    },
    ['GET_POST_REQUEST'] (state) {
      state.posts.onGetRequest = true
    },
    ['GET_POST_SUCCESS'] (state, posts) {
      state.posts.list = posts
    },
    ['GET_POST_FAILURE'] (state, todo) {
      state.todos.push(todo)
    }
  },
  actions: {
    addTodo ({ commit }, todo) {
      commit('ADD_TODO', todo)
    },
    async getPosts ({ commit, dispatch }) {
      commit('GET_POST_REQUEST')
      const posts = await dispatch('getPostsRequest')
      if(posts) {
        commit('GET_POST_SUCCESS', posts)
      }
    },
    async getPostsRequest() {
      return await fetch('https://my-json-server.typicode.com/typicode/demo/posts')
    }
  }
})

export default store