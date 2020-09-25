<template>
    <div class="addTodo">        
        <input type="text" placeholder="Add More Task" v-model="title" @keyup.enter="onEnter">
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    data(){
        return {
            title: ''
        }
    },
    methods:{
        ...mapActions(['addTodo']),
        onEnter(){
            this.addTodo(this.title);                
            this.title = '';
        }

    },
}
</script>

<style scoped> 
.addTodo{
    margin: 0 auto;
    max-width: 80%;
    display: flex;
    justify-content: center;
}
input{
    width: 50%;
    padding: 20px 35px;
    box-shadow: 1px 2px 12px 0px #ccc;
    border: none;
    font-size: 24px;
    font-family: system-ui;
    margin: 50px;
}
::placeholder {
    color: rgba(145, 145, 145, 0.719);
    opacity: .5; /* Firefox */
}
</style>