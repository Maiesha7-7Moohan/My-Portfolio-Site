<script setup>
import { ref } from "vue";

const shortTermGoals = ref([
  "Successfully finish all my class modules.",
  "Cleanly understand CSS properties.",
  "Push various code layouts to GitHub pages safely and correctly.",
  "Make the most of this learning experience and continue developing coding skills and knowledge.",
  "Build a strong foundation in web development.",
  "Create a portfolio of projects that showcase my abilities and growth.",
]);

const longTermGoals = ref([
  "Continue my learning journey in HTML, JavaScript, Python, and more.",
  "Apply for a Jewellery Design and Manufacturing course to dive into my passion for jewelry.",
]);
</script>

<template>
  <main class="main-container">
    <h2>My Future Goals</h2>

    <div class="card-row">
      <!-- Short-Term Goals -->
      <section class="goal-card">
        <h3>Short-Term Goals</h3>
        <ul class="goals-list">
          <li v-for="(goal, index) in shortTermGoals" :key="index">
            {{ goal }}
          </li>
        </ul>
      </section>

      <!-- Long-Term Goals -->
      <section class="goal-card">
        <h3>Long-Term Goals</h3>
        <ul class="goals-list">
          <li v-for="(goal, index) in longTermGoals" :key="index">
            {{ goal }}
          </li>
        </ul>
      </section>
    </div>
  </main>
</template>

<style scoped>
/* Main Container */
.main-container {
  flex: 1;
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  padding: 3rem 1.5rem;
}

.main-container h2 {
  font-size: 2rem;
  margin-bottom: 2.5rem;
  color: #111;
  text-align: center;
}

/* Cards Grid Layout */
.card-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.goal-card {
  background: #ffffff;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  border: 1px solid #eaeaea;
  display: flex;
  flex-direction: column;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.goal-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.09);
}

.goal-card h3 {
  font-size: 1.35rem;
  color: #f4e862;
  margin-top: 0;
  margin-bottom: 1.25rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #f0f0f0;
}

.goals-list {
  list-style-type: none;
  padding-left: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.goals-list li {
  position: relative;
  padding-left: 1.5rem;
  font-size: 1rem;
  line-height: 1.6;
  color: #444;
}

.goals-list li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #ba76e8;
  font-weight: bold;
  font-size: 1.2rem;
}

@media (max-width: 768px) {
  .card-row {
    grid-template-columns: 1fr;
  }
}
</style>
