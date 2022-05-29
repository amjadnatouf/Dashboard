import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import DashView from "../views/DashView.vue";
import AboutView from "../views/AboutView.vue";
import store from "../store/index";

const requireAuth = (to, from, next) => {
  let loggedIn = store.state.user.loggedIn;
  if (loggedIn == false) next({ name: "login" });
  else next();
};

const routes = [
  {
    path: "/",
    name: "login",
    component: LoginView,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashView,
    beforeEnter: requireAuth,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
