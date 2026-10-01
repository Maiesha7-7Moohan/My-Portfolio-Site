<script setup>
import { ref } from "vue";

// Reactive array for interests gallery items
const interests = ref([
  {
    title: "Art",
    image:
      "https://i.ibb.co/vv6sXF7w/Whats-App-Image-2026-05-29-at-09-08-31.jpg",
    alt: "Art Work Sketch",
    description:
      "I have always been interested in art; my love for art started when I was young. I used to draw and paint when I was younger (mostly Pokémon I thought I made up, but they were actually real). I started getting back into drawing and sketching during COVID, and since then, I've barely put my pencil down.",
  },
  {
    title: "Jewelry Design",
    image: "https://i.ibb.co/d0LVZ0BS/956b8bd53fa75326e108e9235e8a04ef.jpg",
    alt: "Jewelry Design",
    description:
      "As recently as 3 years ago, I started taking a liking to jewelry. I have always been interested in jewelry, but I never really took the time to explore it until recently. I enjoy collecting and wearing unique pieces of jewelry, and in my future, I hope to work in the jewelry industry and create my own line. I have always been fascinated by the craftsmanship and creativity that goes into making jewelry.",
  },
  {
    title: "Coding & Programming",
    image: "https://i.ibb.co/DPtJCTnr/Coding.jpg",
    alt: "Coding and Programming",
    description:
      "I haven't always been interested in coding and programming, my interest in this field started once I left high school. Now I find it fascinating how coding and programming has shaped my childhood, especially with a dad who is a tech genius in my eyes. I am enjoying learning new programming languages at the Life Choices Academy.",
  },
  {
    title: "Fashion",
    image:
      "https://i.ibb.co/9kJRBN5B/Scotland-and-England-300-years-of-union-in-pictures.jpg",
    alt: "Fashion Inspiration",
    description:
      "I have always been interested in fashion, fascinated by the creativity and self-expression that goes into it. I enjoy experimenting with different styles and trends, and I have always been drawn to unique and bold fashion choices (such as the Goth scene, Emo, Mcbling, and so many other subcultures).",
  },
]);
</script>

<template>
  <main class="main-container">
    <div class="about-wrapper">
      <!-- Top Block: About Profile (Wider Card) -->
      <section class="about-block">
        <div class="profile-header">
          <img
            src="https://i.ibb.co/C3pry9Gv/me.png"
            alt="Maiesha Moohan Profile Picture"
            class="profile-avatar"
          />
          <h2>About Me</h2>
        </div>

        <div class="about-text">
          <p>
            Hey I'm <strong>Maiesha Moohan</strong>! I am a novice developer
            attending a course at the Life Choices Academy as part of their
            YouthCode Cohort 18 program.
          </p>
          <p>
            I am excited to continue my coding journey by learning more about
            Python, HTML, CSS, JavaScript and so much more. Besides being
            interested in coding, I also have a passion for fashion and creative
            arts. I hope this journey will take me to new heights and open up
            new opportunities for me in the future.
          </p>
        </div>
      </section>

      <!-- Bottom Block: Interests Showcase -->
      <section class="interests-block">
        <h3>Some of My Interests</h3>
        <div class="gallery-row">
          <div
            v-for="(item, index) in interests"
            :key="index"
            class="gallery-card"
          >
            <img :src="item.image" :alt="item.alt" />

            <div class="card-overlay">
              <p class="overlay-desc">{{ item.description }}</p>
            </div>

            <div class="card-info">
              <h4 class="card-title">{{ item.title }}</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped>
/* Main Outer Layout Container - Expanded for extra width */
.main-container {
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 3rem 1.5rem;
  flex: 1;
}

/* Vertical Stacked Layout */
.about-wrapper {
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
}

/* --- Top Block: About Section (Wider & Full-Span) --- */
.about-block {
  width: 100%;
  background-color: #ffffff;
  border: 1px solid var(--color-border, #eae6f2);
  border-radius: 16px;
  padding: 3rem 2.5rem;
  box-shadow: 0 4px 15px rgba(128, 90, 199, 0.05);
}

.profile-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 1.5rem;
}

.profile-avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--color-primary, #ad5ac7);
  margin-bottom: 1rem;
  box-shadow: 0 4px 12px rgba(128, 90, 199, 0.15);
}

.profile-header h2 {
  font-size: 2.2rem;
  color: var(--color-text-dark, #1e1e24);
  margin: 0;
}

.about-text {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  line-height: 1.7;
  color: var(--color-text-muted, #555555);
  font-size: 1.05rem;
  text-align: center;
}

/* --- Bottom Block: Interests Section --- */
.interests-block h3 {
  font-size: 1.8rem;
  margin-bottom: 1.75rem;
  color: var(--color-text-dark, #1e1e24);
  text-align: center;
}

.gallery-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

.gallery-card {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  background-color: #000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  aspect-ratio: 3 / 4;
}

.gallery-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}

.gallery-card:hover img {
  transform: scale(1.05);
}

/* Card Title Footer */
.card-info {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0.85rem;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.85));
  z-index: 2;
}

.card-title {
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  text-align: center;
}

/* Hover Overlay */
.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.88);
  color: #ffffff;
  padding: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 3;
}

.gallery-card:hover .card-overlay {
  opacity: 1;
}

.overlay-desc {
  font-size: 0.85rem;
  line-height: 1.45;
  margin: 0;
  text-align: center;
  overflow-y: auto;
  max-height: 100%;
}

/* Responsive Grid Adjustments */
@media (max-width: 900px) {
  .about-block {
    padding: 2rem 1.5rem;
  }

  .gallery-row {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 500px) {
  .gallery-row {
    grid-template-columns: 1fr;
  }
}
</style>
