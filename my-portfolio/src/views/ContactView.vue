<script setup>
import { ref } from "vue";

const formData = ref({
  name: "",
  email: "",
  message: "",
});

const isSubmitting = ref(false);

const handleFormSubmit = async () => {
  isSubmitting.value = true;

  try {
    const response = await fetch("https://formspree.io/f/mrednoqy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData.value),
    });

    if (response.ok) {
      alert("Thank you! Your message has been sent successfully.");
      formData.value = { name: "", email: "", message: "" };
    } else {
      alert("Oops! There was a problem submitting your form.");
    }
  } catch (error) {
    alert("An error occurred while sending your message.");
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <main class="main-container">
    <h2>Wanna Get In Touch?</h2>

    <!-- Contact Form Section -->
    <div class="form-container">
      <h3>Send me a Message Directly</h3>
      <form class="contact-form" @submit.prevent="handleFormSubmit">
        <div class="form-group">
          <label for="name">Name</label>
          <input
            id="name"
            v-model="formData.name"
            type="text"
            required
            placeholder="Your Name"
          />
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input
            id="email"
            v-model="formData.email"
            type="email"
            required
            placeholder="Your Email Address"
          />
        </div>

        <div class="form-group">
          <label for="message">Message</label>
          <textarea
            id="message"
            v-model="formData.message"
            rows="5"
            required
            placeholder="Write your message here..."
          ></textarea>
        </div>

        <button type="submit" class="submit-btn" :disabled="isSubmitting">
          {{ isSubmitting ? "Sending..." : "Send Message" }}
        </button>
      </form>
    </div>
  </main>
</template>

<style scoped>
/* Main Container */
.main-container {
  flex: 1;
  max-width: 1400px;
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

/* Form Container */
.form-container {
  background-color: #ffffff;
  border: 1px solid #f0f0f0;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
}

.form-container h3 {
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  color: #111;
  text-align: center;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.form-group label {
  font-size: 0.9rem;
  font-weight: 600;
  color: #374151;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 0.95rem;
  font-family: inherit;
  color: #111;
  background-color: #f9fafb;
  transition:
    border-color 0.2s ease,
    background-color 0.2s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #111;
  background-color: #ffffff;
}

.submit-btn {
  background-color: #ebff77;
  color: #111;
  border: none;
  padding: 0.85rem 1.5rem;
  font-size: 0.95rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  align-self: flex-start;
  transition:
    opacity 0.2s ease,
    transform 0.1s ease;
}

.submit-btn:hover:not(:disabled) {
  opacity: 0.9;
  transform: translateY(-1px);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
