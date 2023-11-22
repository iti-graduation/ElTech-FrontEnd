import React, {useEffect,useState} from 'react';
import { getAllCategories,deleteCategory } from "../../../api/services/user/product-services";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow,IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';



const CateTable = () => {
    const [categories, setCategories] = useState([]);


    useEffect(() => {
      const fetchCategories = async () => {
        try {
          const categoriesData = await getAllCategories(); 
          setCategories(categoriesData);
        } catch (error) {
          console.error("Error fetching posts:", error.message);
        }
      };
  
      fetchCategories();
    }, []);


    const handleDeleteCategory = async (categoryId) => {
      try {
        await deleteCategory(categoryId);
        // Refresh posts after successful deletion
        const updatedCategoryData = await getAllCategories();
        setCategories(updatedCategoryData);
      } catch (error) {
        console.error('Error deleting post:', error.message);
      }
    };

    
    return (
      <div>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell>Title</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {categories.map((category) => (
                <TableRow key={category.id}>  
                  <TableCell>{category.id}</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell>{category.name}</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell>
                      <IconButton
                        color="secondary"
                        onClick={() => handleDeleteCategory(category.id)} 
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
  

export default CateTable;