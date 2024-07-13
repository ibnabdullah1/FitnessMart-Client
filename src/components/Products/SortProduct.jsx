import { useEffect, useRef, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const SortProduct = ({ setSortOrder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectOption, setSelectedOption] = useState("");
  const dropdownRef = useRef(null);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const options = [
    { name: "Price High to Low", value: "desc" },
    { name: "Price Low to High", value: "asc" },
  ];

  const handleOptionClick = (option) => {
    setSortOrder(option.value);
    setSelectedOption(option.name);
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
    <div ref={dropdownRef} className="relative inline-block w-[200px]">
      <div
        className="relative gap-3 border flex justify-between items-center rounded text-secondary py-[9px] pl-2 pr-1 text-sm font-medium cursor-pointer"
        onClick={toggleOpen}
      >
        <p className="text-[15px]">
          {selectOption ? selectOption : "Price Low to High"}
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
          className="absolute z-10 w-full rounded mt-1 bg-white max-h-[200px] overflow-y-auto overflow-hidden scrollbar-thin scrollbar-track-transparent scrollbar-thumb-primary"
        >
          {options.map((option, i) => (
            <div
              key={i}
              value={option.value}
              onClick={() => handleOptionClick(option)}
              className="py-2 px-3 flex items-center gap-3 text-[15px] text-secondary hover:text-primary cursor-pointer hover:bg-primary/10"
            >
              <p className="text-[15px]">{option.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortProduct;
