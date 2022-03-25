import { createApp } from "vue";
import { createWebHistory, createRouter } from 'vue-router';
import store from "./store";
import App from "./App";
import AuthHandler from "./components/AuthHandler";
import ImageList from "./components/ImageList";
import UploadForm from "./components/UploadForm";

const routes = [
    {
        path: '/oauth2/callback',
        component: AuthHandler
    },
    {
        path: '/',
        component: ImageList
    },
    {
        path: '/upload',
        component: UploadForm
    }
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp(App);
app.use(store);
app.use(router);
app.mount("#app");
