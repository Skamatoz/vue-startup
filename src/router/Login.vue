<template>

    <h1 class=" text-xl font-semibold mt-6 mb-2 text-gray-700">Вход</h1>
    <h1  class=" text-xl font-semibold mt-6 mb-2 text-gray-700">Ты в системе, бро!</h1>
    <label for="" class="block mb-1 text-xs text-gray-400 ">Email</label>
    <input v-model="mail" placeholder="" type="mail" class=" mb-4 block bg-PoscetFon w-80 border-gray-200 border-2 rounded p-2">

    <label for="" class="block mb-1 text-xs text-gray-400 ">Password</label>
    <input v-model="password" placeholder="" type="password" class=" mb-4 block bg-PoscetFon w-80 border-gray-200 border-2 rounded p-2">
    <div class="flex-col">
    <button @click="doLogin" class= " block bg-green-300 mb-2">Отправить</button>
    <button  type="button" @click="doLogout" class="block  bg-red-300">Выйти</button>
    </div>

</template>

<script setup>
defineOptions({
  name: 'Login'
})

import { onMounted, ref } from 'vue'
import PocketBase from 'pocketbase'

const mail = ref('')
const password = ref('')
let pb = null

onMounted( async ()=>{
   pb = new PocketBase('https://trampaibase.ru');

   const authData = await pb.collection('users')
     .authWithPassword('semyonvb@gmail.com', 'Supermox11')

   // after the above you can also access the auth data from the authStore
  // console.log(pb.authStore.isValid);
  // console.log(pb.authStore.token);
   //console.log(pb.authStore.model.id);
   //localStorage.setItem("key", pb.authStore.model.id)
   console.log(localStorage.getItem("key"))

})

const doLogout = () => {
  // pb.authStore.clear()
  // currentUser.value = null
}

const doLogin = async () => {

}
console.log(localStorage.getItem("key"))

</script>
