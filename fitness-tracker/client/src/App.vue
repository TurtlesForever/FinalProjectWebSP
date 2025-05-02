<template>
  <div class="app">
    <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/activities">Activities</RouterLink>
        <RouterLink to="/exercise-types">Exercise Types</RouterLink>
        <RouterLink to="/stats">Stats</RouterLink>
        <RouterLink to="/friends-activities">Friends</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/register">Register</RouterLink>
      </nav>
    </header>

    <main>
      <RouterView />
    </main>

    <footer>
      <p>Fitness Tracker &copy; 2025</p>
    </footer>
  </div>
</template>

<script setup></script>

<style scoped>
:root {
  --bg-color: #121212;
  --text-color: #ffffff;
  --link-color: #90caf9;
  --header-bg: #1e1e1e;
  --footer-bg: #1e1e1e;
}

.app {
  background-color: var(--bg-color);
  color: var(--text-color);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

header {
  background-color: var(--header-bg);
  padding: 1rem;
}

nav {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

nav a {
  color: var(--link-color);
  text-decoration: none;
  font-weight: bold;
}

nav a.router-link-active {
  border-bottom: 2px solid var(--link-color);
}

main {
  flex-grow: 1;
  padding: 2rem;
}

footer {
  background-color: var(--footer-bg);
  text-align: center;
  padding: 1rem;
}
</style>