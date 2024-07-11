import FeaturedProductCard from "../../../components/Featured Products/FeaturedProductCard";
import Loading from "../../../components/Loading";
import { useGetAllProductsQuery } from "../../../redux/features/productApi/productApi";

const Products = () => {
  const { data: products, isLoading, isError } = useGetAllProductsQuery();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="max-w-7xl px-10 mx-auto py-14">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {products?.data?.map((product, i) => (
          <FeaturedProductCard key={i} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
