<template>
    <div class="relative">
         <!-- Главный контейнер -->
            <div :class="{'translate-x-0': defaultStore.isOpen, '-translate-x-full': !defaultStore.isOpen}" class="z-10 h-screen transition-transform duration-500 fixed top-0 ">
                <!-- Заливка -->
                <div class=" block h-full w-64 border bg-PoscetFon p-3">
                    <!-- Внутренний общийр -->
                    <div class="flex flex-col w-full h-screen">

                            <!-- Слайдер HEADER -->
                            <div class=" h-20 mb-2 gap-2 p-2 flex ">
                                <!-- HEADER лого-->
                                <div class="  p-1">
                                    <div class=" h-full w-full rounded-xl flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#484848" d="M12 22q-3.025 0-5.413-1.588T3 16.3l-2-.95v-6.7l2-.95q1.2-2.525 3.588-4.112T12 2t5.413 1.588T21 7.7l2 .95v6.7l-2 .95q-1.2 2.525-3.588 4.113T12 22m0-2q1.725 0 3.275-.712T17.95 17.3q-1.475.35-2.963.525T12 18t-2.988-.175T6.05 17.3q1.125 1.275 2.675 1.988T12 20m0-16q-1.725 0-3.275.713T6.05 6.7q1.475-.35 2.963-.525T12 6t2.988.175t2.962.525q-1.125-1.275-2.675-1.987T12 4m0 12q2.675 0 5.013-.5T21 14.1V9.9q-1.65-.9-3.988-1.4T12 8t-5.012.5T3 9.9v4.2q1.65.9 3.988 1.4T12 16"/></svg>
                                    </div>
                                <!-- HEADER имя-->
                                </div>
                                <div class=" w-full flex-col flex items-start justify-center">
                                    <h1 class=" text-xm text-gray-600 font-semibold">Семён Богданов</h1>
                                    <span class=" text-xs text-gray-600">В сети</span>
                                </div>
                            </div>


                            <!-- Слайдер BODY -->
                            <div class=" flex-1 min-h-96 mb-2 p-1">
                            <label for="" class="inline-block mb-1 text-xs text-gray-400 px-2">Разделы</label>
                                <ul class=" block flex-col mb-2">
                                     <!-- BODY Раздел 1 -->
                                    <router-link to="/">
                                        <li @click="defaultStore.toggleSidebar" class="flex-row mb-2 group hover:bg-PoscetHover transition h-12 rounded-lg flex  items-center ">
                                            <svg class="fill-gray-500 group-hover:fill-black" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path  d="M12.172 12L9.343 9.173l1.415-1.414L15 12l-4.242 4.242l-1.415-1.414z"/></svg>
                                            <p class="text-gray-500 group-hover:text-black">Главная</p>
                                        </li>
                                    </router-link>
                                    <!-- BODY Раздел 2 -->
                                    <router-link to="/page2">
                                        <li @click="defaultStore.toggleSidebar" class="flex-row group mb-2 hover:bg-PoscetHover transition h-12 rounded-lg flex  items-center">
                                            <svg class="fill-gray-500 group-hover:fill-black" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path  d="M12.172 12L9.343 9.173l1.415-1.414L15 12l-4.242 4.242l-1.415-1.414z"/></svg>
                                            <p class="text-gray-500 group-hover:text-black">Раздел 1</p>
                                         </li>
                                    </router-link>
                                    <!-- BODY Раздел 3 -->
                                    <router-link to="/page3">
                                        <li @click="defaultStore.toggleSidebar" class="flex-row group mb-2 hover:bg-PoscetHover transition h-12 rounded-lg flex  items-center">
                                            <svg class="fill-gray-500 group-hover:fill-black" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path  d="M12.172 12L9.343 9.173l1.415-1.414L15 12l-4.242 4.242l-1.415-1.414z"/></svg>
                                            <p class="text-gray-500 group-hover:text-black">Раздел 2</p>
                                        </li>
                                    </router-link>
                                </ul>
                            </div>


                            <!-- Cлайдер FOOTER bg-gray-300-->
                            <router-link to="/login">
                            <div class="flex items-center pl-4 h-12 mb-6 rounded hover:bg-PoscetHover transition">
                                <p for="" class="text-gray-500 group-hover:text-black">Выход</p>
                            </div>
                            </router-link>
                        </div>
                    </div>
                </div>

         <!-- Затемнение -->
        <div @click="defaultStore.toggleSidebar" v-if="defaultStore.isOpen" class="fixed inset-0 bg-black bg-opacity-50 "></div>
    </div>
</template>

<style scoped>
</style>

<script setup>
  import { useDefaultStore } from "../stores/DefaultStore" //Импортируем стор
  const defaultStore = useDefaultStore() //Присваиваем стор переменной
</script>
