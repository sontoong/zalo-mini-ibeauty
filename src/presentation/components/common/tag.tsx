import React, { FC } from "react";
import { ConfigProvider, Tag as OriginTag, TagProps } from "antd";

export const Tag: FC<Props> = ({ color, ...rest }) => {
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

type Props = {
  color?: string;
} & TagProps;
