import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../../components/Ui/Tabs";

const days: Record<string, string[]> = {
  Sun: ["12 AM - 01 AM", "01 AM - 02 AM", "02 AM - 03 AM", "03 AM - 04 AM", "04 AM - 05 AM", "05 AM - 06 AM", "06 AM - 07 AM", "07 AM - 08 AM", "08 AM - 09 AM", "09 AM - 10 AM", "10 AM - 11 AM", "11 AM - 12 PM", "12 PM - 01 PM", "01 PM - 02 PM", "02 PM - 03 PM", "03 PM - 04 PM", "04 PM - 05 PM", "05 PM - 06 PM", "06 PM - 07 PM", "07 PM - 08 PM", "08 PM - 09 PM", "09 PM - 10 PM", "10 PM - 11 PM", "11 PM - 12 AM"],
  Mon: ["12 AM - 01 AM", "01 AM - 02 AM", "02 AM - 03 AM", "03 AM - 04 AM", "04 AM - 05 AM", "05 AM - 06 AM", "06 AM - 07 AM", "07 AM - 08 AM", "08 AM - 09 AM", "09 AM - 10 AM", "10 AM - 11 AM", "11 AM - 12 PM", "12 PM - 01 PM", "01 PM - 02 PM", "02 PM - 03 PM", "03 PM - 04 PM", "04 PM - 05 PM", "05 PM - 06 PM", "06 PM - 07 PM", "07 PM - 08 PM", "08 PM - 09 PM", "09 PM - 10 PM", "10 PM - 11 PM", "11 PM - 12 AM"],
  Tue: ["12 AM - 01 AM", "01 AM - 02 AM", "02 AM - 03 AM", "03 AM - 04 AM", "04 AM - 05 AM", "05 AM - 06 AM", "06 AM - 07 AM", "07 AM - 08 AM", "08 AM - 09 AM", "09 AM - 10 AM", "10 AM - 11 AM", "11 AM - 12 PM", "12 PM - 01 PM", "01 PM - 02 PM", "02 PM - 03 PM", "03 PM - 04 PM", "04 PM - 05 PM", "05 PM - 06 PM", "06 PM - 07 PM", "07 PM - 08 PM", "08 PM - 09 PM", "09 PM - 10 PM", "10 PM - 11 PM", "11 PM - 12 AM"],
  Wed: ["12 AM - 01 AM", "01 AM - 02 AM", "02 AM - 03 AM", "03 AM - 04 AM", "04 AM - 05 AM", "05 AM - 06 AM", "06 AM - 07 AM", "07 AM - 08 AM", "08 AM - 09 AM", "09 AM - 10 AM", "10 AM - 11 AM", "11 AM - 12 PM", "12 PM - 01 PM", "01 PM - 02 PM", "02 PM - 03 PM", "03 PM - 04 PM", "04 PM - 05 PM", "05 PM - 06 PM", "06 PM - 07 PM", "07 PM - 08 PM", "08 PM - 09 PM", "09 PM - 10 PM", "10 PM - 11 PM", "11 PM - 12 AM"],
  Thu: ["12 AM - 01 AM", "01 AM - 02 AM", "02 AM - 03 AM", "03 AM - 04 AM", "04 AM - 05 AM", "05 AM - 06 AM", "06 AM - 07 AM", "07 AM - 08 AM", "08 AM - 09 AM", "09 AM - 10 AM", "10 AM - 11 AM", "11 AM - 12 PM", "12 PM - 01 PM", "01 PM - 02 PM", "02 PM - 03 PM", "03 PM - 04 PM", "04 PM - 05 PM", "05 PM - 06 PM", "06 PM - 07 PM", "07 PM - 08 PM", "08 PM - 09 PM", "09 PM - 10 PM", "10 PM - 11 PM", "11 PM - 12 AM"],
  Fri: ["12 AM - 01 AM", "01 AM - 02 AM", "02 AM - 03 AM", "03 AM - 04 AM", "04 AM - 05 AM", "05 AM - 06 AM", "06 AM - 07 AM", "07 AM - 08 AM", "08 AM - 09 AM", "09 AM - 10 AM", "10 AM - 11 AM", "11 AM - 12 PM", "12 PM - 01 PM", "01 PM - 02 PM", "02 PM - 03 PM", "03 PM - 04 PM", "04 PM - 05 PM", "05 PM - 06 PM", "06 PM - 07 PM", "07 PM - 08 PM", "08 PM - 09 PM", "09 PM - 10 PM", "10 PM - 11 PM", "11 PM - 12 AM"],
  Sat: ["12 AM - 01 AM", "01 AM - 02 AM", "02 AM - 03 AM", "03 AM - 04 AM", "04 AM - 05 AM", "05 AM - 06 AM", "06 AM - 07 AM", "07 AM - 08 AM", "08 AM - 09 AM", "09 AM - 10 AM", "10 AM - 11 AM", "11 AM - 12 PM", "12 PM - 01 PM", "01 PM - 02 PM", "02 PM - 03 PM", "03 PM - 04 PM", "04 PM - 05 PM", "05 PM - 06 PM", "06 PM - 07 PM", "07 PM - 08 PM", "08 PM - 09 PM", "09 PM - 10 PM", "10 PM - 11 PM", "11 PM - 12 AM"],
};

