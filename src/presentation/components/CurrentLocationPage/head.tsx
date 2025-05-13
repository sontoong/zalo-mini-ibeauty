import React from "react";
import { SearchBar } from "../common/search-bar";
import { useNavigate } from "react-router-dom";

const Head = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center gap-[12px] px-[16px]">
      <div className="flex-1">
        <SearchBar
          placeholder="Tìm ưu đãi"
          className="h-[31px] rounded-[24px] !border !border-stroke2 text-sm font-normal"
        />
      </div>
    </div>
  );
};

export default Head;
