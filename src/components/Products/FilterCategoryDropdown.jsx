import { useEffect, useRef, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const FilterCategoryDropdown = ({
  selectedCategories,
  setSelectedCategories,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const categories = [
    "Elliptical Trainer",
    "Hex Dumbbells",
    "Walking Pad",
    "Treadmills",
    "Rowing Machine",
    "Massage Chair",
    "Jump Rope",
    "GYM Equipment",
    "Exercise Cycle",
  ];

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block  w-[250px]">
      <div
        className="relative gap-3 border flex justify-between items-center rounded text-secondary py-[9px] pl-2 pr-1 text-sm font-medium cursor-pointer"
        onClick={toggleOpen}
      >
        <p className="text-[15px]">Category</p>
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
          className="absolute z-40 w-full rounded mt-1 bg-white max-h-[300px] overflow-y-auto overflow-hidden  scrollbar-thin scrollbar-track-transparent scrollbar-thumb-primary "
        >
          {categories.map((category) => (
            <label
              key={category}
              className="py-2 px-3  flex items-center gap-3 text-[15px] text-secondary hover:text-primary cursor-pointer hover:bg-primary/10"
            >
              <input
                type="checkbox"
                className="checked:bg-purple-400"
                value={category}
                checked={selectedCategories?.includes(category)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedCategories([...selectedCategories, category]);
                  } else {
                    setSelectedCategories(
                      selectedCategories?.filter((cat) => cat !== category)
                    );
                  }
                }}
              />
              {category}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterCategoryDropdown;
