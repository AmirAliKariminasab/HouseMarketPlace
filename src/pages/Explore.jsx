import { Link } from "react-router-dom";
import Slider from "../components/Slider";
import rentCategoryImage from "../assets/jpg/rentCategoryImage.jpg";
import sellCategoryImage from "../assets/jpg/sellCategoryImage.jpg";

function Explore() {
  return (
    <div className="explore">
      <header>
        <p className="pageHeader">Explore</p>
      </header>
      <main>
        <Slider />
        <p className="exploreCategoryHeading">Categories</p>
        <div className="exploreCategories">
          <Link to="/category/rent">
            <img
              className="exploreCategoryImg"
              src={rentCategoryImage}
              alt="rent"
            />
            <p className="exploreCategoryName">Places For Rent</p>
          </Link>
          <Link to="/category/sale">
            <img
              className="exploreCategoryImg"
              src={sellCategoryImage}
              alt="sell"
            />
            <p className="exploreCategoryName">Places For Sale</p>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Explore;
