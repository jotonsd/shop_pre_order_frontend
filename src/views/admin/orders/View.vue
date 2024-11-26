<template>
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <div class="card mt-3">
                    <form>
                        <div class="card-header d-flex justify-content-between">
                            Contact Information
                            <router-link :to="{ name: 'orders' }" class="btn btn-sm btn-success">
                                Order List</router-link>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-4">
                                    Name:
                                </div>
                                <div class="col-md-8">
                                    {{ orderStore.order.name }}
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4">
                                    Email:
                                </div>
                                <div class="col-md-8">
                                    {{ orderStore.order.email }}
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4">
                                    Phone:
                                </div>
                                <div class="col-md-8">
                                    {{ orderStore.order.phone }}
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="col-md-8">

                <div class="card mt-3">
                    <div class="card-header d-flex justify-content-between">
                        Order Details
                        <router-link :to="{ name: 'orders' }" class="btn btn-sm btn-success">
                            Order List</router-link>
                    </div>
                    <div class="card-body">

                        <table class="table table-sm table-striped table-bordered">
                            <thead class="table-success text-center">
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Product</th>
                                    <th scope="col">Unit Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in orderStore.order.details" :key="item.id">
                                    <th scope="row" class="text-center">{{ ++index }}</th>
                                    <td>{{ item.product.category.name }}</td>
                                    <td>{{ item.product.name }}</td>
                                    <td>{{ item.product.price}}</td>
                                    <td>{{ item.quantity }}</td>
                                    <td>{{ item.total_price }}</td>
                                </tr>
                                <tr>
                                    <td colspan="5" class="text-end"><strong>Grand Total</strong></td>
                                    <td>{{ grandTotal }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script setup>
import { useOrderStore } from '@/stores/orderStore';
import { onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const orderId = route.params.id;

const orderStore = useOrderStore();

// Load orders on component mount
onMounted(() => {
    orderStore.getOrder(orderId);
});

const grandTotal = computed(() => {
    return orderStore.order.details?.reduce((sum, item) => sum + Number(item.total_price), 0) || 0;
});

</script>