import apiClient from "./apiClient";

class OrderService {
  async getOrders(page = 1) {
    return await apiClient.get(`/pre-orders?page=${page}`);
  }

  async searchOrder(query, page = 1) {
    return await apiClient.get(`/pre-orders/search/${query}?page=${page}`);
  }

  async getOrder(id) {
    return await apiClient.get(`/pre-orders/` + id);
  }

  async storeOrder(formData) {
    return await apiClient.post(`/pre-orders`, formData);
  }

  async updateOrder(formData, id) {
    return await apiClient.put(`/pre-orders/` + id, formData);
  }

  async deleteOrder(id) {
    return await apiClient.delete(`/pre-orders/` + id);
  }
}

export default new OrderService();
