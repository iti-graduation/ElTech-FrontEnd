// Importing the pre-configured API instance and its associated error handling function
import { userApiInstance, apiErrorHandler } from "../config/api-config";

/**
 * Fetches all users
 * @return {Object} The data of all users
 * @throws {Error} If there was a problem getting all users
 */
export const getAllUsers = async () => {
	try {
		const response = userApiInstance.get();

		return response.data;
	} catch (error) {
		const msg = "There was a problem getting all users";
		apiErrorHandler(error, msg);
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
		const response = userApiInstance.get(userId);

		return response.data;
	} catch (error) {
		const msg = "There was a problem getting the specified user";
		apiErrorHandler(error, msg);
	}
};
