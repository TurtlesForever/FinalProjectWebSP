<template>
  <div class="home">
    <h1>Welcome to the Fitness Tracker App</h1>
    <p>Track your activities, exercises, and stay fit!</p>
    <div>
      <router-link to="/activities">Manage Activities</router-link><br />
      <router-link to="/add-activity">Add Activity</router-link><br />
      <router-link to="/exercise-types">Manage Exercise Types</router-link><br />
      <router-link to="/add-exercise-type">Add Exercise Type</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    isLoggedIn() {
      return !!localStorage.getItem('token');
    },
  },
  methods: {
    logout() {
      localStorage.removeItem('token');
      this.$router.push('/login');
    },
  },
};
</script>