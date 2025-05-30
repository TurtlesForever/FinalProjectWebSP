import { createRouter, createWebHistory } from 'vue-router';
import { useUserStore } from '@/store/userStore'; // Assuming you're using Pinia

const routes = [
  // Public Route
  {
    path: '/',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },

  // Guest-only Routes
  {
    path: '/login',
    component: () => import('@/components/Login.vue'),
    meta: { guest: true },
  },
  {
    path: '/register',
    component: () => import('@/components/Register.vue'),
    meta: { guest: true },
  },

  // Authenticated User Routes
  {
    path: '/dashboard',
    component: () => import('@/components/Dashboard.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/activities',
    component: () => import('@/views/Activities.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/exercise-types',
    component: () => import('@/views/ExerciseTypes.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/friends-list',
    component: () => import('@/components/FriendsList.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/stats',
    component: () => import('@/components/Stats.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/add-activity',
    component: () => import('@/views/AddActivity.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/add-exercise-type',
    component: () => import('@/views/AddExerciseType.vue'),
    meta: { requiresAuth: true },
  },

  // Admin-only Routes
  {
    path: '/activity-list',
    component: () => import('@/components/ActivityList.vue'),
    meta: { requiresAuth: true, isAdmin: true },
  },
  {
    path: '/activity-log',
    component: () => import('@/components/ActivityLog.vue'),
    meta: { requiresAuth: true, isAdmin: true },
  },
  {
    path: '/exercise-type-list',
    component: () => import('@/components/ExerciseTypesList.vue'),
    meta: { requiresAuth: true, isAdmin: true },
  },
  {
    path: '/admin',
    component: () => import('@/components/AdminPanel.vue'),
    meta: { requiresAuth: true, isAdmin: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Global Navigation Guard
router.beforeEach((to, from, next) => {
  const userStore = useUserStore();
  const currentUser = userStore.currentUser;

  if (to.meta.requiresAuth && !currentUser) {
    return next('/login');
  }

  if (to.meta.isAdmin && currentUser?.role !== 'admin') {
    return next('/');
  }

  if (to.meta.guest && currentUser) {
    return next('/');
  }

  next();
});

export default router;