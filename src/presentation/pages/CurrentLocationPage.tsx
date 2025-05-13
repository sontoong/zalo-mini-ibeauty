import React from "react";
import { Header, Page } from "zmp-ui";
import ArrowLeftIcon from "../static/arrow-left.png";

import { Divider } from "antd";
import {
  CurrentLocationPageHead,
  CurrentLocationPageMap,
} from "../components/CurrentLocationPage";

const CurrentLocationPage = () => {
  return (
    <Page className="relative flex flex-1 flex-col bg-white">
      <div>
        <Header
          title={
            (
              <div className="relative">
                <div className="absolute left-[40%] top-1/2 -translate-x-1/2 -translate-y-1/2 text-xl font-medium">
                  Vị trí của bạn
                </div>
              </div>
            ) as unknown as string
          }
          className="topbar no-border h-auto flex-none pl-4"
          backIcon={
            <div className="absolute inset-1/2 flex size-[40px] -translate-x-1/3 -translate-y-1/2 items-center justify-center rounded-full bg-surface">
              <img src={ArrowLeftIcon} />
            </div>
          }
        />
        <CurrentLocationPageHead />
        <Divider className="mx-0 mb-0 mt-[14px]" />
      </div>
      <div className="relative flex-1 overflow-hidden">
        <CurrentLocationPageMap />
      </div>
    </Page>
  );
};

export default CurrentLocationPage;
