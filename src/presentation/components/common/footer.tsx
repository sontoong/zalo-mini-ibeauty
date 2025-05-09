import { HomeFilled, HomeOutlined } from "@ant-design/icons";

import React from "react";
import TransitionLink from "./transition-link";

const NAV_ITEMS = [
  {
    name: "Tài liệu y khoa",
    path: "/",
    icon: ({ active }: { active: boolean }) =>
      active ? <HomeFilled /> : <HomeOutlined />,
  },
];

function Footer() {
  return (
    <div
      className="p w-ful grid pt-2"
      style={{
        gridTemplateColumns: `repeat(${NAV_ITEMS.length}, 1fr)`,
        paddingBottom: `max(16px, env(safe-area-inset-bottom)`,
      }}
    >
      {NAV_ITEMS.map((item) => {
        return (
          <TransitionLink
            to={item.path}
            key={item.path}
            className="flex cursor-pointer flex-col items-center space-y-0.5 p-1 pb-0.5"
          >
            {({ isActive }) => (
              <>
                <div className="flex h-6 w-6 items-center justify-center">
                  <item.icon active={isActive} />
                </div>
                <div className={`text-2xs ${isActive ? "text-primary" : ""}`}>
                  {item.name}
                </div>
              </>
            )}
          </TransitionLink>
        );
      })}
    </div>
  );
}

export { Footer };
