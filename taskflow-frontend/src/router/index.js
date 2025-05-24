import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/login/Login.vue';
import Cadastro from '../views/register/Register.vue';

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Cadastro,
  },
  // Adicione outras rotas aqui...
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;