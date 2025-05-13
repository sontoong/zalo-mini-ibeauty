import React from "react";
import { SearchBar } from "../common/search-bar";
import { Button } from "../common/button";
import QRIcon from "../../static/qr-icon-primary7.png";
import { useNavigate } from "react-router-dom";

const Head = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center gap-[12px] px-[16px]">
      <div className="flex-1">
        <SearchBar
          placeholder="Tìm ưu đãi"
          className="h-[31px] rounded-[24px] !border !border-stroke2 text-sm font-normal"
          onClick={() => navigate("/search")}
        />
      </div>
      <Button.Icon
        icon={<img src={QRIcon} />}
        className="!rounded-[8px] border border-stroke1 p-1"
        style={{ boxShadow: "0px 1px 6px 0px #0C59730F" }}
      />
    </div>
  );
};

export default Head;
