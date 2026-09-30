<script setup>
import { ref, computed } from "vue";

// Filter state
const activeCategory = ref("All");

// Categories matching your learning timeline and interests
const categories = ["All", "Python", "HTML & CSS", "Team Projects", "Vue.js"];

// Projects populated with context from your Journey & About page
const projects = ref([
  {
    id: 1,
    title: "Personal Portfolio Website",
    category: "HTML & CSS",
    timeline: "June 2026",
    description:
      "My first personal portfolio created using vanilla HTML and CSS, designed to showcase my projects, learning journey, and interest in creative arts and fashion.",
    takeaways: [
      "Mastered responsive layout design using CSS Flexbox and Grid.",
      "Implemented clean, accessible semantic HTML structure.",
      "Designed custom visual styling reflecting personal aesthetic.",
    ],
    techStack: ["HTML5", "CSS3"],
    githubUrl: "https://github.com/your-username/portfolio-v1",
    liveUrl: "https://your-portfolio-v1.netlify.app",
    status: "Completed",
    badgeColor: "#ebff77",
  },
  {
    id: 2,
    title: "Fitness & Wellness Website",
    category: "Team Projects",
    timeline: "9 June - 19 June 2026",
    description:
      "Collaborative team project built at Life Choices Academy. Worked with peers to develop a multi-page web platform for wellness, featuring interactive layouts and responsive components.",
    takeaways: [
      "Gained experience in team collaboration and Git/GitHub branching workflows.",
      "Integrated dynamic JavaScript features for client-side interactivity.",
      "Structured consistent design language across multiple pages.",
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "Git"],
    githubUrl: "https://github.com/your-username/fitness-wellness-project",
    liveUrl: "https://fitness-wellness-demo.netlify.app",
    status: "Completed",
    badgeColor: "#93c5fd",
  },
  {
    id: 3,
    title: "Python Learning Exercises",
    category: "Python", // Categorized under core languages
    timeline: "April 2026",
    description:
      "Collection of practical Python scripts and exercises covering data structures, algorithm basics, and foundational logic.",
    takeaways: [
      "Strengthened core programming logic and problem-solving techniques.",
      "Worked with control flow, functions, and data structures.",
      "Built a foundation for backend database integration.",
    ],
    techStack: ["Python"],
    githubUrl: "https://github.com/your-username/python-exercises",
    liveUrl: "",
    status: "Completed",
    badgeColor: "#fde047",
  },
  {
    id: 4,
    title: "Full-Stack Web App (MySQL & Vue)",
    category: "Upcoming",
    timeline: "July 2026 (In Progress)",
    description:
      "Upcoming web application leveraging Vue.js for reactive frontend components alongside Node.js, PHP, and MySQL for database operations.",
    takeaways: [
      "Building full-stack CRUD capabilities.",
      "Connecting Vue components to dynamic backend services.",
      "Designing structured database schemas in MySQL.",
    ],
    techStack: ["Vue.js", "MySQL", "PHP", "Node.js"],
    githubUrl: "https://github.com/your-username/fullstack-app",
    liveUrl: "",
    status: "In Progress",
    badgeColor: "#fca5a5",
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
