<template>
  <div class="home">
    <h1>Welcome to the Fitness Tracker App</h1>
    <p>Track your activities, exercises, and stay fit!</p>

    <div v-if="isLoggedIn">
      <p>Welcome, {{ username }}!</p>
      <div class="links">
        <router-link to="/activities">Manage Activities</router-link><br />
        <router-link to="/add-activity">Add Activity</router-link><br />
        <router-link to="/exercise-types">Manage Exercise Types</router-link><br />
        <router-link to="/add-exercise-type">Add Exercise Type</router-link>
      </div>
      <button @click="logout" class="logout-btn">Logout</button>
    </div>

    <div v-else>
      <p>Please log in to track your activities.</p>
      <router-link to="/login">Login</router-link>
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
    username() {
      return localStorage.getItem('username') || 'User';
    },
  },
  methods: {
    logout() {
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped>
.home {
  padding: 2rem;
  text-align: center;
}

.links {
  margin-top: 1rem;
}

.logout-btn {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #ff5c5c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.logout-btn:hover {
  background-color: #ff4040;
}

a {
  text-decoration: none;
  color: #007bff;
}

a:hover {
  text-decoration: underline;
}
</style>