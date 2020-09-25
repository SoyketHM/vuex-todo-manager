<template>
  <div class="main">
    <h1>Todos</h1>
    <FilterTodos/>
    <div class="info">
      <p>Double Click For Status</p>
      <p> <span class="complete"></span> Complete</p>
      <p> <span class="incomplete"></span> Incomplete</p>
    </div>
    <div class="todos">
      <todo v-for="todo in allTodos" :key="todo.id" :todo="todo" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Todo from './Todo.vue';
import FilterTodos from './FilterTodos.vue'

export default {
  name: "Todos",
  components: {
    Todo,
    FilterTodos,
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
.main{
  margin: 0 auto;
  max-width: 80%;
}
h1 {
  font-family: system-ui;
  font-size: 100px;
  color: tan;
  font-weight: 100;
  line-height: 25px;
  margin-bottom: 50px;
  text-align: center;
}
.todos{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1erm;
}
.info{
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  color: rgb(4, 63, 43);
}
.complete{
  display: inline-block;
  height: 20px;
  width: 20px;
  margin-right: 10px;
  background: #3e4e5f;
}
.incomplete{
  display: inline-block;
  height: 20px;
  width: 20px;
  margin-right: 10px;
  background: #609dd2;
}
.info p{
  display: flex;
  justify-content: center;
}
</style>
