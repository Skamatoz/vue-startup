import { defineStore } from 'pinia';
import { ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';

export const useUIStore = defineStore('uiStore', () => {
  // Состояние для управления видимостью хедера и сайдбара
  const hideHeaderSidebar = ref(false);

  // Доступ к текущему маршруту
  const route = useRoute();

  // Следим за изменениями маршрута
  watchEffect(() => {
    hideHeaderSidebar.value = route.meta.hideHeaderSidebar || false;
    // console.log('Updated hideHeaderSidebar:', hideHeaderSidebar.value);
  });

  return {
    hideHeaderSidebar, // Экспортируем реактивное состояние
  };
});
