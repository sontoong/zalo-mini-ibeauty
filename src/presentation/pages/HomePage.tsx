import React, { FC, useEffect, useState } from "react";
import { Page } from "zmp-ui";
import {
  HomePageHeader,
  HomePageHeaderFixed,
  HomePagePromotion,
  HomePagePurchaseHistory,
  HomePageServiceList,
  HomePageStores,
} from "../components/Homepage";

const HomePage: FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      const scrollTop = event.target.scrollTop;
      setScrollY(scrollTop);
    };

    const scrollContainer = document.querySelector(
      ".homepage-scroll-container",
    );

    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll, {
        passive: true,
      });

      return () => {
        scrollContainer.removeEventListener("scroll", handleScroll);
      };
    } else {
      console.log("Scroll container not found");
      return;
    }
  }, []);

  const opacity = Math.min(scrollY / 100, 1);

  return (
    <Page className="relative flex flex-1 flex-col bg-white">
      <div className="homepage-scroll-container flex-1 overflow-auto hide-scrollbar">
        <HomePageHeaderFixed opacity={opacity} />
        <HomePageHeader />
        <div className="flex flex-col gap-[32px] pb-6 pt-[60px]">
          <HomePageServiceList />
          <HomePagePromotion />
          <HomePagePurchaseHistory />
          <HomePageStores />
        </div>
      </div>
    </Page>
  );
};

export default HomePage;
