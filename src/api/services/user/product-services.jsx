// Importing the pre-configured API instance
import { apiInstance } from "../../config/api-config";

// Setting up the endpoint for the API to be the product endpoint in the environment variables
const endpoint = process.env.REACT_APP_PRODUCT_ENDPOINT;
const productEndpoint = endpoint + "products/";
const categoryEndpoint = endpoint + "categories/";

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
		console.error(error, msg);
		return error;
	}
};

export const getTrendingProducts = async () => {
	try {
		const response = await apiInstance.get(productEndpoint, {
			params: {
				is_trending: "1",
			},
		});
		return response.data;
	} catch (error) {
		const msg = "There was a problem getting trending products.";
		console.error(error, msg);
		return error;
	}
};

export const getPopularProducts = async () => {
	try {
		const response = await apiInstance.get(productEndpoint, {
			params: {
				is_popular: "1",
			},
		});
		return response.data;
	} catch (error) {
		const msg = "There was a problem getting popular products.";
		console.error(error, msg);
		return error;
	}
};

export const getWeeklyDeal = async () => {
	try {
		const url = endpoint + "weekly-deal/latest/";
		const response = await apiInstance.get(url);
		return response.data;
	} catch (error) {
		const msg = "There was a problem getting the weekly deal.";
		console.error(error, msg);
		return error;
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
		console.error(error, msg);
		return error;
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
		console.error(error, msg);
		return error;
	}
};

export const getSingleProductCategory = async (productId) => {
	try {
		const url = productEndpoint + productId;
		const response = await apiInstance.get(url);

		// Assuming the API response contains the category ID in the 'categoryId' field
		const { data } = response;
		const productCategory = data.category; // Replace 'categoryId' with the actual field name

		return {
			productCategory,
		};
	} catch (error) {
		const msg = "There was a problem getting the specified product";
		console.error(error, msg);
		return error;
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
		const response = await apiInstance.get(productEndpoint, {
			params: {
				q: searchTerm,
			},
		});

		return response.data;
	} catch (error) {
		const msg = "There was a problem searching for " + searchTerm;
		console.error(error, msg);
		return error;
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
		console.error(error, msg);
		// return error;
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
export const getSingleCategory = async (categoryId) => {
	try {
		console.log("category id", categoryId);
		const url = categoryEndpoint + categoryId;
		const response = await apiInstance.get(url);

		return response.data;
	} catch (error) {
		const msg =
			"There was a problem getting the products of the specified category";
		console.error(error, msg);
		return error;
	}
};

export const createReview = async (productId, reviewContent) => {
	try {
		const url = productEndpoint + `${productId}/reviews/`;
		const response = await apiInstance.post(url, reviewContent);

		return response.data;
	} catch (error) {
		const msg = "There was a problem creating your review!";
		console.error(error, msg);
		return error;
	}
};

export const getOrderedProducts = async (ordering) => {
	try {
		const response = await apiInstance.get(productEndpoint, {
			params: {
				ordering,
			},
		});

		return response.data;
	} catch (error) {
		const msg = "There was a problem getting ordered products.";
		console.error(error, msg);
		return error;
	}
};

export const getProducts = async (options = {}) => {
	try {
		console.log("Options:", options);
		const response = await apiInstance.get(productEndpoint, {
			params: options,
		});
		return response.data;
	} catch (error) {
		const msg = "There was a problem getting products.";
		console.error(error, msg);
		return error;
	}
};

export const addProductRating = async (productId, rating) => {
	try {
		console.log(productId, rating);
		const url = productEndpoint + `${productId}/ratings/`;
		console.log(url);
		const response = await apiInstance.post(url, { rating: rating });

		return response.data;
	} catch (error) {
		const msg = "There was a problem adding your rating!";
		console.error(error, msg);
		return error;
	}
};

/**
 * delete a product by product id
 *
 * @param {number} product ID
 * @returns {Promise} A promise that resolves to the data of the API response
 * @throws {Error} If there is a problem adding the comment
 */
export const deleteProduct = async (productId) => {
	try {
		const url = endpoint + `products/${productId}`;
		const response = await apiInstance.delete(url);
		return response.data; // Optionally handle the response data if needed
	} catch (error) {
		console.error("Error deleting product:", error.message);
		return error;
	}
};

/**
 * delete a category by category id
 *
 * @param {number} category ID
 * @returns {Promise} A promise that resolves to the data of the API response
 * @throws {Error} If there is a problem adding the comment
 */
export const deleteCategory = async (categoryId) => {
	try {
		const url = endpoint + `categories/${categoryId}`;
		const response = await apiInstance.delete(url);
		return response.data; // Optionally handle the response data if needed
	} catch (error) {
		console.error("Error deleting product:", error.message);
		return error;
	}
};
