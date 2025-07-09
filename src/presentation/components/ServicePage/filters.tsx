import React, { useState } from "react";
import { CheckableTag } from "../common/tag";
import { Icon, Picker } from "zmp-ui";
import ArrowDownIcon from "../../static/arrow-down.png";
import { Button } from "../common/button";
import { LocationPopup } from "./location-popup";

const Filters = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleChange = (tag: string, checked: boolean) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    setSelectedTags(nextSelectedTags);
  };

  return (
    <div className="flex gap-[12px] overflow-auto bg-surface px-[16px] py-[12px]">
      {tagsData.map<React.ReactNode>((tag) => (
        <CheckableTag
          key={tag}
          checked={selectedTags.includes(tag)}
          onCheckChange={(checked) => handleChange(tag, checked)}
          className="m-0 rounded-[20px] px-[8px] py-[4px] text-xs font-normal"
          activeClassName="!bg-green1 !border-green5"
          color="#3DAC78"
        >
          {tag}
        </CheckableTag>
      ))}
      {/* Location */}
      <LocationPopup>
        {({ open }, location) => (
          <Button
            text={
              <div className="flex items-center gap-[4px]">
                <div className="text-xs font-normal text-gray8">
                  {location ? location : "Khu vực"}
                </div>
                <img
                  src={ArrowDownIcon}
                  alt=""
                  className="size-[14px] object-cover"
                />
              </div>
            }
            className="flex-none rounded-[20px] border border-stroke2 bg-white px-[8px]"
            onClick={open}
          />
        )}
      </LocationPopup>
    </div>
  );
};

export default Filters;

const tagsData = ["Gần nhất", "Đang giảm giá"];
