import React from 'react'

import img1 from "../../../assets/images/home/blog/1.jpg";

function NewsCard() {
    return (
        <div className="col-lg-4 col-md-6">
            <div className="single-news">
                <div className="news-thumb">
                    <img src={img1} alt="" />
                </div>
                <div className="news-details">
                    <span className="post-meta">
                        <a href="#">In TV</a>, 1 week a go
                    </span>
                    <h4>
                        <a href="single-post.html">
                            Ut enim ad minim venium eos qui odit lorem telica comuo fira
                            mende
                        </a>
                    </h4>
                    <a className="read-more" href="single-post.html">
                        Read More
                    </a>
                </div>
            </div>
        </div>
    )
}

export default NewsCard
