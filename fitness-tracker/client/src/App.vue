<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/register">Register</router-link> |
        <router-link to="/login">Login</router-link> |
        <router-link to="/activities">Activities</router-link> |
        <router-link to="/exercise-types">Exercise Types</router-link>
      </nav>
    </header>

    <div class="layout">
      <aside class="sidebar">
        <ul>
          <li><router-link to="/">Dashboard</router-link></li>
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

<style scoped>
#app {
  font-family: Arial, sans-serif;
  margin: 20px;
}

nav {
  margin-bottom: 20px;
}

.sidebar {
  width: 200px;
  float: left;
  margin-right: 20px;
}

.content {
  margin-left: 220px;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  margin-bottom: 10px;
}
</style>