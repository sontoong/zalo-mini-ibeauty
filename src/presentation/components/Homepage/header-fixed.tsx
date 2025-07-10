import React, { FC } from "react";
import { Header as HeaderZMP } from "zmp-ui";
import { SearchBar } from "../common/search-bar";
import clsx from "clsx";

const HeaderFixed: FC<{ opacity: number }> = ({ opacity }) => {
  return (
    <HeaderZMP
      title={
        (
          <div className="pb-[12px] pr-[90px]">
            <SearchBar
              placeholder="Tìm dịch vụ, ưu đãi"
              className="h-[35px] rounded-[24px] text-sm font-normal"
            />
          </div>
        ) as unknown as string
      }
      className={clsx(
        "topbar no-border !absolute !z-[99999] h-auto flex-none !bg-primary5 !pb-0 pl-4 opacity-0",
        {
          "opacity-100": opacity === 1,
          "pointer-events-none": opacity === 0,
        },
      )}
      showBackIcon={false}
      textColor="white"
    />
  );
};

export default HeaderFixed;
