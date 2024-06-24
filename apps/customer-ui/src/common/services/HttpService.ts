import axios from 'axios';

const instance = axios.create({
  // baseURL: `${process.env.SERVER_URL}/api/v1`,
  baseURL: 'http://localhost:3020/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const HttpService = {
  get: instance.get.bind(instance),
  post: instance.post.bind(instance),
  put: instance.put.bind(instance),
  delete: instance.delete.bind(instance),
  setAuthToken: (token: string) => {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  },
  removeAuthToken: () => {
    delete instance.defaults.headers.common['Authorization'];
  },
};
