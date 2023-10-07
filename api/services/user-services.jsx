// Importing the pre-configured API instance
import { apiInstance } from "../config/api-config";

const endpoint = process.env.REACT_APP_USER_ENDPOINT;

/**
 * Fetches all users
 * @return {Object} The data of all users
 * @throws {Error} If there was a problem getting all users
 */
export const getAllUsers = async () => {
	try {
		const response = await apiInstance.get(endpoint);

		return response.data;
	} catch (error) {
		const msg = "There was a problem getting all users";
		console.log(error);
		throw new Error(msg);
	}
};

/**
 * Fetches a specific user by their ID
 * @param {number} userId The ID of the user
 * @return {Object} The data of the user
 * @throws {Error} If there was a problem getting the specified user
 */
export const getSingleUser = async (userId) => {
	try {
		const url = endpoint + userId;
		const response = apiInstance.get(userId);

		return response.data;
	} catch (error) {
		const msg = "There was a problem getting the specified user";
		console.log(error);
		throw new Error(msg);
	}
};

export const getUsersBySearch = async (searchTerm) => {
	try {
		const url = endpoint + `search?q=${searchTerm}`;
		const response = await apiInstance.get(url);

		return response.data;
	} catch (error) {
		const msg = "There was a problem searching for " + searchTerm;
		console.log(error);
		throw new Error(msg);
	}
};

export const getUserCarts = async (userId) => {
	try {
		const url = endpoint + `${userId}/carts`;
		const response = await apiInstance.get(url);

		return response.data;
	} catch (error) {
		const msg =
			"There was a problem getting the carts for the specified user";
		console.log(error);
		throw new Error(msg);
	}
};

export const getUserPosts = async (userId) => {
	try {
		const url = endpoint + `${userId}/posts`;
		const response = await apiInstance.get(url);

		return response.data;
	} catch (error) {
		const msg =
			"There was a problem getting the posts for the specified user";
		console.log(error);
		throw new Error(msg);
	}
};
