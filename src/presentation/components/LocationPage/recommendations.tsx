import { Divider } from "antd";
import React, { FC } from "react";
import HistoryIcon from "../../static/ph_clock-countdown.png";

const Recommendations = () => {
  return (
    <div className="flex flex-col gap-[12px]">
      <div className="text-[15px] font-medium text-gray8">Nổi bật</div>
      <div className="flex flex-col gap-[8px]">
        {recommendations.map(({ location, title }, index) => (
          <React.Fragment key={index}>
            <RecommendationItem location={location} title={title} />
            {index !== history.length - 1 && <Divider className="!my-0" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

const RecommendationItem: FC<RecommendationItemProps> = ({
  location,
  title,
}) => {
  return (
    <div className="flex items-start gap-[4px]">
      <div className="mt-1 size-[16px]">
        <img src={HistoryIcon} alt="" className="size-full object-cover" />
      </div>
      <div className="flex flex-col gap-[4px]">
        <div className="text-[15px] font-medium">{title}</div>
        <div className="text-xs font-normal text-gray7">{location}</div>
      </div>
    </div>
  );
};

export default Recommendations;

type RecommendationItemProps = {
  title: string;
  location: string;
};

const recommendations = [
  {
    title: "Dinh Độc Lập",
    location: "123, Lý Thường Kiệt, phường 13, quận 10",
  },
  {
    title: "Vincom Sư Vạn Hạnh",
    location: "34, Sư Vạn Hạnh, phường 13, quận 10",
  },
  {
    title: "Landmark 81",
    location: "34, Sư Vạn Hạnh, phường 13, quận 10",
  },
];
