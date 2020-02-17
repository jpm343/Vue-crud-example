import Vue from "vue";
import Vuex from "vuex";
import UserService from "@/services/UserService.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    usersTotal: 0,
    user: {}
  },
  mutations: {
    SET_USERS(state, users) {
      state.users = users;
    },
    SET_USER(state, user) {
      state.user = user;
    },
    SET_USERS_TOTAL(state, usersTotal) {
      state.usersTotal = usersTotal;
    },
    ADD_NEW_USER(state, user) {
      state.usersTotal.push(user);
    },
    DELETE_USER(state, user) {
      let index = state.users.indexOf(user);
      if (index > -1) {
        state.users.splice(index, 1);
      }
    },
    UPDATE_USER(state, user) {
      state.users[user.id] = user;
    }
  },
  actions: {
    fetchUsers({ commit }) {
      UserService.getUsers()
        .then(response => {
          commit("SET_USERS", response.data);
          commit("SET_USERS_TOTAL", response.headers["x-total-count"]);
        })
        .catch(error => {
          console.log("There was an error fetching users: " + error.message);
        });
    },
    fetchUser({ commit }, id) {
      UserService.getUser(id)
        .then(response => {
          commit("SET_USER", response.data);
        })
        .catch(error => {
          console.log("There was an error fetching user: " + error.message);
        });
    },
    createUser({ commit }, user) {
      UserService.postUser(user)
        .then(() => {
          commit("ADD_NEW_USER", user);
        })
        .catch(error => {
          console.log("There was a problem creating user: " + error.message);
        });
    },
    deleteUser({ commit }, user) {
      UserService.deleteUser(user).then(() => {
        commit("DELETE_USER", user);
      });
    },
    updateUser({ commit }, user) {
      console.log(user);
      UserService.updateUser(user)
        .then(() => {
          commit("UPDATE_USER", user);
        })
        .catch(error => {
          console.log("there was an error updating user: " + error.message);
        });
    }
  },
  modules: {}
});
