import { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  ArrowDownIcon,
  LocationIcon,
  PlusIcon,
} from "../../../components/customfile/icons";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../../../components/Ui/Select";
import SetLocation from "./SetLocation";
import { Input } from "../../../components/customfile/parts";

const locationOptions = ["Specified Location", "Any Location"];
const radiusOptions = ["25Km", "35Km", "50Km", "Other"];

function LocationStep({ onNavigateToServices }: { onNavigateToServices?: () => void }) {
  const location = useLocation();
  const [selectedLocation, setSelectedLocation] = useState(locationOptions[0]);
  const [selectedRadius, setSelectedRadius] = useState(radiusOptions[0]);
  const [bridalActive, setBridalActive] = useState(true);
  const [isSetLocationOpen, setSetLocationOpen] = useState(false);

  const isSpecifiedLocation = selectedLocation === "Specified Location";
  const isLocationRoute = location.pathname.includes("/location");

  const openSetLocation = () => setSetLocationOpen(true);
  const closeSetLocation = () => setSetLocationOpen(false);

  return (
    <div className={`bg-[#fff] p-[24px_30px_0px] flex-1 max-sm:p-[24px_15px_0px] mt-[120px] max-sm:mt-[118px] max-sm:pb-[0px] ${isLocationRoute ? "!m-[0] pt-[60px] pb-[80px] max-sm:pb-[30px] min-h-[100vh] max-sm:min-h-auto main_height" : ""}`}>
      <div className="flex flex-col items-center justify-center gap-6">
        <div className="flex flex-col w-full max-w-[600px] gap-3">
          <div className="flex flex-col mb-[24px]">
            <h4 className="m-[0px] text-[24px] font-[Bold] text-[#000] text-center text30px">Work Location</h4>
            <p className="m-[0px] text-[14px] font-[Regular] text-[#000] text-center">Set your work location and verify your services</p>
          </div>
          <div className="flex flex-col gap-[14px]">
            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger className="flex items-center justify-between rounded-[50px] bg-[#EFEFEF] p-[12px_30px] border-none shadow-none focus:outline-none w-full cursor-pointer">
                <div className="text-left w-full">
                  <label className="text-left text-[12px] font-[Regular] text-[#878387]">Work location</label>
                  <p className="text-[16px] font-[Medium] text-[#000] m-[0px]">
                    <SelectValue />
                  </p>
                </div>
                <ArrowDownIcon />
              </SelectTrigger>
              <SelectContent
                className="cursor-pointer z-50 bg-[#fff] w-full border border-[#e5e5e5] rounded-[14px] p-[8px] font-[Regular] text-[14px] "
                style={{ width: "100%" }}
              >
                {locationOptions.map((option) => (
                  <SelectItem
                    key={option}
                    value={option}
                    className="rounded-[12px] px-[12px] py-[8px] text-[14px]"
                  >
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedRadius} onValueChange={setSelectedRadius}>
              <SelectTrigger className="flex items-center justify-between rounded-[50px] bg-[#EFEFEF] p-[12px_30px] border-none shadow-none focus:outline-none w-full cursor-pointer">
                <div className="text-left w-full">
                  <label className="text-left text-[12px] font-[Regular] text-[#878387]">Work radius</label>
                  <p className="text-[16px] font-[Medium] text-[#000] m-[0px]">
                    <SelectValue />
                  </p>
                </div>
                <ArrowDownIcon />
              </SelectTrigger>
              <SelectContent
                className="cursor-pointer z-50 bg-[#fff] w-full border border-[#e5e5e5] rounded-[14px] p-[8px] font-[Regular] text-[14px] "
                style={{ width: "100%" }}
              >
                {radiusOptions.map((option) => (
                  <SelectItem
                    key={option}
                    value={option}
                    className="rounded-[12px] px-[12px] py-[8px] text-[14px]"
                  >
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {selectedRadius === "Other" && (
              <div className={`input-groups location_input relative flex bg-[#F2F2F2] rounded-full border border-transparent p-[0_24px] focus:border-[#6E2C91] focus:bg-[#fff] `}>
                <Input
                  type="text"
                  placeholder=" "
                  className="w-full border-none bg-transparent shadow-none w-full focus:outline-none focus:shadow-none text-[#000000] font-[Medium] text-[16px] !p-[20px_0px]"
                />
                <label className="bg-transparent  text-[#878387] font-[Regular] text-[14px] " >Work radius</label>
              </div>
            )}
            {/* Set your work location */}
            <div
              onClick={openSetLocation}
              className="flex items-center items-center justify-between rounded-[50px] bg-[#EFEFEF] p-[0px_4px_0px_30px] border-none shadow-none focus:outline-none cursor-pointer gap-[10px]">
              <input
                readOnly
                className="bg-transparent text-[14px] font-[Regular] text-[#3e3d47] outline-none placeholder:text-[#a3a2aa] border-none py-[20px] w-full placeholder:text-[12px]"
                placeholder="Set your work location"

              />
              <button
                type="button"
                disabled={!isSpecifiedLocation}
                className="cursor-pointer flex items-center justify-center rounded-full border-0 bg-[#fff] p-[14px_22px] outline-none shadow-[0px_4px_15px_rgba(0,0,0,0.1)] disabled:opacity-0"
              >
                <LocationIcon className="w-[24px] h-[24px]" />
              </button>
            </div>

            <div className="flex items-center items-center justify-between rounded-[25px] bg-[#EFEFEF] p-[25px_40px_30px] border-none shadow-none focus:outline-none cursor-pointer gap-[10px] flex-col max-sm:p-[25px_25px] ">
              <p className="text-[12px] font-[Regular] text-[#878387] m-[0]">Services at your Location</p>
              <div className="relative mb-[30px] w-full max-sm:left-0">
                <div className="flex items-center justify-between rounded-[22px] bg-[#fff] px-[18px] py-[12px] shadow-[0px_4px_15px_rgba(0,0,0,0.1)] w-full">
                  <p className="text-[14px] font-[Medium] text-[#000] m-[0]">Bridal Facial</p>
                  <button
                    type="button"
                    onClick={() => setBridalActive((prev) => !prev)}
                    className={`relative w-[40px] h-[24px] rounded-full border transition cursor-pointer ${bridalActive ? "border-[#00C299] bg-[#00C299]" : "border-[#E8E8E8] bg-[#E8E8E8]"
                      }`}
                  >
                    <span
                      className={`absolute top-[2px] h-[18px] w-[18px] rounded-full  transition ${bridalActive ? "right-[1px] bg-[#fff]" : "bg-[#fff] left-[1px]"
                        }`}
                    />
                  </button>
                </div>
              </div>
              <button
                type="button"
                onClick={onNavigateToServices}
                className="cursor-pointer flex items-center justify-center gap-[6px] border-none"
              >
                <PlusIcon className="w-[12px] h-[12px]" stroke="#000" />
                <p className="text-[14px] font-[Regular] text-[#000] m-[0]">Add or update your offered Services</p>
              </button>
            </div>
          </div>

        </div>
        {isLocationRoute && (
          <div className="flex items-center justify-center gap-4 max-sm:w-full">
            <button
              className="max-sm:w-full mt-[25px] w-[600px] border-none shadow-none outline-none cursor-pointer bg-[#6E2C91] rounded-[50px] py-[14px] text-[#FFF] font-[Medium] text-[14px] max-sm:mt-[20px]"
            >
              Submit
            </button>
          </div>
        )}
      </div>

      {isSetLocationOpen && <SetLocation onClose={closeSetLocation} />}
    </div>
  );
}

export default LocationStep