<template>
    <div class="container">
    <Loader :isLoading="orderStore.isLoading === true" />
    <!-- Your content goes here -->
    <Alert v-if="orderStore.successMessage" :type="'success'" :message="orderStore.successMessage" />
        <div class="card mt-3">
            <div class="card-header d-flex justify-content-between">
                Order List
            </div>
            <div class="card-body">
                <table class="table table-striped table-bordered">
                    <thead class="table-success text-center">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(order, index) in orderStore.orders" :key="order.id">
                            <th scope="row" class="text-center">{{ ++index }}</th>
                            <td>{{ order.name }}</td>
                            <td>{{ order.email }}</td>
                            <td>{{ order.phone }}</td>
                            <td class="text-center">
                                <router-link :to="{ name: 'viewOrder', params: { id: order.id } }"
                                    class="btn btn-sm btn-info me-1">View</router-link>
                                <router-link :to="{ name: 'updateOrder', params: { id: order.id } }"
                                    class="btn btn-sm btn-info me-1">Edit</router-link>
                                <router-link to="#" class="btn btn-sm btn-danger">Delete</router-link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="card-footer">
                <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-end">
                        <!-- Previous Button -->
                        <li class="page-item" :class="{ disabled: orderStore.currentPage === 1 }">
                            <a class="page-link" href="#"
                                @click.prevent="changePage(orderStore.currentPage - 1)">Previous</a>
                        </li>

                        <!-- Page Numbers -->
                        <li class="page-item" v-for="page in totalPages" :key="page"
                            :class="{ active: orderStore.currentPage === page }">
                            <a class="page-link" href="#" @click.prevent="changePage(page)">{{ page }}</a>
                        </li>

                        <!-- Next Button -->
                        <li class="page-item" :class="{ disabled: orderStore.currentPage === orderStore.lastPage }">
                            <a class="page-link" href="#"
                                @click.prevent="changePage(orderStore.currentPage + 1)">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<script setup>
import Alert from '@/components/Alert.vue';
import Loader from '@/components/Loader.vue';
import { useOrderStore } from '@/stores/orderStore';
import { onMounted, ref, watchEffect } from 'vue';

const orderStore = useOrderStore();
const totalPages = ref([]);

// Load orders on component mount
onMounted(() => {
    orderStore.getOrders();
});

watchEffect(() => {
    if (orderStore.lastPage > 1) {
        totalPages.value = Array.from({ length: orderStore.lastPage }, (_, index) => index + 1);
    }
});

const changePage = (page) => {
    if (page >= 1 && page <= orderStore.lastPage) {
        orderStore.getOrders(page);
    }
};

</script>


<style scoped>
ul,
dl {
    margin-top: 0;
    margin-bottom: 0;
}
</style>