
 const ShopPagination = () => {
	return (
		<div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 col-md-12 mt-20">
              <div className="goru-pagination text-center clearfix">
                <a className="prev" href="#">
                  <i className="twi-long-arrow-alt-left"></i>
                </a>
                <span className="current">1</span>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">5</a>
                <a className="next" href="#">
                  <i className="twi-long-arrow-alt-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
	);
}

export default ShopPagination;