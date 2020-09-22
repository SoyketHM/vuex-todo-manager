<template>
  <div>
    <h1>Todos</h1>
    <div class="todos">
      <todo v-for="todo in allTodos" :key="todo.id" :todo="todo" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Todo from './Todo.vue';

export default {
  name: "Todos",
  components: {
    Todo,
  },
  methods: {
    ...mapActions(['fetchTodos'])
  }, 
  computed: {...mapGetters(["allTodos"])},
  created() {
    this.fetchTodos();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-family: system-ui;
  font-size: 100px;
  color: tan;
  font-weight: 100;
  line-height: 25px;
  margin-bottom: 50px;
}
.todos{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1erm;
}
</style>
