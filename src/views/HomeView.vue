<script setup>
import { useAuthStore } from '@/stores/authStore';
import Alert from '@/components/Alert.vue';
const authStore = useAuthStore()
</script>

<template>
  <div class="container">
    <Alert v-if="authStore.successMessage" :type="'success'" :message="authStore.successMessage" />
    <div class="px-4 py-4 my-4 text-center">
      <img class="d-block mx-auto mb-4" src="/bag-icon.webp" alt="" width="100" height="100">
      <h1 class="display-5 fw-bold">Shop Pre-Order Form</h1>
      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">This Pre-Order Form allows customers to place orders for items that are not yet in stock.
          It helps you gauge demand and plan inventory accordingly. Customers can provide their contact information,
          select items and quantities, and choose preferred shipping methods</p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <router-link :to="{ name: 'form' }" class="btn btn-primary btn-lg px-4 gap-3">Pre-Order Form</router-link>
          <router-link to="#" class="btn btn-success btn-lg px-4">Learn more</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
