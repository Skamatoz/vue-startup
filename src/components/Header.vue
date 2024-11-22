<template>
    <div class="relative">
        <div class="flex justify-end border-b-2 bg-PoscetFon">
            <div @click="defaultStore.toggleSidebar" class="block border-l-2 p-3 hover:bg-gray-50  active:bg-gray-100 transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2m-9.5 0V3"/><path d="m5.5 10l1.75 2l-1.75 2"/></g></svg>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>

<script setup>
  import { useDefaultStore } from "../stores/DefaultStore" //Импортируем стор
  const defaultStore = useDefaultStore()//Присваиваем стор переменной
</script>
