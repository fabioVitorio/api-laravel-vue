import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Cadastro from '../views/Cadastro.vue';

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: Cadastro,
  },
  // Adicione outras rotas aqui...
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;