import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import BuyHistoryImg from "../../static/buy-history.png";
import StarIcon from "../../static/mynaui_star-solid.png";
import CouponIcon from "../../static/ticket-discount.png";
import { Store } from "./stores";

const PurchaseHistory = () => {
  return (
    <div className="-mt-4 flex flex-col gap-[14px]">
      <div className="pl-4 text-xl font-medium">Đã mua gần đây</div>
      <div>
        <Swiper
          spaceBetween={12}
          slidesPerView={"auto"}
          freeMode={true}
          className="h-full px-4"
          modules={[FreeMode]}
        >
          {purchaseHistory.map((item, index) => (
            <SwiperSlide key={index} className="!flex !w-fit items-center">
              <PurchaseHistoryItem item={item} key={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

const PurchaseHistoryItem: FC<{ item: Store }> = ({ item }) => {
  return (
    <div
      className="flex w-[201px] flex-col gap-[12px] overflow-hidden rounded-[4px] bg-surface"
      style={{ boxShadow: " 0px 0px 4px 0px #0000000A" }}
    >
      {/* Image */}
      <div className="relative h-[120px] overflow-hidden">
        {/* Tag */}
        <div className="absolute right-2 top-2 z-[2] flex items-center justify-center rounded-[10px] bg-primary1 px-[4px] pb-[4px] pt-[2px] text-xs font-medium leading-none text-primary6">
          {item.tag}
        </div>
        {/* Img */}
        <div className="relative size-full">
          <img src={item.image} alt="" className="size-full object-cover" />
          {/* Overlay */}
          <div className="absolute inset-0 z-[1] bg-black bg-opacity-10"></div>
        </div>
      </div>
      {/* Body */}
      <div className="flex flex-col gap-[10px] px-[10px] pb-[12px]">
        <div className="flex flex-col gap-1">
          <div className="text-[15px] font-medium">{item.name}</div>
          <div className="flex gap-2">
            <div className="text-xs font-normal text-gray8">
              {item.distance}
            </div>
            <div className="truncate text-xs font-normal text-gray7">
              {item.location}
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-[2px]">
            <div className="text-sm font-normal text-gray8">{item.rating}</div>
            <img src={StarIcon} alt="" />
          </div>
          <div className="flex items-center gap-[2px] rounded-[12px] border border-stroke1 bg-white px-[8px] py-[3px]">
            <img src={CouponIcon} alt="" />
            <div className="text-xs font-normal text-gray8">{item.coupon}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseHistory;

const purchaseHistory: Store[] = [
  {
    image: BuyHistoryImg,
    name: "Tiệm Nail & Gội đầu Kiki",
    distance: "2.9km",
    location: "Quận 4, Thành phố Hồ Chí Minh",
    rating: 4.9,
    coupon: "Giảm 60.000đ",
    tag: "Spa",
  },
  {
    image: BuyHistoryImg,
    name: "Tiệm Nail & Gội đầu Kiki",
    distance: "2.9km",
    location: "Quận 4, Thành phố Hồ Chí Minh",
    rating: 4.9,
    coupon: "Giảm 60.000đ",
    tag: "Spa",
  },
  {
    image: BuyHistoryImg,
    name: "Tiệm Nail & Gội đầu Kiki",
    distance: "2.9km",
    location: "Quận 4, Thành phố Hồ Chí Minh",
    rating: 4.9,
    coupon: "Giảm 60.000đ",
    tag: "Spa",
  },
  {
    image: BuyHistoryImg,
    name: "Tiệm Nail & Gội đầu Kiki",
    distance: "2.9km",
    location: "Quận 4, Thành phố Hồ Chí Minh",
    rating: 4.9,
    coupon: "Giảm 60.000đ",
    tag: "Spa",
  },
];
