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
      className=" bg-white h-[300px] md:h-[500px] lg:h-[600px] "
    >
      <div className=" flex py-20 h-full max-w-7xl mx-auto items-center px-5 lg:px-10 ">
        <div className="space-y-3 lg:space-y-6">
          <h1 className="text-md md:text-2xl lg:text-[1.75rem] font-semibold  text-primary ">
            Personalized Gym Products
          </h1>
          <h2
            style={{ lineHeight: "1.4" }}
            className="font-bold uppercase text-[24px] md:text-[34px] lg:text-[47px] text-white"
          >
            Premium Commercial Gym <br /> Equipments
          </h2>
          <div className="flex gap-3">
            <button className="px-5  py-1.5 md:px-5  md:py-1.5 lg:px-10  lg:py-3 duration-200 text-white rounded-3xl text-xs md:text-base lg:uppercase font-semibold hover:text-primary bg-primary hover:bg-white">
              Buy Now
            </button>
            <button className="px-5  py-1.5 md:px-5  md:py-1.5 lg:px-10  lg:py-3 duration-200 lg:uppercase font-semibold text-xs md:text-base border text-primary hover:text-white border-primary rounded-3xl bg-white hover:bg-transparent hover:border hover:border-white">
              Know More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
