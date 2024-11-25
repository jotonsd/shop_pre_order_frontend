import apiClient from "./apiClient";

class UserService {
  async getUsers(page = 1) {
    return await apiClient.get(`/users?page=${page}`);
  }

  async getUser(id) {
    return await apiClient.get(`/users/` + id);
  }

  async storeUser(formData) {
    return await apiClient.post(`/users`, formData);
  }

  async updateUser(formData, id) {
    return await apiClient.put(`/users/` + id, formData);
  }

  async deleteUser(id) {
    return await apiClient.delete(`/users/` + id);
  }
}

export default new UserService();
