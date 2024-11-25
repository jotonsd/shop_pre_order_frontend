import { defineStore } from "pinia";
import router from "../router";
import authService from "@/services/authService";
import { ref } from "vue";

export const useAuthStore = defineStore("AuthStore", {
  state: () => {
    return {
      user: null,
      errors: {},
      users: null,
      IsLoggedIn: localStorage.getItem("token") ? true : false,
      IsAdmin: localStorage.getItem("userRole"),
      isLoading: ref(),
      successMessage: "",
    };
  },
  actions: {
    async login(formData) {
      this.isLoading = ref(true);
      const data = await authService.login(formData);

      if (data.success === false) {
        this.errors = data.errors;
        this.isLoading = ref("");
      } else {
        this.successMessage = "Logged in successfully!";
        localStorage.setItem("token", data.access_token);
        localStorage.setItem("userRole", data.user.role);
        this.user = data.user;
        this.IsLoggedIn = localStorage.getItem("token") ? true : false;
        this.IsAdmin = data.user.role;
        this.isLoading = ref("");
        window.location.reload();
      }
    },

    async logout() {
      const data = await authService.logout();
      this.successMessage = "Logged out successfully!";
      localStorage.clear();
      this.user = null;
      this.errors = {};
      this.IsLoggedIn = false;
      this.IsAdmin = false;
      router.push({ name: "login" });
    },
  },
});
