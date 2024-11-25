<template>
    <div class="container">
        <pre>{{ formData }}</pre>
        <div class="card mt-3">
            <form @submit.prevent="() => { productStore.storeProduct(formData) }">
                <div class="card-header d-flex justify-content-between">
                    Create Product
                    <router-link :to="{ name: 'products' }" class="btn btn-sm btn-success">
                        Product List</router-link>
                </div>
                <div class="card-body">

                    <div class="form-group mb-2">
                        <label for="category_id" class="form-label">Category</label>
                        <select v-model="formData.category_id" name="category_id" id="category_id" class="form-select">
                            <option value="">Select Category</option>
                            <option v-for="(category, index) in categoryStore.categories" :key="index"
                                :value="category.id">{{ category.name }}</option>
                        </select>
                        <span v-if="productStore.errors.category_id" class="text-danger">{{
                            productStore.errors.category_id[0]
                            }}</span>
                    </div>
                    <div class="form-group mb-2">
                        <label for="name" class="form-label">Name</label>
                        <input v-model="formData.name" type="text" class="form-control" id="name"
                            placeholder="Enter product name">
                        <span v-if="productStore.errors.name" class="text-danger">{{ productStore.errors.name[0]
                            }}</span>
                    </div>
                    <div class="form-group mb-2">
                        <label for="description" class="form-label">Description</label>
                        <input v-model="formData.description" type="text" class="form-control" id="description"
                            placeholder="Enter product description">
                        <span v-if="productStore.errors.description" class="text-danger">{{
                            productStore.errors.description[0]
                            }}</span>
                    </div>
                    <div class="form-group mb-2">
                        <label for="price" class="form-label">Price</label>
                        <input v-model="formData.price" type="number" class="form-control" id="price"
                            placeholder="Enter product price">
                        <span v-if="productStore.errors.price" class="text-danger">{{ productStore.errors.price[0]
                            }}</span>
                    </div>
                </div>
                <div class="card-footer d-flex justify-content-end">
                    <button type="submit" class="btn btn-primary me-2">Submit</button>
                    <router-link :to="{ name: 'products' }" class="btn btn-danger">Cancel</router-link>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { useProductStore } from '@/stores/productStore';
import { useCategoryStore } from '@/stores/categoryStore';
import { reactive, onMounted } from 'vue';
const productStore = useProductStore()
const categoryStore = useCategoryStore();
// Load products on component mount
onMounted(() => {
    categoryStore.getAllCategories();
});

const formData = reactive({
    'category_id': "",
    'name': "",
    'description': "",
    'price': ""
});
</script>