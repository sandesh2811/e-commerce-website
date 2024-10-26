import React, { Dispatch, SetStateAction } from "react";

// type FilterProps = {
//   selectedValue: string;
//   setSelectedValue: Dispatch<SetStateAction<string>>;
//   handleFilters: () => {};
// };

const Filter = ({ selectedValue, setSelectedValue, handleFilters }) => {
  return (
    <div className="flex justify-end items-center h-[50px]">
      <select
        value={selectedValue}
        onChange={(e) => {
          setSelectedValue(e.target.value);
          handleFilters();
        }}
        className="py-2 px-2 bg-background text-text border-2 border-text cursor-pointer"
      >
        <option value="default">Filters</option>
        <option value="lowtohigh">Sort By Price: Low To High</option>
        <option value="hightolow">Sort By Price: High To Low</option>
        <option value="popularity">Sort By Popularity</option>
      </select>
    </div>
  );
};

export default Filter;
