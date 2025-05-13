import React, { FC, useRef } from "react";
import { SearchBar, SearchBarRef } from "../common/search-bar";
import { Button } from "../common/button";
import QRIcon from "../../static/qr-icon-primary7.png";
import { Tag } from "antd";
import { Form } from "../common/form";

const Head: FC<Props> = ({ callbackFn }) => {
  const [form] = Form.useForm();
  const searchBarRef = useRef<SearchBarRef>(null);

  const initialValues = {
    search: "",
  };

  const handleDropdownHeightChange = (height: number | null) => {
    const searchHistory = document.getElementById("search-page-search-history");

    if (searchHistory) {
      if (height === null) {
        searchHistory.style.height = "auto";
      } else {
        searchHistory.style.height = `${Math.max(height - 75, 0)}px`;
      }
    }
  };

  const handleFormFinish = (e: any) => {
    callbackFn?.(e.search);
  };

  return (
    <div className="flex items-center gap-[12px]">
      <div className="z-10 flex-1">
        <Form
          form={form}
          onFinish={handleFormFinish}
          initialValues={initialValues}
        >
          <Form.Item name="search" noStyle>
            <SearchBar
              ref={searchBarRef}
              onDropdownHeightChange={handleDropdownHeightChange}
              placeholder="Tìm ưu đãi"
              className="ml-[16px] h-[31px] max-w-[calc(100%-16px)] rounded-[24px] !border !border-stroke2 text-sm font-normal"
              options={options}
              onSelect={() => form.submit()}
              extraMenuRender={
                <div className="flex gap-[7px]">
                  <Tag
                    color="#F5F6F7"
                    className="m-0 rounded-[24px] px-[8px] py-[6px]"
                  >
                    <div className="text-xs font-normal text-gray9">
                      Làm tóc
                    </div>
                  </Tag>
                  <Tag
                    color="#F5F6F7"
                    className="m-0 rounded-[24px] px-[8px] py-[6px]"
                  >
                    <div className="text-xs font-normal text-gray9">
                      Uốn tóc xoăn
                    </div>
                  </Tag>
                </div>
              }
            />
          </Form.Item>
        </Form>
      </div>
      <Button.Icon
        icon={<img src={QRIcon} />}
        className="mr-[16px] !rounded-[8px] border border-stroke1 p-1"
        style={{ boxShadow: "0px 1px 6px 0px #0C59730F" }}
      />
    </div>
  );
};

export default Head;

type Props = {
  callbackFn?: (arg?: any) => void;
};

const options = [
  { label: "Làm tóc xoăn tự nhiên", value: "Làm tóc xoăn tự nhiên" },
  { label: "Làm tóc thẳng", value: "Làm tóc thẳng" },
];
