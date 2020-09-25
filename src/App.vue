<template>
  <div id="app">
    <AddTodo/>
    <Todos/>
  </div>
</template>

<script>
import Todos from './components/Todos.vue'
import AddTodo from './components/AddTodo.vue'

export default {
  name: 'App',
  components: {
    Todos,
    AddTodo,
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
/* .app{
  margin: 0 auto;
} */
</style>
