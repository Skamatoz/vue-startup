<template>
    <Header />
    <Sidebar />
    <div >
        <Suspense> <router-view></router-view></Suspense>
      </div>
</template>

<script setup>
  import Header from "./components/Header.vue" //Импортируем Хедер
  import Sidebar from "./components/Sidebar.vue"//Импортируем Сайдбар

</script>
