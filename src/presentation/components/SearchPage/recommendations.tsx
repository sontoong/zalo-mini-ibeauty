import { Divider } from "antd";
import React from "react";
import StoreImage from "../../static/store.jpg";
import StarIcon from "../../static/mynaui_star-solid.png";
import CouponIcon from "../../static/ticket-discount.png";

const RecommendationList = () => {
  return (
    <div className="flex flex-col gap-[8px]">
      <div className="pl-4 text-[15px] font-medium">Gợi ý cho bạn</div>
      <div className="flex flex-col gap-[11px]">
        {/* Stores */}
        <div className="flex flex-col gap-[8px]">
          <div className="px-[16px] text-sm font-medium text-gray7">
            Làm nail
          </div>
          <div className="flex gap-[12px] overflow-auto px-[16px] hide-scrollbar">
            {Array.from({ length: 10 }).map((_, index) => (
              <RecommendationItem key={index} />
            ))}
          </div>
        </div>
        <div className="px-[16px]">
          <Divider className="my-0" />
        </div>
        {/* Stores */}
        <div className="flex flex-col gap-[8px]">
          <div className="px-[16px] text-sm font-medium text-gray7">
            Làm tóc
          </div>
          <div className="flex gap-[12px] overflow-auto px-[16px] hide-scrollbar">
            {Array.from({ length: 10 }).map((_, index) => (
              <RecommendationItem key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const RecommendationItem = () => {
  return (
    <div className="flex flex-col gap-[10px]">
      {/* Img */}
      <div className="relative size-[114px] overflow-hidden rounded-[8px]">
        <img src={StoreImage} alt="" className="size-full object-cover" />
        {/* Overlay */}
        <div className="absolute inset-0 z-[1] bg-black bg-opacity-10"></div>
      </div>
      <div className="flex flex-col gap-[6px]">
        <div className="text-[12px] font-medium">Tiệm Nail & Gội đầu Kiki</div>
        <div className="flex items-center gap-[8px]">
          <div className="flex items-center gap-[2px]">
            <div className="text-sm">4.9</div>
            <div className="size-[16px]">
              <img src={StarIcon} alt="" className="size-full object-cover" />
            </div>
          </div>
          <div className="flex items-center gap-[3px] rounded-[9px] border-[0.75px] border-stroke1 px-[6px] py-[2.25px]">
            <div className="size-[12px]">
              <img src={CouponIcon} alt="" />
            </div>
            <div className="text-[9px] font-normal text-gray8">60.000đ</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendationList;
