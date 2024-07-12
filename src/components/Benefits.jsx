import {
  FaBoxes,
  FaDollarSign,
  FaHeadset,
  FaRedo,
  FaShippingFast,
  FaStar,
} from "react-icons/fa";

const Benefits = () => {
  return (
    <section className="max-w-7xl mx-auto px-10 py-5">
      <h2 className="text-md md:text-2xl lg:text-[1.75rem] my-8 font-semibold  text-secondary ">
        Why Choose Our Products?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* Benefit 1 */}
        <div className="bg-white px-5 py-10 border-primary/30 rounded-lg border text-center">
          <FaStar className="mx-auto mb-4 text-3xl text-yellow-500" />
          <h3 className="text-xl font-semibold mb-2">High Quality</h3>
          <p className="text-gray-700">
            Our products are made with high-quality materials to ensure
            durability and performance.
          </p>
        </div>

        {/* Benefit 2 */}
        <div className="bg-white px-5 py-10 border-primary/30 rounded-lg border text-center">
          <FaDollarSign className="mx-auto mb-4 text-3xl text-green-500" />
          <h3 className="text-xl font-semibold mb-2">Affordable Prices</h3>
          <p className="text-gray-700">
            We offer competitive pricing without compromising on quality, making
            fitness accessible for everyone.
          </p>
        </div>

        {/* Benefit 3 */}
        <div className="bg-white px-5 py-10 border-primary/30 rounded-lg border text-center">
          <FaBoxes className="mx-auto mb-4 text-3xl text-blue-500" />
          <h3 className="text-xl font-semibold mb-2">Wide Range of Products</h3>
          <p className="text-gray-700">
            From cardio machines to strength training equipment, we have a wide
            range of products to meet your fitness needs.
          </p>
        </div>

        {/* Benefit 4 */}
        <div className="bg-white px-5 py-10 border-primary/30 rounded-lg border text-center">
          <FaHeadset className="mx-auto mb-4 text-3xl text-purple-500" />
          <h3 className="text-xl font-semibold mb-2">
            Excellent Customer Service
          </h3>
          <p className="text-gray-700">
            Our dedicated customer service team is here to assist you with any
            questions or concerns.
          </p>
        </div>

        {/* Benefit 5 */}
        <div className="bg-white px-5 py-10 border-primary/30 rounded-lg border text-center">
          <FaRedo className="mx-auto mb-4 text-3xl text-orange-500" />
          <h3 className="text-xl font-semibold mb-2">Easy Returns</h3>
          <p className="text-gray-700">
            We offer a hassle-free return policy to ensure your satisfaction
            with your purchase.
          </p>
        </div>

        {/* Benefit 6 */}
        <div className="bg-white px-5 py-10 border-primary/30 rounded-lg border text-center">
          <FaShippingFast className="mx-auto mb-4 text-3xl text-red-500" />
          <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
          <p className="text-gray-700">
            Get your products quickly with our efficient shipping and delivery
            services.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
