import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { 
    path: '/login', 
    name: 'Login', 
    component: () => import('../views/login/Login.vue') 
  },
  { path: '/register', 
    name: 'Register', 
    component: () => import('../views/register/Register.vue') 
  },
  { path: '/home', 
    name: 'Home', 
    component: () => import('../views/home/Home.vue'), 
    meta: { requiresAuth: true } 
  },
  { path: '/tasks/list', 
    name: 'TasksList', 
    component: () => import('../views/task-list/List.vue'), 
    meta: { requiresAuth: true } 
  },
];


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// Global navigation guard to protect routes based on authentication status
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
