<script setup>
</script>

<template>
    <div class="container">
        <div class="card mt-3">
            <form>
                <div class="card-header d-flex justify-content-between">
                    Create Product
                    <router-link :to="{ name: 'products' }" class="btn btn-sm btn-success">
                        Product List</router-link>
                </div>
                <div class="card-body">

                    <div class="form-group mb-2">
                        <label for="category_id" class="form-label">Category</label>
                        <select name="category_id" id="category_id" class="form-select">
                            <option>Select Category</option>
                            <option value="1">Apple</option>
                            <option value="2">Xiomi</option>
                            <option value="3">Samsung</option>
                        </select>
                    </div>
                    <div class="form-group mb-2">
                        <label for="name" class="form-label">Name</label>
                        <input type="text" class="form-control" id="name" placeholder="Enter product name">
                    </div>
                    <div class="form-group mb-2">
                        <label for="description" class="form-label">Description</label>
                        <input type="text" class="form-control" id="description"
                            placeholder="Enter product description">
                    </div>
                    <div class="form-group mb-2">
                        <label for="name" class="form-label">Price</label>
                        <input type="number" class="form-control" id="name" placeholder="Enter product price">
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