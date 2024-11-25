<template>
    <div class="container">
        <Loader :isLoading="productStore.isLoading === true" />
        <!-- Your content goes here -->
        <Alert v-if="productStore.successMessage" :type="'success'" :message="productStore.successMessage" />
        <div class="card mt-3">
            <div class="card-header d-flex justify-content-between">
                Product List
                <router-link :to="{ name: 'createProduct' }" class="btn btn-sm btn-success">Create
                    Product</router-link>
            </div>
            <div class="card-body">
                <table class="table table-striped table-bordered">
                    <thead class="table-success text-center">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Category</th>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(product, index) in productStore.products" :key="product.id">
                            <th scope="row" class="text-center">{{ ++index }}</th>
                            <td>{{ product.category.name }}</td>
                            <td>{{ product.name }}</td>
                            <td>{{ product.description }}</td>
                            <td>{{ product.price }}</td>
                            <td class="text-center">
                                <button @click="productStore.getProduct(product.id)"
                                    class="btn btn-sm btn-info me-1">Edit</button>
                                <button @click="productStore.deleteProduct(product.id)"
                                    class="btn btn-sm btn-danger">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="card-footer">
                <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-end">
                        <!-- Previous Button -->
                        <li class="page-item" :class="{ disabled: productStore.currentPage === 1 }">
                            <a class="page-link" href="#"
                                @click.prevent="changePage(productStore.currentPage - 1)">Previous</a>
                        </li>

                        <!-- Page Numbers -->
                        <li class="page-item" v-for="page in totalPages" :key="page"
                            :class="{ active: productStore.currentPage === page }">
                            <a class="page-link" href="#" @click.prevent="changePage(page)">{{ page }}</a>
                        </li>

                        <!-- Next Button -->
                        <li class="page-item" :class="{ disabled: productStore.currentPage === productStore.lastPage }">
                            <a class="page-link" href="#"
                                @click.prevent="changePage(productStore.currentPage + 1)">Next</a>
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
import { useProductStore } from '@/stores/productStore';
import { onMounted, ref, watchEffect } from 'vue';

const productStore = useProductStore();
const totalPages = ref([]);

// Load products on component mount
onMounted(() => {
    productStore.getProducts();
});

watchEffect(() => {
  if (productStore.lastPage > 1) {
    totalPages.value = Array.from({ length: productStore.lastPage }, (_, index) => index + 1);
  }
});

const changePage = (page) => {
  if (page >= 1 && page <= productStore.lastPage) {
    productStore.getProducts(page);
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