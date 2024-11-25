<template>
  <div class="container">
    <Loader :isLoading="categoryStore.isLoading === true" />
    <!-- Your content goes here -->
    <Alert v-if="categoryStore.successMessage" :type="'success'" :message="categoryStore.successMessage" />
    <div class="card mt-3">
      <div class="card-header d-flex justify-content-between">
        Category List
        <router-link :to="{ name: 'createCategory' }" class="btn btn-sm btn-success">
          Create Category
        </router-link>
      </div>
      <div class="card-body">
        <table class="table table-striped table-bordered">
          <thead class="table-success text-center">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(category, index) in categoryStore.categories" :key="category.id">
              <th scope="row" class="text-center">{{ ++index }}</th>
              <td>{{ category.name }}</td>
              <td>{{ category.description }}</td>
              <td class="text-center">
                <button @click="categoryStore.getCategory(category.id)" class="btn btn-sm btn-info me-1">Edit</button>
                <button @click="categoryStore.deleteCatetory(category.id)" class="btn btn-sm btn-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="card-footer">
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-end">
            <!-- Previous Button -->
            <li class="page-item" :class="{ disabled: categoryStore.currentPage === 1 }">
              <a class="page-link" href="#" @click.prevent="changePage(categoryStore.currentPage - 1)">Previous</a>
            </li>

            <!-- Page Numbers -->
            <li class="page-item" v-for="page in totalPages" :key="page"
              :class="{ active: categoryStore.currentPage === page }">
              <a class="page-link" href="#" @click.prevent="changePage(page)">{{ page }}</a>
            </li>

            <!-- Next Button -->
            <li class="page-item" :class="{ disabled: categoryStore.currentPage === categoryStore.lastPage }">
              <a class="page-link" href="#" @click.prevent="changePage(categoryStore.currentPage + 1)">Next</a>
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
import { useCategoryStore } from '@/stores/categoryStore';
import { onMounted, ref, watchEffect } from 'vue';

const categoryStore = useCategoryStore();
const totalPages = ref([]);

// Load categories on component mount
onMounted(() => {
  categoryStore.getCategories();
});

watchEffect(() => {
  if (categoryStore.lastPage > 1) {
    totalPages.value = Array.from({ length: categoryStore.lastPage }, (_, index) => index + 1);
  }
});

const changePage = (page) => {
  if (page >= 1 && page <= categoryStore.lastPage) {
    categoryStore.getCategories(page);
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
