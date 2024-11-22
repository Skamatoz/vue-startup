<template>
    <Header v-if="!uiStore.hideHeaderSidebar" />
    <Sidebar v-if="!uiStore.hideHeaderSidebar" />
    <div >
         <router-view></router-view>
      </div>
</template>

<script setup>
  import Header from "./components/Header.vue" //Импортируем Хедер
  import Sidebar from "./components/Sidebar.vue"//Импортируем Сайдбар
  import { useUIStore } from './stores/uiStore'; // Импортируем хранилище

  const uiStore = useUIStore();
</script>
