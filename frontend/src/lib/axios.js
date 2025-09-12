import axios from 'axios';
import {push, pop, replace} from 'svelte-spa-router'

// import { authToken } from './stores/authTokenStore';
// import { get } from 'svelte/store';
// authToken is store in localstorage and also in svelte store
// get from localstorage
// const getToken = () => {
    // return localStorage.getItem('authToken') || null;
// }

// change base url based on environment
// if i use dev env , the url is localhost:1573 or somthing , co change it to http://localhost 
const hostname = window.location.hostname;
let baseURL = '/api'
if (hostname === 'localhost' || hostname === '127.0.0.1') {
    baseURL = 'http://localhost/api';
}

const axiosInstance = axios.create({
  baseURL: baseURL , // 'https://my-live-api.com/api', // 'http://localhost:3000/api'
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
});

axiosInstance.interceptors.request.use( ( config ) => {
  // console.log('api interceptor runs')
  const authToken = localStorage.getItem('authToken');
  // console.log('authToken from localstorage : ' , authToken)
  if (authToken) config.headers.Authorization = `Bearer ${authToken}`;
  return config;
});

// handle response errors globally
axiosInstance.interceptors.response.use(
  response => response,
  error => {
    console.error('API error:', error);
    // if 401 happen , return to login page
    if (error.response && error.response.status === 401) {
        // clear token from localstorage
        localStorage.removeItem('authToken');
        replace('/login');
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
