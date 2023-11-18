import CateTable from "./CateTable";
import React from 'react';


const CategoriesDashboard = () => {

        const handleNewCategory = () => {
          // Perform actions to add a new post, such as navigating to a new page or showing a form
          // For example, you can redirect to a new post creation page or display a modal/form to add a new post
          console.log('Add new post logic here');
        };

    return (
      <div>
        <h1>Categories</h1>
        <button className="guru-btn" onClick={handleNewCategory}>Create New category</button>
        <CateTable />
      </div>
    );
  };

  export default CategoriesDashboard;
  