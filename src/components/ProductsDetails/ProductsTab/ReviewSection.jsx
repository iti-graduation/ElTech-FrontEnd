import React from 'react';
import c1 from "../../../assets/images/blog/c1.jpg"

const ReviewsSection = () => {
  return (
    <div className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="descriptions-tab">
      <div className="comment-area">
        <h4 className="comment-title">2 Reviews to "Gaming Controller"</h4>
        <ol className="comment-list">
          <li>
            <div className="single-comment">
              <img src={c1} alt="" />
              <h5>
                <a href="#">Jason Statham</a>
                <span>July 06th, 2017</span>
              </h5>
              <div className="comment">
                <p>sapien lorem et tristique nulla lectus fauc-ibus est Pellentesque dapibus</p>
              </div>
            </div>
          </li>
          <li>
            <div className="single-comment">
              <img src={c1} alt="" />
              <h5>
                <a href="#">Jason Statham</a>
                <span>July 06th, 2017</span>
              </h5>
              <div className="comment">
                <p>Proin vitae dignissim enim, a iaculis sapien. nisi et dignissim efficitur</p>
              </div>
            </div>
          </li>
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
