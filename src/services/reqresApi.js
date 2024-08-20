import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_API_REQRES_BASE_URL,
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  createUser (params) {
    return apiClient.post('/register', params)
  },
};