import React, { FC } from "react";
import ServiceImg1 from "../../static/service-1.png";
import ServiceImg2 from "../../static/service-2.png";
import { useNavigate } from "react-router-dom";

const ServiceList = () => {
  return (
    <div className="flex flex-col gap-[14px]">
      <div className="pl-4 text-xl font-medium">Dịch vụ</div>
      <div className="hide-scrollbar flex gap-[20px] overflow-x-auto px-4">
        {services.map((service, index) => (
          <ServiceItem key={index} service={service} />
        ))}
      </div>
    </div>
  );
};

const ServiceItem: FC<{ service: Service }> = ({ service }) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col gap-2"
      onClick={() => navigate(service.linkTo)}
    >
      <div className="flex size-[64px] items-center justify-center overflow-hidden rounded-full bg-surface">
        <img
          src={service.image}
          alt=""
          className="size-[36px] object-contain"
        />
      </div>
      <div className="text-center text-xs font-normal">{service.name}</div>
    </div>
  );
};

export default ServiceList;

type Service = {
  image: string;
  name: string;
  linkTo: string;
};

const services = [
  { image: ServiceImg1, name: "Làm nail", linkTo: "/services/1" },
  { image: ServiceImg2, name: "Gội đầu", linkTo: "/services/2" },
  { image: ServiceImg2, name: "Gội đầu", linkTo: "/services/3" },
  { image: ServiceImg2, name: "Gội đầu", linkTo: "/services/4" },
  { image: ServiceImg2, name: "Gội đầu", linkTo: "/services/5" },
  { image: ServiceImg2, name: "Gội đầu", linkTo: "/services/6" },
  { image: ServiceImg2, name: "Gội đầu", linkTo: "/services/7" },
];
