<script setup>
import { useRoute, RouterLink, RouterView } from "vue-router";

const route = useRoute();
</script>

<template>
  <div class="app-container">
    <header>
      <nav class="nav-menu">
        <RouterLink to="/" class="nav-logo">
          <span class="logo-text">𝄞</span>
        </RouterLink>

        <ul class="nav-links">
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/about">About</RouterLink></li>
          <li><RouterLink to="/goals">Goals</RouterLink></li>
          <li><RouterLink to="/journey">Journey</RouterLink></li>
          <li><RouterLink to="/projects">Projects</RouterLink></li>
          <li><RouterLink to="/contact">Contact</RouterLink></li>
        </ul>
      </nav>
    </header>

    <!-- Main Route Outlet -->
    <main class="main-container">
      <RouterView v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
          <component :is="Component" :key="route.fullPath" />
        </Transition>
      </RouterView>
    </main>

    <!-- Global Footer -->
    <footer>
      <p>&copy; {{ new Date().getFullYear() }} Built By Maiesha Moohan 𝄞..</p>
    </footer>
  </div>
</template>

<style scoped>
/* Main Shell Container */
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 90vh;
}

/* Nav Menu Basic Layout */
.nav-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 2rem;
  background-color: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
}

.nav-links a {
  text-decoration: none;
  color: #555;
  font-weight: 500;
  transition: color 0.2s ease-in-out;
}

.nav-links a.router-link-active,
.nav-links a:hover {
  color: #f7ef7e;
}

.logo-text {
  font-family: "Georgia", cursive, serif;
  font-style: italic;
  font-size: 3rem;
  color: #65489b;
  letter-spacing: -1px;
}

.main-container {
  flex: 1;
  width: 100%;
}

footer {
  text-align: center;
  padding: 1.5rem;
  background-color: #111;
  color: #fff;
  margin-top: auto;
}

/* Transition Animations */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
