<script setup>
import Alert from '@/components/Alert.vue';
import Loader from '@/components/Loader.vue';
import { useAuthStore } from '@/stores/authStore';
import { reactive } from 'vue';
import router from "../router";

const authStore = useAuthStore()

if (authStore.IsLoggedIn == true) {
    router.push({ name: "welcome" });
}

const formData = reactive({
    'email' :"",
    'password' :"",
});
</script>

<template>
    <div class="container mt-3">
    <Loader :isLoading="authStore.isLoading === true" />
    <Alert v-if="authStore.successMessage" :type="'success'" :message="authStore.successMessage" />
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Login</div>
                    <div class="card-body">
                        <form @submit.prevent= "() => { authStore.login(formData) }">
                            <div class="row mb-3">
                                <label for="email" class="col-md-4 col-form-label text-md-end">Email Address</label>

                                <div class="col-md-6">
                                    <input v-model="formData.email"  id="email" type="email" class="form-control " name="email" value="" required
                                        autocomplete="email" autofocus placeholder="Enter your email">
                                <span v-if="authStore.errors.email" class="text-danger">{{ authStore.errors.email }}</span>
                                <span v-if="authStore.errors" class="text-danger">{{ authStore.errors.message }}</span>

                                </div>
                            </div>

                            <div class="row mb-3">
                                <label for="password" class="col-md-4 col-form-label text-md-end">Password</label>

                                <div class="col-md-6">
                                    <input v-model="formData.password" id="password" type="password" class="form-control " name="password" required
                                        autocomplete="current-password" placeholder="Enter your password">
                                    <p v-if="authStore.errors.password" class="text-danger">{{ authStore.errors.password[0] }}</p>


                                </div>
                            </div>

                            <div class="row mb-0">
                                <div class="col-md-8 offset-md-4">
                                    <button type="submit" class="btn btn-primary me-2">
                                        Login
                                    </button>
                                    <router-link :to="{ name: 'welcome' }" class="btn btn-danger">
                                        Cancel
                                    </router-link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
