<template>
  <div class="">
    <h1 class="m-4 text-xl font-semibold text-gray-700">День 1</h1>

    <div v-for="item in arrayForTest" :key="item.id"  class=" bg-PoscetFon flex border-2 border-gray-200 p-4 w-auto m-4 rounded gap-3">
        <div class="text-gray-500 ">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m10.95 14l4.95-4.95l-1.425-1.4l-3.525 3.525L9.525 9.75L8.1 11.175zM5 21V3h14v18l-7-3zm2-3.05l5-2.15l5 2.15V5H7zM7 5h10z"/></svg>        </div>
        <div class="flex items-center">
            <h2>{{item.value}}</h2>
        </div>
    </div>


    <!-- <router-link to="/page2">Перейти ко второй странице</router-link> -->
  </div>
</template>

<script >
import { ref } from 'vue';
export default {
  name: 'Page2',
setup() {
    const arrayForTest = ref([
      { id: 1, value: 'День 1. Занятие 1' },
      { id: 2, value: 'День 1. Занятие 2' },
      { id: 3, value: 'День 1. Занятие 3' },
      { id: 4, value: 'День 1. Занятие 4' },
      { id: 5, value: 'День 1. Занятие 5' }
    ])

    return {
      arrayForTest,
    }
  }
}
</script>
