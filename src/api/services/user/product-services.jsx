// Importing the pre-configured API instance
import { apiInstance } from "../../config/api-config";

// Setting up the endpoint for the API to be the product endpoint in the environment variables
const productEndpoint = process.env.REACT_APP_PRODUCT_ENDPOINT + "products/";
const categoryEndpoint = process.env.REACT_APP_PRODUCT_ENDPOINT + "categories/";

export const getFeaturedProducts = async () => {
	try {
		const response = await apiInstance.get(productEndpoint, {
			params: {
				is_featured: "1",
			},
		});
		return response.data;
	} catch (error) {
		const msg = "There was a problem getting featured products.";
		console.log(error);
		return error;
		throw new Error(msg);
	}
};

/**
 * Function to get all products from the API.
 * It uses predefined api instance and endpoint.
 *
 * @async
 * @function
 * @return {Promise<object>} Promise object represents the products data.
 * @throws Will throw an error if there is a problem completing the request.
 */
export const getAllProducts = async () => {
	try {
		const response = await apiInstance.get(productEndpoint);
		return response.data;
	} catch (error) {
		const msg = "There was a problem getting all products.";
		console.log(error);
		throw new Error(msg);
	}
};

/**
 * Function to get a single product from the API using its id.
 * It uses predefined api instance and specific product endpoint.
 *
 * @async
 * @function
 * @param {string} productId - The id of the product.
 * @return {Promise<object>} Promise object represents the product data.
 * @throws Will throw an error if there is a problem completing the request.
 */
export const getSingleProduct = async (productId) => {
	try {
		const url = productEndpoint + productId;
		const response = await apiInstance.get(url);

		return response.data;
	} catch (error) {
		const msg = "There was a problem getting the specified product";
		console.log(error);
		throw new Error(msg);
	}
};

/**
 * Function to get all products by a search term from the API.
 * It uses predefined api instance and specific product search endpoint.
 *
 * @async
 * @function
 * @param {string} searchTerm - The search term used to filter products.
 * @return {Promise<object>} Promise object represents the product data based on search term.
 * @throws Will throw an error if there is a problem completing the request.
 */
export const getProductsBySearch = async (searchTerm) => {
	try {
		const url = productEndpoint + `search?q=${searchTerm}`;
		const response = await apiInstance.get(url);

		return response.data;
	} catch (error) {
		const msg = "There was a problem searching for " + searchTerm;
		console.log(error);
		throw new Error(msg);
	}
};

/**
 * Function to get all categories from the API.
 * It uses predefined api instance and specific category endpoint.
 *
 * @async
 * @function
 * @return {Promise<object>} Promise object represents the categories data.
 * @throws Will throw an error if there is a problem completing the request.
 */
export const getAllCategories = async () => {
	try {
		const url = categoryEndpoint;
		const response = await apiInstance.get(url);
		return response.data;
	} catch (error) {
		const msg = "There was a problem getting all categories";
		console.log(error);
		throw new Error(msg);
	}
};

/**
 * Function to get all products of a particular category from the API.
 * It uses predefined api instance and specific category product endpoint.
 *
 * @async
 * @function
 * @param {string} categoryName - The name of the category.
 * @return {Promise<object>} Promise object represents the product data of the specified category.
 * @throws Will throw an error if there is a problem completing the request.
 */
export const getCategoryProducts = async (categoryName) => {
	try {
		const url = categoryEndpoint + `category/${categoryName}`;
		const response = await apiInstance.get(url);

		return response.data;
	} catch (error) {
		const msg =
			"There was a problem getting the products of the specified category";
		console.log(error);
		throw new Error(msg);
	}
};
