import axios from 'axios';

export default {
  state: {
    todos: [],
  },
  getters: {
    allTodos: state => state.todos
  },
  mutations: {
     setTodos: (state, todos) => (state.todos = todos),
     newTodo: (state, todo) => state.todos.unshift(todo),
     removeTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id != id),
  },
  actions: {
    async fetchTodos({commit}, limit=20) {
      console.log(limit);
      const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
      commit('setTodos', response.data);
    },

    async addTodo({commit}, title) {
      let neTodo = {
        title,
        completed: false,
      };
      const response = await axios.post("https://jsonplaceholder.typicode.com/todos", neTodo);
      commit('newTodo', response.data);
    },
    
    async deleteTodo({commit}, id) {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      commit('removeTodo', id);
    }
  }
}
