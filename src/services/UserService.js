import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getUsers() {
    return apiClient.get("/users");
  },
  getUser(id) {
    return apiClient.get("/users/" + id);
  },
  postUser(user) {
    return apiClient.post("/users", user);
  },
  deleteUser(user) {
    return apiClient.delete("/users/" + user.id);
  }
};
