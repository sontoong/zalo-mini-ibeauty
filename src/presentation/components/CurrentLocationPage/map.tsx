import React from "react";
import { Map } from "../common/map";
import { Button } from "../common/button";

const MapContainer = () => {
  return (
    <div className="h-[calc(100vh-126px)] w-full">
      <Map lat={51.505} long={-0.09} />
      <div className="absolute inset-x-[16px] bottom-[30px] z-[9999]">
        <Button
          text={
            <div className="text-sm font-normal text-white">
              Chọn địa điểm này
            </div>
          }
          className="w-full rounded-3xl bg-primary5 py-[8px]"
        />
      </div>
    </div>
  );
};

export default MapContainer;
