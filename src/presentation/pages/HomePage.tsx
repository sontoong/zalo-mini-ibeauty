import React, { FC } from "react";
import { Header, Page } from "zmp-ui";
import {
  HomePageHead,
  HomePagePromotion,
  HomePagePurchaseHistory,
  HomePageServiceList,
  HomePageStores,
} from "../components/Homepage";
import HomeIcon from "../static/home-icon-outline.png";

const HomePage: FC = () => {
  return (
    <Page className="relative flex flex-1 flex-col bg-white">
      <div className="relative">
        <Header
          title={
            (
              <div className="pb-[88px] pr-[90px]">
                <div className="flex items-center gap-[12px]">
                  <img
                    src={HomeIcon}
                    alt=""
                    className="size-[24px] object-cover"
                  />
                  <div className="text-lg font-medium">Đăng nhập</div>
                </div>
              </div>
            ) as unknown as string
          }
          className="topbar no-border h-auto flex-none !bg-primary5 !pb-0 pl-4"
          showBackIcon={false}
          textColor="white"
          style={{
            borderBottomLeftRadius: "100% 70px",
            borderBottomRightRadius: "100% 70px",
          }}
        />
        <HomePageHead />
      </div>
      <div className="flex-1 overflow-auto">
        <div className="flex flex-col gap-[32px] pb-6 pt-[60px]">
          <HomePageServiceList />
          <HomePagePromotion />
          <HomePagePurchaseHistory />
          <HomePageStores />
        </div>
      </div>
    </Page>
  );
};

export default HomePage;
