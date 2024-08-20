import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.VUE_APP_API_TOKEN}`
  },
});

export default {
  getVideos() {
    return apiClient.get('/videos')
  },
  getVideoDetail(id) {
    return apiClient.get(`/videos/${id}`)
  },
};