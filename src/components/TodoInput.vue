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
            label="write anything to do"
            placeholder="write anything to do"
            hide-details
            outlined
            append-outer-icon="mdi-plus"
            @click:append-outer="addTodo"
          />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "TodoInput",
  methods: {
    addTodo() {
      console.log('addTodo')
    }
  }
}
</script>

<style scoped>

</style>