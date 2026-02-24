import { useState, useRef } from "react";
import { ArrowDownIcon } from "../../../../components/customfile/icons";



// Generate dates starting from today, continuing through current month and next months
const generateDates = () => {
  const dates = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Reset time to start of day
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  // Generate dates for next 3 months (90 days) starting from today
  const totalDays = 90;

  for (let i = 0; i < totalDays; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    dates.push({
      day: days[date.getDay()],
      date: date.getDate(),
      month: months[date.getMonth()],
      fullDate: date.toISOString().split('T')[0],
    });
  }

  return dates;
};

// Generate 24-hour time slots
const generateTimeSlots = () => {
  const slots = [];

  for (let hour = 0; hour < 24; hour++) {
    const period = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;

    const nextHour24 = hour === 23 ? 0 : hour + 1;
    const nextPeriod = nextHour24 >= 12 ? 'PM' : 'AM';
    const nextDisplayHour = nextHour24 === 0 ? 12 : nextHour24 > 12 ? nextHour24 - 12 : nextHour24;

    slots.push({
      id: hour,
      label: `${displayHour} ${period} - ${nextDisplayHour} ${nextPeriod}`,
      hour: hour,
    });
  }
  return slots;
};

interface DateTimeStepProps {
  bookingType: "immediate" | "scheduled";
  onBookingTypeChange: (type: "immediate" | "scheduled") => void;
}

