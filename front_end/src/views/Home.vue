<template>
  <div>
        <Navigation />
        <div class="container" v-if="dataLoaded">
            <Table :data="data" :from="from" :to="to" :elem="elem" :setdata="setData" :setElem="setElem" :setFrom="setFrom" :setTo="setTo" :title="'à faire'" attrName="todo" :list="data.todo" />
            <Table :data="data" :from="from" :to="to" :elem="elem" :setdata="setData" :setElem="setElem" :setFrom="setFrom" :setTo="setTo" :title="'en cours'" attrName="doing" :list="data.doing"/>
            <Table :data="data" :from="from" :to="to" :elem="elem" :setdata="setData" :setElem="setElem" :setFrom="setFrom" :setTo="setTo" :title="'terminé'" attrName="done" :list="data.done"/>
        </div>
  </div>

</template>

<script>
import { ref, watch } from 'vue';
import Navigation from '../components/Navigation.vue';
import Table from '../components/Table.vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
export default {
    components : {Navigation,Table},
    setup (props){
        const data = ref({
            'todo' : [],
            'doing' : [],
            'done' : [],
        })
        const router = useRouter()
        if(!localStorage.getItem('user')){
            router.push('/login')
        }
        const dataLoaded = ref(false)

        async function setData(){
            dataLoaded.value = false
        
            console.log('upgrading data')

            await axios.get('http://localhost:3000/todos/'+JSON.parse(localStorage.getItem('user')).id).then((response) => {
                console.log(response.data)
                data.value.todo = response.data.data.filter((elem) => elem.state === 'todo')
                data.value.doing = response.data.data.filter((elem) => elem.state === 'doing')
                data.value.done = response.data.data.filter((elem) => elem.state === 'done')

                dataLoaded.value = true
            })
        }

        setData(null)

        const from = ref(null)
        const elem = ref(null)
        const to = ref(null)

        watch([from,to,elem],() => {
            console.log(elem.value,from.value,to.value)
        })

        function setFrom(val){
            from.value = val
        }
        function setElem(val){
            elem.value = val
        }
        function setTo(val){
            to.value = val
        }

        return {data,dataLoaded,elem,from,to,setData,setFrom,setTo,setElem}
    }
}
</script>

<style scoped>
.container{
    display: flex;
    justify-content: center;
    gap: 50px;
    align-items: center;
    height: 80vh;
}
</style>