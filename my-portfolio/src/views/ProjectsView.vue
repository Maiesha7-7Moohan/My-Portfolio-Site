<script setup>
import { ref, computed } from "vue";

const activeCategory = ref("All");

const categories = ["All", "Python", "HTML & CSS", "Team Projects", "Vue.js"];

// Projects ordered from latest to oldest
const projects = ref([
  {
    id: 7,
    title: "My Personal Portfolio Website (Vue.js Version)",
    category: "Vue.js",
    timeline: "(28 September 2026)",
    description:
      "Created my personal portfolio website using Vue.js to showcase my skills and projects, the one you are currently viewing.",
    takeaways: [
      "Built component-driven UI structure using Vue 3 Composition API.",
      "Implemented dynamic filtering and modal state handling with reactive refs.",
      "Refined modern single-page navigation and responsive styling.",
    ],
    techStack: ["JavaScript", "HTML", "Vue.js", "CSS"],
    githubUrl: "https://github.com/Maiesha7-7Moohan/My-Portfolio-Site.git",
    liveUrl: "",
    status: "In Progress",
    badgeColor: "#93c5fd",
  },
  {
    id: 6,
    title: "JAM'N Music Streaming Platform",
    category: "Team Projects",
    timeline: "(25 August - 25 September 2026)",
    description:
      "Collaborated with my fourth team to create JAM'N, a music streaming platform that allows users to discover local music and create playlists.",
    takeaways: [
      "Built audio playback controls and interactive playlist interfaces in Vue.",
      "Managed application state for tracking track listings and user actions.",
      "Designed an immersive theme focused on discovering local music content.",
    ],
    techStack: ["JavaScript", "HTML", "Vue.js", "CSS"],
    githubUrl: "https://github.com/totoseahlumile-dot/JAM-N.git",
    liveUrl: "",
    status: "Completed",
    badgeColor: "#93c5fd",
  },
  {
    id: 5,
    title: "News Web Scraping Analytics Platform",
    category: "Team Projects",
    timeline: "(20 July - 3 August 2026)",
    description:
      "Collaborated with my third team to create a News Web Scraping Analytics Platform.",
    takeaways: [
      "Extracted and processed external web news data using Python scripts.",
      "Rendered collected analytics data dynamically within a Vue frontend.",
      "Worked in a team setting to blend web scraping with frontend data display.",
    ],
    techStack: ["JavaScript", "HTML", "Vue.js", "Python"],
    githubUrl: "https://github.com/Maiesha7-7Moohan/Team-Charlie.git",
    liveUrl: "",
    status: "Completed",
    badgeColor: "#93c5fd",
  },
  {
    id: 4,
    title: "Modern Tech Solutions HR System",
    category: "Team Projects",
    timeline: `25 June - 10 July 2026
(Completed but redone)`,
    description:
      "Collaborated with my second team on a project to create a frontend HR system that is user-friendly for HR staff. It was later reworked to combine frontend and backend functionality.",
    takeaways: [
      "Designed an intuitive UI for managing employee records and roles.",
      "Leveraged DOM manipulation and event handlers for interactive tables.",
      "Reworked architecture to connect user interface actions with data operations.",
    ],
    techStack: ["JavaScript", "HTML", "CSS"],
    githubUrl: "https://github.com/imaanabrahams/Modern_Tech_Solutions.git",
    liveUrl: "https://imaanabrahams.github.io/Modern_Tech_Solutions/",
    status: "Edited",
    badgeColor: "#c776d7",
  },
  {
    id: 2,
    title: "Fitness & Wellness Website",
    category: "Team Projects",
    timeline: "9 June - 19 June 2026",
    description:
      "Collaborative team project built at Life Choices Academy. Worked with peers to develop a multi-page web platform for fitness and wellness.",
    takeaways: [
      "Gained experience in Git branching and peer collaboration workflows.",
      "Implemented client-side interactivity using Vanilla JavaScript.",
      "Maintained cohesive UI styling across multiple team-authored pages.",
    ],
    techStack: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Khaalid-hattas/fitness-wellness.git",
    liveUrl: "https://fittwell-coach.netlify.app/",
    status: "Completed",
    badgeColor: "#fde047",
  },
  {
    id: 1,
    title: "Personal Portfolio Website",
    category: "HTML & CSS",
    timeline: "3 June 2026",
    description:
      "Completed my first personal portfolio created using vanilla HTML and CSS, designed to showcase my learning journey, goals and interest in creative arts and fashion.",
    takeaways: [
      "Mastered responsive grid and flexbox layouts with Vanilla CSS.",
      "Structured clean, accessible HTML across multiple portfolio pages.",
      "Created a customized aesthetic tailored to my personal creative interests.",
    ],
    techStack: ["HTML", "CSS"],
    githubUrl: "https://github.com/Maiesha7-7Moohan/My-Site.git",
    liveUrl: "https://spiffy-sprinkles-c71b56.netlify.app/",
    status: "Completed",
    badgeColor: "#f37fe2",
  },
  {
    id: 3,
    title: "Python Mini Toolkit",
    category: "Python",
    timeline: "19 May 2026",
    description:
      "Created a Python Mini Toolkit made of previous exercises combined into one program.",
    takeaways: [
      "Strengthened core programming logic, control flow, and data structures.",
      "Combined multiple exercise modules into a single CLI utility.",
      "Established foundational problem-solving skills for future backend work.",
    ],
    techStack: ["Python"],
    githubUrl: "https://github.com/Maiesha7-7Moohan/Python-Mini-Toolkit.git",
    liveUrl: "",
    status: "Completed",
    badgeColor: "#f37fe2",
  },
]);

