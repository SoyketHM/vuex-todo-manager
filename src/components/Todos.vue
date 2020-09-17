<template>
  <div>
    <h1>Todos</h1>
    <div class="todos">
      <div class="todo" v-for="todo in allTodos" :key="todo.id">{{ todo.title }}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Todos",
  computed: {...mapGetters(["allTodos"])},
  mounted() {
    // console.log(this.allTodos);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 40px 0 0;
}
</style>
