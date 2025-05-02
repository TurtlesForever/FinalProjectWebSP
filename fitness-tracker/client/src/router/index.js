import { createRouter, createWebHistory } from 'vue-router';

// Route-level code splitting with dynamic imports
const Home = () => import('@/views/Home.vue');
const Activities = () => import('@/views/Activities.vue');
const ExerciseTypes = () => import('@/views/ExerciseTypes.vue');
const Login = () => import('@/views/Login.vue');
const Register = () => import('@/views/Register.vue');

const routes = [
  { path: '/', name: 'Home', component: Home },
  {
    path: '/activities',
    name: 'Activities',
    component: Activities,
    meta: { requiresAuth: true, roles: ['user', 'admin'] },
  },
  {
    path: '/exercise-types',
    name: 'ExerciseTypes',
    component: ExerciseTypes,
    meta: { requiresAuth: true, roles: ['admin'] }, // Only admins can access
  },
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  const userData = JSON.parse(localStorage.getItem('user') || '{}'); // Should include a `role`

  // Auth check
  if (to.meta.requiresAuth && !token) {
    return next({ name: 'Login' });
  }

  // Role check
  if (to.meta.roles && !to.meta.roles.includes(userData.role)) {
    return next({ name: 'Home' }); // Redirect to home if role is not authorized
  }

  next();
});

export default router;