// Computed filter
const filteredProjects = computed(() => {
  if (activeCategory.value === "All") return projects.value;
  return projects.value.filter((p) => p.category === activeCategory.value);
});

// Modal state
const selectedProject = ref(null);

const openModal = (project) => {
  selectedProject.value = project;
};

const closeModal = () => {
  selectedProject.value = null;
};
</script>

<template>
  <main class="main-container">
    <h2>My Projects</h2>

    <section class="projects-desc-block">
      <p>
        Welcome to my project showcase! Here you can find a selection of work I
        have created during my coding journey at Life Choices Academy, ranging
        from initial responsive layouts using Vanilla HTML & CSS to team
        projects and dynamic web application concepts.
      </p>
    </section>

    <!-- Filter Bar -->
    <div class="filter-bar">
      <button
        v-for="cat in categories"
        :key="cat"
        :class="['filter-btn', { active: activeCategory === cat }]"
        @click="activeCategory = cat"
      >
        {{ cat }}
      </button>
    </div>

    <!-- Projects Grid -->
    <div class="projects-grid">
      <article
        v-for="project in filteredProjects"
        :key="project.id"
        class="project-card"
        @click="openModal(project)"
      >
        <div class="card-header">
          <span
            class="status-badge"
            :style="{ backgroundColor: project.badgeColor }"
          >
            {{ project.status }}
          </span>
          <span class="card-timeline">{{ project.timeline }}</span>
        </div>

        <div class="card-body">
          <h3 class="card-title">{{ project.title }}</h3>
          <p class="card-description">{{ project.description }}</p>
        </div>

        <div class="card-footer">
          <div class="tech-tags">
            <span
              v-for="tech in project.techStack"
              :key="tech"
              class="tech-tag"
            >
              {{ tech }}
            </span>
          </div>
          <button class="view-btn">Details &rarr;</button>
        </div>
      </article>
    </div>

    <!-- Modal Popup for Details -->
    <div v-if="selectedProject" class="modal-backdrop" @click.self="closeModal">
      <div class="modal-content">
        <button class="close-btn" @click="closeModal">&times;</button>

        <div class="modal-header">
          <span
            class="status-badge"
            :style="{ backgroundColor: selectedProject.badgeColor }"
          >
            {{ selectedProject.status }}
          </span>
          <h3>{{ selectedProject.title }}</h3>
          <p class="modal-timeline">{{ selectedProject.timeline }}</p>
        </div>

        <div class="modal-body">
          <p class="modal-desc">{{ selectedProject.description }}</p>

          <div class="takeaways-section">
            <h4>Key Takeaways & Accomplishments:</h4>
            <ul>
              <li v-for="(item, idx) in selectedProject.takeaways" :key="idx">
                {{ item }}
              </li>
            </ul>
          </div>

          <div class="modal-tags">
            <span
              v-for="tech in selectedProject.techStack"
              :key="tech"
              class="tech-tag"
            >
              {{ tech }}
            </span>
          </div>
        </div>

        <div class="modal-footer">
          <a
            v-if="selectedProject.githubUrl"
            :href="selectedProject.githubUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="action-btn github-btn"
          >
            GitHub Repo
          </a>
          <a
            v-if="selectedProject.liveUrl"
            :href="selectedProject.liveUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="action-btn live-btn"
          >
            Live Site
          </a>
        </div>
      </div>
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

