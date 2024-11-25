import { defineStore } from "pinia";
import router from "../router";
import userService from "@/services/userService";
import { ref } from "vue";

export const useUserStore = defineStore("UserStore", {
  state: () => {
    return {
      users: [],
      errors: {},
      user: {},
      currentPage: 1,
      lastPage: 1,
      total: 0,
      successMessage: "",
      errorMessage: "",
      isLoading: ref(),
    };
  },
  actions: {
    async getUsers(page = 1) {
      this.isLoading = ref(true);
      const data = await userService.getUsers(page);

      if (data.success === false) {
        this.errors = data.errors;
        this.isLoading = ref("");
      } else {
        this.users = data.data;
        this.currentPage = data.current_page;
        this.lastPage = data.last_page;
        this.total = data.total;
        this.isLoading = ref("");
      }
    },

    async getUser(id) {
      this.isLoading = ref(true);
      const data = await userService.getUser(id);

      if (data.success === false) {
        this.errors = data.errors;
        this.isLoading = ref("");
      } else {
        this.user = data;
        this.isLoading = ref("");
        router.push({ name: "updateUser", params: { id: id } });
      }
    },

    async storeUser(formData) {
      this.isLoading = ref(true);
      const data = await userService.storeUser(formData);

      if (data.success === false) {
        this.errors = data.errors;
        this.isLoading = ref("");
      } else {
        this.successMessage = "User created successfully!";
        this.isLoading = ref("");
        router.push({ name: "users" });
      }
    },

    async updateUser(formData, id) {
      this.isLoading = ref(true);
      const data = await userService.updateUser(formData, id);

      if (data.success === false) {
        this.errors = data.errors;
        this.isLoading = ref("");
      } else {
        this.successMessage = "User updated successfully!";
        this.isLoading = ref("");
        router.push({ name: "users" });
      }
    },

    async deleteUser(id) {
      this.isLoading = ref(true);
      const data = await userService.deleteUser(id);

      if (data.success === false) {
        this.errors = data.errors;
        this.isLoading = ref("");
      } else {
        this.successMessage = "User deleted successfully!";
        this.isLoading = ref("");
        this.getUsers();
      }
    },
  },
});
