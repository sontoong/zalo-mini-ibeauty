import React, { FC, useState } from "react";
import { createPortal } from "react-dom";
import { Sheet } from "zmp-ui";
import CloseIcon from "../../static/close-icon.png";
import CheckIconOutline from "../../static/check-icon-outline.png";
import { Form } from "../common/form";
import { SearchBar } from "../common/search-bar";
import { Radio } from "../common/radio";

const LocationPopup: FC<Props> = ({ children }) => {
  const [form] = Form.useForm();
  const [visible, setVisible] = useState<boolean>(false);
  const [location, setLocation] = useState<string>();

  const onFinish = (value: any) => {
    setLocation(locations.find((loc) => loc.value === value.location)?.label);
    setVisible(false);
  };

  const initialValues = {
    location: "",
  };

  return (
    <>
      {children({ open: () => setVisible(true) }, location)}
      {createPortal(
        <Sheet
          title={
            (
              <div className="absolute inset-x-[16px] flex items-center">
                <div
                  className="absolute right-0 ml-auto size-[12px]"
                  onClick={() => setVisible(false)}
                >
                  <img
                    src={CloseIcon}
                    alt=""
                    className="size-full object-cover"
                  />
                </div>
              </div>
            ) as unknown as string
          }
          visible={visible}
          onClose={() => {
            setVisible(false);
            form.resetFields();
          }}
          mask
          handler={false}
          unmountOnClose
          height={"87vh"}
          style={{
            background: "#FFF",
            borderRadius: "8px 8px 0 0",
          }}
        >
          <Form
            form={form}
            onFinish={onFinish}
            autoComplete="off"
            initialValues={initialValues}
            className="flex-1 px-[16px]"
          >
            <div>
              <SearchBar
                placeholder="Tìm khu vực"
                className="h-[35px] rounded-[24px] !border !border-stroke2 text-sm font-normal"
              />
            </div>
            <Form.Item name="location" noStyle>
              <Radio.ButtonGroup
                items={locations}
                render={(location) => (
                  <div className="p-[16px]" onClick={form.submit}>
                    <span className="text-base font-normal">
                      {location?.label}
                    </span>
                  </div>
                )}
                activeRender={(location) => (
                  <div className="flex justify-between p-[16px]">
                    <span className="text-base font-normal text-[#006AF5]">
                      {location?.label}
                    </span>
                    <img
                      src={CheckIconOutline}
                      alt=""
                      className="size-[24px] object-cover"
                    />
                  </div>
                )}
                className="flex"
                direction="column"
                divider={<div className="border-b border-stroke2" />}
              />
            </Form.Item>
          </Form>
        </Sheet>,
        document.body,
      )}
    </>
  );
};

export { LocationPopup };

type Props = {
  children: (methods: { open: () => void }, value: any) => React.ReactNode;
};

const locations = [
  {
    label: "Thành phố Hồ Chí Minh",
    value: "1",
  },
  {
    label: "Hà Nội",
    value: "2",
  },
  {
    label: "Bắc Giang",
    value: "3",
  },
  {
    label: "Nghệ an",
    value: "4",
  },
  {
    label: "Cần thơ",
    value: "5",
  },
  {
    label: "Trà Vinh",
    value: "6",
  },
];
