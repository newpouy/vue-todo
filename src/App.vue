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

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <todo-header/>
      <todo-input @write-todo="writeTodo"/>
      <router-view></router-view>
      <todo-footer/>

    <!-- <router-link to="/foo">Go to Foo</router-link><br/>
    <router-link to="/bar">Go to Bar</router-link> -->
    
    
    </v-main>
  </v-app>
</template>

<script>
import TodoFooter from './components/TodoFooter.vue';
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';

export default {
  name: 'App',

  components: {
    TodoHeader,
    TodoInput,
    TodoFooter,
  },
  data: () => ({ 
    drawer: null,
    todos: []
  }),
  methods: {
    writeTodo(todo) {
      console.log('writeTodo in app.vue', todo)
      this.todos.push(todo)
    }
  },
};
</script>
