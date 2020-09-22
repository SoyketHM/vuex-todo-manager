<template>
    <div>        
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
    input{
        width: 40%;
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