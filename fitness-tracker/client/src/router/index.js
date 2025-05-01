import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Activities from '../views/Activities.vue';
const AddActivity = () => import('../views/AddActivity.vue');
import ExerciseTypes from '../views/ExerciseTypes.vue';
import AddExerciseType from '../views/AddExerciseType.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/activities', name: 'Activities', component: Activities },
  { path: '/add-activity', name: 'AddActivity', component: AddActivity },
  { path: '/exercise-types', name: 'ExerciseTypes', component: ExerciseTypes },
  { path: '/add-exercise-type', name: 'AddExerciseType', component: AddExerciseType },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;