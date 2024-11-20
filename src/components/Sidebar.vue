<template>
    <div class="relative">
         <!-- Главный контейнер -->
            <div :class="{'translate-x-0': defaultStore.isOpen, '-translate-x-full': !defaultStore.isOpen}" class="z-10 h-screen transition-transform duration-500 fixed top-0 ">
                <!-- Заливка -->
                <div class=" block h-full w-64 border bg-gray-50 p-3">
                    <!-- Внутренний общийр -->
                    <div class="flex flex-col w-full h-screen">

                            <!-- Слайдер HEADER -->
                            <div class=" h-20 mb-2 gap-1 p-3 flex ">
                                <!-- HEADER лого-->
                                <div class="  p-1">
                                    <div class="p-4 bg-gray-900 h-full w-full rounded-xl flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="#ffffff" d="M4 5h16V3H4zm16 4H4V7h16zM9 13h6v-2h6v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9h6z"/></svg>
                                    </div>
                                <!-- HEADER имя-->
                                </div>
                                <div class=" w-full flex-col flex items-start justify-center">
                                    <h1 class=" text-xm text-gray-600 font-semibold">Семён Богданов</h1>
                                    <span class=" text-xs text-gray-600">Личный кабинет</span>
                                </div>
                            </div>


                            <!-- Слайдер BODY -->
                            <div class=" flex-1 min-h-96 mb-2 p-1">
                            <label for="" class="inline-block mb-1 text-xs text-gray-400 px-4">Разделы</label>
                                <ul class=" block flex-col mb-2">
                                     <!-- BODY Раздел 1 -->
                                    <router-link to="/">
                                        <li @click="defaultStore.toggleSidebar" class="flex-row mb-2 hover:bg-gray-200 h-12 rounded-lg flex justify-between items-center px-4">
                                            <p class="text-gray-600">Главная</p>
                                            <svg class="" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#888888" d="M12.172 12L9.343 9.173l1.415-1.414L15 12l-4.242 4.242l-1.415-1.414z"/></svg>
                                        </li>
                                    </router-link>
                                    <!-- BODY Раздел 2 -->
                                    <router-link to="/page2">
                                        <li @click="defaultStore.toggleSidebar" class="flex-row mb-2 hover:bg-gray-200 h-12 rounded-lg flex justify-between items-center px-4">
                                            <p class="text-gray-600">Раздел 1</p>
                                            <svg class="" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#888888" d="M12.172 12L9.343 9.173l1.415-1.414L15 12l-4.242 4.242l-1.415-1.414z"/></svg>
                                        </li>
                                    </router-link>
                                    <!-- BODY Раздел 3 -->
                                    <router-link to="/page3">
                                        <li @click="defaultStore.toggleSidebar" class="flex-row mb-2 hover:bg-gray-200 h-12 rounded-lg flex justify-between items-center px-4">
                                            <p class="text-gray-600">Раздел 2</p>
                                            <svg class="" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#888888" d="M12.172 12L9.343 9.173l1.415-1.414L15 12l-4.242 4.242l-1.415-1.414z"/></svg>
                                        </li>
                                    </router-link>
                                </ul>
                            </div>


                            <!-- Cлайдер FOOTER bg-gray-300-->
                            <div class="h-14 bg-gray-300 mb-6 rounded-xl">

                            </div>
                        </div>
                    </div>
                </div>

         <!-- Затемнение -->
        <div @click="defaultStore.toggleSidebar" v-if="defaultStore.isOpen" class="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-1000"></div>
    </div>
</template>

<style scoped>
</style>

<script setup>
  import { useDefaultStore } from "../stores/DefaultStore" //Импортируем стор
  const defaultStore = useDefaultStore() //Присваиваем стор переменной
</script>
