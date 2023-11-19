import React, {useEffect,useState} from 'react';
import { getAllUsers,deleteUser } from "../../../api/services/user/user-services";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination,IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';



const UsersTable = () => {
    const [users, setUsers] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const [totalCount, setTotalCount] = useState(0); // Store the total count of posts

    useEffect(() => {
      const fetchPosts = async () => {
        try {
          const usersData = await getAllUsers(); // Add 1 to pageNumber for API's page numbering
          setUsers(usersData);
          setTotalCount(usersData.length);
          setPageSize(usersData.length) // Set the total count of posts from the API response
        } catch (error) {
          console.error("Error fetching all users:", error.message);
        }
      };
  
      fetchPosts();
    }, [pageNumber, pageSize]);

    const handleDeleteUsers = async (userId) => {
      try {
        await deleteUser(userId);
        // Refresh posts after successful deletion
        const updatedUsersData = await getAllUsers();
        setUsers(updatedUsersData);
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
                <TableCell>Email</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Country</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>  
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.first_name} {user.last_name}</TableCell>
                  <TableCell>{user.country}</TableCell>
                  <TableCell>
                      <IconButton
                        color="secondary"
                        onClick={() => handleDeleteUsers(user.id)} 
                      >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
        component="div"
        count={totalCount} // Use totalCount for the count property
        rowsPerPage={pageSize}
        page={pageNumber-1}
        onPageChange={(e, newPage) => setPageNumber(newPage)}
        onRowsPerPageChange={(e) => {
          setPageSize(parseInt(e.target.value, 10));
          setPageNumber(1); // Reset pageNumber to 0 when rowsPerPage changes
        }}
      />
      </div>
    );
  };
  

export default UsersTable;