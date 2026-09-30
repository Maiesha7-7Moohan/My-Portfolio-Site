<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <main class="home-container">
    <div class="home-content">
      <h1 class="hero-title">Hey, I'm Maiesha Moohan</h1>
      <p class="hero-subtitle">
        Aspiring Web Developer and a creative person showcasing my projects,
        journey, and passions.
      </p>
      <div class="hero-actions">
        <RouterLink to="/about" class="cta-btn">Explore</RouterLink>
      </div>
    </div>
  </main>
</template>

<style scoped>
.home-container {
  min-height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 3rem 1.5rem;
}

.home-content {
  max-width: 720px;
  width: 100%;
  color: #ffffff;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.1;
  margin-bottom: 1.25rem;
}

.hero-subtitle {
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.6;
  margin-bottom: 2.5rem;
  opacity: 0.95;
}

.hero-actions {
  display: flex;
  justify-content: center;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.05rem;
  }
}
</style>
