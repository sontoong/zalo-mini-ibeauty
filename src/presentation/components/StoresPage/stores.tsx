import React, { FC, useEffect, useState } from "react";
import StoreImg from "../../static/store.jpg";
import StarIcon from "../../static/mynaui_star-solid.png";
import CouponIcon from "../../static/ticket-discount.png";
import CoinIcon from "../../static/coin.png";
import { Divider } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";

const StoreList = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [items, setItems] = useState<Store[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const continueFetching = () => {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  };

  useEffect(() => {
    if (!hasMore) return;

    const fetchAllStoresPagination = async () => {
      const response = await fetchStores(pageNumber);

      if (response) {
        if (response.length === 0) {
          setHasMore(false);
        }

        setItems((prevItems) => [...prevItems, ...response]);
      }
    };
    fetchAllStoresPagination();
  }, [pageNumber, hasMore]);

  return (
    <div
      id="scrollableDiv"
      className="mx-4 h-[84vh] overflow-auto py-[20px] hide-scrollbar"
    >
      <InfiniteScroll
        dataLength={items.length}
        next={continueFetching}
        hasMore={hasMore}
        loader={<div>Loading...</div>}
        scrollableTarget="scrollableDiv"
      >
        <div className="flex flex-col gap-[12px]">
          {items.map((store, index) => (
            <React.Fragment key={index}>
              <Store store={store} />
              {index < items.length - 1 ? <Divider className="m-0" /> : null}
            </React.Fragment>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

const Store: FC<{ store: Store }> = ({ store }) => {
  return (
    <div className="flex gap-[20px]">
      <div className="relative size-[114px] shrink-0 overflow-hidden rounded-[8px]">
        {/* Tag */}
        <div className="absolute right-2 top-2 z-[2] flex items-center justify-center rounded-[10px] bg-primary1 px-[4px] pb-[4px] pt-[2px] text-xs font-medium leading-none text-primary6">
          {store.tag}
        </div>
        {/* Img */}
        <div className="relative size-full">
          <img src={store.image} alt="" className="size-full object-cover" />
          {/* Overlay */}
          <div className="absolute inset-0 z-[1] bg-black bg-opacity-10"></div>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-[12px] overflow-hidden">
        <div className="flex flex-col gap-[4px]">
          <div className="text-[15px] font-medium">{store.name}</div>
          <div className="flex flex-col gap-[4px]">
            <div className="flex gap-[8px]">
              <div className="text-xs font-normal text-gray8">
                {store.distance}
              </div>
              <div className="truncate text-xs font-normal text-gray7">
                {store.location}
              </div>
            </div>
            <div className="flex items-center gap-[4px]">
              <div className="size-[16px]">
                <img src={CoinIcon} alt="" className="size-full object-cover" />
              </div>
              <div className="text-xs font-normal text-gray7">
                {store.price}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-[2px]">
            <div className="text-sm font-normal text-gray8">{store.rating}</div>
            <img src={StarIcon} alt="" />
          </div>
          <div className="flex items-center gap-[4px]">
            <img src={CouponIcon} alt="" />
            <div className="text-xs font-normal text-gray8">{store.coupon}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreList;

export type Store = {
  image: string;
  name: string;
  distance: string;
  location: string;
  rating: number;
  coupon: string;
  tag: string;
  price?: string;
};

const stores: Store[] = Array.from({ length: 30 }).map((_) => ({
  image: StoreImg,
  name: "Tiệm Nail & Gội đầu Kiki",
  distance: "2.9km",
  location: "Quận 4, Thành phố Hồ Chí Minh",
  rating: 4.9,
  coupon: "Giảm 60.000đ",
  tag: "Làm nail",
  price: "300k - 400k",
}));

//Fake API
const fetchStores = (page: number, limit: number = 10): Promise<Store[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;
      const paginatedStores = stores.slice(startIndex, endIndex);

      resolve(paginatedStores);
    }, 800);
  });
};
