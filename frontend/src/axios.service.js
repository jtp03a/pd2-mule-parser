import axios from 'axios';

const axiosService = axios.create({
  baseURL: '/'
});

export { axiosService };