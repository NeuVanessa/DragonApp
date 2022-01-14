import axios from 'axios';

const api = axios.create({ baseURL: 'https://game-of-thrones-apiv2.herokuapp.com' });

export default api;