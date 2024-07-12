import SectionBanner from "../../components/SectionBanner";
const AboutUs = () => {
  return (
    <div className="">
      <SectionBanner title={"About Us"} />
      <div className="py-10 px-5 lg:px-10 max-w-7xl mx-auto">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            Welcome to VigorFit Shop
          </h2>
          <p className="text-gray-700 mb-4">
            At <strong>VigorFit Shop</strong>, we are more than just a fitness
            brand—we are your partner in achieving a healthier, stronger you.
            Our mission is to provide you with the best home gym equipment and
            accessories to help you stay motivated and fit right from the
            comfort of your own home.
          </p>
        </div>
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p className="text-gray-700 mb-4">
          Founded in 2020, <strong>VigorFit Shop</strong> was born out of a
          desire to make fitness accessible to everyone, regardless of their
          circumstances. As gyms became inaccessible, we recognized the need for
          high-quality, affordable home gym equipment that would inspire and
          support your fitness journey. What started as a simple idea to help
          ourselves and our community stay active has now grown into a brand
          dedicated to transforming spaces into Mighty Gyms.
        </p>
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/0414/3713/5010/files/Mighty_Fitness_-_We_Lift_With_You_b3f9103a-464e-49cf-8c60-39c1f4081d41_2048x2048.png?v=1643953157"
            alt=""
          />
        </div>

        <div className="text-center py-12 px-4">
          <h2 className="text-4xl font-bold">Mission And Values</h2>
          <p className="mt-4 text-gray-700 max-w-4xl mx-auto">
            Our mission is to provide exceptional healthcare services with a
            focus on availability, reliability, and support.
          </p>
          <div className="flex justify-center space-x-8 mt-8 animate-fadeIn">
            <div className="transition transform hover:scale-110">
              <h3 className="text-xl font-bold">85+</h3>
              <p className="text-gray-700">Specialists</p>
            </div>
            <div className="transition transform hover:scale-110">
              <h3 className="text-xl font-bold">25+</h3>
              <p className="text-gray-700">Years of Experience</p>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/0414/3713/5010/files/Mighty_Fitness_-_We_use_our_products_2048x2048.png?v=1643953623"
            alt=""
          />
        </div>
        <div className=" text-secondary py-12 px-4">
          <h2 className="text-4xl font-bold text-center">Our Vision</h2>
          <p className="mt-4 text-center max-w-4xl mx-auto">
            Founded in 2020, <strong>VigorFit Shop</strong> was born out of a
            desire to make fitness accessible to everyone, regardless of their
            circumstances. As gyms became inaccessible, we recognized the need
            for high-quality, affordable home gym equipment that would inspire
            and support your fitness journey. What started as a simple idea to
            help ourselves and our community stay active has now grown into a
            brand dedicated to transforming spaces into Mighty Gyms.
          </p>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `linear-gradient(30deg , rgba(0, 0, 0,0.3) 10%, rgba(0, 0, 0,0.6) 100%), url("https://i.ibb.co/t403cSs/91c8849c3512e72ae8319137dac0f83a.webp")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="text-center py-8 px-10 mb-10"
      >
        <h2 className="text-3xl text-white mb-4 tracking-[0.1em]">
          Let&rsquo;s stay connected!
        </h2>
        <p className="mt-3 max-w-3xl mx-auto text-center leading-6 text-white">
          We would love to hear from you! Whether you have questions about our
          products or want to share your fitness achievements, feel free to
          reach out to us. Together, let’s make fitness a fun and rewarding part
          of your life!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
