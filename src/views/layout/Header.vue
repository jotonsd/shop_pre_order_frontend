<script setup>
    import { useAuthStore } from '@/stores/authStore';
    const authStore = useAuthStore()
</script>
<template>
    <nav class="navbar navbar-expand-lg navbar-ligh bg-custom">
        <div class="container">
            <router-link class="navbar-brand" :to="{ name: 'welcome' }">
                <img src="/bag-icon.webp" alt="" width="28" height="30">
                PreOrder
            </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" aria-current="page" :to="{ name: 'form' }">Form</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" v-if="authStore.IsAdmin === 'admin'" :to="{ name: 'users' }">Users</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" v-if="authStore.IsAdmin === 'admin'" :to="{ name: 'categories' }">Categories</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" v-if="authStore.IsAdmin === 'admin'" :to="{ name: 'products' }">Products</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" v-if="authStore.IsAdmin === 'admin' || authStore.IsAdmin === 'manager'" :to="{ name: 'orders' }">Orders</router-link>
                    </li>
                </ul>
                <div class="d-flex">
                    <router-link v-if="authStore.IsLoggedIn == false" to="/login" class="btn btn-outline-primary me-2">Login</router-link>
                    <button v-else @click="authStore.logout()" class="btn btn-outline-success">Logout</button>
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.bg-custom {
    background-color: #e3f2fd;
}
</style>