import React, { FC, useContext, useState } from "react";
import { Header, Page } from "zmp-ui";
import { SearchBar } from "../components/common/search-bar";
import { Divider } from "antd";
import { Footer } from "../components/common/footer";
import LocationIcon from "../static/location.png";
import EditIcon from "../static/edit-2.png";
import QRIcon from "../static/qr-icon.png";
import { Button } from "../components/common/button";

const HomePage: FC = () => {
  return (
    <Page className="relative flex flex-1 flex-col bg-white">
      <div className="relative">
        <Header
          title={
            (
              <div className="pb-[88px] pr-[90px]">
                <div className="flex gap-3">
                  <div className="text-lg font-medium">Chào Thu Hồng,</div>
                </div>
              </div>
            ) as unknown as string
          }
          className="topbar no-border !bg-primary5 h-auto flex-none !pb-0 pl-4"
          showBackIcon={false}
          textColor="white"
          style={{
            borderBottomLeftRadius: "100% 70px",
            borderBottomRightRadius: "100% 70px",
          }}
        />
        {/* Search bar */}
        <div
          className="absolute bottom-0 left-3 right-3 z-10 flex translate-y-1/3 flex-col gap-[10px] rounded-lg bg-white px-[12px] pb-[12px] pt-[10px]"
          style={{ boxShadow: "0px 2px 8px 0px #2054571F" }}
        >
          <div className="flex flex-col gap-[2px]">
            <div className="text-gray8 text-xs font-normal">
              Vị trí của bạn:
            </div>
            <div className="flex items-center justify-between">
              <div className="flex max-w-[calc(100%-28px)] items-center gap-[4px]">
                <img
                  src={LocationIcon}
                  alt=""
                  className="size-[16px] shrink-0"
                />
                <div className="truncate text-sm font-medium">
                  284/41/2 Lý thường kiệt, phường 13, quận 10
                </div>
              </div>
              <img src={EditIcon} alt="" className="size-[18px] shrink-0" />
            </div>
          </div>
          <Divider className="m-0" />
          <div className="flex gap-[12px]">
            <div className="flex-1">
              <SearchBar
                placeholder="Tìm ưu đãi"
                className="!border-stroke2 h-[31px] rounded-[24px] !border text-sm font-normal"
              />
            </div>
            <Button.Icon
              icon={<img src={QRIcon} />}
              className="border-stroke1 rounded-[8px] border p-1"
              style={{ boxShadow: "0px 1px 6px 0px #0C59730F" }}
            />
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-auto">
        <div className="flex flex-col gap-4 pb-6 pt-[40px]"></div>
      </div>
      <Footer />
    </Page>
  );
};

export default HomePage;
