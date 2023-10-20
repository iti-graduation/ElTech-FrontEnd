import React from 'react';

const PageBanner = () => {
  return (
    //hard coded top margins is set for now (till we use shared header for all the website )
    <section className="page-banner" style={{marginTop:"160px"}}> 
      <div className="container" >
        <div className="row">
          <div className="col-md-12">
            <span className="round-shape"></span>
            <h2 className="banner-title">Shop</h2>
            <div className="bread-crumb">
              {/* after merge dont forget to edit the href for the products to redirect to the productsPage */}
              <a href="/">Home</a> / <a href="/">Products</a> / Gaming
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PageBanner;