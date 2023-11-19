import UserForm from "./UserForm";
import UsersTable from "./UsersTable";
import React,{ useState } from 'react';


const UsersDashboard = () => {

    const [showReplyForm, setShowReplyForm] = useState(false)
    const handleCreateClick = () => {
    setShowReplyForm(!showReplyForm);
    };

    return (
      <div>
        <h1>Users</h1>
        {/* <button className="guru-btn" onClick={handleCreateClick}>Create New Post</button>
        {showReplyForm && (
				<div className="reply-form-wrapper">
				<UserForm clickHandler={handleCreateClick}/>
				</div>
			)} */}
        <UsersTable />
      </div>
    );
  };

  export default UsersDashboard;
  