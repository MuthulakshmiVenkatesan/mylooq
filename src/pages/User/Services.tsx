import { useState } from "react";
import { Link } from "react-router-dom";
import service1 from "../../assets/img/userservice/1.png";
import service2 from "../../assets/img/userservice/head.png";
import service3 from "../../assets/img/userservice/salon.png";
import service4 from "../../assets/img/userservice/brush.png";
import service5 from "../../assets/img/userservice/hair.png";
import service6 from "../../assets/img/userservice/lotus.png";
import service7 from "../../assets/img/userservice/face.png";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

const services: Service[] = [
  {
    id: "looqer",
    title: "LooQer",
    description: "Professionals are here",
    icon: service1,
  },
  {
    id: "hair",
    title: "Hair",
    description: "Get styled with perfect hair",
    icon: service2,
  },
  {
    id: "salon",
    title: "Salon",
    description: "Experience premium salon services",
    icon: service3,
  },
  {
    id: "makeup",
    title: "Makeup",
    description: "Look flawless with makeup",
    icon: service4,
  },
  {
    id: "hair-care",
    title: "Hair and Care",
    description: "Nourish and protect your hair",
    icon: service5,
  },
  {
    id: "spa",
    title: "Spa",
    description: "Refresh your body and mind",
    icon: service6,
  },
  {
    id: "massage",
    title: "Massage",
    description: "Relax and rejuvenate with massage",
    icon: service7,
  },
  
];

export default function Services() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const handleServiceClick = (serviceId: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  return (
    <div className="bg-[#fff] mt-[70px]">
      <div className="px-5 lg:px-[75px] py-[80px] common_p_80 max-sm:py-[0px_40px] max-w-[1230px] mx-auto w-full">
        {/* Header Section */}
        <div className="text-center mb-[40px] max-sm:mb-[30px]">
          <h1 className="text-[32px] font-[Bold] text-[#000] mb-[6px] max-sm:text-[24px]">
            MyLooQ Services
          </h1>
          <p className="text-[14px] font-[Regular] text-[#000]">
            Select services you needed most
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-3 gap-[20px] max-sm:grid-cols-1 max-sm:gap-[16px] service_grid">
          {services.map((service) => {
            const isSelected = selectedServices.includes(service.id);
            return (
              <Link to='/user/search' className={`group relative bg-[#fff] border rounded-[30px] p-[30px]  cursor-pointer transition-all max-sm:p-[20px] max-sm:gap-[16px] ${isSelected
                ? "border-[#6E2C91]"
                : "border-[rgba(0,0,0,0.10)]"
              }`}>
                <button
                  key={service.id}
                  onClick={() => handleServiceClick(service.id)}
                  className="w-full flex items-center gap-[20px] cursor-pointer"
                >
                  {/* Icon Circle */}
                  <div
                    className={`flex-shrink-0 w-[80px] h-[80px] rounded-full flex items-center justify-center transition-all max-sm:w-[60px] max-sm:h-[60px] ${isSelected ? "bg-[#6E2C91]" : "bg-[#6E2C91]"
                      }`}
                  >
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-[50px] h-[50px] object-contain max-sm:w-[40px] max-sm:h-[40px]"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-left">
                    <h3 className="text-[16px] font-[SemiBold] text-[#000] mb-[4px]">
                      {service.title}
                    </h3>
                    <p className="text-[14px] font-[Regular] text-[#878387]">
                      {service.description}
                    </p>
                  </div>
                </button>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

