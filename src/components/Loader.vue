<template>
  <div class="overlay" v-if="isLoading">
    <div class="spinner"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Define a prop to control the loading state
const props = defineProps({
  isLoading: {
    type: Boolean,
    required: true,
  }
});
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8); /* White background with slight transparency */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.spinner {
  border: 4px solid rgba(255, 255, 255, 0.6); /* Light border */
  border-top: 4px solid #007bff; /* Customize the spinner color */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
