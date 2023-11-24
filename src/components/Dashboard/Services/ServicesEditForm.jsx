import React, { useState, useEffect } from "react";
import {
  getAllServices,
  updateService,
} from "../../../api/services/admin/admin-services";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ServiceEditForm = ({ service, onCancel, setServices }) => {
  const [serviceTitle, setServiceTitle] = useState(service.title);
  const [serviceDescription, setServiceDescription] = useState(
    service.description
  );
  const [logo, setLogo] = useState(null);

  useEffect(() => {
    // Update the state when the service prop changes
    setServiceTitle(service.title);
    setServiceDescription(service.description);
    setLogo(null); // Clear the previous logo to avoid displaying the old image
  }, [service]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await updateService(
        service.id,
        serviceTitle,
        serviceDescription,
        logo
      );

      const updatedServices = await getAllServices();
      setServices(updatedServices);

      toast.success("Service has been updated successfully", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });

      // Clear form fields after successful update
      // setServiceTitle("");
      // setServiceDescription("");
      // setLogo(null);

      // Hide the form after successful update
      onCancel();
    } catch (error) {
      console.error("Error updating service:", error.message);
      toast.error(
        `Error updating service, please make sure that the service has a title and a description.`,
        {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        }
      );
    }
  };

  return (
    <div className="dashboard-form-wrapper" id="dashboard-form-wrapper">
      <h5>Edit Service With Title: {service.title}</h5>
      <form
        onSubmit={handleSubmit}
        className="dashboard-form"
        id="dashboard-form"
      >
        <div className="col-lg-12 col-md-12">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={serviceTitle}
            onChange={(e) => setServiceTitle(e.target.value)}
          />
        </div>
        <div className="col-lg-12 col-md-12">
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={serviceDescription}
            onChange={(e) => setServiceDescription(e.target.value)}
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

        <div style={{ display: "flex", width: "200px", marginTop: "10px" }}>
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
