<template>
    <div class="">
    <h1 class="m-4 text-xl font-semibold text-gray-700">Форма отправки</h1>
        <div class="flex border-2 border-gray-200 p-4 py-6 w-auto m-4 rounded-xl" >
            <form @submit.prevent="sendData" action="" class="flex-col ">
                <input v-model="name" placeholder="Имя" type="text"  class="border block mb-2">
                <input v-model="date_start" type="date" class="border block mb-2">
                <input v-model="date_end" type="date"  class="border block mb-2">
                <input v-model="price" type="text" placeholder="Прайс"  class="border block mb-2">
                <input v-model="helmet" type="checkbox" class="border block mb-2">

                <select id="color" v-model="id_bike" class="border block mb-2">
                     <option v-for="bike in garage" :key="bike.id" >{{bike.id}}</option>
                </select>

                <button type="submit" class="bg-red-200"> Отправить</button>
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
console.log(id_bike.value)


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
	console.log(data)
	console.log(error)
	getCountries()
 }
</script>
