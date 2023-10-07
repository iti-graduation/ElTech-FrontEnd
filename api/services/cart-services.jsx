// Importing the pre-configured API instance
import { apiInstance } from "../config/api-config";

// Setting up the endpoint for the API to be the product endpoint in the environment variables
const endpoint = process.env.REACT_APP_CART_ENDPOINT;

/**
 * Retrieves all carts from the API's endpoint
 * @async
 * @function getAllCarts
 * @throws {Error} When the API call fails
 * @returns {Promise<object>} The data from the API's response
 */

export const getAllCarts = async () => {
	try {
		const response = await apiInstance.get(endpoint);

		return response.data;
	} catch (error) {
		const msg = "There was a problem getting all carts";
		console.log(error);
		throw new Error(msg);
	}
};

/**
 * Retrieves a specific cart from the API's endpoint using its ID
 * @async
 * @function getSingleCart
 * @param {string} cartId - The ID of the specific cart to retrieve
 * @throws {Error} When the API call fails
 * @returns {Promise<object>} The data from the API's response
 */

export const getSingleCart = async (cartId) => {
	try {
		const url = endpoint + cartId;
		const response = await apiInstance.get(url);

		return response.data;
	} catch (error) {
		const msg = "There was a problem getting the specified cart";
		console.log(error);
		throw new Error(msg);
	}
};

/**
 * Retrieves all carts associated with a specific user from the API's endpoint using their ID
 * @async
 * @function getUserCarts
 * @param {string} userId - The ID of the specific user for which to retrieve carts
 * @throws {Error} When the API call fails
 * @returns {Promise<object>} The data from the API's response
 */

export const getUserCarts = async (userId) => {
	try {
		const url = endpoint + `user/${userId}`;
		const response = await apiInstance.get(url);

		return response.data;
	} catch (error) {
		const msg =
			"There was a problem getting the carts of the specified user";
		console.log(error);
		throw new Error(msg);
	}
};
