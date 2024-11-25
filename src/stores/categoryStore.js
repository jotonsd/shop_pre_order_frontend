import { defineStore } from "pinia";
import router from "../router";
import categoryService from "@/services/categoryService";
import { ref } from "vue";

export const useCategoryStore = defineStore("CategoryStore", {
  state: () => {
    return {
      categories: [],
      errors: {},
      category: {},
      currentPage: 1,
      lastPage: 1,
      total: 0,
      successMessage: "",
      errorMessage: "",
      isLoading: ref(),
    };
  },
  actions: {
    async getCategories(page = 1) {
      this.isLoading = ref(true);
      const data = await categoryService.getCategories(page);

      if (data.success === false) {
        this.errors = data.errors;
        this.isLoading = ref("");
      } else {
        this.categories = data.data;
        this.currentPage = data.current_page;
        this.lastPage = data.last_page;
        this.total = data.total;
        this.isLoading = ref("");
      }
    },

    async getCategory(id) {
      this.isLoading = ref(true);
      const data = await categoryService.getCategory(id);

      if (data.success === false) {
        this.errors = data.errors;
        this.isLoading = ref("");
      } else {
        this.category = data;
        this.isLoading = ref("");
        router.push({ name: "updateCategory", params: { id: id } });
      }
    },

    async storeCategory(formData) {
      this.isLoading = ref(true);
      const data = await categoryService.storeCategory(formData);

      if (data.success === false) {
        this.errors = data.errors;
        this.isLoading = ref("");
      } else {
        this.successMessage = "Category created successfully!";
        this.isLoading = ref("");
        router.push({ name: "categories" });
      }
    },

    async updateCategory(formData, id) {
      this.isLoading = ref(true);
      const data = await categoryService.updateCategory(formData, id);

      if (data.success === false) {
        this.errors = data.errors;
        this.isLoading = ref("");
      } else {
        this.successMessage = "Category updated successfully!";
        this.isLoading = ref("");
        router.push({ name: "categories" });
      }
    },

    async deleteCategory(id) {
      this.isLoading = ref(true);
      const data = await categoryService.deleteCategory(id);

      if (data.success === false) {
        this.errors = data.errors;
        this.isLoading = ref("");
      } else {
        this.successMessage = "Category deleted successfully!";
        this.isLoading = ref("");
        this.getCategories();
      }
    },
  },
});
