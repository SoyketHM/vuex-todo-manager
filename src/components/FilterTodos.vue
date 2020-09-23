<template>
  <div class="filterTodos">
      <p>Filter Todos</p>
      <select name="FilterTodos" id="" @change="selectLimit($event)">
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
          <option value="200">200</option>
      </select>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    name: 'FilterTodos',
    methods:{
        ...mapActions(['fetchTodos']),
        selectLimit(e){
            let limit = parseInt(e.target.value);
            this.fetchTodos(limit);

        }

    },

}
</script>

<style>
.filterTodos{
}

</style>