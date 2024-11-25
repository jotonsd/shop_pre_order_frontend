import apiClient from "./apiClient";

class CategoryService {
  async getCategories(page = 1) {
    return await apiClient.get(`/categories?page=${page}`);
  }

  async getAllCategories() {
    return await apiClient.get(`/categories-all`);
  }

  async getCategory(id) {
    return await apiClient.get(`/categories/` + id);
  }

  async storeCategory(formData) {
    return await apiClient.post(`/categories`, formData);
  }

  async updateCategory(formData, id) {
    return await apiClient.put(`/categories/` + id, formData);
  }

  async deleteCategory(id) {
    return await apiClient.delete(`/categories/` + id);
  }
}

export default new CategoryService();
