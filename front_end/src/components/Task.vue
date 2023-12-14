<template>
    <div class="taskContainer">
        <div>
            <span v-if="!edit">{{ task.todo }}</span>
            <input type="text" v-if="edit" v-model="input">
        </div>
        <div>
            <i class="fa-solid fa-pencil" v-if="!edit" @click="() => edit = true"></i>
            <i class="fa-solid fa-check" v-if="edit" @click="() => updateTodo(task.id)"></i>
            <i class="fa-solid fa-trash" @click="() => onDelete(task.id)"></i>   
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios'
export default {
    props : ['task','onDelete','setData'],
    setup(props){
        
        const input = ref('')
        const edit = ref(false)

        const updateTodo = async (id) => {
            await axios.patch('http://localhost:3000/todos/'+id,{
                todo : input.value,
            })
            edit.value = true
            props.setData(null)
        }

        return {input,edit,updateTodo}
    }
}
</script>

<style scoped>
.taskContainer{
    display: flex;
    width: 100%;
    justify-content: space-between;
}
.taskContainer i{
    margin: 0 5px;
}
</style>