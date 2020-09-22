<template>
  <div class="todo">
    <div :class="{'completed':todo.completed}">
      <input type="checkbox" @change="isChecked" :checked="todo.completed ? true : false" ></todo>
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
/* .todoItem {
  padding: 10px;
  margin: 5px;
  font-size: 25px;
  width: 50%;
  border-radius: 5px;
  display: flex;
  background: #f9f9f9;
} */
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
  text-decoration: line-through;
  color: silver;
}
.close {
  font-size: 20px;
  font-weight: 700;
  color: tomato;
  cursor: pointer;
}
</style>