<template>
  <div class="todo" :class="{'completed':todo.completed}">
    <div>
      <input type="checkbox" @change="isChecked" :checked="todo.completed ? true : false" >
      {{ todo.title }}
    </div>
    <span class="close" @click="deleteTodo(todo.id)">
      X
    </span>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "TodoItem",
  props: ["todo"],
  data() {
    return { checkedValue: [] };
  },
  methods: {
    ...mapActions(['deleteTodo']),
    isChecked() {
      this.todo.completed = !this.todo.completed;
    },
  },
};
</script>

<style scoped>
.todo{
    border: 1px solid #ccc;
    background: #609dd2;
    padding: 1rem;
    border-radius: 5px;
    text-align: center;
    position: relative;
    cursor: pointer;
    color: #fff;
    font-size: 16px;
    text-transform: capitalize;
}
p {
  flex: 1;
  text-align: left;
}

input {
  margin: 0 10px;
}
.completed {
  /* text-decoration: line-through; */
  color: silver;
  background: #3e4e5f;
}
.close {
  font-size: 20px;
  font-weight: 700;
  color: tomato;
  cursor: pointer;
}
</style>