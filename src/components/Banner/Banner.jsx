import bannerImage from "../../assets/Slider_1.webp";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(30deg , rgba(0, 0, 0,0.5) 10%, rgba(0, 0, 0,0.07) 100%), url("${bannerImage}")`,
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className=" bg-white h-[600px] "
    >
      <div className=" flex py-20 h-full max-w-7xl mx-auto items-center  px-10 ">
        <div className="space-y-3 lg:space-y-6">
          <h1 className="text-md md:text-2xl lg:text-[1.75rem] font-semibold  text-primary ">
            Personalized Gym Products
          </h1>
          <h2
            style={{ lineHeight: "1.4" }}
            className="font-bold uppercase text-xl md:text-[30px] lg:text-[47px] text-white"
          >
            Premium Commercial Gym <br /> Equipments
          </h2>
          <div className="flex gap-3">
            <button className="px-10 duration-200 py-3 text-white rounded-3xl uppercase font-semibold hover:text-primary bg-primary hover:bg-white">
              Buy Now
            </button>
            <button className="px-10 py-3 duration-200 uppercase font-semibold border text-primary hover:text-white border-primary rounded-3xl bg-white hover:bg-transparent hover:border hover:border-white">
              Know More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
