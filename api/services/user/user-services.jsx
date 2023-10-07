// Importing the pre-configured API instance
import { apiInstance } from "../../config/api-config";

const endpoint = process.env.REACT_APP_USER_ENDPOINT;

/**
 * Fetches a specific user by their ID
 * @param {number} userId The ID of the user
 * @return {Object} The data of the user
 * @throws {Error} If there was a problem getting the specified user
 */
export const getSingleUser = async (userId) => {
	try {
		const url = endpoint + userId;
		const response = await apiInstance.get(url);

		return response.data;
	} catch (error) {
		const msg = "There was a problem getting the specified user";
		console.log(error);
		throw new Error(msg);
	}
};

/**
 * Fetches users according to given term
 * @param {string} searchTerm The term which is used for search in users
 * @return {Object} The data of all users that matches the searchTerm
 * @throws {Error} If there was a problem searching for searchTerm
 */
export const getUsersBySearch = async (searchTerm) => {
	try {
		// construct url with search parameter
		const url = endpoint + `search?q=${searchTerm}`;
		// perform GET request to the constructed url
		const response = await apiInstance.get(url);

		// Return response data
		return response.data;
	} catch (error) {
		// Handle any error that occurred during search
		const msg = "There was a problem searching for " + searchTerm;
		console.log(error);
		throw new Error(msg);
	}
};

/**
 * Fetches the cart products of a specific user
 * @param {number} userId The ID of the user
 * @return {Object} The data of the cart products of the user
 * @throws {Error} If there was a problem getting the cart products for the specified user
 */
export const getUserCartProducts = async (userId) => {
	try {
		// construct url with user Id
		const url = endpoint + `${userId}/carts`;
		// perform GET request to the constructed url
		const response = await apiInstance.get(url);

		// Return response data
		return response.data;
	} catch (error) {
		// Handle any error that occurred during fetching user cart products
		const msg =
			"There was a problem getting the cart products for the specified user";
		console.log(error);
		throw new Error(msg);
	}
};

/**
 * Fetches the posts of a specific user
 * @param {number} userId The ID of the user
 * @return {Object} The data of the posts of the user
 * @throws {Error} If there was a problem getting the posts for the specified user
 */
export const getUserPosts = async (userId) => {
	try {
		// construct url with user Id
		const url = endpoint + `${userId}/posts`;
		// perform GET request to the constructed url
		const response = await apiInstance.get(url);

		// Return response data
		return response.data;
	} catch (error) {
		// Handle any error that occurred during fetching user posts
		const msg =
			"There was a problem getting the posts for the specified user";
		console.log(error);
		throw new Error(msg);
	}
};

/**
 * Registers a new user
 * @param {Object} userData An object containing username and password of the user to be registered
 * @return {Object} The response data
 * @throws {Error} If there was a problem during registration
 */
export const register = async (userData) => {
	try {
		// construct url for registeration
		const url = endpoint + "add";
		// perform POST request to the constructed url
		const response = await apiInstance.post(url, userData, {
			headers: { "Content-Type": "application/json" },
		});

		// Return response data
		return response.data;
	} catch (error) {
		// Handle any error that occurred during registeration
		const msg = "There was a problem in registration";
		console.log(error);
		throw new Error(msg);
	}
};

/**
 * Logs in a user
 * @param {Object} userData An object containing username and password of the user to be logged in
 * @return {Object} The response data
 * @throws {Error} If there was a problem during login
 */
export const login = async (userData) => {
	try {
		// construct url for login
		const url = "auth/login";
		// perform POST request to the constructed url
		const response = await apiInstance.post(url, userData, {
			headers: { "Content-Type": "application/json" },
		});

		// Return response data
		return response.data;
	} catch (error) {
		// Handle any error that occurred during login
		const msg = "There was a problem logging in";
		console.log(error);
		throw new Error(msg);
	}
};
