import apiClient from "./apiClient";

class CategoryService {
  async getCategories(page = 1) {
    try {
      return await apiClient.get(`/categories?page=${page}`);
    } catch (error) {
      return error;
    }
  }

  async getCategory(id) {
    try {
      return await apiClient.get(`/categories/` + id);
    } catch (error) {
      return error;
    }
  }

  async storeCategory(formData) {
    try {
      return await apiClient.post(`/categories`, formData);
    } catch (error) {
      return error;
    }
  }

  async updateCategory(formData, id) {
    try {
      return await apiClient.put(`/categories/` + id, formData);
    } catch (error) {
      return error;
    }
  }
}

export default new CategoryService();
