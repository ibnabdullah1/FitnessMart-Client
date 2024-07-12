const Team = () => {
  return (
    <div className="max-w-7xl mx-auto px-10 ">
      <h2 className="text-4xl font-bold text-center my-16">Meet Our Team</h2>

      <div className="grid grid-cols-1 mb-10 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white rounded-lg border p-6  text-center">
          <img
            src="https://spacema-dev.com/elevate/assets/images/team/1.jpg"
            alt="Team Member 1"
            className="w-full rounded-full mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Arafat</h3>
          <p className="text-gray-700">Role: Project Manager</p>
        </div>

        <div className="bg-white rounded-lg border p-6  text-center">
          <img
            src="https://spacema-dev.com/elevate/assets/images/team/4.jpg"
            alt="Team Member 2"
            className="w-full rounded-full mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Riya</h3>
          <p className="text-gray-700">Role: UI/UX Designer</p>
        </div>

        <div className="bg-white rounded-lg border p-6  text-center">
          <img
            src="https://spacema-dev.com/elevate/assets/images/team/3.jpg"
            alt="Team Member 3"
            className="w-full rounded-full mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Sam</h3>
          <p className="text-gray-700">Role: Frontend Developer</p>
        </div>

        <div className="bg-white rounded-lg border p-6  text-center">
          <img
            src="https://spacema-dev.com/elevate/assets/images/team/2.jpg"
            alt="Team Member 4"
            className="w-full rounded-full mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Liam</h3>
          <p className="text-gray-700">Role: Backend Developer</p>
        </div>

        <div className="bg-white rounded-lg border p-6  text-center">
          <img
            src="https://spacema-dev.com/elevate/assets/images/team/5.jpg"
            alt="Team Member 5"
            className="w-full rounded-full mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Noah</h3>
          <p className="text-gray-700">Role: QA Engineer</p>
        </div>

        <div className="bg-white rounded-lg border p-6  text-center">
          <img
            src="https://spacema-dev.com/elevate/assets/images/team/6.jpg"
            alt="Team Member 6"
            className="w-full rounded-full mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Ella</h3>
          <p className="text-gray-700">Role: Content Writer</p>
        </div>

        <div className="bg-white rounded-lg border p-6  text-center">
          <img
            src="https://spacema-dev.com/elevate/assets/images/team/7.jpg"
            alt="Team Member 7"
            className="w-full rounded-full mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Oliver</h3>
          <p className="text-gray-700">Role: Marketing Specialist</p>
        </div>

        <div className="bg-white rounded-lg border  p-6  text-center">
          <img
            src="https://spacema-dev.com/elevate/assets/images/team/8.jpg"
            alt="Team Member 8"
            className="w-full rounded-full mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Sophia</h3>
          <p className="text-gray-700">Role: Customer Support</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
