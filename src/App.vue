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
      <TodoInput/>
      <TodoList/>
      <TodoFooter/>
    </v-main>
  </v-app>
</template>

<script>
// import {mapGetters, mapActions} from 'vuex'

import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  components: {
    TodoInput,
    TodoList,
    TodoFooter
  },
  data: () => ({ drawer: null }),
}
</script>

<style>
</style>
