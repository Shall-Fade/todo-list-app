import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import State from "../types/State";

const store = createStore<State>({
  state: {
    tasks: [],
  },
  mutations: {
    ADD_TASK(state, task) {
      state.tasks.push(task);
    },
    UPDATE_TASKS(state, tasks) {
      state.tasks = tasks;
    },
  },
  getters: {
    completeTasks(state) {
      return state.tasks.filter((task) => task.isChecked === true).length;
    },
    allTasks(state) {
      return state.tasks.length;
    },
  },
  plugins: [createPersistedState()],
});

export default store;
