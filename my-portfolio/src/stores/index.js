import { createRouter, createWebHistory } from "vue-router";

// Check that file names match exact casing (e.g., GoalsView.vue vs goalsView.vue)
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import GoalsView from "../views/GoalsView.vue";
import JourneyView from "../views/JourneyView.vue";
import ProjectsView from "../views/ProjectsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: HomeView },
    { path: "/about", name: "about", component: AboutView },
    { path: "/goals", name: "goals", component: GoalsView },
    { path: "/journey", name: "journey", component: JourneyView },
    { path: "/projects", name: "projects", component: ProjectsView },
  ],
});

export default router;
