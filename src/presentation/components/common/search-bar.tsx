import { AutoComplete, AutoCompleteProps, ConfigProvider, Input } from "antd";
import React, { FC } from "react";
import SearchIcon from "../../static/search-normal.png";
import SearchHistoryIcon from "../../static/ph_clock-countdown.png";

export const SearchBar: FC<SearchBarProps> = ({
  placeholder,
  className,
  options,
  ...props
}) => {
  return (
    <ConfigProvider theme={{ components: { Select: { zIndexPopup: 0 } } }}>
      <AutoComplete
        optionRender={(option) => (
          <div className="flex items-center gap-[6px] py-[10px]">
            <div className="size-[16px]">
              <img
                src={SearchHistoryIcon}
                alt=""
                className="size-full object-contain"
              />
            </div>
            <div className="text-sm font-normal text-gray5">{option.label}</div>
          </div>
        )}
        getPopupContainer={(trigger) => trigger.parentNode}
        dropdownRender={(menus) => (
          <div className="px-1 pb-[14px]">
            <div className="mb-[6px] pl-3 text-sm font-medium">
              Lịch sử tìm kiếm
            </div>
            {menus}
          </div>
        )}
        dropdownStyle={{
          width: "100vw",
          left: 0,
          top: "50%",
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          padding: "40px 0 0 0",
        }}
        filterOption={(inputValue, option) => {
          if (typeof option?.value === "string") {
            return (
              option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
              -1
            );
          }
          return (
            String(option?.value || "")
              .toUpperCase()
              .indexOf(inputValue.toUpperCase()) !== -1
          );
        }}
        className="customSelect flex size-full justify-center"
        options={options}
        {...props}
      >
        <Input
          placeholder={placeholder}
          prefix={<img src={SearchIcon} />}
          className={`z-10 text-sm font-normal !ring-0`.concat(
            className ? className : "",
          )}
        />
      </AutoComplete>
    </ConfigProvider>
  );
};

type SearchBarProps = {
  placeholder?: string;
  className?: string;
} & AutoCompleteProps;
