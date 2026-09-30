<script setup>
import { reactive, ref } from "vue";

const form = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const isSubmitted = ref(false);

function handleSubmit() {
  // Simple form submission simulation
  isSubmitted.value = true;
  form.name = "";
  form.email = "";
  form.subject = "";
  form.message = "";
}
</script>

<template>
  <main class="main-container">
    <h2>Get In Touch</h2>

    <div class="contact-card">
      <form @submit.prevent="handleSubmit" class="contact-form">
        <div class="form-group">
          <label for="name">Name</label>
          <input
            id="name"
            v-model="form.name"
            type="text"
            placeholder="Your Name"
            required
          />
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            placeholder="your.email@example.com"
            required
          />
        </div>

        <div class="form-group">
          <label for="subject">Subject</label>
          <input
            id="subject"
            v-model="form.subject"
            type="text"
            placeholder="Subject"
            required
          />
        </div>

        <div class="form-group">
          <label for="message">Message</label>
          <textarea
            id="message"
            v-model="form.message"
            rows="5"
            placeholder="Write your message here..."
            required
          ></textarea>
        </div>

        <button type="submit" class="submit-btn">Send Message</button>
      </form>

      <p v-if="isSubmitted" class="success-message">
        Thank you for reaching out! Your message has been sent.
      </p>
    </div>
  </main>
</template>

<style scoped>
.main-container {
  flex: 1;
  max-width: 700px;
  width: 100%;
  margin: 0 auto;
  padding: 3rem 1.5rem;
}

.main-container h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #111;
  text-align: center;
}

.contact-card {
  background: #ffffff;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  border: 1px solid #eaeaea;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-weight: 600;
  font-size: 0.95rem;
  color: #333;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  font-family: inherit;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #d073ef;
  box-shadow: 0 0 0 3px rgba(0, 112, 243, 0.15);
}

.submit-btn {
  background-color: #d073ef;
  color: white;
  padding: 0.85rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
  margin-top: 0.5rem;
}

.submit-btn:hover {
  background-color: #9452ab;
}

.success-message {
  margin-top: 1.5rem;
  padding: 1rem;
  background-color: #e6f4ea;
  color: #137333;
  border-radius: 6px;
  text-align: center;
  font-weight: 500;
}
</style>
