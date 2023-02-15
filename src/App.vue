<template>
  <div
    class="h-full min-h-screen bg-gray-600 font-inter text-[14px] font-normal text-gray-100"
  >
    <TheHeader />
    <main class="relative my-0 mx-auto max-w-[768px]">
      <TasksInput />
      <TasksInfo />
      <TasksBlock />
    </main>
  </div>
</template>

<script setup lang="ts">
import TheHeader from "./components/TheHeader.vue";
import TasksInput from "./components/TasksInput.vue";
import TasksInfo from "./components/TasksInfo.vue";
import TasksBlock from "./components/TasksBlock.vue";
</script>
