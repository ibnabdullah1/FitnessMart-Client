const AboutUs = () => {
  return (
    <div className="container mx-auto p-6">
      {/* Company Overview Section */}
      <section className="mb-12">
        <h1 className="text-3xl font-bold text-center mb-6">About Us</h1>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Company Overview</h2>
          <p className="text-gray-700">
            Welcome to Fitness Equipment and Accessories! We started our journey
            with a simple mission: to provide high-quality fitness equipment and
            accessories to help you achieve your fitness goals. Our vision is to
            be the go-to source for fitness enthusiasts and professionals alike,
            offering innovative products and exceptional customer service.
          </p>
        </div>
      </section>

      {/* Team Introduction Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Meet Our Team
        </h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {/* Team Member 1 */}
          <div className="bg-white p-4 rounded-lg shadow-lg max-w-sm">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-full h-32 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">John Doe</h3>
            <p className="text-gray-600 mb-2">Founder & CEO</p>
            <p className="text-gray-700">
              John has over 15 years of experience in the fitness industry. He
              founded our company with the goal of making high-quality fitness
              equipment accessible to everyone.
            </p>
          </div>
          {/* Team Member 2 */}
          <div className="bg-white p-4 rounded-lg shadow-lg max-w-sm">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-full h-32 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
            <p className="text-gray-600 mb-2">Head of Product Development</p>
            <p className="text-gray-700">
              Jane is passionate about creating innovative fitness products. She
              oversees the design and development of our product line to ensure
              we meet the highest standards.
            </p>
          </div>
          {/* Add more team members as needed */}
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Contact Us</h2>
        <p className="text-gray-700 mb-4 text-center">
          We’d love to hear from you! If you have any questions, feedback, or
          just want to say hello, feel free to reach out to us using the contact
          information below.
        </p>
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7-5 7 5-7 5-7-5zm0 0v11l7 5 7-5V8M3 8h18"
              />
            </svg>
            <span className="text-gray-600">
              123 Fitness Lane, Fit City, FC 12345
            </span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h18v18H3V3zm0 0L12 12 21 3M3 21h18"
              />
            </svg>
            <a
              href="mailto:info@fitnessequipment.com"
              className="text-blue-500 hover:underline"
            >
              info@fitnessequipment.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 7l4-4m0 0L11 7m-4-4v14m4-14l4 4m0 0v14m0-14l4-4"
              />
            </svg>
            <span className="text-gray-600">+1 (123) 456-7890</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
