import React, {useEffect,useState} from 'react';
import { getAllCategories } from "../../../api/services/user/product-services";
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

    
    return (
      <div>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {categories.map((category) => (
                <TableRow key={category.id}>  
                  <TableCell>{category.id}</TableCell>
                  <TableCell>{category.name}</TableCell>
                  <TableCell>
                      <IconButton
                        color="primary"
                        // onClick={() =>  triggerEdit(category.id)}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        color="secondary"
                        // onClick={() => handleDeleteCategory(category.id)} 
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