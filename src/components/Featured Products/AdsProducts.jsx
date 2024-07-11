import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useGetAllProductsQuery } from "../../redux/features/productApi/productApi";
import Loading from "../Loading";
import FeaturedProductCard from "./FeaturedProductCard";
import "./FeaturedProducts.css";

const AdsProducts = () => {
  const { data: products, isLoading } = useGetAllProductsQuery();
  if (isLoading) {
    return <Loading />;
  }
  const productArray = products?.data ?? [];
  return (
    <div className="py-5 lg:px-10 px-10">
      <div className=" max-w-7xl mx-auto">
        <h2 className="text-md text-center md:text-2xl lg:text-[1.75rem] font-semibold  text-secondary py-10">
          Items Related to Your Search
        </h2>

        <Swiper
          freeMode={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          autoplay={true}
          modules={[FreeMode, Pagination, Navigation, Autoplay]}
        >
          <div>
            {productArray?.slice(1, 17)?.map((product, i) => (
              <SwiperSlide key={i}>
                <FeaturedProductCard product={product} />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default AdsProducts;
