<template>
    <div class="container">
        <div class="card mt-3">
            <form @submit.prevent="() => { userStore.storeUser(formData) }">
                <div class="card-header d-flex justify-content-between">
                    Create User
                    <router-link :to="{ name: 'users' }" class="btn btn-sm btn-success">
                        User List</router-link>
                </div>
                <div class="card-body">
                    <div class="form-group mb-2">
                        <label for="role" class="form-label">User Role</label>
                        <select v-model="formData.role" name="role" id="role" class="form-select">
                            <option value="">Select Role</option>
                            <option value="admin">Admin</option>
                            <option value="manager">Manager</option>
                        </select>
                        <span v-if="userStore.errors.role" class="text-danger">{{ userStore.errors.role[0]
                            }}</span>
                    </div>
                    <div class="form-group mb-2">
                        <label for="name" class="form-label">Name</label>
                        <input v-model="formData.name" type="text" class="form-control" id="name"
                            placeholder="Enter user name">
                        <span v-if="userStore.errors.name" class="text-danger">{{ userStore.errors.name[0]
                            }}</span>
                    </div>
                    <div class="form-group mb-2">
                        <label for="email" class="form-label">Email</label>
                        <input v-model="formData.email" type="text" class="form-control" id="email"
                            placeholder="Enter user email">
                        <span v-if="userStore.errors.email" class="text-danger">{{ userStore.errors.email[0]
                            }}</span>
                    </div>
                    <div class="form-group mb-2">
                        <label for="password" class="form-label">Password</label>
                        <input v-model="formData.password" type="password" class="form-control" id="password"
                            placeholder="Enter user password">
                        <span v-if="userStore.errors.password" class="text-danger">{{ userStore.errors.password[0]
                            }}</span>
                    </div>
                    <div class="form-group mb-2">
                        <label for="password_confirmation" class="form-label">Confirm Password</label>
                        <input v-model="formData.password_confirmation" type="password" class="form-control"
                            id="password_confirmation" placeholder="Re-type password">
                        <span v-if="userStore.errors.password_confirmation" class="text-danger">{{
                            userStore.errors.password_confirmation[0]
                            }}</span>
                    </div>
                </div>
                <div class="card-footer d-flex justify-content-end">
                    <button type="submit" class="btn btn-primary me-2">Submit</button>
                    <router-link :to="{ name: 'users' }" class="btn btn-danger">Cancel</router-link>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { useUserStore } from '@/stores/userStore';
import { reactive } from 'vue';
const userStore = useUserStore()

const formData = reactive({
    'name': "",
    'role': "",
    'email': "",
    'password': "",
    'password_confirmation': "",
});
</script>