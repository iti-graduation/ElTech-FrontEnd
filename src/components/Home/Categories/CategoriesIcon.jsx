import { Link } from "react-router-dom";


export default function renderCategoryIcons() {
    const categories = [
      'flaticon-smart-watch',
      'flaticon-drone',
      'flaticon-console',
      'flaticon-smartphone',
      'flaticon-television',
      'flaticon-headphones',
      'flaticon-photo-camera',
      'flaticon-wifi-router',
      'flaticon-pc',
    ];
  
    return categories.map((category, index) => (
      <div key={index} className="col-lg-2 col-md-4">
        <Link to="#" className="single-cate">
          <i className={category}></i>
        </Link>
      </div>
    ));
  }