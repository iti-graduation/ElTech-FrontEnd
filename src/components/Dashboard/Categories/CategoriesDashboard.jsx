import CateTable from "./CateTable";
import CategoryForm from "./CategoryForm";
import React,{ useState } from 'react';


const CategoriesDashboard = () => {

  const [showCreateForm, setShowReplyForm] = useState(false)
  const handleCreateClick = () => {
  setShowReplyForm(!showCreateForm);
  };

    return (
      <div>
        <h1>Categories</h1>
        <button className="guru-btn" id="create-btn" onClick={handleCreateClick}>Add Category</button>
        {showCreateForm && (
				<div className="reply-form-wrapper">
				<CategoryForm clickHandler={handleCreateClick}/>
				</div>
			)}
        <CateTable />
      </div>
    );
  };

  export default CategoriesDashboard;
  