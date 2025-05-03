import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/components/Login.vue';
import Dashboard from '@/components/Dashboard.vue';
import AdminPanel from '@/components/AdminPanel.vue';
import FriendsList from '@/components/FriendsList.vue';
import Stats from '@/components/Stats.vue';

const routes = [
  { path: '/', component: Login },
  { path: '/dashboard', component: Dashboard, meta: { requiresAuth: true } },
  { path: '/admin', component: AdminPanel, meta: { requiresAuth: true, requiresAdmin: true } },
  { path: '/friends', component: FriendsList, meta: { requiresAuth: true } },
  { path: '/stats', component: Stats, meta: { requiresAuth: true } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Global Navigation Guard
router.beforeEach((to, from, next) => {
  const isLoggedIn = !!localStorage.getItem('token'); // Check if token exists in localStorage
  const isAdmin = localStorage.getItem('role') === 'admin'; // Check if the user is an admin (example, based on a "role" in localStorage)

  if (to.meta.requiresAuth && !isLoggedIn) {
    // Redirect to login if the route requires authentication and the user is not logged in
    next('/');
  } else if (to.meta.requiresAdmin && !isAdmin) {
    // Redirect to dashboard if the route requires admin access and the user is not an admin
    next('/dashboard');
  } else {
    // Proceed to the requested route
    next();
  }
});

export default router;