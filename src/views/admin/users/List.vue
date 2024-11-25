<template>
    <div class="container">
        <Loader :isLoading="userStore.isLoading === true" />
        <!-- Your content goes here -->
        <Alert v-if="userStore.successMessage" :type="'success'" :message="userStore.successMessage" />
        <div class="card mt-3">
            <div class="card-header d-flex justify-content-between">
                User List
                <router-link :to="{ name: 'createUser' }" class="btn btn-sm btn-success">Create
                    User</router-link>
            </div>
            <div class="card-body">
                <table class="table table-striped table-bordered">
                    <thead class="table-success text-center">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Role</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(user, index) in userStore.users" :key="user.id">
                            <th scope="row" class="text-center">{{ ++index }}</th>
                            <td>{{ user.role }}</td>
                            <td>{{ user.name }}</td>
                            <td>{{ user.email }}</td>
                            <td class="text-center">
                                <button @click="userStore.getUser(user.id)"
                                    class="btn btn-sm btn-info me-1">Edit</button>
                                <button @click="userStore.deleteUser(user.id)"
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
                        <li class="page-item" :class="{ disabled: userStore.currentPage === 1 }">
                            <a class="page-link" href="#"
                                @click.prevent="changePage(userStore.currentPage - 1)">Previous</a>
                        </li>

                        <!-- Page Numbers -->
                        <li class="page-item" v-for="page in totalPages" :key="page"
                            :class="{ active: userStore.currentPage === page }">
                            <a class="page-link" href="#" @click.prevent="changePage(page)">{{ page }}</a>
                        </li>

                        <!-- Next Button -->
                        <li class="page-item" :class="{ disabled: userStore.currentPage === userStore.lastPage }">
                            <a class="page-link" href="#"
                                @click.prevent="changePage(userStore.currentPage + 1)">Next</a>
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
import { useUserStore } from '@/stores/userStore';
import { onMounted, ref, watchEffect } from 'vue';

const userStore = useUserStore();
const totalPages = ref([]);

// Load users on component mount
onMounted(() => {
    userStore.getUsers();
});

watchEffect(() => {
  if (userStore.lastPage > 1) {
    totalPages.value = Array.from({ length: userStore.lastPage }, (_, index) => index + 1);
  }
});

const changePage = (page) => {
  if (page >= 1 && page <= userStore.lastPage) {
    userStore.getUsers(page);
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