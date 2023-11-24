import React, {useEffect,useState} from 'react';
import { getAllPosts,deletePost,getSinglePost } from "../../../api/services/user/post-services";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination,IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PostEditForm from "./PostEditForm";




const PostsTable = () => {
    const [posts, setPosts] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const [totalCount, setTotalCount] = useState(0); // Store the total count of posts
    const [showEditForm, setShowEditForm] = useState(false)
    const [selectedPost, setSelectedPost] = useState(null); // Store the selected post for editing


    useEffect(() => {
      const fetchPosts = async () => {
        try {
          const postsData = await getAllPosts(pageNumber, pageSize); // Add 1 to pageNumber for API's page numbering
          setPosts(postsData.results);

        } catch (error) {
          console.error("Error fetching posts:", error.message);
        }
      };

      fetchPosts();
    }, [pageNumber, pageSize]);

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

      useEffect(() => {
      if (showEditForm && selectedPost) {
        // Fetch the single post data for editing
        const fetchSinglePost = async () => {
          try {
            const singlePost = await getSinglePost(selectedPost.id); // Replace with your API call to fetch a single post
            setSelectedPost(singlePost);
          } catch (error) {
            console.error("Error fetching single post:", error.message);
          }
        };
  
        fetchSinglePost();
      }
    }, [showEditForm, selectedPost]);

    const handleCancelEdit = () => {
      // Clear the selected post and hide the form
      setSelectedPost(null);
      setShowEditForm(false);
    };

    const handleEditPost = (post) => {
      if (selectedPost && selectedPost.id === post.id) {
        // If the same post is clicked again, hide the form
        setSelectedPost(null);
        setShowEditForm(false);
      } else {
        // If a different post is clicked, show the form for that post
        setSelectedPost(post);
        setShowEditForm(true);
      }
    };
  
    const formatCreatedAt = (createdAt) => {
      const date = new Date(createdAt);
      return date.toLocaleDateString(); // Customize this as needed
    };

    

    return (
      <div>
      {showEditForm && selectedPost && (
        <div className="reply-form-wrapper">
          {/* Pass selectedPost to the form for editing */}
          <PostEditForm post={selectedPost} onCancel={handleCancelEdit} />
        </div>
      )}
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Created At</TableCell>
                <TableCell>Author</TableCell>
                <TableCell>Category ID</TableCell>
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
                  <TableCell>{post.category}</TableCell>
                  <TableCell>
                      <IconButton
                        color="primary"
                        onClick={() =>  handleEditPost(post)}
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
      </div>
    );
  };
  

export default PostsTable;