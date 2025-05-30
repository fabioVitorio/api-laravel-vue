import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/login/Login.vue';
import Cadastro from '../views/register/Register.vue';
import Home from '../views/tasks-home/Home.vue';
import List from '../views/task-list/List.vue';

const routes = [
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Cadastro },
  { path: '/tasks', name: 'TasksHome', component: Home, meta: { requiresAuth: true } },
  { path: '/tasks/list', name: 'TasksList', component: List, meta: { requiresAuth: true } },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('access_token');

  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login');
  } else if ((to.path === '/login' || to.path === '/register') && isAuthenticated) {
    next('/tasks');
  } else {
    next();
  }
});

export default router;
