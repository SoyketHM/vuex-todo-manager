
export default {
  state: {
    todos: [
      {id: 1, title: 'Todo 1'},
      {id: 2, title: 'Todo 2'},
    ]
  },
  getters: {
    allTodos: state => state.todos
  },
  mutations: {
  },
  actions: {
  }
}
