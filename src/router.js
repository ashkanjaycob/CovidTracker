import { createRouter, createWebHistory } from "vue-router";
import Home from './components/Home.vue'

const routes = [
  { path: "", name:"Home" , component: Home },
  // { path: "/about", component: About },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
