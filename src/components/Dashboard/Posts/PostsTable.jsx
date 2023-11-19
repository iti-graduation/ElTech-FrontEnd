import React, {useEffect,useState} from 'react';
import { getAllPosts,deletePost,updatePost,getSinglePost } from "../../../api/services/user/post-services";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination,IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PostForm from "./PostForm";




const PostsTable = () => {
    const [posts, setPosts] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const [totalCount, setTotalCount] = useState(0); // Store the total count of posts
    const [showEditForm, setShowEditForm] = useState(false)


    useEffect(() => {
      const fetchPosts = async () => {
        try {
          const postsData = await getAllPosts(pageNumber, pageSize); // Add 1 to pageNumber for API's page numbering
          setPosts(postsData.results);
          setTotalCount(postsData.count);
          setPageSize(postsData.count) // Set the total count of posts from the API response

        } catch (error) {
          console.error("Error fetching posts:", error.message);
        }
      };
  
      fetchPosts();
    }, [pageNumber, pageSize,totalCount]);

    const handleDeletePost = async (postId) => {
      try {
        await deletePost(postId);
        // Refresh posts after successful deletion
        const updatedPostsData = await getAllPosts(pageNumber, pageSize);
        setPosts(updatedPostsData.results);
        setShowEditForm(!showEditForm);
      } catch (error) {
        console.error('Error deleting post:', error.message);
      }
    };



    const handleEditPost = async (postId, updatedPostData) => {
      try {
        await updatePost(postId, updatedPostData);
        // Refresh posts after successful update
        const updatedPostsData = await getAllPosts(pageNumber, pageSize);
        setPosts(updatedPostsData.results);
        setShowEditForm(!showEditForm);
      } catch (error) {
        console.error('Error updating post:', error.message);
      }
    };
  
  
    const formatCreatedAt = (createdAt) => {
      const date = new Date(createdAt);
      return date.toLocaleDateString(); // Customize this as needed
    };

    return (
      <div>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Created At</TableCell>
                <TableCell>Author</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {posts.map((post) => (
                <TableRow key={post.id}>  
                  <TableCell>{post.id}</TableCell>
                  <TableCell>{post.title}</TableCell>
                  <TableCell>{formatCreatedAt(post.created_at)}</TableCell>
                  <TableCell>{post.user.email}</TableCell>
                  <TableCell>{post.category.name}</TableCell>
                  <TableCell>
                      <IconButton
                        color="primary"
                        onClick={() =>  handleEditPost(post.id)}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        color="secondary"
                        onClick={() => handleDeletePost(post.id)} 
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
  

export default PostsTable;