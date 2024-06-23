import axios from 'axios';

console.log('VB-DEBUG:  process.env.SERVER_URL:', process.env.SERVER_URL);

const instance = axios.create({
  baseURL: `${process.env.SERVER_URL}/api/v1`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const HttpService = instance;