.projects-desc-block {
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 10px;
  margin-bottom: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.projects-desc-block p {
  font-size: 1.05rem;
  line-height: 1.6;
  color: #444;
  margin: 0;
}

/* Category Filter Bar */
.filter-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  margin-bottom: 2rem;
}

.filter-btn {
  background-color: #ffffff;
  border: 1px solid #eaeaea;
  padding: 0.5rem 1.25rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  color: #444;
  cursor: pointer;
  transition: all 0.2s ease;
}

.filter-btn:hover {
  background-color: #f8f9fa;
  border-color: #ccc;
}

.filter-btn.active {
  background-color: #ebff77;
  color: #111;
  border-color: #ebff77;
  font-weight: 600;
}

/* Projects Grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

.project-card {
  background-color: #ffffff;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  border: 1px solid #f0f0f0;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.status-badge {
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.6rem;
  border-radius: 12px;
  color: #111;
  white-space: pre-line;
}

.card-timeline {
  font-size: 0.8rem;
  color: #777;
  white-space: pre-line;
  text-align: right;
}

.card-title {
  font-size: 1.2rem;
  color: #111;
  margin: 0 0 0.5rem 0;
}

.card-description {
  font-size: 0.92rem;
  color: #555;
  line-height: 1.5;
  margin-bottom: 1.25rem;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid #f0f0f0;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.tech-tag {
  background-color: #f3f4f6;
  color: #374151;
  font-size: 0.75rem;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
}

.view-btn {
  background: none;
  border: none;
  color: #111;
  font-weight: 600;
  font-size: 0.85rem;
  cursor: pointer;
}

/* Modal Styling */
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
}

.modal-content {
  background: #ffffff;
  border-radius: 12px;
  width: 100%;
  max-width: 550px;
  padding: 2rem;
  position: relative;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.close-btn {
  position: absolute;
  top: 1rem;
  right: 1.25rem;
  background: none;
  border: none;
  font-size: 1.8rem;
  cursor: pointer;
  color: #666;
}

.modal-header h3 {
  font-size: 1.4rem;
  margin: 0.5rem 0 0.25rem 0;
  color: #111;
}

.modal-timeline {
  font-size: 0.85rem;
  color: #666;
  margin-bottom: 1rem;
  white-space: pre-line;
}

.modal-desc {
  font-size: 0.98rem;
  line-height: 1.6;
  color: #444;
}

.takeaways-section h4 {
  font-size: 0.95rem;
  margin: 1.2rem 0 0.5rem 0;
  color: #111;
}

.takeaways-section ul {
  padding-left: 1.25rem;
  margin: 0 0 1.25rem 0;
}

.takeaways-section li {
  font-size: 0.9rem;
  line-height: 1.5;
  color: #555;
  margin-bottom: 0.4rem;
}

.modal-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
}

.modal-footer {
  display: flex;
  gap: 0.75rem;
}

.action-btn {
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  text-align: center;
  transition: opacity 0.2s ease;
}

.action-btn:hover {
  opacity: 0.85;
}

.github-btn {
  background-color: #111;
  color: #ffffff;
}

.live-btn {
  background-color: #ebff77;
  color: #111;
}
</style>
