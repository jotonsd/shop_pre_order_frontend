<template>
  <div
    v-if="visible && message"
    class="alert-popup"
    :class="alertClass"
    role="alert"
  >
    <!-- Close button to manually dismiss the alert -->
    <button
      class="close-btn"
      @click="closeAlert"
      aria-label="Close"
    >
      &times;
    </button>

    <!-- Alert Message -->
    <div class="alert-message">
      {{ message }}
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const props = defineProps({
  type: {
    type: String,
    default: 'success',
  },
  message: {
    type: String,
    required: true,
  },
  autoDismiss: {
    type: Number,
    default: 5000,
  },
});

const visible = ref(true);

const alertClass = computed(() => {
  return props.type === 'success'
    ? 'alert-success'
    : 'alert-danger';
});

onMounted(() => {
  if (props.autoDismiss) {
    setTimeout(() => {
      visible.value = false;
    }, props.autoDismiss);
  }
});

const closeAlert = () => {
  visible.value = false;
};
</script>

<style scoped>
/* Base styles for the alert popup */
.alert-popup {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
  padding: 1rem 2rem;
  margin: 0.5rem;
  border-radius: 0.375rem;
  font-size: 1rem;
  width: 350px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  opacity: 1;
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Success Alert Styles */
.alert-success {
  background-color: #198754;
  color: #fff;
  border: 1px solid #198754;
}

/* Error Alert Styles */
.alert-danger {
  background-color: #dc3545;;
  color: #fff;
  border: 1px solid #dc3545;
}

/* Message container */
.alert-message {
  flex-grow: 1;
}

/* Close button styles */
.close-btn {
  background: none;
  border: none;
  font-size: 1.5rem;
  color: inherit;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  cursor: pointer;
}

.close-btn:hover {
  color: #721c24;
}

/* Fade out animation when disappearing */
.alert-popup-exit {
  opacity: 0;
  transform: translateX(100%);
}
</style>
