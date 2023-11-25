import React, {useEffect,useState} from 'react';
import { getAllPosts,deletePost,getSinglePost } from "../../../api/services/user/post-services";
import PostEditForm from "./PostEditForm";
import PostsTableRow from './PostsTableRow';
import { showToast } from "../../../utils/toastUtil";
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination,IconButton } from '@mui/material';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';


const PostsTable = ({shouldRefreshPosts}) => {
    const [posts, setPosts] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [pageSize, setPageSize] = useState(20);
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
    }, [pageNumber, pageSize,shouldRefreshPosts]);

    const handleDeletePost = async (postId) => {
    const shouldDelete = window.confirm('Are you sure you want to delete this category?');
    if (shouldDelete) {
      try {
        await deletePost(postId);
        showToast("post has been deleted successfully");
        // Refresh posts after successful deletion
        const updatedPostsData = await getAllPosts(pageNumber, pageSize);
        setPosts(updatedPostsData.results);
        setShowEditForm(!showEditForm);
      } catch (error) {
        console.error('Error deleting post:', error.message);
      }
    } else {
      showToast("Deletion canceled");
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
    
    return (
      <div>
      {showEditForm && selectedPost ? (
        <div className="reply-form-wrapper">
          <PostEditForm post={selectedPost} onCancel={handleCancelEdit} setPosts={setPosts} />
        </div>
          ) : (
          <table className="cart-table">
            <thead>
                <tr>
                    <th className="product-total" style={{width:"100px"}}>
                        ID
                    </th>
                    <th className="product-total" >
                        Title
                    </th>
                    <th className="product-quantity">
                        Created At
                    </th>
                    <th className="product-total">
                        Author
                    </th>
                    <th className="product-total">
                        Category
                    </th><th className="product-total">
                        Actions
                    </th>
                </tr>
            </thead>
            {posts.map((post) => {
                return (
                    <tbody>
                        <PostsTableRow
                            post={post}
                            handleEditPost={handleEditPost}
                            handleDeletePost={handleDeletePost}
                        />
                    </tbody>
                );
            })}
        </table>
      )}
      </div>
    );
  };

export default PostsTable;
