import { createStore } from "vuex";
import State from "../types/State";

const store = createStore<State>({
  state: {
    tasks: [],
  },
  mutations: {
    ADD_TASK(state, task) {
      state.tasks.push(task);
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
});

export default store;
