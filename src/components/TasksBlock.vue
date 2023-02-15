<template>
  <div v-if="allTasks !== 0" class="mx-[24px] grid gap-[16px] py-[24px]">
    <base-task v-for="task in tasks" :taskData="task" :key="task.id">
      <template v-slot:task>
        {{ task.task }}
      </template>
    </base-task>
  </div>
  <TasksBlockEmpty v-else />
</template>

<script setup lang="ts">
import TasksBlockEmpty from "./TasksBlockEmpty.vue";
import { useStore } from "vuex";
import { computed } from "vue";

// Variables
const store = useStore();
const tasks = computed(() => store.state.tasks);
const allTasks = computed(() => store.getters.allTasks);
</script>
