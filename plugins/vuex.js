import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            manager: [],
        };
    },
    mutations: {
        setManager(state) {
            state.manager = null;
        },
    },
});

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(store);
    // Install the store instance as a plugin
});