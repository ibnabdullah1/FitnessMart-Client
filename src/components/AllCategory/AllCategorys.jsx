import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const AllCategories = () => {
  const categoriesArray = [
    {
      name: "Elliptical Trainer",
      image: "https://i.ibb.co/r6bv477/Elliptical-Trainer-image.jpg",
    },
    {
      name: "Hex Dumbbells",
      image: "https://i.ibb.co/09h4qNp/Hex-Dumbbells.jpg",
    },
    {
      name: "Walking Pad",
      image: "https://i.ibb.co/F7jJ1bc/Walking-Pad.png",
    },
    {
      name: "Treadmills",
      image: "https://i.ibb.co/jJzjJDm/Treadmills.jpg",
    },
    {
      name: "Rowing Machine",
      image: "https://i.ibb.co/pKPwfPx/Rowing-Machine.png",
    },
    {
      name: "Massage Chair",
      image: "https://i.ibb.co/4dsPxhX/Massage-Chair.jpg",
    },
    {
      name: "Jump Rope",
      image: "https://i.ibb.co/MNwtDkd/Jump-Rope.jpg",
    },
    {
      name: "GYM Equipment",
      image: "https://i.ibb.co/mXfXJkf/GYM-Equipment.png",
    },
    {
      name: "Exercise Cycle",
      image: "https://i.ibb.co/q5wKmr2/Exercise-Cycle.jpg",
    },
  ];

  return (
    <div>
      <div className="py-5 lg:px-10 px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-start py-8">
            <h2 className="text-md md:text-2xl lg:text-[1.75rem] font-semibold text-secondary">
              All Categories
            </h2>
          </div>
          <Swiper
            freeMode={true}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
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
            {categoriesArray?.map((category, i) => (
              <SwiperSlide key={i}>
                <CategoryCard category={category} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

const CategoryCard = ({ category }) => {
  return (
    <Link
      to={`/products/category/${category?.name}`}
      className="relative rounded overflow-hidden"
    >
      <img
        src={category.image}
        alt={category.name}
        className="w-full rounded"
      />
      <p className="cursor-pointer absolute rounded inset-0 bg-[#000000] bg-opacity-40 flex items-end justify-start text-2xl text-center text-white font-roboto font-semibold hover:bg-opacity-60 transition pl-3 pb-3">
        {category.name}
      </p>
    </Link>
  );
};

export default AllCategories;
