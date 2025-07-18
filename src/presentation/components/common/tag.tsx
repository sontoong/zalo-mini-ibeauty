import React, { FC } from "react";
import { ConfigProvider, Tag as OriginTag, TagProps } from "antd";
import CheckIconMini from "../../static/check-icon-mini.png";

const Tag: FC<Props> = ({ color, ...rest }) => {
  return (
    <ConfigProvider
      theme={{
        token: { blue: color ? color : "#007AFF" },
      }}
    >
      <OriginTag color="blue" {...rest} />
    </ConfigProvider>
  );
};

const CheckableTag: FC<CTagProps> = ({
  color,
  checked,
  onCheckChange,
  className,
  activeClassName,
  ...rest
}) => {
  return (
    <ConfigProvider
      theme={{
        token: { blue: color ? color : "#007AFF" },
      }}
    >
      {checked ? (
        <div className="relative">
          <OriginTag
            color="blue"
            className={`${className} ${activeClassName}`}
            onClick={() => onCheckChange?.(false)}
            {...rest}
          />
          <div className="absolute bottom-0 right-0 size-[10px]">
            <img
              src={CheckIconMini}
              alt=""
              className="size-full object-cover"
            />
          </div>
        </div>
      ) : (
        <OriginTag
          color="white"
          className={`border !border-stroke1 !text-gray8 ${className}`}
          onClick={() => onCheckChange?.(true)}
          {...rest}
        />
      )}
    </ConfigProvider>
  );
};

export { Tag, CheckableTag };

type Props = {
  color?: string;
} & TagProps;

type CTagProps = {
  color?: string;
  checked?: boolean;
  onCheckChange?: (checked: boolean) => void;
  className?: string;
  activeClassName?: string;
} & TagProps;
