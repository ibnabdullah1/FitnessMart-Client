import React from "react";
import { Range } from "react-range";

const PriceRangeFilter = ({ min, max, step, values, onChange }) => {
  const handleRangeChange = (values) => {
    onChange(values);
  };

  return (
    <div className="flex flex-col w-[300px]">
      <h2 className="text-left text-secondary my-2">Price Range</h2>
      <Range
        step={step}
        min={min}
        max={max}
        values={values}
        onChange={handleRangeChange}
        renderTrack={({ props, children }) => (
          <div {...props} className="w-full h-2 bg-primary/20 rounded-full">
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div {...props} className="w-4 h-4 bg-primary rounded-full" />
        )}
      />
      <div className="flex justify-between w-full mt-2">
        <input
          type="number"
          value={values[0]}
          disabled
          className=" w-16 text-center border border-primary/50 text-primary rounded"
        />
        <input
          type="number"
          value={values[1]}
          disabled
          className=" w-16 text-center border border-primary/50 text-primary rounded"
        />
      </div>
    </div>
  );
};

export default PriceRangeFilter;
