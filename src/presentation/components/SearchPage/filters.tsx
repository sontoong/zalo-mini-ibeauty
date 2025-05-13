import React, { useState } from "react";
import { CheckableTag } from "../common/tag";
import { Icon, Picker } from "zmp-ui";
import ArrowDownIcon from "../../static/arrow-down.png";

const Filters = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleChange = (tag: string, checked: boolean) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    setSelectedTags(nextSelectedTags);
  };

  return (
    <div className="flex gap-[12px] overflow-auto bg-surface px-[16px] py-[8px]">
      {tagsData.map<React.ReactNode>((tag) => (
        <CheckableTag
          key={tag}
          checked={selectedTags.includes(tag)}
          onCheckChange={(checked) => handleChange(tag, checked)}
          className="m-0 rounded-[20px] px-[8px] py-[4px] text-xs font-normal"
        >
          {tag}
        </CheckableTag>
      ))}
      {/* Location */}
      <Picker
        mask
        maskClosable
        title="Khu vực"
        placeholder="Khu vực"
        suffix={
          <div className="size-[14px]">
            <img src={ArrowDownIcon} className="size-full object-cover" />
          </div>
        }
        data={[
          {
            options: [
              {
                key: "key1",
                value: 1,
                displayName: "TP. Hồ Chí Minh",
              },
            ],
            name: "option",
          },
        ]}
        action={{
          text: "Close",
          close: true,
        }}
        inputClass="!text-sm !border !border-stroke2 service-filter-dropdown pr-2 !rounded-[20px]"
        formatPickedValueDisplay={(value) => {
          return value.option?.displayName;
        }}
      />
    </div>
  );
};

export default Filters;

const tagsData = ["Gần nhất", "Đang giảm giá"];
