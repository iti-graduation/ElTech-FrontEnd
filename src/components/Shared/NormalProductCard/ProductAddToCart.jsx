import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { apiInstance, FAVORITE_ENDPOINT } from "../../../api/config/api-config";
import {
  createUserFavorite,
  deleteUserFavorite,
} from "../../../api/services/user/favorite-services";

const ProductAddToCart = ({ handleAddProductToCart, productID, productId, stock }) => {
  const user = useSelector((state) => state.authSlice.user);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddToWishlist = async (e) => {
    if (user) {
      try {
        if (isFavorite) {
          // If already favored, remove it
          // Make a DELETE request to remove the favorite
          await deleteUserFavorite(productId);
          setIsFavorite(false);
        } else {
          // If not favored, add it
          // Make a POST request to create the favorite
          await createUserFavorite(productId);
          setIsFavorite(true);
        }
      } catch (error) {
        console.error("Error toggling wishlist:", error.response.data);
      }
    } else {
      // Redirect to the login page
      window.location.href = "/login";
    }
  };

  // Use effect to check if the product is in favorites when the component mounts
  useEffect(() => {
    const checkFavoriteStatus = async () => {
      try {
        // Fetch user favorites
        const favorites = await apiInstance.get(FAVORITE_ENDPOINT);

        // Check if the product is in favorites
        const isProductInFavorites = favorites.data.some(
          (favorite) => favorite.product === productId
        );

        setIsFavorite(isProductInFavorites);
      } catch (error) {
        console.error("Error checking favorite status:", error);
      }
    };

    // Call the function to check favorite status
    checkFavoriteStatus();
  }, [productId]); // Add productId as a dependency to re-run the effect when productId changes

	return (
		<div className="sp-details-hover">
			{stock === 0 ? (
				<span className="pro-badge2 out-of-stock">Out of Stock</span>
			) : (
				<Link
					className="sp-cart"
					onClick={() => handleAddProductToCart(productID)}
				>
					<i className="twi-cart-plus"></i>
					<span>Add to cart</span>
				</Link>
			)}

      {/* Add to Wishlist */}
      <Link
        className={`sp-wishlist ${isFavorite ? "backgroundBlack" : ""}`}
        onClick={handleAddToWishlist}
      >
        <i className="twi-heart2"></i>
      </Link>
    </div>
  );
};

export default ProductAddToCart;
