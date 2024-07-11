import { useParams } from "react-router-dom";
import { useGetAllProductsQuery } from "../../redux/features/productApi/productApi";
import FeaturedProductCard from "../Featured Products/FeaturedProductCard";
import Loading from "../Loading";
import SectionBanner from "../SectionBanner";

const CategoryBasedProducts = () => {
  const { category } = useParams();
  const { data: products, isLoading, isError } = useGetAllProductsQuery();
  if (isLoading) {
    return <Loading />;
  }
  const filteredProducts = products?.data?.filter(
    (product) => product?.category === category
  );
  console.log(filteredProducts);
  return (
    <>
      <SectionBanner title={category} />
      <div className="max-w-7xl px-10 mx-auto py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {filteredProducts?.map((product, i) => (
            <FeaturedProductCard key={i} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryBasedProducts;
