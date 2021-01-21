<template>
  <div class="hello">
    <h1>msg: {{ msg }}</h1>
    <h1>test: {{ test }}</h1>
    <h1>newTest: {{ newTest }}</h1>
    <h1>answer: {{ answer }}</h1>
    test: <input type="text" :value="test"><br/>
    question: <input type="text" v-model="question">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
   return {
     test: 'test',
     question: '',
     answer: '노답'
   }
  },
  computed: {
    newTest: function() {
      return this.test.concat('new')
    }
  },
  watch: {
    question: function() {
      this.answer = "질문중...."
    }
  },
  created() {
    console.log('created')
  },
  beforeCreate() {
    console.log('beforeCreate')
  },
  beforeMount() {
    console.log('beforeMount')
  },
  mounted() {
    console.log('mounted')
  },
  beforeUpdate() {
    console.log('beforeUpdate')
  },
  updated() {
    console.log('updated')
  },
  beforeDestroy() {
    console.log('beforeDestroy')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
