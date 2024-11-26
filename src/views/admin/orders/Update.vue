<template>
    <div class="container">
        <div class="card mt-3">
            <form @submit.prevent="() => { orderStore.updateOrder(formData, orderStore.order.id) }">
                <div class="card-header d-flex justify-content-between">
                    Update Order
                    <router-link :to="{ name: 'orders' }" class="btn btn-sm btn-success">
                        Order List
                    </router-link>
                </div>
                <div class="card-body">
                    <h6><b>Contact Information</b></h6>
                    <div class="form-group mb-2">
                        <label for="name" class="form-label">Name</label>
                        <input v-model="formData.name" type="text" class="form-control" id="name" placeholder="Enter your name">
                    </div>
                    <div class="form-group mb-2">
                        <label for="email" class="form-label">Email</label>
                        <input v-model="formData.email" type="email" class="form-control" id="email" placeholder="Enter your email">
                    </div>
                    <div class="form-group mb-2">
                        <label for="phone" class="form-label">Phone</label>
                        <input v-model="formData.phone" type="text" class="form-control" id="phone" placeholder="Enter your phone number">
                    </div>

                    <h6><b>Order Details</b></h6>
                    <div v-for="(details, index) in formData.details" :key="details.id" class="row">
                        <!-- Hidden input for pre_order_details_id -->
                        <input type="hidden" v-model="details.id">

                        <!-- Category Select -->
                        <div class="col-md-3">
                            <div class="form-group mb-2">
                                <select
                                    v-model="details.product.category_id"
                                    @change="details.product.id = ''"
                                    class="form-select"
                                >
                                    <option value="" disabled>Select Category</option>
                                    <option v-for="(category, index) in categoryStore.categories" :key="index" :value="category.id">
                                        {{ category.name }}
                                    </option>
                                </select>
                            </div>
                        </div>

                        <!-- Product Select -->
                        <div class="col-md-3">
                            <div class="form-group mb-2">
                                <select
                                    v-model="details.product_id"
                                    class="form-select"
                                    :disabled="!details.product.category_id"
                                >
                                    <option value="" disabled>Select Product</option>
                                    <option
                                        v-for="(product, index) in getProductsByCategory(details.product.category_id)"
                                        :key="index"
                                        :value="product.id"
                                    >
                                        {{ product.name }}
                                    </option>
                                </select>
                            </div>
                        </div>

                        <!-- Quantity Input -->
                        <div class="col-md-3">
                            <div class="form-group mb-2">
                                <input v-model="details.quantity" type="number" class="form-control" placeholder="Quantity" min="1">
                            </div>
                        </div>

                        <!-- Calculated Price Input -->
                        <div class="col-md-2">
                            <div class="form-group mb-2">
                                <input
                                    :value="calculatePrice(details)"
                                    type="text"
                                    class="form-control"
                                    placeholder="Price"
                                    readonly
                                >
                            </div>
                        </div>

                        <!-- Remove Item Button -->
                        <div class="col-md-1">
                            <button type="button" class="btn btn-danger" @click="removeItem(index)">
                                X
                            </button>
                        </div>
                    </div>
                </div>

                <div class="card-footer d-flex justify-content-end">
                    <button type="submit" class="btn btn-primary me-2">Submit</button>
                    <router-link :to="{ name: 'orders' }" class="btn btn-danger">Cancel</router-link>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { useOrderStore } from '@/stores/orderStore';
import { useCategoryStore } from '@/stores/categoryStore';
import { useProductStore } from '@/stores/productStore';
import { onMounted, reactive } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const orderId = route.params.id;

const orderStore = useOrderStore();
const categoryStore = useCategoryStore();
const productStore = useProductStore();

const formData = reactive({
    name: '',
    email: '',
    phone: '',
    details: [],
});

// Load data on component mount
onMounted(async () => {
    await orderStore.getOrder(orderId);
    await categoryStore.getAllCategories();
    await productStore.getAllProducts();
    Object.assign(formData, orderStore.order);
});

// Computed property to filter products by category ID
const getProductsByCategory = (categoryId) => {
    return productStore.products.filter(product => product.category_id === categoryId);
};

// Method to calculate price based on selected product_id and quantity
const calculatePrice = (details) => {
    if (!details.product_id || !details.quantity || details.quantity <= 0) {
        return 0;
    }
    const selectedProduct = productStore.products.find(product => product.id === details.product_id);
    return selectedProduct ? details.quantity * selectedProduct.price : 0;
};

// Method to remove an item from the order details
const removeItem = (index) => {
    formData.details.splice(index, 1);  // Remove the item at the given index
};
</script>
