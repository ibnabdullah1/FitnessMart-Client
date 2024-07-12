const Gallery = () => {
  return (
    <section className="bg-white max-w-7xl mx-auto px-10 py-5">
      <h2 className="text-md md:text-2xl lg:text-[1.75rem] my-8 font-semibold  text-secondary ">
        Our Gallery
      </h2>
      {/* Main Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
        {/* Large Image - Top Left */}
        <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
          <a
            href=""
            className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
          >
            <img
              src="https://images.pexels.com/photos/7031706/pexels-photo-7031706.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Gallery Image 1"
              className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
          </a>
        </div>

        {/* Large Image and Smaller Images - Top Right */}
        <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
          <a
            href=""
            className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4"
          >
            <img
              src="https://images.pexels.com/photos/4047156/pexels-photo-4047156.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Gallery Image 2"
              className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
          </a>

          {/* Smaller Images */}
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
            <a
              href=""
              className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
            >
              <img
                src="https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Gallery Image 3"
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
            </a>
            <a
              href=""
              className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
            >
              <img
                src="https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Gallery Image 4"
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
            </a>
          </div>
        </div>

        {/* Large Image - Bottom Left */}
        <div className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
          <a
            href=""
            className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
          >
            <img
              src="https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Gallery Image 5"
              className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
          </a>
        </div>
      </div>

      {/* Second Grid Container */}
      <div className="grid grid-cols-1 mt-4 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
        {/* Large Image - Top Left */}
        <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
          <a
            href=""
            className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4"
          >
            <img
              src="https://images.pexels.com/photos/4944435/pexels-photo-4944435.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Gallery Image 6"
              className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
          </a>

          {/* Smaller Images */}
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
            <a
              href=""
              className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
            >
              <img
                src="https://images.pexels.com/photos/949131/pexels-photo-949131.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Gallery Image 7"
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
            </a>
            <a
              href=""
              className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
            >
              <img
                src="https://images.pexels.com/photos/897061/pexels-photo-897061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Gallery Image 8"
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
            </a>
          </div>
        </div>

        {/* Smaller Images - Top Right */}
        <div className="col-span-2 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
          <a
            href=""
            className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
          >
            <img
              src="https://images.pexels.com/photos/2204196/pexels-photo-2204196.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Gallery Image 9"
              className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
          </a>
        </div>

        {/* Additional Smaller Images - Bottom Right */}
        <div className="col-span-2 md:col-span-1  bg-sky-50 h-auto md:h-full flex flex-col">
          <a
            href=""
            className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
          >
            <img
              src="https://images.pexels.com/photos/11175793/pexels-photo-11175793.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Gallery Image 10"
              className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
          </a>
        </div>

        {/* Single Column Grid - Bottom Center */}
        <div className="grid gap-4  grid-cols-21 md:grid-cols-1">
          <a
            href=""
            className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
          >
            <img
              src="https://images.pexels.com/photos/7174396/pexels-photo-7174396.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Gallery Image 11"
              className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
          </a>
          <a
            href=""
            className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
          >
            <img
              src="https://images.pexels.com/photos/4046704/pexels-photo-4046704.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Gallery Image 12"
              className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
