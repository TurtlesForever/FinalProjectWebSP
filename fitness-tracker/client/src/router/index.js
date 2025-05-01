import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';
import Activities from '../views/Activities.vue';
import ExerciseTypes from '../views/ExerciseTypes.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/register', component: Register },
  { path: '/login', component: Login },
  { path: '/activities', component: Activities },
  { path: '/exercise-types', component: ExerciseTypes },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;