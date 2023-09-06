// router.js
import { createRouter, createWebHistory } from 'vue-router'
import { useStorage } from '@vueuse/core'
import IndexPage from '../pages/IndexPage.vue'
import HomePage from '../pages/HomePage.vue'
import LoginPage from '../pages/LoginPage.vue'

const token = useStorage('token', '')
const routes = [
  {
    path: '/',
    name: 'Index',
    component: IndexPage,
    meta: { requiresAuth: false },
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage,
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
    meta: { requiresAuth: false },
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _, next) => {
  const isAuthenticated = (token.value != undefined && token.value != '')

  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router;
