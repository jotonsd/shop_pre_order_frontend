<script setup>
</script>

<template>
    <div class="container">
        <div class="card mt-3">
            <form>
                <div class="card-header d-flex justify-content-between">
                    Update User
                    <router-link :to="{ name: 'users' }" class="btn btn-sm btn-success">
                        
                        User List</router-link>
                </div>
                <div class="card-body">
                    <div class="form-group mb-2">
                        <label for="category_id" class="form-label">User Role</label>
                        <select name="category_id" id="category_id" class="form-select">
                            <option>Select Role</option>
                            <option value="1">Admin</option>
                            <option value="2">User</option>
                        </select>
                    </div>
                    <div class="form-group mb-2">
                        <label for="name" class="form-label">Name</label>
                        <input type="text" class="form-control" id="name" placeholder="Enter user name">
                    </div>
                    <div class="form-group mb-2">
                        <label for="email" class="form-label">Email</label>
                        <input type="text" class="form-control" id="email" placeholder="Enter user email">
                    </div>
                    <div class="form-group mb-2">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" placeholder="Enter user password">
                    </div>
                    <div class="form-group mb-2">
                        <label for="password_confirmation" class="form-label">Confirm Password</label>
                        <input type="password" class="form-control" id="password_confirmation"
                            placeholder="Re-type password">
                    </div>
                </div>
                <div class="card-footer d-flex justify-content-end">
                    <button type="submit" class="btn btn-primary me-2">Update</button>
                    <router-link :to="{ name: 'users' }" class="btn btn-danger">Cancel</router-link>
                </div>
            </form>
        </div>
    </div>
</template>