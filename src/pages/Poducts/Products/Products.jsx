import { useState } from "react";
import FeaturedProductCard from "../../../components/Featured Products/FeaturedProductCard";
import Loading from "../../../components/Loading";
import FilterCategoryDropdown from "../../../components/Products/FilterCategoryDropdown";
import PriceRangeFilter from "../../../components/Products/PriceRangeFilter";
import SortProduct from "../../../components/Products/SortProduct";
import { useGetAllProductsQuery } from "../../../redux/features/productApi/productApi";

const Products = () => {
  const { data: products, isLoading, isError } = useGetAllProductsQuery();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [priceRange, setPriceRange] = useState([0, 5000]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>Error loading products</div>;
  }

  const filteredProducts = products?.data
    .filter((product) => {
      const matchesSearch = product?.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategories?.length === 0 ||
        selectedCategories?.includes(product.category);
      const matchesPrice =
        product?.price >= priceRange[0] && product?.price <= priceRange[1];
      return matchesSearch && matchesCategory && matchesPrice;
    })
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

  return (
    <div className="max-w-7xl  px-10 mx-auto py-14">
      <div className=" flex flex-col gap-4 mb-6">
        <input
          type="text"
          placeholder="Search products by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="appearance-none block w-full px-3 text-[15px] py-2 border rounded-md placeholder-secondary/50 focus:outline-none focus:border-primary transition duration-150 ease-in-out"
        />

        <div className="md:flex justify-between items-center space-y-4 md:space-y-0">
          <FilterCategoryDropdown
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
          />
          <SortProduct setSortOrder={setSortOrder} sortOrder={sortOrder} />
        </div>
        <div className="md:flex justify-between items-center">
          {" "}
          <PriceRangeFilter
            min={0}
            max={5000}
            step={100}
            values={priceRange}
            onChange={setPriceRange}
          />
          <button
            onClick={() => {
              setSearchTerm("");
              setSelectedCategories([]);
              setPriceRange([0, 5000]);
              setSortOrder("asc");
            }}
            className="p-2 bg-primary mt-4 md:mt-0 text-white rounded"
          >
            Clear Filters
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {filteredProducts?.map((product, i) => (
          <FeaturedProductCard key={i} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
