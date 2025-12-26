import React from "react";
import "./style.css";
import Button from "@mui/material/Button";
import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <div className="searchBox w-full h-[50px] bg-[#e5e5e5] rounded-[5px] relative p-2">
      <input
        type="text"
        placeholder="Search for products..."
        className="w-[100%] h-[100%] focus:outline-none bg-inherit p-2 text-[15px] pl-[16px] rounded-[8px]"
      />
      <Button
        className="absolute! top-1/2 -translate-y-1/2 right-[5px] z-50 w-[38px] min-w-[38px] h-[38px]"
        sx={{
          borderRadius: "50%",
          minWidth: "38px",
          width: "38px",
          height: "38px",
          padding: 0,
        }}
      >
        <IoSearch className="text-[#4e4e4e] text-[22px]" />
      </Button>
    </div>
  );
};

export default Search;
