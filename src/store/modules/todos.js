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
     editTodo: (state, updateTodo) => {
       let index = state.todos.findIndex(todo => todo.id === updateTodo.id);
       if (index !== -1) {
         state.todos.splice(index, 1, updateTodo);
       }
     }
  },
  actions: {
    async fetchTodos({commit}, limit=20) {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
      commit('setTodos', response.data);
    },

    async addTodo({commit}, title) {
      let newTodo = {
        title,
        completed: false,
      };
      const response = await axios.post("https://jsonplaceholder.typicode.com/todos", newTodo);
      commit('newTodo', response.data);
    },
    
    async updateTodo({commit}, data) {
      const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${data.id}`, data);
      console.log(response.data);
      commit('editTodo', response.data);
    },
    
    async deleteTodo({commit}, id) {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      commit('removeTodo', id);
    }
  }
}
