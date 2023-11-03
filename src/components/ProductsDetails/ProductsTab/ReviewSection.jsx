import React from "react";
import c1 from "../../../assets/images/blog/c1.jpg";
import SingleComment from "./SingleComment";

const ReviewsSection = () => {
  return (
    <div
      className="tab-pane fade"
      id="reviews"
      role="tabpanel"
      aria-labelledby="descriptions-tab"
    >
      <div className="comment-area">
        <h4 className="comment-title">2 Reviews to "Gaming Controller"</h4>
        <ol className="comment-list">
          <SingleComment
            imgSrc={c1}
            author="Jason Statham"
            date="July 06th, 2017"
            commentText="sapien lorem et tristique nulla lectus fauc-ibus est Pellentesque dapibus"
          />
          <SingleComment
            imgSrc={c1}
            author="Jason Statham"
            date="July 06th, 2017"
            commentText="sapien lorem et tristique nulla lectus fauc-ibus est Pellentesque dapibus"
          />
        </ol>
        <div className="comment-form-wrapper">
          <h5>Add Review</h5>
          <form action="#" method="post" className="row comment-form">
            <div className="col-lg-6 col-md-6">
              <input type="text" name="name" placeholder="Name" />
            </div>
            <div className="col-lg-6 col-md-6">
              <input type="email" name="email" placeholder="Email" />
            </div>
            <div className="col-lg-12 col-md-12">
              <textarea name="message" placeholder="Reviews" />
            </div>
            <div className="col-lg-12 col-md-12">
              <input type="submit" name="submit" value="Submit Review" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
