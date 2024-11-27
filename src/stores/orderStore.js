import { defineStore } from "pinia";
import router from "../router";
import orderService from "@/services/orderService";
import { ref } from "vue";

export const useOrderStore = defineStore("OrderStore", {
  state: () => {
    return {
      orders: [],
      errors: {},
      order: {},
      currentPage: 1,
      lastPage: 1,
      total: 0,
      successMessage: "",
      errorMessage: "",
      isLoading: ref(),
      userRole: localStorage.getItem("userRole"),
    };
  },
  actions: {
    async getOrders(page = 1) {
      this.isLoading = ref(true);
      const data = await orderService.getOrders(page);

      if (data.success === false) {
        this.errors = data.errors;
        this.isLoading = ref("");
      } else {
        this.orders = data.data;
        this.currentPage = data.current_page;
        this.lastPage = data.last_page;
        this.total = data.total;
        this.isLoading = ref("");
      }
    },

    async searchOrder(formData, page = 1) {
      console.log(formData.query);
      this.isLoading = ref(true);
      const data = await orderService.searchOrder(formData.query, page);

      console.log(data);

      if (data.success === false) {
        this.errors = data.errors;
        this.isLoading = ref("");
      } else {
        this.orders = data.data;
        this.currentPage = data.current_page;
        this.lastPage = data.last_page;
        this.total = data.total;
        this.isLoading = ref("");
      }
    },

    async getOrder(id) {
      this.isLoading = ref(true);
      const data = await orderService.getOrder(id);

      if (data.success === false) {
        this.errors = data.errors;
        this.isLoading = ref("");
      } else {
        this.order = data;
        this.isLoading = ref("");
      }
    },

    async storeOrder(formData) {
      this.isLoading = ref(true);
      const data = await orderService.storeOrder(formData);

      if (data.success === false) {
        this.errors = data.errors;
        this.isLoading = ref("");
      } else {
        this.successMessage = "Order created successfully!";
        this.isLoading = ref("");
        router.push({ name: "welcome" });
      }
    },

    async updateOrder(formData, id) {
      this.isLoading = ref(true);
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        details: formData.details.map((detail) => ({
          id: detail.id, // Detail ID for updates
          product_id: detail.product_id, // Selected product ID
          quantity: detail.quantity, // Quantity
        })),
      };
      console.log(payload);
      const data = await orderService.updateOrder(payload, id);

      if (data.success === false) {
        this.errors = data.errors;
        this.isLoading = ref("");
      } else {
        this.successMessage = "Order updated successfully!";
        this.isLoading = ref("");
        router.push({ name: "orders" });
      }
    },

    async deleteOrder(id) {
      this.isLoading = ref(true);
      const data = await orderService.deleteOrder(id);

      if (data.success === false) {
        this.errors = data.errors;
        this.isLoading = ref("");
      } else {
        this.successMessage = "Order deleted successfully!";
        this.isLoading = ref("");
        this.getOrders();
      }
    },
  },
});
