import React, {useEffect,useState} from 'react';
import { getAllProducts,deleteProduct,getSingleProduct } from "../../../api/services/user/product-services";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination,IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';



const ProductsTable = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const productsData = await getAllProducts(); // Add 1 to pageNumber for API's page numbering
          setProducts(productsData.results);
        } catch (error) {
          console.error("Error fetching posts:", error.message);
        }
      };

      fetchProducts();
    });


    const handleDeleteProduct = async (productId) => {
      try {
        await deleteProduct(productId);
        // Refresh posts after successful deletion
        const updatedProductsData = await getAllProducts();
        setProducts(updatedProductsData.results);
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
                <TableCell>Name</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Stock No.</TableCell>
                <TableCell>Sale %</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>  
                  <TableCell>{product.id}</TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell>{product.sale_amount}%</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell>
                      <IconButton
                        color="secondary"
                        onClick={() => handleDeleteProduct(product.id)} 
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
  

export default ProductsTable;