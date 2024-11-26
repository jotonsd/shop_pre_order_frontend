import apiClient from "./apiClient";

class ProductService {
  async getProducts(page = 1) {
    return await apiClient.get(`/products?page=${page}`);
  }

  async getAllProducts(page = 1) {
    return await apiClient.get(`/products-all`);
  }

  async getProduct(id) {
    return await apiClient.get(`/products/` + id);
  }

  async storeProduct(formData) {
    return await apiClient.post(`/products`, formData);
  }

  async updateProduct(formData, id) {
    return await apiClient.put(`/products/` + id, formData);
  }

  async deleteProduct(id) {
    return await apiClient.delete(`/products/` + id);
  }
}

export default new ProductService();
