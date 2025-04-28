
import axios from 'axios';

// Create axios instance with base URL
const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor for authentication
api.interceptors.request.use(
  (config) => {
    // Get the token from localStorage
    const token = localStorage.getItem('authToken');
    
    // If token exists, add it to the headers
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor for error handling
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle authentication errors (401)
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('authToken');
      // Redirect to login page or handle as needed
      window.location.href = '/login';
    }
    
    return Promise.reject(error);
  }
);

// API client methods
const apiClient = {
  // Auth endpoints
  auth: {
    login: (email: string, password: string) => 
      api.post('/auth/login', { email, password }),
    signup: (userData: any) => 
      api.post('/auth/signup', userData),
    logout: () => 
      api.post('/auth/logout'),
  },
  
  // Resources endpoints
  resources: {
    getAll: (params?: any) => 
      api.get('/resources/getResources', { params }),
    getById: (id: string) => 
      api.get(`/resources/${id}`),
    create: (resourceData: any) => 
      api.post('/resources/upload', resourceData),
    rate: (id: string, rating: number) => 
      api.post('/resources/rateResource', { id, rating }),
    addComment: (id: string, content: string) => 
      api.post('/resources/comment', { id, content }),
  },
  
  // User endpoints
  users: {
    getProfile: () => 
      api.get('/users/me'),
    updateProfile: (profileData: any) => 
      api.put('/users/me', profileData),
  },
};

export default apiClient;
