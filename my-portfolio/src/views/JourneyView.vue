<script setup>
import { ref } from "vue";

// Data-driven array for the journey table
const journeyEntries = ref([
  {
    timeline: "(13 April 2026 start date)",
    topic: "Theory work (on Data Analytics and Cyber Security)",
  },
  {
    timeline: "(30 April 2026)",
    topic: "Python Beginner and Advanced Exercises",
  },
  {
    timeline: "(5 May - 27 May 2026)",
    topic: "HTML and CSS learning period. Developed basic web pages.",
  },
  {
    timeline: "(20 May 2026)",
    topic:
      "Created a Python Mini Toolkit made of previous excercises combined into one program.",
  },
  {
    timeline: "(28 May - 27 June 2026)",
    topic: "JavaScript learning period. Starting with the basics.",
  },
  {
    timeline: `(3 June 2026)
(In-between learning periods)`,
    topic: "Finished creating my first Portfolio using Vanilla HTML and CSS.",
  },
  {
    timeline: `(9 June - 19 June 2026)
(In-between learning periods)`,
    topic:
      "Collaborated with my first team on a project to create a Fitness and Wellness website using HTML, CSS, and JavaScript.",
  },
  {
    timeline: `(29 June - 10 July 2026)
(In-between learning periods)`,
    topic:
      "Collaborated with my second team on a project to create a frontend HR system that is user-friendly for HR staff.",
  },
  {
    timeline: "(14 July - 11 August 2026)",
    topic:
      "Began working and learning about MySQL and Databases, Vue.js, PHP as well as Node.js",
  },
  {
    timeline: `(20 July - 3 August 2026)
(In-between learning periods)`,
    topic:
      "Collaborated with my third team to create a News Web Scraping Analytics Platform.",
  },
  {
    timeline: `(12 August - 21 August 2026)
(In-between learning periods)`,
    topic:
      "Collaborated with my second team once again on a project to combine frontend and backend for our HR system",
  },
  {
    timeline: "(25 August - 25 September 2026)",
    topic:
      "Collaborated with my fourth team to create JAM'N, a music streaming platform that allows users to discover local music and create playlists.",
  },
]);
</script>

<template>
  <main class="main-container">
    <h2>My Learning Journey</h2>

    <section class="journey-desc-block">
      <p>
        Since the 13th April 2026, I have been a student at The Life Choices
        Academy, participating in their coding course as part of Cohort 18. I
        have learned various web development skills, including HTML, CSS, and
        JavaScript, MySQL, Vue.js and many more. The table below showcases my
        progress and my key takeaways from each lesson learned.
      </p>
    </section>

    <div class="table-responsive">
      <table class="journey-table">
        <thead>
          <tr>
            <th scope="col">Timeline</th>
            <th scope="col">Topic Covered</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in journeyEntries" :key="index">
            <td class="timeline-cell">{{ item.timeline }}</td>
            <td>{{ item.topic }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<style scoped>
/* Main Container */
.main-container {
  flex: 1;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  padding: 3rem 1.5rem;
}

.main-container h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #111;
  text-align: center;
}

.journey-desc-block {
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 10px;
  margin-bottom: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.journey-desc-block p {
  font-size: 1.05rem;
  line-height: 1.6;
  color: #444;
  margin: 0;
}

.table-responsive {
  width: 100%;
  overflow-x: auto;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
}

.journey-table {
  width: 100%;
  border-collapse: collapse;
  background-color: #ffffff;
  text-align: left;
}

.journey-table th {
  background-color: #ebff77;
  color: #111; /* Changed to #111 for contrast against light yellow header */
  font-weight: 600;
  padding: 1rem 1.25rem;
  font-size: 1rem;
}

.journey-table td {
  padding: 1rem 1.25rem;
  border-bottom: 1px solid #eaeaea;
  font-size: 0.95rem;
  line-height: 1.5;
  color: #444;
}

/* Added class to render newlines naturally */
.timeline-cell {
  white-space: pre-line;
}

.journey-table tbody tr:last-child td {
  border-bottom: none;
}

.journey-table tbody tr:hover {
  background-color: #f8f9fa;
}
</style>
