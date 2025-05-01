<template>
  <div class="home">
    <h1>Welcome to the Fitness Tracker App</h1>
    <p>Track your activities, exercises, and stay fit!</p>
    <div>
      <router-link to="/activities">Manage Activities</router-link>
      <br />
      <router-link to="/exercise-types">Manage Exercise Types</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
.home {
  text-align: center;
  margin-top: 50px;
}
</style>