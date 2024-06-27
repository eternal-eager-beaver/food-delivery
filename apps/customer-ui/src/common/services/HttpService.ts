import axios from 'axios';

const instance = axios.create({
  // baseURL: `${process.env.SERVER_URL}/api/v1`,
  baseURL: 'http://localhost:3020/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const HttpService = {
  get: instance.get,
  post: instance.post,
  put: instance.put,
  delete: instance.delete,
  setAuthToken: (token: string) => {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  },
  removeAuthToken: () => {
    delete instance.defaults.headers.common['Authorization'];
  },
};
