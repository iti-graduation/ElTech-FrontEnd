import React, { useState } from "react";
import { getUserData } from "../../../api/services/user/user-services"; // Import your authentication context
import { addCategory } from "../../../api/services/user/product-services"; // Import your authentication context
import { toast } from "react-toastify";

const CategoryForm = ({ clickHandler }) => {
  const userData = getUserData();
  const userEmail = userData.email;
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Call the addPost API function
      const response = await addCategory(name, image);
      console.log("Category added successfully:", response);
      console.log(response);

      // Reset the form after successful submission
      toast.success("Service has been updated successfully", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });

      setName("");
      setImage("");
    } catch (error) {
      toast.error(
        `Error adding the service, please make sure that you filled up the form`,
        {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        }
      );

      console.error("Error adding post:", error.message);
    }
  };

  return (
    <div className="dashboard-form-wrapper" id="dashboard-form-wrapper">
      <h5>Add new Category</h5>
      <form
        onSubmit={handleSubmit}
        className="dashboard-form"
        id="dashboard-form"
      >
        <div className="col-lg-12 col-md-12">
          <input
            type="text"
            name="name"
            placeholder="Category Title"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col-lg-12 col-md-12">
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <div className="col-lg-12 col-md-12">
          <input type="submit" name="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default CategoryForm;
