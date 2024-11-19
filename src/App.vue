<template>
    <Header />
    <Sidebar />
    <div >
        <router-view></router-view>
      </div>
</template>

<script setup>
  import Header from "./components/Header.vue" //Импортируем Хедер
  import Sidebar from "./components/Sidebar.vue"//Импортируем Сайдбар
</script>
