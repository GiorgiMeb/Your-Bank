import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Pages/HomePage.vue"
import Careers from "./components/Pages/CareersPage.vue"
import About from "./components/Pages/AboutPage.vue"
import Security from "./components/Pages/SecurityPage.vue"
import Login from "./components/Pages/LoginPage.vue"
import Signup from "./components/Pages/SignupPage.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/src/components/Pages/CareersPage.vue",
    name: "Careers",
    component: Careers,
  },
  {
    path: "/src/components/Pages/AboutPage.vue",
    name: "About",
    component: About,
  },
  {
    path: "/src/components/Pages/SecurityPage.vue",
    name: "Security",
    component: Security,
  },
  {
    path: "/src/components/Pages/LoginPage.vue",
    name: "Login",
    component: Login,
  },
  {
    path: "/src/components/Pages/SignupPage.vue",
    name: "Signup",
    component: Signup,
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;