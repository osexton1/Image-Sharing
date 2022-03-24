import { createApp } from "vue";
import store from "./store";
import App from "./App";
 
const app = createApp(App);
app.mount("#app");
app.use(store);
