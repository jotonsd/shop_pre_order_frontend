import apiClient from "./apiClient";

class AuthService {
  async login(user) {
    return await apiClient.post(`/login`, user);
  }

  async logout() {
    await apiClient.post(`/logout`, {});
  }
}

export default new AuthService();
