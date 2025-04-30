import { createRouter, createWebHistory } from 'vue-router';
import { useUserStore } from '@/store/userStore';
import Login from '@/components/Login.vue';
import Dashboard from '@/components/Dashboard.vue';
import AdminPanel from '@/components/AdminPanel.vue';
import FriendsList from '@/components/FriendsList.vue';
import Stats from '@/components/Stats.vue';

const routes = [
  { path: '/', component: Login },
  { path: '/dashboard', component: Dashboard, meta: { requiresAuth: true } },
  { 
    path: '/admin', 
    component: AdminPanel, 
    meta: { requiresAuth: true, requiresAdmin: true },
    beforeEnter: (to, from, next) => {
      const userStore = useUserStore();
      if (!userStore.currentUser || userStore.currentUser.role !== 'admin') {
        return next('/');
      }
      next();
    }
  },
  { path: '/friends', component: FriendsList, meta: { requiresAuth: true } },
  { path: '/stats', component: Stats, meta: { requiresAuth: true } },

  // Catch-all redirect to home
  { path: '/:pathMatch(.*)*', redirect: '/' }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Login },
    { path: '/dashboard', component: Dashboard, meta: { requiresAuth: true } },
    { path: '/admin', component: AdminPanel, meta: { requiresAuth: true, requiresAdmin: true } },
    { path: '/friends', component: FriendsList, meta: { requiresAuth: true } },
    { path: '/stats', component: Stats, meta: { requiresAuth: true } },
    { path: '/:pathMatch(.*)*', redirect: '/' },  // Catch-all route for unhandled paths
  ],
});

export default router;