<template>
<div class="wrapper">
  <div class="container">
    <Toast />
    <h1 class="w-fit text-4xl text-center px-4 py-2 border-b-4 border-[#00aaff]">Se connecter</h1>
    <BaseInputVue v-model="email" inputType="text" placeholder="votre adresse email"><i class="pi pi-user"></i></BaseInputVue>
    <BaseInputVue v-model="password" inputType="password" placeholder="votre mot de passe"><i class="pi pi-lock"></i></BaseInputVue>
    <Button @click="signInUser" label="Submit" />
  </div>
</div>
</template>

<script >
import { reactive, toRefs, watch } from 'vue'
import BaseInputVue from '../components/BaseInput.vue'
import schema from '../requestValidators/loginUser.js'
import { useToast } from 'primevue/usetoast';
import {connectUser} from '../api/user.js'
import {useUserStore} from '../stores/User.js'

export default {
    components : {BaseInputVue},
    setup(props){
        const state = reactive({
            email : '',
            password  :''
        })

        const userStore = useUserStore()
        const toast = useToast()

        function showError({severity,summary,detail}) {
            toast.add({severity,summary,detail})
        }

        function signInUser() {
            const {value,error} = schema.validate(state)

            if(error){
                showError({severity : 'danger',summary : 'Erreur',detail : error.message})
            }else{
                
                userStore.setUser(connectUser(state))
            }

        }

        return {
            ...toRefs(state),
            signInUser
        }
    }
}


</script>

<style>
.wrapper{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f0f3f8;
}
.container{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    background: white;
    padding: 40px 50px;
    border-radius: 8px;
}
</style>