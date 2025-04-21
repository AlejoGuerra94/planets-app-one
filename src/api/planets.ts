import axios from 'axios';

const apiClient = axios.create({
  baseURL:'https://api.le-systeme-solaire.net/rest',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default apiClient;