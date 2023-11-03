
const ShopDetailsCategories = () => {
  return (
    <div className="row">
      <div className="col-md-7">
        <div className="product-cate">
          <h5>Categories</h5>
          <ul>
            <li>
              <a className="active" href="#">
                All
              </a>
            </li>
            <li>
              <a href="#">Smartphones</a>
            </li>
            <li>
              <a href="#">Computers</a>
            </li>
            <li>
              <a href="#">Cameras</a>
            </li>
            <li>
              <a href="#">On Sale</a>
            </li>
            <li>
              <a href="#">Others</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="col-md-5">
        <div className="sort-view">
          <a className="view-mode active" href="#">
            <i className="twi-th"></i>
          </a>
          <a className="view-mode" href="#">
            <i className="twi-bars"></i>
          </a>
          <div className="sorts">
            <select name="sort">
              <option value="">Default Sorting</option>
              <option selected="selected" value="">
                low to high
              </option>
              <option value="">high to low</option>
              <option value="">Best Seller</option>
              <option value="">Popular Products</option>
            </select>
            <i className="twi-angle-down1"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopDetailsCategories;
