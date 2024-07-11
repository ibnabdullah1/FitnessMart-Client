import { ImSpinner } from "react-icons/im";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <ImSpinner className="animate-spin text-xl text-primary " />
    </div>
  );
};

export default Loading;
