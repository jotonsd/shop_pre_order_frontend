<script setup>
</script>

<template>
    <div class="container">
        <div class="card mt-3">
            <form>
                <div class="card-header d-flex justify-content-between">
                    Update Order
                    <router-link :to="{ name: 'orders' }" class="btn btn-sm btn-success">
                        Order List</router-link>
                </div>
                <div class="card-body">
                    <h6><b>Contact Information</b></h6>
                    <div class="form-group mb-2">
                        <label for="name" class="form-label">Name</label>
                        <input type="text" class="form-control" id="name" placeholder="Enter your name">
                    </div>
                    <div class="form-group mb-2">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" placeholder="Enter your email">
                    </div>
                    <div class="form-group mb-2">
                        <label for="phone" class="form-label">Phone</label>
                        <input type="text" class="form-control" id="phone" placeholder="Enter your phone number">
                    </div>

                    <h6><b>Order Details</b></h6>
                    <div class="row">
                        <div class="col-md-3">
                            <div class="form-group mb-2">
                                <select name="category_id" id="category_id" class="form-select">
                                    <option>Select Category</option>
                                    <option value="1">Apple</option>
                                    <option value="2">Xiomi</option>
                                    <option value="3">Samsung</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group mb-2">
                                <select name="product_id" id="product_id" class="form-select">
                                    <option>Select Product</option>
                                    <option value="1">Apple 14</option>
                                    <option value="2">Xiomi Mi A3</option>
                                    <option value="3">Samsung S23</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group mb-2">
                                <input type="number" class="form-control" id="price" placeholder="Quantity">
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="form-group mb-2">
                                <input type="text" class="form-control" id="price" placeholder="0.0" readonly>
                            </div>
                        </div>
                        <div class="col-md-1">
                            <div class="form-group mb-2">
                                <button class="btn btn-danger">X</button>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-3">
                            <div class="form-group mb-2">
                                <select name="category_id" id="category_id" class="form-select">
                                    <option>Select Category</option>
                                    <option value="1">Apple</option>
                                    <option value="2">Xiomi</option>
                                    <option value="3">Samsung</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group mb-2">
                                <select name="product_id" id="product_id" class="form-select">
                                    <option>Select Product</option>
                                    <option value="1">Apple 14</option>
                                    <option value="2">Xiomi Mi A3</option>
                                    <option value="3">Samsung S23</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group mb-2">
                                <input type="number" class="form-control" id="price" placeholder="Quantity">
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="form-group mb-2">
                                <input type="text" class="form-control" id="price" placeholder="0.0" readonly>
                            </div>
                        </div>
                        <div class="col-md-1">
                            <div class="form-group mb-2">
                                <button class="btn btn-danger">X</button>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-3">
                            <div class="form-group mb-2">
                                <select name="category_id" id="category_id" class="form-select">
                                    <option>Select Category</option>
                                    <option value="1">Apple</option>
                                    <option value="2">Xiomi</option>
                                    <option value="3">Samsung</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group mb-2">
                                <select name="product_id" id="product_id" class="form-select">
                                    <option>Select Product</option>
                                    <option value="1">Apple 14</option>
                                    <option value="2">Xiomi Mi A3</option>
                                    <option value="3">Samsung S23</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group mb-2">
                                <input type="number" class="form-control" id="price" placeholder="Quantity">
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="form-group mb-2">
                                <input type="text" class="form-control" id="price" placeholder="0.0" readonly>
                            </div>
                        </div>
                        <div class="col-md-1">
                            <div class="form-group mb-2">
                                <button class="btn btn-danger">X</button>
                            </div>
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