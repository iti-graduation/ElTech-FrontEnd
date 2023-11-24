import React, { useState } from "react";
import { getUserData } from "../../../api/services/user/user-services"; // Import your authentication context
import {
  updateCategory,
  updateService,
} from "../../../api/services/user/product-services"; // Import your authentication context

const ServiceEditForm = ({ service, onCancel }) => {
  const [serviceTitle, setServiceTitle] = useState("");
  const [serviceDescription, setServiceDescription] = useState("");
  const [logo, setLogo] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const updatedData = {
        title: serviceTitle,
        description: serviceDescription,
        logo: logo,
      };

      const response = await updateCategory(
        service.id,
        serviceTitle,
        serviceDescription,
        logo
      ); // Assuming post.id exists

      console.log("Post updated successfully:", response);

      // Clear form fields after successful update
      setServiceTitle("");
      setServiceDescription("");
      setLogo("");

      // Hide the form after successful update
      onCancel();
    } catch (error) {
      console.error("Error updating post:", error.message);
    }
  };

  return (
    <div className="dashboard-form-wrapper" id="dashboard-form-wrapper">
      <h5>Edit Service With Name : {service.name} </h5>
      <form
        onSubmit={handleSubmit}
        className="dashboard-form"
        id="dashboard-form"
      >
        <div className="col-lg-12 col-md-12">
          <input
            type="text"
            name="name"
            placeholder={service.Title}
            value={serviceTitle}
            onChange={(e) => setServiceTitle(e.target.value)}
          />
        </div>
        <div className="col-lg-12 col-md-12">
          <input
            type="text"
            name="name"
            placeholder={service.Description}
            value={serviceDescription}
            onChange={(e) => setServiceTitle(e.target.value)}
          />
        </div>

        <div className="col-lg-12 col-md-12">
          <input
            type="file"
            placeholder={service.image}
            name="image"
            accept="image/*"
            onChange={(e) => setLogo(e.target.files[0])}
          />
        </div>
        <div style={{ display: "flex", width: "200px" }}>
          <div className="col-lg-12 col-md-12">
            <input type="submit" name="submit" value="Submit" />
          </div>
          <div className="col-lg-12 col-md-12">
            <button type="button" onClick={onCancel}>
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ServiceEditForm;