function DateTimeStep({ bookingType, onBookingTypeChange }: DateTimeStepProps) {
  const dates = generateDates();
  const timeSlots = generateTimeSlots();
  const dateScrollRef = useRef<HTMLDivElement>(null);
  const [dateStartIndex, setDateStartIndex] = useState(0);
  const VISIBLE_DATES_DESKTOP = 4;
  const VISIBLE_DATES_Tab = 4;
  const VISIBLE_DATES_XLDesktop = 7; // For very large screens (1920px - 2560px)

  // Set today's date as default selected date
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todayDateStr = today.toISOString().split('T')[0];

  const [selectedDate, setSelectedDate] = useState(todayDateStr);
  const [selectedTime, setSelectedTime] = useState<number | null>(null);
  // Define unavailable time slots (6-7 AM, 12-2 PM)
  const unavailableSlots = [6, 7, 12, 13];

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
  };

  const handleTimeSelect = (hour: number) => {
    if (!unavailableSlots.includes(hour)) {
      setSelectedTime(hour);
    }
  };

  const scrollDates = (direction: 'left' | 'right') => {
    setDateStartIndex((prev) => {
      if (direction === 'left') {
        return Math.max(0, prev - 1);
      }
      const width = typeof window !== "undefined" ? window.innerWidth : 0;

      // Breakpoints:
      // <= 640px  -> mobile (1 visible at a time)
      // 641-768px -> tablet (4 visible)
      // 769-1919px -> normal desktop (4 visible)
      // 1920-2560px -> XL desktop (7 visible)
      const isMobile = width <= 640;
      const isTablet = width > 640 && width <= 1440;
      const isXLDesktop = width >= 1920 && width <= 2560;

      const visibleCount = isMobile
        ? 1
        : isTablet
          ? VISIBLE_DATES_Tab
          : isXLDesktop
            ? VISIBLE_DATES_XLDesktop
            : VISIBLE_DATES_DESKTOP;

      const maxStart = Math.max(0, dates.length - visibleCount);
      return Math.min(maxStart, prev + 1);
    });
  };

  const width = typeof window !== "undefined" ? window.innerWidth : 0;
  const isMobile = width <= 640;
  const isTablet = width > 640 && width <= 768;
  const isXLDesktop = width >= 1920 && width <= 2560;

  // On mobile, show all dates for scrolling.
  // On tablet/desktop/XL desktop, slice according to the visible count.
  const visibleDates = isMobile
    ? dates
    : isTablet
      ? dates.slice(dateStartIndex, dateStartIndex + VISIBLE_DATES_Tab)
      : isXLDesktop
        ? dates.slice(dateStartIndex, dateStartIndex + VISIBLE_DATES_XLDesktop)
        : dates.slice(dateStartIndex, dateStartIndex + VISIBLE_DATES_DESKTOP);

  return (
    <div className="">
      {/* Left Section - Booking Location */}
      <div className="flex-1">
        <h1 className="text-[28px] font-[Bold] text-[#000] mb-[30px] max-sm:text-[24px] max-sm:mb-[20px]">
          Date & Time
        </h1>

        {/* Radio Buttons */}
        <div className="mb-[38px] max-sm:mb-[20px] flex items-center gap-[30px]">
          <label className="flex items-center gap-[16px] cursor-pointer">
            <div className="relative">
              <input
                type="radio"
                name="locationType"
                value="immediate"
                checked={bookingType === "immediate"}
                onChange={(e) => onBookingTypeChange(e.target.value as "immediate" | "scheduled")}
                className="sr-only"
              />
              <div className={`w-[18px] h-[18px] rounded-full border flex items-center justify-center ${bookingType === "immediate"
                ? "bg-[#6E2C91] border-[#6E2C91]"
                : "bg-[#F8F8F8] border-[rgba(0,0,0,0.20)]"
                }`}>
                {bookingType === "immediate" && (
                  <div className="p-[4px] rounded-full bg-[#fff]"></div>
                )}
              </div>
            </div>
            <p className="text-[14px] font-[Regular] text-[#000]">
              Immediate booking
            </p>
          </label>

          <label className="flex items-center gap-[16px] cursor-pointer">
            <div className="relative">
              <input
                type="radio"
                name="locationType"
                value="scheduled"
                checked={bookingType === "scheduled"}
                onChange={(e) => onBookingTypeChange(e.target.value as "immediate" | "scheduled")}
                className="sr-only"
              />
              <div className={`w-[18px] h-[18px] rounded-full border flex items-center justify-center ${bookingType === "scheduled"
                ? "bg-[#6E2C91] border-[#6E2C91]"
                : "bg-[#F8F8F8] border-[rgba(0,0,0,0.2)]"
                }`}>
                {bookingType === "scheduled" && (
                  <div className="p-[4px] rounded-full bg-[#fff]"></div>
                )}
              </div>
            </div>
            <p className="text-[14px] font-[Regular] text-[#000]">
              Scheduled Booking
            </p>
          </label>
        </div>



        {bookingType === "immediate" && (
          <div className="border-b border-[rgba(0,0,0,0.10)] w-full"></div>
        )}


        {bookingType === "scheduled" && (
          <div className="border border-[rgba(0,0,0,0.10)] rounded-[30px] p-[30px] max-sm:p-[20px]">
            {/* Date Picker */}
            <div className="mb-[32px]">
              <div className="flex items-center gap-[12px] relative">
                <button
                  onClick={() => scrollDates('left')}
                  className="max-sm:hidden  left-0 flex-shrink-0 w-[34px] h-[34px] rounded-full bg-[#fff] flex items-center justify-center cursor-pointer shadow-[0px_0px_15px_0px_rgba(0,0,0,0.1)] transition-colors"
                >
                  <ArrowDownIcon className="w-[14px] h-[14px] rotate-90" />
                </button>

                <div
                  ref={dateScrollRef}
                  className="mx-auto left-0 w-fit right-0 border-[2px] border-[#F8F8F8] bg-[#F8F8F8] rounded-full p-[4px] max-sm:p-[4px_4px_4px_10px] flex items-center gap-[5px] flex-1 overflow-hidden max-sm:overflow-x-auto scrollbar-hide scroll-smooth max-sm:w-[220px]"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
                >
                  {visibleDates.map((date) => (
                    <button
                      key={date.fullDate}
                      onClick={() => handleDateSelect(date.fullDate)}
                      className={`flex-shrink-0 p-[5px_46px] rounded-full transition-all whitespace-nowrap shadow-[0px_4px_15px_0px_rgba(0,0,0,0.1)] max-sm:p-[5px_51px] schedulebook_button ${selectedDate === date.fullDate
                        ? "bg-[#000] text-[#fff]"
                        : "bg-[#fff] text-[#000]"
                        }`}
                    >
                      <h4 className="text-[14px] font-[SemiBold] mb-[2px]">{date.day}</h4>
                      <p className="text-[14px] font-[Medium] text-[#878387]">{date.date} {date.month}</p>
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => scrollDates('right')}
                  className=" right-0 max-sm:hidden flex-shrink-0 w-[34px] h-[34px] rounded-full bg-[#fff] flex items-center justify-center cursor-pointer shadow-[0px_0px_15px_0px_rgba(0,0,0,0.1)] transition-colors"
                >
                  <ArrowDownIcon className="w-[14px] h-[14px] rotate-270" />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-[26px] mb-[32px] flex-wrap">
              <div className="flex items-center gap-[10px]">
                <div className="bg-[#F6D3DA] border border-[rgba(0,0,0,0.10)] rounded-[5px] p-[6px]"></div>
                <p className="text-[14px] font-[Regular] text-[#000]">Selected time</p>
              </div>
              <div className="flex items-center gap-[10px]">
                <div className="bg-[#F8F8F8] border border-[rgba(0,0,0,0.10)] rounded-[5px] p-[6px]"></div>
                <p className="text-[14px] font-[Regular] text-[#000]">Available time</p>
              </div>
              <div className="flex items-center gap-[10px]">
                <div className="bg-[rgba(0,0,0,0.20)] border border-[rgba(0,0,0,0.10)] rounded-[5px] p-[6px]"></div>
                <p className="text-[14px] font-[Regular] text-[#000]">Unavailable time</p>
              </div>
            </div>

            {/* Time Slots Grid */}
            <div className="grid grid-cols-4 gap-[12px] max-sm:grid-cols-2">
              {timeSlots.map((slot) => {
                const isUnavailable = unavailableSlots.includes(slot.hour);
                const isSelected = selectedTime === slot.hour;                return (
                  <button
                    key={slot.id}
                    onClick={() => handleTimeSelect(slot.hour)}
                    disabled={isUnavailable}
                    className={`p-[14px_20px] rounded-[30px] text-[14px] font-[Medium] text-[#000] transition-colors 
                                    ${isSelected
                        ? "bg-[#F6D3DA] cursor-pointer"
                        : isUnavailable
                          ? "bg-[#E5E5E5] cursor-not-allowed"
                        : "bg-[#F8F8F8] cursor-pointer"
                      }`}
                  >
                    {slot.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>




    </div>
  );
}

export default DateTimeStep;
