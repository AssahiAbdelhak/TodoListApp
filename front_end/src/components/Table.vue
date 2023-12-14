<template>
  <div class="table">
        <h2>{{ title }}</h2>
        <div class="todos" @dragover="dragOver" @drop="drop" >
            <div class="task" v-for="elem in list" :key="elem" @dragstart="() => {
                setFrom(attrName)
                setElem(elem)
            }" draggable="true">
                <Task :task="elem" :setData="setdata" :onDelete="deleteTodo" />
            </div>
            <input type="text" v-model="input" v-if="inputShowed">
            <button v-if="inputShowed" @click="addTodo">ajouter</button>
            <div @click="inputShowed = true">
                <i class="fa-solid fa-plus"></i>
                <span>Ajouter une carte</span>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios'
import Task from './Task.vue'
export default {

    props : ['title','list','setFrom','setTo','setElem','attrName','setdata','elem','from','to'],
    components : {Task},
    setup(props){
        
        const inputShowed = ref(false)
        const input = ref('')
        const edit = ref(false)

        /*function dragStart(e){
            console.log('you have selected this element.',e.target)
            props.setFrom(props.attrName)
            props.setElem(e.target.textContent)
        }*/
        function dragOver(e){
            e.preventDefault()
        }

        async function addTodo(){
            if(input.value != ''){
                await axios.post('http://localhost:3000/todos',{
                    todo : input.value,
                    state : props.attrName,
                    id_user : JSON.parse(localStorage.getItem('user')).id
                })
                inputShowed.value = false
                input.value = ''
            }
            props.setdata(null)
        }

        async function deleteTodo(id){
            await axios.delete('http://localhost:3000/todos/'+id)
            props.setdata(null)
        }

        async function drop(e){
            //props.addToList('hello')
            props.setTo(props.attrName)
            let obj = {}
            let res = props.data[props.from]
            res.splice(props.data[props.from].indexOf(props.elem.todo),1)
            
            deleteTodo(props.elem.id)
            
            obj[props.from] = res
            props.data[props.attrName].push(props.elem.todo)

            console.log('here is the value of propos.elem  '+props.elem.todo)

            await axios.post('http://localhost:3000/todos',{
                todo : props.elem.todo,
                state : props.attrName,
                id_user : JSON.parse(localStorage.getItem('user')).id
            })

            obj[props.attrName] = props.data[props.attrName]
            props.setdata(obj)
        }

        return {...props,edit,inputShowed,input,deleteTodo,addTodo,dragOver,drop}

    }

}
</script>

<style scoped>
.todos{
    padding: 20px 0;
}
.table{
    border: 1px solid black;
    min-width: 300px;
    padding: 10px;
    text-align: center;
    border-radius: 5px;
}
.table h2{
    text-transform: uppercase;
}
.table .todos{
    text-align: start;
    display: flex;
    gap: 5px;
    max-height: 800px;
    overflow-y: scroll;
    flex-direction: column;
}
span{
    padding: 2px 8px;
    border-radius: 5px;
    width: 100%;
    display: block;
}
.todos div{
    display: flex;
    align-items: center;
}
.todos div:hover{
    background: rgb(240, 234, 234);
}



</style>