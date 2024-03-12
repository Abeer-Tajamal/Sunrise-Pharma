import ServiceItem from "./ServiceItems";
import { servicesData1, servicesData2, servicesData3 } from "../../Data";
import "./Services.css";

const Services = () => {
  return (
    <div className="main-container">
      <div className="inner-container-services">
        {servicesData1.map((service, index) => (
          <ServiceItem key={index} {...service} />
        ))}
      </div>
      <div className="inner-container-services">
        {servicesData2.map((service, index) => (
          <ServiceItem key={index} {...service} />
        ))}
      </div>
      <div className="inner-container-services">
        {servicesData3.map((service, index) => (
          <ServiceItem key={index} {...service} />
        ))}
      </div>
    </div >
  );
};

export default Services;