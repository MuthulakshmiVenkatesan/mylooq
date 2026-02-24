import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Button } from "../../../components/Ui/Button";
import { SearchIcon, TickIcon, MinusIcon, PlusIcon } from "../../../components/customfile/icons";
import { Checkbox, CheckboxIndicator } from "../../../components/Ui/Checkbox";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../../components/Ui/Tabs";
import { ServiceSlider } from "./ServiceSlider";

const categories = ["LooQer", "Hair", "Salon", "Makeup", "Hair and care", "Spa", "Massage"];
const services = [
  { label: "Deep cleaning facial", price: 40 },
  { label: "Brightening facial", price: 45 },
  { label: "Detox facial", price: 40 },
];

// export type ServicesStepProps = {
//   categories: string[];
//   selectedCategory: string;
//   onSelectCategory: (category: string) => void;
//   services: { label: string; price: number }[];
//   selectedServices: { label: string; price: number }[];
//   setSelectedServices: (services: { label: string; price: number }[]) => void;
//   servicePrices: { [key: string]: number };
//   onServicePriceChange: (serviceLabel: string, price: number) => void;
//   selectedSliderService?: { icon: string; label: string } | null;
//   onSliderServiceSelect?: (service: { icon: string; label: string }) => void;
// };

function ServicesStep({}) {
  const location = useLocation();
  const isServicesRoute = location.pathname.includes("/services");
  const [selectedCategory, setSelectedCategory] = useState("Salon");
  const [selectedServices, setSelectedServices] = useState<{ label: string; price: number }[]>([]);
  const [servicePrices, setServicePrices] = useState<{ [key: string]: number }>({});
  const [selectedSliderService, setSelectedSliderService] = useState<{ icon: string; label: string } | null>(null);
  const handleServicePriceChange = (serviceLabel: string, newPrice: number) => {
    setServicePrices((prev) => ({
      ...prev,
      [serviceLabel]: Math.max(1, newPrice)
    }));
  };

  const handleSliderServiceSelect = (service: { icon: string; label: string }) => {
    setSelectedSliderService(service);
  };
  return (
    <div className={`bg-[#fff] p-[24px_30px_0px] flex-1 max-sm:p-[24px_15px_0px] mt-[120px] max-sm:mt-[118px] max-sm:pb-[0px] ${isServicesRoute ? "!m-[0] pt-[60px] pb-[80px] max-sm:pb-[30px]" : ""}`}>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col mb-[40px]">
          <h4 className="m-[0px] text-[24px] font-[Bold] text-[#000] text-center text30px">Your Services</h4>
          <p className="m-[0px] text-[14px] font-[Regular] text-[#000] text-center">
            Select categories from the list to add the services you are willing to provide.
          </p>
        </div>
        <div className="flex items-center flex-col laptop_width">
          <div className="flex items-center bg-[#EFEFEF] rounded-full pl-[25px] pr-[4px] w-[480px] mb-[50px] max-sm:w-full max-sm:mb-[20px]">
            <input
              className="py-[12px] text-[#878387] font-[Regular] text-[14px] flex-1 rounded-full w-full bg-transparent border-none outline-none focus:outline-none p-[0] placeholder:text-[#878387]"
              placeholder="Search services"
            />
            <Button className="rounded-full bg-[#6E2C91] text-white border-none w-[40px] h-[40px] flex items-center justify-center">
              <SearchIcon className="w-[16px] h-[16px]" />
            </Button>
          </div>
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
            <div className="w-full max-sm:overflow-x-auto max-sm:w-[calc(94vw-15px)] hide-scrollbar laptop_tabs">
              <TabsList className="flex items-center justify-center gap-[6px] rounded-full bg-[#F8F8F8] p-[4px] mb-[50px] max-sm:justify-start max-sm:min-w-max">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="cursor-pointer shadow-[0_4px_15px_rgba(0,0,0,0.1)] rounded-full border-none p-[16px_50px] font-[SemiBold] text-[14px] data-[state=active]:bg-[#000] data-[state=active]:text-[#fff] data-[state=inactive]:bg-[#fff] data-[state=inactive]:text-[#000] max-sm:flex-shrink-0"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            {categories.map((category) => (
              <TabsContent key={category} value={category}>
                <div className="flex flex-col gap-[10px]">
                  <div>
                    <ServiceSlider
                      onServiceSelect={handleSliderServiceSelect}
                      selectedService={selectedSliderService}
                    />
                  </div>
                  <div>
                    <div className="flex flex-col gap-[10px] bg-[#F8F8F8] p-[50px] rounded-[30px] max-sm:p-[14px]">
                      {services.map((service) => {
                        const isSelected = selectedServices.some(selected => selected.label === service.label);
                        const showPriceControls = isSelected;
                        return (
                          <div
                            key={`${category}-${service.label}`}
                            className={`flex-wrap flex items-center justify-between rounded-[30px]  p-[16px_30px] transition shadow-[0_4px_15px_rgba(0,0,0,0.1)] max-sm:p-[18px_20px] ${isSelected ? "bg-[#F6D3DA] " : "bg-[#fff] "
                              }`}
                          >
                            <div className="flex items-center gap-[16px]">
                              <Checkbox
                                checked={isSelected}
                                onCheckedChange={(checked) => {
                                  if (checked) {
                                    // Add service to selected services
                                    setSelectedServices([...selectedServices, service]);
                                  } else {
                                    // Remove service from selected services
                                    setSelectedServices(selectedServices.filter(selected => selected.label !== service.label));
                                  }
                                }}
                                className={`w-[15px] h-[15px] rounded-[5px] border flex items-center justify-center cursor-pointer  ${isSelected ? "border-[#000] bg-[#000]" : "border-[#878387] bg-[#fff]"
                                  }`}
                              >
                                <CheckboxIndicator className="text-white">
                                  <TickIcon className="w-[10px] h-[10px]" />
                                </CheckboxIndicator>
                              </Checkbox>
                              <div>
                                <h4 className="font-[Medium] text-[14px] text-[#000] m-[0]">{service.label}</h4>
                              </div>
                            </div>
                            {showPriceControls && (
                              <div className="flex items-center gap-[14px] flex-wrap max-sm:mt-[6px]">
                                <p className="font-[Regular] text-[14px] text-[#000] m-[0]">Set your price</p>
                                <div className="flex items-center gap-[40px] bg-[#FFF] rounded-[50px] p-[4px] max-sm:justify-between max-sm:w-full max-sm:gap-[50px]">
                                  <button
                                    onClick={() => handleServicePriceChange(service.label, (servicePrices[service.label] || service.price) - 5)}
                                    className="bg-[#6E2C91] w-[42px] h-[42px] rounded-full flex items-center justify-center border-none outline-none max-sm:p-[10px] max-sm:w-auto max-sm:h-auto"
                                  >
                                    <MinusIcon className="w-[16px] h-[16px]" />
                                  </button>
                                  <p className="m-[0px] font-[SemiBold] text-[14px] text-[#000]">${(servicePrices[service.label] || service.price).toFixed(2)} USD</p>
                                  <button
                                    onClick={() => handleServicePriceChange(service.label, (servicePrices[service.label] || service.price) + 5)}
                                    className="bg-[#6E2C91] w-[42px] h-[42px] rounded-full flex items-center justify-center border-none outline-none max-sm:p-[10px] max-sm:w-auto max-sm:h-auto"
                                  >
                                    <PlusIcon className="w-[16px] h-[16px]" />
                                  </button>
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
      {isServicesRoute && (
        <div className="flex items-center justify-center gap-4">
          <button
            className="max-sm:w-full mt-[40px] w-[600px] border-none shadow-none outline-none cursor-pointer bg-[#6E2C91] rounded-[50px] py-[14px] text-[#FFF] font-[Medium] text-[14px] max-sm:mt-[20px]"
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
}

export default ServicesStep