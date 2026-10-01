<script setup>
import { ref } from "vue";

// Featured Recent Projects Data
const recentProjects = ref([
  {
    id: 1,
    title: "Personal Portfolio",
    category: "Vue.js",
    description:
      "Component-driven single-page portfolio built with Vue 3, Vue Router, and custom CSS styling.",
    techStack: ["Vue 3", "JavaScript", "CSS3"],
  },
  {
    id: 2,
    title: "JAM'N Music Platform",
    category: "Team Project",
    description:
      "Interactive web app for discovering local artists, browsing genres, and building custom playlists.",
    techStack: ["Vue.js", "JavaScript", "HTML5"],
  },
  {
    id: 3,
    title: "News Web Scraping Analytics",
    category: "Data & Web",
    description:
      "Analytics dashboard parsing live external web news data and presenting key trends dynamically.",
    techStack: ["Python", "Vue.js", "REST APIs"],
  },
]);
</script>

<template>
  <main class="home-container">
    <!-- Wider Hero Section: Text Card + Side Picture -->
    <section class="hero-section">
      <div class="hero-card">
        <span class="greeting-badge">Welcome to my portfolio</span>
        <h1 class="hero-title">Hey, I'm <span>Maiesha Moohan</span> 𑣲𝄞</h1>
        <p class="hero-text">
          An Aspiring Web Developer and a creative person showcasing my
          projects, journey, and passions.
        </p>
        <div class="hero-actions">
          <router-link to="/projects" class="primary-btn">
            View Projects &rarr;
          </router-link>
          <a href="#contact" class="secondary-btn">Get In Touch</a>
        </div>
      </div>

      <div class="image-card">
        <img
          src="https://i.ibb.co/JS5m69R/me-2.png"
          alt="Maiesha"
          class="side-profile-img"
        />
      </div>
    </section>

    <!-- Recent Projects Showcase -->
    <section class="recent-projects-section">
      <div class="section-header">
        <div>
          <h2 class="section-title">Recent Projects</h2>
          <p class="section-subtitle">
            A quick peek at what I've been working on lately.
          </p>
        </div>
        <router-link to="/projects" class="see-all-link">
          View All Projects &rarr;
        </router-link>
      </div>

      <div class="projects-grid">
        <article
          v-for="project in recentProjects"
          :key="project.id"
          class="project-card"
        >
          <div class="card-header">
            <span class="category-badge">{{ project.category }}</span>
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
            <router-link to="/projects" class="project-link">
              Details &rarr;
            </router-link>
          </div>
        </article>
      </div>
    </section>

    <!-- Quick Contact Cards Section -->
    <section id="contact" class="contact-section">
      <h2 class="section-title text-center">Contact Channels</h2>

      <div class="contact-grid">
        <div class="contact-card">
          <div class="contact-icon">✉</div>
          <h3>Email Me</h3>
          <p>
            <a href="mailto:maieshamoohan@gmail.com">maieshamoohan@gmail.com</a>
          </p>
        </div>

        <div class="contact-card">
          <div class="contact-icon">in</div>
          <h3>LinkedIn</h3>
          <p>
            <a
              href="https://linkedin.com/in/maiesha-moohan"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/maiesha-moohan
            </a>
          </p>
        </div>

        <div class="contact-card">
          <div class="contact-icon">⚒</div>
          <h3>GitHub</h3>
          <p>
            <a
              href="https://github.com/Maiesha7-7Moohan"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/Maiesha7-7Moohan
            </a>
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* Main Container */
.home-container {
  max-width: 1240px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 4.5rem;
}

/* Split Hero Section */
.hero-section {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  align-items: stretch;
}

@media (min-width: 850px) {
  .hero-section {
    grid-template-columns: 1.45fr 0.85fr;
  }
}

.hero-card {
  background-color: #ffffff;
  border: 1px solid #f0f0f0;
  border-radius: 20px;
  padding: 3.5rem 3rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.greeting-badge {
  display: inline-block;
  background-color: #ebff77;
  color: #111;
  font-size: 0.85rem;
  font-weight: 600;
  padding: 0.35rem 0.85rem;
  border-radius: 20px;
  width: fit-content;
  margin-bottom: 1.25rem;
}

.hero-title {
  font-size: 2.8rem;
  font-weight: 700;
  color: #111;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.hero-text {
  font-size: 1.1rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.primary-btn {
  background-color: #111;
  color: #fff;
  padding: 0.85rem 1.65rem;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition:
    transform 0.25s ease,
    background-color 0.25s ease;
}

.primary-btn:hover {
  transform: translateY(-2px);
  background-color: #222;
}

.secondary-btn {
  background-color: #f3f4f6;
  color: #111;
  padding: 0.85rem 1.65rem;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition:
    transform 0.25s ease,
    background-color 0.25s ease;
}

.secondary-btn:hover {
  transform: translateY(-2px);
  background-color: #e5e7eb;
}

/* Image Card */
.image-card {
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid #f0f0f0;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03);
  min-height: 340px;
}

.side-profile-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.image-card:hover .side-profile-img {
  transform: scale(1.04);
}

/* Recent Projects Section */
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 2rem;
  gap: 1rem;
  flex-wrap: wrap;
}

.section-title {
  font-size: 1.8rem;
  color: #111;
  margin: 0;
}

.section-title.text-center {
  text-align: center;
  margin-bottom: 2rem;
}

.section-subtitle {
  color: #232222;
  margin: 0.35rem 0 0 0;
  font-size: 0.95rem;
}

.see-all-link {
  color: #111;
  font-weight: 600;
  text-decoration: none;
  font-size: 0.95rem;
  transition: transform 0.2s ease;
}

.see-all-link:hover {
  transform: translateX(4px);
  text-decoration: underline;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.project-card {
  background-color: #ffffff;
  border: 1px solid #f0f0f0;
  border-radius: 16px;
  padding: 1.75rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition:
    transform 0.3s cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.07);
}

.card-header {
  margin-bottom: 0.85rem;
}

.category-badge {
  background-color: #f3f4f6;
  color: #080808;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.65rem;
  border-radius: 12px;
}

.card-title {
  font-size: 1.2rem;
  color: #111;
  margin: 0 0 0.5rem 0;
}

.card-description {
  font-size: 0.93rem;
  color: #525250;
  line-height: 1.5;
  margin-bottom: 1.5rem;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid #f0f0f0;
  gap: 0.5rem;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}

.tech-tag {
  background-color: #fafafa;
  border: 1px solid #eaeaea;
  color: #54214b;
  font-size: 0.72rem;
  padding: 0.15rem 0.45rem;
  border-radius: 4px;
}

.project-link {
  color: #111;
  font-weight: 600;
  font-size: 0.85rem;
  text-decoration: none;
  white-space: nowrap;
  transition: transform 0.2s ease;
}

.project-card:hover .project-link {
  transform: translateX(3px);
}

/* Contact Grid */
.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
}

.contact-card {
  background-color: #ffffff;
  border: 1px solid #f0f0f0;
  border-radius: 16px;
  padding: 1.75rem 1.5rem;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
  transition:
    transform 0.3s cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 0.3s ease;
}

.contact-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.07);
}

.contact-icon {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  color: #111;
}

.contact-card h3 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: #111;
}

.contact-card p a {
  color: #4b5563;
  text-decoration: none;
  font-size: 0.92rem;
  word-break: break-all;
  transition: color 0.2s ease;
}

.contact-card p a:hover {
  color: #111;
  text-decoration: underline;
}
</style>
