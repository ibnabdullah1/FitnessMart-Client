import { useEffect, useRef, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const InputDropdown = ({
  placeholder,
  name,
  options,
  selectedOption,
  setSelectedOption,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block  w-full">
      <label htmlFor={name} className="block text-sm py-1 leading-5">
        {name} <span className="text-red-500 font-bold">*</span>
      </label>
      <div
        className="relative gap-3 border flex justify-between items-center rounded text-secondary py-[9px] pl-2 pr-1 text-sm font-medium cursor-pointer"
        onClick={toggleOpen}
      >
        <p className="text-[15px]">
          {selectedOption ? selectedOption : placeholder}
        </p>
        <IoMdArrowDropdown
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>
      {isOpen && (
        <div
          style={{
            boxShadow: "0px 0px 10px rgba(0,0,0,0.07)",
          }}
          className="absolute z-10 w-full rounded mt-1 bg-white max-h-[200px] overflow-y-auto overflow-hidden  scrollbar-thin scrollbar-track-transparent scrollbar-thumb-primary "
        >
          {options?.map((option, i) => (
            <div
              key={i}
              className="py-2 px-3  flex items-center gap-3 text-[15px] text-secondary hover:text-primary cursor-pointer hover:bg-primary/10"
              onClick={() => handleOptionClick(option)}
            >
              <p className="text-[12px]">{option}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InputDropdown;
