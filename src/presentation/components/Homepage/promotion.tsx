import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import PromoImg from "../../static/promo.png";
import { Button } from "../common/button";

const Promotion = () => {
  return (
    <div>
      <Swiper
        spaceBetween={10}
        slidesPerView={"auto"}
        className="h-full px-4 pb-[35px]"
        pagination={true}
        modules={[Pagination]}
      >
        {Array.from({ length: 3 }).map((_, index) => (
          <SwiperSlide
            key={index}
            className="!flex !w-[calc(100%-6px)] items-center"
          >
            <div className="relative h-[124px] w-full overflow-hidden rounded-[12px]">
              <div
                className="absolute inset-0 z-10 p-[20px]"
                style={{
                  background:
                    "linear-gradient(270deg, rgba(0, 0, 0, 0) 23.76%, rgba(0, 0, 0, 0.5) 100%)",
                }}
              >
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col gap-1">
                    <div className="text-lg font-medium text-white">
                      Giảm 20% Pink Spa
                    </div>
                    <div className="text-xs font-normal text-white">
                      Ưu đãi ngày 20/10
                    </div>
                  </div>
                  <Button
                    text={
                      <div className="text-xs font-normal text-white">
                        Đặt lịch ngay
                      </div>
                    }
                    className="h-[30px] w-[98px] flex-none rounded-[100px] bg-primary5"
                  />
                </div>
              </div>
              <img src={PromoImg} className="size-full object-cover" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Promotion;
