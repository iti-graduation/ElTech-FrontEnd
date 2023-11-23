import UserForm from "./UserForm";
import UsersTable from "./UsersTable";
import React, { useState } from "react";

const UsersDashboard = () => {
	const [showCreateForm, setShowCreateForm] = useState(false);
	const handleCreateClick = () => {
		setShowCreateForm(!showCreateForm);
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
			<button
				className="guru-btn mb-5"
				id="create-btn"
				onClick={handleCreateClick}
			>
				{!showCreateForm ? "Add User" : "All Users"}
			</button>
			{showCreateForm ? (
				<div className="reply-form-wrapper">
					<UserForm clickHandler={handleCreateClick} />
				</div>
			) : (
				<UsersTable />
			)}
			{/* <UsersTable /> */}
		</div>
	);
};

export default UsersDashboard;
