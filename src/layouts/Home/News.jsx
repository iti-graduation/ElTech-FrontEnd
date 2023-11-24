import React ,{useEffect,useState}from "react";
import NewsCard from "../../components/News/NewsCard";
import { getAllPosts } from "../../api/services/user/post-services";




function News() {
	const [posts, setPosts] = useState([]);
	const [pageNumber, setPageNumber] = useState(1);
	const pageSize = 3; 
	
	useEffect(() => {
		const fetchPosts = async () => {
		  try {
			let postsData;
			postsData = await getAllPosts(pageNumber, pageSize);
			setPosts((prevPosts) => {
			  if (pageNumber === 1) {
				return postsData.results; // Set posts directly for the first page
			  } else {
				return [...prevPosts, ...postsData.results]; // Append for subsequent pages
			  }
			});
		  } catch (error) {
			console.error("Error fetching posts:", error.message);
		  }
		};
	  
		fetchPosts();
	  }, [pageNumber]);

	  const handleViewMore = () => {
		setPageNumber((prevPageNumber) => prevPageNumber + 1);
	  };

	return (
		<section className="news-section">
			{/* Shape Round */}
			<div className="shape-round">
				<span />
				<span />
				<span />
				<span />
			</div>
			{/* Shape Round */}

			<div className="sec-heading rotate-tb">
				Latest <span>News</span>
			</div>

			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<h2 className="sec-title">Latest News</h2>
						<p className="sec-desc">
							Featuring the latest Posts 
							<br /> On our Website.
						</p>
					</div>
				</div>
				<div className="row">
					{Array.isArray(posts) && posts.length > 0 ? (
					posts.map((post) => <NewsCard key={post.id} post={post} />)
					) : (
					<p>No Posts ATM! <br/> You will hear from us asap!</p>
					)}
					</div>
				<div className="row m-top-45">
				{posts.length > 0 ? (
					<div className="col-lg-12 text-center">
						<button className="goru-btn"onClick={handleViewMore}>
						View More
						</button>
					</div>):null}
				</div>
			</div>
		</section>
	);
}

export default News;
