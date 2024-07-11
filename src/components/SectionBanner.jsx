const SectionBanner = ({ title }) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(30deg , rgba(23, 122, 86,0.3) 10%, rgba(23, 122, 86,0.6) 100%), url("https://www.fitnessgallery.com/wp-content/uploads/2021/11/Fitness-Gallery-1920-x-900-min.jpg")`,
        backgroundPosition: "center",
      }}
      className="py-10 text-center"
    >
      <h1 className="mt-2 px-8 text-2xl font-bold text-white md:text-4xl uppercase">
        {title}
      </h1>
      {/* <p className="mt-6 text-lg text-white">{description}</p> */}
    </div>
  );
};

export default SectionBanner;
