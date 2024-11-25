const API_URL = "/api";

const apiToken = localStorage.getItem("token");

console.log(apiToken);

class ApiClient {
  constructor() {
    this.baseURL = API_URL;
    this.defaultHeaders = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    if (apiToken !== "undefined") {
      this.setToken(apiToken);
    }
  }

  /**
   * Set the Authorization Bearer Token
   * @param {string} token - The Bearer token to include in requests
   */
  setToken(token) {
    if (token) {
      this.defaultHeaders.Authorization = `Bearer ${token}`;
    } else {
      delete this.defaultHeaders.Authorization; // Remove token if null
    }
  }

  /**
   * Perform an API request
   * @param {string} endpoint - The API endpoint (relative to baseURL)
   * @param {string} method - The HTTP method (GET, POST, PUT, DELETE)
   * @param {object} [data] - The payload for POST/PUT requests
   * @param {object} [customHeaders] - Additional headers to merge with defaults
   * @returns {Promise<any>} - The API response in JSON format
   */
  async request(endpoint, method = "GET", data = null, customHeaders = {}) {
    const config = {
      method,
      headers: {
        ...this.defaultHeaders,
        ...customHeaders,
      },
    };

    // Add the body for POST, PUT, and DELETE requests
    if (["POST", "PUT", "DELETE"].includes(method.toUpperCase()) && data) {
      config.body = JSON.stringify(data);
    }
    const response = await fetch(`${this.baseURL}${endpoint}`, config);

    return await response.json();
  }

  /**
   * Shortcut for GET requests
   */
  get(endpoint, customHeaders = {}) {
    return this.request(endpoint, "GET", null, customHeaders);
  }

  /**
   * Shortcut for POST requests
   */
  post(endpoint, data, customHeaders = {}) {
    return this.request(endpoint, "POST", data, customHeaders);
  }

  /**
   * Shortcut for PUT requests
   */
  put(endpoint, data, customHeaders = {}) {
    return this.request(endpoint, "PUT", data, customHeaders);
  }

  /**
   * Shortcut for DELETE requests
   */
  delete(endpoint, data = null, customHeaders = {}) {
    return this.request(endpoint, "DELETE", data, customHeaders);
  }
}

// Create and export an instance of the client
const apiClient = new ApiClient();
export default apiClient;
