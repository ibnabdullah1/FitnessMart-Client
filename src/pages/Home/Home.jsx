import AllCategories from "../../components/AllCategory/AllCategorys";
import Banner from "../../components/Banner/Banner";
import Benefits from "../../components/Benefits";
import FeaturedProducts from "../../components/Featured Products/FeaturedProducts";
import Gallery from "../../components/Gallery";
import Newsletter from "../../components/Newsletter";
import Reviews from "../../components/Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Banner />
      <AllCategories />
      <FeaturedProducts />
      <Benefits />
      <Gallery />
      <Reviews />
      <Newsletter />
    </div>
  );
};

export default Home;
