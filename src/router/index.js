import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import AuthPage from '@/views/AuthPage.vue'
import ContactPage from '@/views/ContactPage.vue'
import CardPage from '@/views/CardPage.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/auth",
      name: "auth",
      component: AuthPage,
    },
    // {
    //   path: "/product/:id",
    //   name: "home-layout",
    //   component: NewPage,
    //   children: []
    // },
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactPage,
    },
    {
      path: "/card",
      name: "card",
      component: CardPage,
    },
  ],
});

export default router
