<template>
    <div class="container">
        <div class="card mt-3">
            <form @submit.prevent= "() => { categoryStore.storeCategory(formData) }">
                <div class="card-header d-flex justify-content-between">
                    Create Category

                    <router-link :to="{ name: 'categories' }" class="btn btn-sm btn-success">
                        Category List</router-link>
                </div>
                <div class="card-body">
                    <div class="form-group mb-2">
                        <label for="name" class="form-label">Name</label>
                        <input v-model="formData.name" type="text" class="form-control" id="name" placeholder="Enter category name">
                        <span v-if="categoryStore.errors.name" class="text-danger">{{ categoryStore.errors.name[0] }}</span>
                    </div>
                    <div class="form-group mb-2">
                        <label for="description" class="form-label">Description</label>
                        <input v-model="formData.description" type="text" class="form-control" id="description"
                            placeholder="Enter category description">
                        <span v-if="categoryStore.errors.description" class="text-danger">{{ categoryStore.errors.description[0] }}</span>
                    </div>
                </div>
                <div class="card-footer d-flex justify-content-end">
                    <button type="submit" class="btn btn-primary me-2">Submit</button>
                    <router-link :to="{ name: 'categories' }" class="btn btn-danger">Cancel</router-link>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { useCategoryStore } from '@/stores/categoryStore';
import { reactive } from 'vue';
    const categoryStore = useCategoryStore()

    const formData = reactive({
        'name' :"",
        'description' :"",
    });
</script>