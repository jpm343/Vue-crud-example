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
    }
  },
  actions: {
    fetchUsers({ commit }) {
      console.log("fetching");
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
    }
  },
  modules: {}
});
