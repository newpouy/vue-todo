<template>
 <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col
        cols="12"
        sm="12"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          <v-text-field
            v-model="todoInput"
            label="write anything to do"
            placeholder="write anything to do"
            hide-details
            outlined
            append-outer-icon="mdi-plus"
            v-on:keyup="handleKeyup"
            @click:append-outer="addTodo"
          />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import localStorageApi from '../api/localStorage'
export default {
  name: "TodoInput",
  data() {
    return {
      todoInput: ''
    }
  },
  methods: {
    async addTodo() {
      console.log('addTodo')
      // localstorage api
      const result = await localStorageApi.addTodo(this.todoInput)
      console.log(result)
      // http api
      this.$root.$emit('hahaha', this.todoInput)
    },
    clearInput() {
      this.todoInput = ''
    },
    handleKeyup(e) {
      console.log('keyup', e.keyCode)
      // validation 코드 추가
      if (e.keyCode === 13) {
        this.addTodo()
        this.clearInput()
      }
      // 예외처리 코드 추가
      // else if (e.keyCode === 50) {
      //   alert('@ was pressed');
      // }
    }
  },
  
}
</script>

<style scoped>

</style>