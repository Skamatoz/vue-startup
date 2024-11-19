import { defineStore } from "pinia";
import { ref } from "vue";

export const useDefaultStore = defineStore("defaultStore", () => {

  const isOpen = ref(false)
  const toggleSidebar = () => {
    isOpen.value = !isOpen.value
  }

  return {
      isOpen,
      toggleSidebar
    };
})