const slotLabel = (slot: string) =>
  slot.replace("AM", "AM").replace("PM", "PM");

function AvailabilityStep() {
  const location = useLocation();
  const isAvailabilityRoute = location.pathname.includes("/availability");
  const [selectedDay, setSelectedDay] = useState("Tue");
  const [selectedSlots, setSelectedSlots] = useState<string[]>(["08 PM - 09 PM"]);

  const toggleSlot = (slot: string) => {
    setSelectedSlots((prev) =>
      prev.includes(slot) ? prev.filter((value) => value !== slot) : [...prev, slot]
    );
  };

  return (
    <div className={`bg-[#fff] p-[24px_30px_0px] flex-1 max-sm:p-[24px_15px_0px] mt-[120px] max-sm:mt-[118px] max-sm:pb-[0px] ${isAvailabilityRoute ? "!m-[0] pt-[60px] pb-[80px] max-sm:pb-[30px]" : ""}`}>
      <div className="flex flex-col items-center">
        <div className="flex flex-col mb-[24px]">
          <h4 className="m-[0px] text-[24px] font-[Bold] text-[#000] text-center text30px">Availability</h4>
          <p className="m-[0px] text-[14px] font-[Regular] text-[#000] text-center">Select your available day and time</p>
        </div>
        <Tabs value={selectedDay} onValueChange={setSelectedDay}>
          <div className="w-full max-sm:overflow-x-auto max-sm:w-[calc(94vw-15px)] hide-scrollbar">
            <TabsList className="flex flex-nowrap items-center gap-[6px] rounded-full bg-[#F8F8F8] p-[4px] mb-[30px] overflow-x-auto hide-scrollbar min-w-max max-sm:justify-start justify-center touch-pan-x">
              {Object.keys(days).map((day) => (
                <TabsTrigger
                  key={day}
                  value={day}
                  className="cursor-pointer shadow-[0_4px_15px_rgba(0,0,0,0.1)] rounded-full border-none p-[16px_26px] font-[SemiBold] text-[14px] data-[state=active]:bg-[#000] data-[state=active]:text-[#fff] data-[state=inactive]:bg-[#fff] data-[state=inactive]:text-[#000] flex-shrink-0 whitespace-nowrap"
                >
                  {day}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          {Object.entries(days).map(([day, slots]) => (
            <TabsContent value={day} key={day} className="mt-3">
              <div className="grid gap-3">
                <div className="grid grid-cols-3 gap-[14px] max-sm:grid-cols-2">
                  {slots.map((slot) => {
                    const isSelected = selectedSlots.includes(slot);
                    return (
                      <button
                        key={slot}
                        onClick={() => toggleSlot(slot)}
                        className={`cursor-pointer p-[14px_20px] rounded-[30px] border-none font-[Medium] transition text-[14px] text-[#000] ${isSelected ? "bg-[#F6D3DA]" : "bg-[#F8F8F8] "
                          }`}
                      >
                        {slotLabel(slot)}
                      </button>
                    );
                  })}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
      {isAvailabilityRoute && (
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

export default AvailabilityStep
