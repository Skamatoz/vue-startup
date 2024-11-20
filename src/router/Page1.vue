<template>
    <div class="">
    <h1 class="m-4 text-xl font-semibold text-gray-700">Форма отправки</h1>
        <div class="flex border-2 border-gray-200 p-4 py-6 w-auto m-4 rounded-xl" >
            <form @submit.prevent="sendData" action="" class="flex-col  w-full">
                <input v-model="name" placeholder="Имя" type="text"  class="mb-2 w-full block rounded-lg border bg-gray-50 px-3 py-2.5 text-start text-sm
                                        font-light focus:border-green-500 text-black outline-none  transition duration-100">
                <input v-model="date_start" type="date" class="mb-2 w-full block rounded-lg border bg-gray-50 px-3 py-2.5 text-gray-400">
                <input v-model="date_end" type="date"  class="mb-2 w-full block rounded-lg border bg-gray-50 px-3 py-2.5 text-gray-400">
                <input v-model="price" type="text" placeholder="Прайс"  class="mb-2 w-full block rounded-lg border bg-gray-50 px-3 py-2.5 text-start text-sm
                                        font-light focus:border-green-500 text-black outline-none  transition duration-100">
                <select id="color" v-model="id_bike" class=" appearance-none mb-2 w-full block rounded-lg border bg-gray-50 px-3 py-2.5">
                     <option v-for="bike in garage" :key="bike.id" >{{bike.id}}</option>
                </select>

                <div class="flex items-center gap-2 mb-3">
                    <input v-model="helmet" type="checkbox" class="shrink-0 border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800">
                    <label for="remember-me" class="block text-sm text-gray-600 dark:text-neutral-400 items-center">Добавить шлем?</label>
                </div>
                    <button type="submit" class=" w-full block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 transition duration-100"> Отправить</button>
            </form>
        </div>
<h1 class="m-4 text-xl font-semibold text-gray-700">Каталог</h1>
        <div class="flex  border-2 border-gray-200 p-4 py-6 w-auto m-4 rounded-xl" v-for="item in booking" :key="item.id">
            <div class="flex items-center gap-2">
                <h2>{{ item.name }}</h2>
                <p>{{ item.date_start }}</p>
                <p>{{ item.date_end }}</p>
                <p>{{ item.helmet }}</p>

            </div>
        </div>
  </div>
</template>

<style>
</style>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient'

defineOptions({
  name: 'Page1'
})

//Подгрузка гаража
const garage = ref([])
async function findBikeInGarage() {
  let { data, error } = await supabase
    .from('garage')
    .select('*')
      garage.value = data
      //console.log(data)
      //console.log(error)
      //console.log(garage.value[0].id)

 }

//Получение каталога
const booking = ref([])

async function getCountries() {
   const { data } = await supabase
     .from('booking')
     .select(`*,garage (*)`)
      booking.value = data
      //console.log(data)
 }

 onMounted(() => {
   getCountries()
   findBikeInGarage()
 })

 const name = ref('')
 const date_start = ref('')
 const date_end = ref('')
 const price = ref('')
 const helmet = ref('')
const id_bike = ref('')



 async function sendData() {
   const { data, error } = await supabase
       .from('booking')
       .insert({
          name: name.value,
          name_bike: id_bike.value,
          date_start: date_start.value,
          date_end: date_end.value,
          price: price.value,
          helmet: helmet.value
       })
       .select()
	//console.log(data)
	console.log(error)

	      name.value = ''
          id_bike.value = ''
          date_start.value = ''
          date_end.value = ''
          price.value = ''
          helmet.value = ''
	getCountries()
 }
</script>
