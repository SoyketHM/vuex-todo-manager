<template>
  <div
    class="todo"
    @dblclick="isChecked(todo)"
    :class="{ completed: todo.completed }"
  >
    <div class="item">
      <p>{{ todo.title }}</p>
      <span class="delete" @click="deleteTodo(todo.id)">
        <i class="fas fa-trash-alt"></i>
      </span>
    </div>
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
    ...mapActions(["updateTodo", "deleteTodo"]),
    isChecked(todo) {
      let updateTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed,
      };
      this.updateTodo(updateTodo);
    },
  },
};
</script>

<style scoped>
.todo {
  border: 2px solid #ccc;
  background: #609dd2;
  padding: 1rem;
  border-radius: 10px;
  text-align: center;
  position: relative;
  cursor: pointer;
  color: #fff;
  font-size: 16px;
  text-transform: capitalize;
}
.item {
  display: flex;
  justify-content: space-between;
}
p{
  padding: 0 8px;
}
.completed {
  color: silver;
  background: #3e4e5f;
}
.delete {
  font-size: 20px;
  font-weight: 700;
  color: tomato;
  cursor: pointer;
}
</style>