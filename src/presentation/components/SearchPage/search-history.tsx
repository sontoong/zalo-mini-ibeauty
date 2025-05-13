import { Divider, Tag } from "antd";
import React, { FC } from "react";
import TrendUpIcon from "../../static/trend-up-icon.png";
import ClockIcon from "../../static/ph_clock-countdown.png";
import clsx from "clsx";

const SearchHistory = () => {
  return (
    <div
      id="search-page-search-history"
      className="flex flex-col gap-[20px] overflow-hidden px-[16px] pt-[5px]"
    >
      {/* Trending */}
      <div className="flex flex-col gap-[8px]">
        <div className="text-[15px] font-medium text-gray8">Nổi bật</div>
        <div className="flex gap-[7px]">
          <Tag color="#F5F6F7" className="m-0 rounded-[24px] px-[8px] py-[4px]">
            <div className="flex size-full items-center gap-[4px]">
              <div className="text-xs font-normal text-gray9">Làm tóc</div>
              <div className="size-[16px]">
                <img
                  src={TrendUpIcon}
                  alt=""
                  className="size-full object-cover"
                />
              </div>
            </div>
          </Tag>
          <Tag color="#F5F6F7" className="m-0 rounded-[24px] px-[8px] py-[4px]">
            <div className="flex size-full items-center gap-[4px]">
              <div className="text-xs font-normal text-gray9">Làm nail</div>
              <div className="size-[16px]">
                <img
                  src={TrendUpIcon}
                  alt=""
                  className="size-full object-cover"
                />
              </div>
            </div>
          </Tag>
        </div>
      </div>
      {/* Search history */}
      <div className="flex flex-col gap-[8px]">
        <div className="text-[15px] font-medium text-gray8">
          Tìm kiếm gần đây
        </div>
        <div className="flex flex-col gap-[8px]">
          {/* Search item */}
          {searchHistory.map((item, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center gap-[4px]">
                <div className="size-[16px]">
                  <img
                    src={ClockIcon}
                    alt=""
                    className="size-full object-cover"
                  />
                </div>
                <div className="text-sm font-normal">{item}</div>
              </div>
              {index < searchHistory.length - 1 && <Divider className="m-0" />}
            </React.Fragment>
          ))}
        </div>
      </div>
      <Divider className="m-0 border-t-[4px] border-stroke1" />
    </div>
  );
};

export default SearchHistory;

const searchHistory = ["Làm tóc", "Làm nail", "Makeup"];
