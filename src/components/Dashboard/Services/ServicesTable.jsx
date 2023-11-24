import React, { useEffect, useState } from "react";
import {
  getAllServices,
  deleteService,
} from "../../../api/services/admin/admin-services";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ServiceEditForm from "./ServicesEditForm";

const ServiceTable = () => {
  const [services, setServices] = useState([]);
  const [showEditForm, setShowEditForm] = useState(false);
  const [selectedService, setSelectedService] = useState(null); // Store the selected service for editing

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const servicesData = await getAllServices();
        setServices(servicesData);
      } catch (error) {
        console.error("Error fetching services:", error.message);
      }
    };

    fetchServices();
  }, []);

  const handleDeleteService = async (serviceId) => {
    console.log(serviceId);

    try {
      await deleteService(serviceId);
      // Refresh posts after successful deletion
      const updatedServiceData = await getAllServices();
      setServices(updatedServiceData);
    } catch (error) {
      console.error("Error deleting service:", error.message);
    }
  };

  const handleCancelEdit = () => {
    // Clear the selected post and hide the form
    setSelectedService(null);
    setShowEditForm(false);
  };

  const handleEditService = (service) => {
    if (setSelectedService && setSelectedService.id === service.id) {
      // If the same post is clicked again, hide the form
      setSelectedService(null);
      setShowEditForm(false);
    } else {
      // If a different post is service, show the form for that post
      setSelectedService(service);
      setShowEditForm(true);
    }
  };

  return (
    <div>
      {showEditForm && selectedService && (
        <div className="reply-form-wrapper">
          {/* Pass selectedProduct to the form for editing */}
          <ServiceEditForm
            service={selectedService}
            onCancel={handleCancelEdit}
            setServices={setServices}
          />
        </div>
      )}
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Logo</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {services.map((service) => (
              <TableRow key={service.id}>
                <TableCell>{service.id}</TableCell>
                <TableCell>
                  <img
                    src={service.logo}
                    alt="Service Logo"
                    style={{ maxWidth: "100px", maxHeight: "100px" }}
                  />
                </TableCell>
                <TableCell>{service.title}</TableCell>
                <TableCell>{service.description}</TableCell>
                <TableCell>
                  <IconButton
                    color="primary"
                    onClick={() => handleEditService(service)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color="secondary"
                    onClick={() => handleDeleteService(service.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ServiceTable;
