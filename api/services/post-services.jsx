// Importing the pre-configured API instance
import { apiInstance } from "../config/api-config";

// Setting up the endpoint for the API to be the product endpoint in the environment variables
const endpoint = process.env.REACT_APP_POST_ENDPOINT;

/**
 * Fetch all posts from the API
 *
 * @returns {Promise} A promise that resolves to the data of the API response
 * @throws {Error} If there is a problem retrieving the posts
 */
export const getAllPosts = async () => {
	try {
		const response = await apiInstance.get(endpoint);
		return response.data;
	} catch (error) {
		const msg = "There was a problem getting all posts";
		console.log(error);
		throw new Error(msg);
	}
};

/**
 * Fetch a single post from the API
 *
 * @param {String} postId The ID of the post to retrieve
 * @returns {Promise} A promise that resolves to the data of the API response
 * @throws {Error} If there is a problem retrieving the post
 */
export const getSinglePost = async (postId) => {
	try {
		const url = endpoint + postId;
		const response = await apiInstance.get(url);
		return response.data;
	} catch (error) {
		const msg = "There was a problem getting the specified post";
		console.log(error);
		throw new Error(msg);
	}
};

/**
 * Search for posts from the API using a search term
 *
 * @param {String} searchTerm The term to use in searching for posts
 * @returns {Promise} A promise that resolves to the data of the API response
 * @throws {Error} If there is a problem searching for the posts
 */
export const getPostsBySearch = async (searchTerm) => {
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
