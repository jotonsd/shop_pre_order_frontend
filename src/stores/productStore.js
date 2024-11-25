import { defineStore } from "pinia";
import router from "../router";
import productService from "@/services/productService";
import { ref } from "vue";

export const useProductStore = defineStore("ProductStore", {
  state: () => {
    return {
      products: [],
      errors: {},
      product: {},
      currentPage: 1,
      lastPage: 1,
      total: 0,
      successMessage: "",
      errorMessage: "",
      isLoading: ref(),
    };
  },
  actions: {
    async getProducts(page = 1) {
      this.isLoading = ref(true);
      const data = await productService.getProducts(page);

      if (data.success === false) {
        this.errors = data.errors;
        this.isLoading = ref("");
      } else {
        this.products = data.data;
        this.currentPage = data.current_page;
        this.lastPage = data.last_page;
        this.total = data.total;
        this.isLoading = ref("");
      }
    },

    async getProduct(id) {
      this.isLoading = ref(true);
      const data = await productService.getProduct(id);

      if (data.success === false) {
        this.errors = data.errors;
        this.isLoading = ref("");
      } else {
        this.product = data;
        this.isLoading = ref("");
        router.push({ name: "updateProduct", params: { id: id } });
      }
    },

    async storeProduct(formData) {
      this.isLoading = ref(true);
      const data = await productService.storeProduct(formData);

      if (data.success === false) {
        this.errors = data.errors;
        this.isLoading = ref("");
      } else {
        this.successMessage = "Product created successfully!";
        this.isLoading = ref("");
        router.push({ name: "products" });
      }
    },

    async updateProduct(formData, id) {
      this.isLoading = ref(true);
      const data = await productService.updateProduct(formData, id);

      if (data.success === false) {
        this.errors = data.errors;
        this.isLoading = ref("");
      } else {
        this.successMessage = "Product updated successfully!";
        this.isLoading = ref("");
        router.push({ name: "products" });
      }
    },

    async deleteProduct(id) {
      this.isLoading = ref(true);
      const data = await productService.deleteProduct(id);

      if (data.success === false) {
        this.errors = data.errors;
        this.isLoading = ref("");
      } else {
        this.successMessage = "Product deleted successfully!";
        this.isLoading = ref("");
        this.getProducts();
      }
    },
  },
});
