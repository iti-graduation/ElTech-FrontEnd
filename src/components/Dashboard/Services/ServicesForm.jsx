import React, { useState } from "react";
import { getUserData } from "../../../api/services/user/user-services"; // Import your authentication context
import { addService } from "../../../api/services/admin/admin-services"; // Import your authentication context

const ServiceForm = ({ clickHandler }) => {
  const userData = getUserData();
  const userEmail = userData.email;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [logo, setLogo] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Call the addPost API function
      const response = await addService(title, description, logo);
      console.log("Service added successfully:", response);
      console.log(response);

      // Reset the form after successful submission
      setTitle("");
      setDescription("");
      setLogo("");
    } catch (error) {
      console.error("Error adding service:", error.message);
    }
  };

  return (
    <div className="dashboard-form-wrapper" id="dashboard-form-wrapper">
      <h5>Add new Service</h5>
      <form
        onSubmit={handleSubmit}
        className="dashboard-form"
        id="dashboard-form"
        enctype="multipart/from-data"
      >
        <div className="col-lg-12 col-md-12">
          <input
            type="text"
            name="title"
            placeholder="Service Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="col-lg-12 col-md-12">
          <input
            type="text"
            name="description"
            placeholder="Service Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="col-lg-12 col-md-12">
          <input
            type="file"
            name="logo"
            accept="image/*"
            onChange={(e) => setLogo(e.target.files[0])}
          />
        </div>
        <div className="col-lg-12 col-md-12">
          <input type="submit" name="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default ServiceForm;
