<template>
  <div :class="{ 'dark-mode': isDarkMode }" id="app">
    <header class="app-header">
      <h1>Fitness Tracker</h1>
      <nav class="main-nav">
        <router-link to="/">Home</router-link>
        <router-link to="/activities">Activities</router-link>
        <router-link to="/exercise-types">Exercise Types</router-link>
        <router-link to="/login">Login</router-link>
        <router-link to="/register">Register</router-link>
        <button class="toggle-btn" @click="toggleDarkMode">
          {{ isDarkMode ? '☀ Light' : '🌙 Dark' }}
        </button>
      </nav>
    </header>

    <div class="layout">
      <aside class="sidebar">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/activities">Manage Activities</router-link></li>
          <li><router-link to="/exercise-types">Manage Exercise Types</router-link></li>
          <li><router-link to="/login">Login</router-link></li>
          <li><router-link to="/register">Register</router-link></li>
        </ul>
      </aside>

      <main class="content">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isDarkMode = ref(false);

onMounted(() => {
  const darkMode = localStorage.getItem('darkMode') === 'true';
  isDarkMode.value = darkMode;
});

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  localStorage.setItem('darkMode', isDarkMode.value);
};
</script>

<style scoped>
:root {
  --bg-color: white;
  --text-color: #333;
  --sidebar-bg: #f0f0f0;
  --link-color: #1e90ff;
  --header-bg: #1e90ff;
  --header-text: white;
}

.dark-mode {
  --bg-color: #1e1e1e;
  --text-color: #f1f1f1;
  --sidebar-bg: #2e2e2e;
  --link-color: #4fa3ff;
  --header-bg: #111;
  --header-text: #f9f9f9;
}

#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: var(--bg-color);
  color: var(--text-color);
  min-height: 100vh;
}

.app-header {
  background-color: var(--header-bg);
  padding: 1rem 2rem;
  color: var(--header-text);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.main-nav a {
  margin: 0 0.75rem;
  text-decoration: none;
  color: var(--header-text);
  font-weight: bold;
}

.main-nav a.router-link-active {
  border-bottom: 2px solid var(--header-text);
}

.toggle-btn {
  margin-left: 1rem;
  padding: 0.4rem 0.8rem;
  background: transparent;
  border: 1px solid var(--header-text);
  border-radius: 4px;
  color: var(--header-text);
  cursor: pointer;
}

.layout {
  display: flex;
}

.sidebar {
  width: 220px;
  background-color: var(--sidebar-bg);
  padding: 1.5rem;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
}

.sidebar li {
  margin-bottom: 1rem;
}

.sidebar a {
  color: var(--link-color);
  text-decoration: none;
  font-weight: 500;
}

.sidebar a.router-link-active {
  font-weight: bold;
}

.content {
  flex: 1;
  padding: 2rem;
}
</style>