// Importing the pre-configured API instance
import { ACCOUNTS_ENDPOINT, apiInstance } from "../../config/api-config";

// Setting up the endpoint for the API to be the product endpoint in the environment variables
const cartEndpoint = process.env.REACT_APP_CART_ENDPOINT;
const userEndpoint = process.env.REACT_APP_USER_ENDPOINT;
const serviceEndpoint = process.env.REACT_APP_SERVICE_ENDPOINT;
const endpoint = ACCOUNTS_ENDPOINT;

/**
 * Retrieves all carts from the API's endpoint
 * @async
 * @function getAllCarts
 * @throws {Error} When the API call fails
 * @returns {Promise<object>} The data from the API's response
 */

export const getAllCarts = async () => {
  try {
    const response = await apiInstance.get(cartEndpoint);

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
    const url = cartEndpoint + cartId;
    const response = await apiInstance.get(url);

    return response.data;
  } catch (error) {
    const msg = "There was a problem getting the specified cart";
    console.log(error);
    throw new Error(msg);
  }
};

/**
 * Fetches all users
 * @return {Object} The data of all users
 * @throws {Error} If there was a problem getting all users
 */
export const getAllUsers = async () => {
  try {
    const response = await apiInstance.get(userEndpoint);

    return response.data;
  } catch (error) {
    const msg = "There was a problem getting all users";
    console.log(error);
    throw new Error(msg);
  }
};

/**
 * Fetches all users
 * @return {boolean} The data of all users
 * @throws {Error} If there was a problem getting all users
 */
export const checkAdminStatus = async () => {
  try {
    const url = endpoint + "check-admin/";
    const response = await apiInstance.get(url); // Assuming your admin check endpoint

    return response.data;
  } catch (error) {
    const msg = "There was a problem getting all users";
    console.log(error);
    throw new Error(msg);
  }
};

export const addService = async (title, description, logo) => {
  try {
    const response = await apiInstance.post(serviceEndpoint, {
      title,
      description,
      logo,
    });
    return response.data;
  } catch (error) {
    const msg = "There was a problem adding a new service";
    console.log(error);
    throw new Error(msg);
  }
};

export const deleteService = async (serviceId) => {
  try {
    // Make a DELETE request to remove the service by ID
    const response = await apiInstance.delete(
      `${serviceEndpoint}${serviceId}/`
    );
    console.log("Service deleted successfully");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllServices = async () => {
  try {
    // Make a GET request to fetch all favorite products
    const response = await apiInstance.get(serviceEndpoint);
    return response.data;
  } catch (error) {
    throw error;
  }
};
