import { createRouter, createWebHistory } from 'vue-router';
import { useUserStore } from '@/store/userStore'; // To access current user info

const routes = [
  {
    path: '/',
    component: () => import('@/pages/Home.jsx'),
  },
  {
    path: '/activities',
    component: () => import('@/pages/Activities.jsx'),
    meta: { requiresAuth: true },
  },
  {
    path: '/exercise-types',
    component: () => import('@/pages/ExerciseTypes.jsx'),
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    component: () => import('@/pages/LoginView.vue'), // If this is still Vue, keep as-is
    meta: { guest: true },
  },
  {
    path: '/register',
    component: () => import('@/pages/RegisterView.vue'), // If this is still Vue, keep as-is
    meta: { guest: true },
  },
  {
    path: '/admin',
    component: () => import('@/pages/AdminPanel.vue'), // If this hasn't been refactored yet, keep as-is
    meta: { requiresAuth: true, isAdmin: true },
  },
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