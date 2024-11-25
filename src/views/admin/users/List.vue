<script setup>
</script>

<template>
    <div class="container">
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
                        <tr>
                            <th scope="row" class="text-center">1</th>
                            <td>Admin</td>
                            <td>Joton Sutradhar</td>
                            <td>jotonsutradharjoy@gmail.com</td>
                            <td class="text-center">
                                <router-link :to="{ name: 'updateUser', params: { id: 1 } }"
                                    class="btn btn-sm btn-info me-1">Edit</router-link>
                                <router-link to="#" class="btn btn-sm btn-danger">Delete</router-link>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" class="text-center">2</th>
                            <td>Xiomi</td>
                            <td>Xiomi Mi A3</td>
                            <td>This is text Description</td>
                            <td class="text-center">
                                <router-link :to="{ name: 'updateUser', params: { id: 2 } }"
                                    class="btn btn-sm btn-info me-1">Edit</router-link>
                                <router-link to="#" class="btn btn-sm btn-danger">Delete</router-link>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" class="text-center">3</th>
                            <td>Samsung</td>
                            <td>Samsung S23</td>
                            <td>This is text Description</td>
                            <td class="text-center">
                                <router-link :to="{ name: 'updateUser', params: { id: 3 } }"
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
                        <li class="page-item disabled">
                            <a class="page-link">Previous</a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                            <a class="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<style scoped>
ul,
dl {
    margin-top: 0;
    margin-bottom: 0;
}
</style>