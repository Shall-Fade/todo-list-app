<template>
  <div
    class="absolute -top-[28px] flex w-full items-center justify-between px-[24px]"
  >
    <input
      class="mr-[8px] w-full rounded-[8px] border border-gray-700 bg-gray-500 p-[16px] text-[16px] leading-[22px] text-gray-300 outline-none placeholder:text-gray-300"
      @keypress.enter="addTask"
      placeholder="Add a new task"
      type="text"
      v-model="task"
    />
    <button
      class="flex items-center justify-between rounded-[8px] bg-blue-dark p-[16px] text-[14px] font-bold leading-[20px] text-gray-100 duration-150 hover:bg-blue"
      @click="addTask"
    >
      <p class="mr-[8px] hidden md:block">Add</p>
      <img
        class="h-[20px] w-[20px] md:h-[16px] md:w-[16px]"
        src="/images/plus-icon.svg"
        alt="Plus"
      />
    </button>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import { ref } from "vue";
import TaskData from "../types/TaskData";

// Variables
const store = useStore();
const task = ref("");

// Add task
function addTask() {
  if (task.value !== "") {
    // Create task
    const taskData: TaskData = {
      task: task.value,
      id: Date.now(),
      isChecked: false,
    };

    store.commit("ADD_TASK", taskData);
    task.value = "";
  }
}
</script>
