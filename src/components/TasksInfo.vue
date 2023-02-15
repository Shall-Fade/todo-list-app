<template>
  <div
    class="mx-[24px] flex flex-col justify-between pt-[90px] sm:flex-row sm:items-center"
  >
    <div class="mb-[12px] flex items-center sm:mb-0">
      <p class="mr-[8px] text-[14px] font-bold leading-[17px] text-blue">
        Created tasks
      </p>
      <p
        class="flex items-center justify-center rounded-full bg-gray-400 px-[8px] py-[2px] text-[12px] font-bold leading-[15px] text-gray-200"
      >
        {{ allTasks }}
      </p>
    </div>
    <div class="flex items-center">
      <p class="mr-[8px] text-[14px] font-bold leading-[17px] text-purple">
        Completed
      </p>
      <p
        class="flex items-center justify-center rounded-full bg-gray-400 px-[8px] py-[2px] text-[12px] font-bold leading-[15px] text-gray-200"
      >
        {{ completeTasks }} in {{ allTasks }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";

// Variables
const store = useStore();
const completeTasks = computed(() => store.getters.completeTasks);
const allTasks = computed(() => store.getters.allTasks);
</script>
