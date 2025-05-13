import React, { FC } from "react";
import ServiceImg1 from "../../static/service-1.png";
import ServiceImg2 from "../../static/service-2.png";
import { useNavigate, useParams } from "react-router-dom";
import CheckIcon from "../../static/check-icon.png";
import clsx from "clsx";

const ServiceList = () => {
  const { serviceId } = useParams();

  return (
    <div className="hide-scrollbar flex gap-[20px] overflow-x-auto px-4">
      {services.map((service, index) => (
        <div key={index} className="relative">
          <ServiceItem
            service={service}
            active={(serviceId as unknown as number) == index + 1}
          />
        </div>
      ))}
    </div>
  );
};

const ServiceItem: FC<{ service: Service; active?: boolean }> = ({
  service,
  active,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className={clsx("flex flex-col gap-2 py-2", {
        "border-b-2 border-primary6": active,
      })}
      onClick={() => navigate(service.linkTo, { replace: true })}
    >
      <div className="relative">
        <div className="flex size-[64px] items-center justify-center overflow-hidden rounded-full bg-surface">
          <img
            src={service.image}
            alt=""
            className="size-[36px] object-contain"
          />
        </div>
        {active ? (
          <div className="absolute bottom-0 right-0 size-[20px]">
            <img src={CheckIcon} alt="" className="size-full object-cover" />
          </div>
        ) : null}
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
