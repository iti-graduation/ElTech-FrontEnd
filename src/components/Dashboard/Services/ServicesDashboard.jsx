import ServiceTable from "./ServicesTable";
import ServiceForm from "./ServicesForm";
import React, { useState } from "react";

const ServicesDashboard = () => {
  const [showCreateForm, setShowReplyForm] = useState(false);
  const handleCreateClick = () => {
    setShowReplyForm(!showCreateForm);
  };

  return (
    <div>
      <h1>Services</h1>
      <button className="guru-btn" id="create-btn" onClick={handleCreateClick}>
        Add Service
      </button>
      {showCreateForm && (
        <div className="reply-form-wrapper">
          <ServiceForm clickHandler={handleCreateClick} />
        </div>
      )}
      <ServiceTable />
    </div>
  );
};

export default ServicesDashboard;
