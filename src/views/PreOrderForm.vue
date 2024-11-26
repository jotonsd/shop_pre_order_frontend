<template>
    <div class="container">
        <div class="card mt-3">
            <Alert v-if="useOrderStore.successMessage" :type="'success'" :message="useOrderStore.successMessage" />
            <form  @submit.prevent="() => { orderStore.storeOrder(formData) }">
                <div class="card-header d-flex justify-content-between">
                    Create New Order
                    <router-link :to="{ name: 'orders' }" class="btn btn-sm btn-success">
                        Order List
                    </router-link>
                </div>
                <div class="card-body">
                    <h6><b>Contact Information</b></h6>
                    <div class="form-group mb-2">
                        <label for="name" class="form-label">Name</label>
                        <input v-model="formData.name" type="text" class="form-control" id="name" placeholder="Enter your name">
                        <span v-if="orderStore.errors.name" class="text-danger">{{ orderStore.errors.name[0] }}</span>
                    </div>
                    <div class="form-group mb-2">
                        <label for="email" class="form-label">Email</label>
                        <input v-model="formData.email" type="email" class="form-control" id="email" placeholder="Enter your email">
                        <span v-if="orderStore.errors.email" class="text-danger">{{ orderStore.errors.email[0] }}</span>
                    </div>
                    <div class="form-group mb-2">
                        <label for="phone" class="form-label">Phone</label>
                        <input v-model="formData.phone" type="text" class="form-control" id="phone" placeholder="Enter your phone number">
                        <span v-if="orderStore.errors.phone" class="text-danger">{{ orderStore.errors.phone[0] }}</span>
                    </div>

                    <h6><b>Order Details</b></h6>
                        <span v-if="orderStore.errors.details" class="text-danger">{{ orderStore.errors.details[0] }}<br/></span>
                    <div v-for="(details, index) in formData.details" :key="index" class="row">
                        <!-- Category Select -->
                        <div class="col-md-3">
                            <div class="form-group mb-2">
                                <select
                                    v-model="details.category_id"
                                    @change="details.product_id = ''"
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
                                    :disabled="!details.category_id"
                                >
                                    <option value="" disabled>Select Product</option>
                                    <option
                                        v-for="(product, index) in getProductsByCategory(details.category_id)"
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

                        <!-- Price Input -->
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

                    <!-- Add New Item Button -->
                    <button type="button" @click="addNewItem" class="btn btn-success mt-2">
                        Add New Item
                    </button>
                </div>

                <div class="card-footer d-flex justify-content-end">
                    <button type="submit" class="btn btn-primary me-2">Submit Order</button>
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
import Alert from '@/components/Alert.vue';

const orderStore = useOrderStore();
const categoryStore = useCategoryStore();
const productStore = useProductStore();

const formData = reactive({
    name: '',
    email: '',
    phone: '',
    details: [], // Store order details as an array
});

// Load categories and products on component mount
onMounted(async () => {
    await categoryStore.getAllCategories();
    await productStore.getAllProducts();
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

// Method to add a new order item (detail) row
const addNewItem = () => {
    const newItem = {
        category_id: '', // Category selection
        product_id: '', // Product selection
        quantity: 1, // Default quantity
    };
    formData.details.push(newItem); // Add the new item to the details array
};

// Method to remove an order item (detail) row
const removeItem = (index) => {
    formData.details.splice(index, 1); // Remove the item at the given index
};
</script>
