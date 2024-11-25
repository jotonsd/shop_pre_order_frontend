<script setup>
</script>

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
                                    Joton Sutradhar
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4">
                                    Email:
                                </div>
                                <div class="col-md-8">
                                    jotonsutradharjoy@gmail.com
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4">
                                    Phone:
                                </div>
                                <div class="col-md-8">
                                    01518604807
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
                                <tr>
                                    <th scope="row" class="text-center">1</th>
                                    <td>Apple</td>
                                    <td>Apple 14 Pro</td>
                                    <td>1000</td>
                                    <td>3</td>
                                    <td>3000</td>
                                </tr>
                                <tr>
                                    <th scope="row" class="text-center">2</th>
                                    <td>Samsung</td>
                                    <td>Samsung S23</td>
                                    <td>800</td>
                                    <td>4</td>
                                    <td>3200</td>
                                </tr>
                                <tr>
                                    <th scope="row" class="text-center">3</th>
                                    <td>Xiomi</td>
                                    <td>Xiomi Mi A3</td>
                                    <td>500</td>
                                    <td>1</td>
                                    <td>500</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>