import AllCategories from "../../components/AllCategory/AllCategorys";
import Banner from "../../components/Banner/Banner";
import FeaturedProducts from "../../components/Featured Products/FeaturedProducts";
import Reviews from "../../components/Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Banner />
      <AllCategories />
      <FeaturedProducts />
      <Reviews />
    </div>
  );
};

export default Home;
