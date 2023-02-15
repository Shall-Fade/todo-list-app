import { createApp } from "vue";
import "./style.css";
import store from "./store";
import App from "./App.vue";
import BaseTask from "./components/BaseTask.vue";

const app = createApp(App);

app.use(store);
app.component("BaseTask", BaseTask);

app.mount("#app");
