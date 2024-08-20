import axios from 'axios'
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      email: ''
    },
    token: localStorage.getItem('token') || '',
  },
  mutations: {
    AUTH_SUCCESS(state, { token, user }) {
      state.token = token;
      state.user = user;
    },
    LOGOUT(state) {
      state.token = '';
      state.user = null;
    }
  },
  actions: {
    async login ({ commit }, credentials) {
      try {
        const url = process.env.VUE_APP_API_REQRES_BASE_URL
        const response = await axios.post(`${url}/login`, credentials);
        const token = response.data.token;
        const user = response.data.user;

        localStorage.setItem('token', token);
        localStorage.setItem('emailLogged', credentials.email)
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        commit('AUTH_SUCCESS', { token, user });
      } catch (error) {
        throw new Error('Erro ao realizar login');
      }
    },
    logout ({ commit }) {
      commit('LOGOUT');
      localStorage.removeItem('token');
      delete axios.defaults.headers.common['Authorization'];
    }
  },
  getters: {
    user: state => state.user,
    isAuthenticated: state => !!state.token,
  }
})