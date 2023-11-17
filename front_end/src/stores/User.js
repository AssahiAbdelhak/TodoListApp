import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
/*
const state = {
  user : null
}

const getters = {
  GET_USER : (state) => state.user
}

const actions = {
  setUser(context,user){
    console.log('setting user')
    context.state.user = user
  }
}
*/
export const useUserStore = defineStore('user', () => {
 const user = ref(null)
 function getUser() {
  return user.value
 }
 function setUser(user){
    user.value = user
 }
})
