import React from "react";
import LocationIcon from "../../static/location.png";
import EditIcon from "../../static/edit-2.png";
import QRIcon from "../../static/qr-icon.png";
import { Button } from "../../components/common/button";
import { SearchBar } from "../../components/common/search-bar";
import { Divider } from "antd";
import { useNavigate } from "react-router-dom";

const Head = () => {
  const navigate = useNavigate();

  return (
    <div
      className="absolute bottom-0 left-4 right-4 z-50 flex translate-y-1/3 flex-col gap-[10px] rounded-lg bg-white px-[12px] pb-[12px] pt-[10px]"
      style={{ boxShadow: "0px 2px 8px 0px #2054571F" }}
    >
      <div
        className="flex flex-col gap-[2px]"
        onClick={() => navigate("/location")}
      >
        <div className="text-xs font-normal text-gray8">Vị trí của bạn:</div>
        <div className="flex items-center justify-between">
          <div className="flex max-w-[calc(100%-28px)] items-center gap-[4px]">
            <img src={LocationIcon} alt="" className="size-[16px] shrink-0" />
            <div className="truncate text-sm font-medium">
              284/41/2 Lý thường kiệt, phường 13, quận 10
            </div>
          </div>
          <img src={EditIcon} alt="" className="size-[18px] shrink-0" />
        </div>
      </div>
      <Divider className="m-0" />
      <div className="flex items-center gap-[12px]">
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
    </div>
  );
};

export default Head;
