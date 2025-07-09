import React from "react";
import { Header, Page } from "zmp-ui";
import ArrowLeftIcon from "../static/arrow-left.png";
import {
  ServicePageFilters,
  ServicePageHead,
  ServicePageServiceList,
  ServicePageStores,
} from "../components/ServicePage";
import { Divider } from "antd";

const ServicePage = () => {
  return (
    <Page className="relative flex flex-1 flex-col bg-white">
      <div>
        <Header
          title={
            (
              <div className="relative">
                <div className="absolute left-[40%] top-1/2 -translate-x-1/2 -translate-y-1/2 text-xl font-medium">
                  Dịch vụ
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
        <ServicePageHead />
      </div>
      <div className="flex-1 overflow-auto">
        <div className="flex flex-col gap-5 pb-6">
          <div>
            <ServicePageServiceList />
            <ServicePageFilters />
          </div>
          <ServicePageStores />
        </div>
      </div>
    </Page>
  );
};

export default ServicePage;
