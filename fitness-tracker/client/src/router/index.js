import { createRouter, createWebHistory } from 'vue-router';
import { useUserStore } from '@/store/userStore'; // To access current user info

const routes = [
  {
    path: '/',
    component: () => import('@/pages/Home.vue'), // Lazy-loaded
  },
  {
    path: '/activities',
    component: () => import('@/pages/Activities.vue'), // Lazy-loaded
    meta: { requiresAuth: true }, // Auth required
  },
  {
    path: '/exercise-types',
    component: () => import('@/pages/ExerciseTypes.vue'), // Lazy-loaded
    meta: { requiresAuth: true }, // Auth required
  },
  {
    path: '/login',
    component: () => import('@/pages/Login.vue'), // Lazy-loaded
    meta: { guest: true }, // Guest only (not logged in)
  },
  {
    path: '/register',
    component: () => import('@/pages/Register.vue'), // Lazy-loaded
    meta: { guest: true }, // Guest only
  },
  {
    path: '/admin',
    component: () => import('@/pages/AdminPanel.vue'), // Lazy-loaded
    meta: { requiresAuth: true, isAdmin: true }, // Admin required
  },
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Navigation guard to handle role-based access and authentication
router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore();
  const currentUser = userStore.currentUser;

  // Check if route requires authentication
  if (to.meta.requiresAuth && !currentUser) {
    return next('/login'); // Redirect to login if not authenticated
  }

  // Check if route requires admin role
  if (to.meta.isAdmin && currentUser?.role !== 'admin') {
    return next('/'); // Redirect to home if user is not an admin
  }

  // Allow access if route is for guests
  if (to.meta.guest && currentUser) {
    return next('/'); // Redirect to home if already logged in
  }

  next(); // Proceed with navigation
});

export default router;