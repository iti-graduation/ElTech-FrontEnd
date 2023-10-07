import axios from 'axios';


// Create an Axios instance with a timeout and base URL
const apiInstance = axios.create({
   // baseURL: API_BASE_URL,
   // timeout: 10000, // in milliseconds
});


// Set up request interceptors to attach to every request  
apiInstance.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;

}, function (error) {
    // Handle request error here
    return Promise.reject(error);
});


// Set up response interceptors to handle API responses and errors globally
apiInstance.interceptors.response.use(function (response) {
    // Handle successful response here (e.g., transform data)
    return response;

}, function (error) {
    // Handle API errors here (e.g., log errors, transform error response)
    return Promise.reject(error);
});


// Export the configured Axios instance for use throughout the application  
export default apiInstance;