import React, { useState } from 'react'
import Header from "../layouts/Home/Header";
import Footer from "../layouts/Home/Footer";
import EditUserProfile from '../layouts/UserAccount/EditUserProfile';
import UserProfile from '../layouts/UserAccount/UserProfile';



export default function MyAccountProfile() {

  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleUpdate = () => {
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <>
      <Header className="inner-header" />
      {
        isEditing ? (
          <EditUserProfile onUpdate={handleUpdate} onCancel={handleCancel} />
        ) : (
          <UserProfile onEdit={handleEditClick} />
        )
      }

      <Footer className="inner-footer" />
    </>
  )
}
