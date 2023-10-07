// Importing axios for HTTP requests
import axios from "axios";

/**
 * Function to handle API error
 *
 * @param {object} error - The error object from API
 * @param {string} msg - An additional message
 */
export const apiErrorHandler = (error, msg) => {
	console.log("Error:", msg);
	console.log(error);
};

// Creating a basic axios instance for API calls
export const apiInstance = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
	timeout: 10000,
});

// Creating an axios instance specifically for user related API calls
export const userApiInstance = axios.create({
	baseURL: process.env.REACT_APP_USER_API_URL,
	timeout: 10000,
});

// Adding a request interceptor to apiInstance to handle JSON response
apiInstance.interceptors.request.use(
	(config) => {
		config.headers.accept = "application/json";

		return config;
	},
	// Returning the promise rejection to let following catch blocks handle it
	(error) => Promise.reject(error)
);

// Adding a response interceptor to apiInstance
apiInstance.interceptors.response.use(
	// Resolver function handles success
	(response) => response,
	// Rejecting the promise in cases of HTTP error codes
	(error) => Promise.reject(error)
);

// Adding a request interceptor to userApiInstance to handle JSON response
userApiInstance.interceptors.request.use(
	(config) => {
		config.headers.accept = "application/json";

		return config;
	},
	// Returning the promise rejection to let following catch blocks handle it
	(error) => Promise.reject(error)
);

// Adding a response interceptor to userApiInstance
userApiInstance.interceptors.response.use(
	// Resolver function handles success
	(response) => response,
	// Rejecting the promise in cases of HTTP error codes
	(error) => Promise.reject(error)
);
