import { useState, useRef, useEffect } from "react";
import { CloseIcon, ArrowDownIcon } from "../../../../components/customfile/icons";

interface AvailabilityModalProps {
    isOpen: boolean;
    onClose: () => void;
}

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

function AvailabilityModal({ isOpen, onClose }: AvailabilityModalProps) {
    const dates = generateDates();
    const timeSlots = generateTimeSlots();
    const dateScrollRef = useRef<HTMLDivElement>(null);

    // Set today's date as default selected date
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayDateStr = today.toISOString().split('T')[0];

    const [selectedDate, setSelectedDate] = useState(todayDateStr);
    const [dateStartIndex, setDateStartIndex] = useState(0);
    const VISIBLE_DATES_DESKTOP = 4;
    const VISIBLE_DATES_Tab = 4;

    // Define unavailable time slots (6-7 AM, 12-2 PM)
    const unavailableSlots = [6, 7, 12, 13];

    // Lock body scroll when modal is open
    useEffect(() => {
        if (!isOpen) return;

        const originalOverflow = document.body.style.overflow;
        const originalOverflowhtml = document.documentElement.style.overflow;
        document.body.style.overflow = "hidden";
        document.documentElement.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = originalOverflow;
            document.documentElement.style.overflow = originalOverflowhtml;
        };
    }, [isOpen]);

    useEffect(() => {
        // Scroll to today's date (first date) when modal opens
        if (isOpen && dateScrollRef.current) {
            setTimeout(() => {
                const firstButton = dateScrollRef.current?.children[0] as HTMLElement;
                if (firstButton) {
                    firstButton.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
                }
            }, 100);
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const handleDateSelect = (date: string) => {
        setSelectedDate(date);
    };

    const handleTimeSelect = (hour: number) => {
        if (!unavailableSlots.includes(hour)) {
        }
    };

    const scrollDates = (direction: 'left' | 'right') => {
        setDateStartIndex((prev) => {
            if (direction === 'left') {
                return Math.max(0, prev - 1);
            }
            const isMobile = typeof window !== "undefined" && window.innerWidth <= 640;
            const isTablet = typeof window !== "undefined" && window.innerWidth <= 768;
            const visibleCount = isMobile ? 2 : isTablet ? VISIBLE_DATES_Tab : VISIBLE_DATES_DESKTOP;
            const maxStart = Math.max(0, dates.length - visibleCount);
            return Math.min(maxStart, prev + 1);
        });
    };

    const isMobile = typeof window !== "undefined" && window.innerWidth <= 640;
    const isTablet = typeof window !== "undefined" && window.innerWidth <= 768;
    const visibleDates = isMobile
        ? dates
        : isTablet ? dates.slice(dateStartIndex, dateStartIndex + VISIBLE_DATES_Tab) : dates.slice(dateStartIndex, dateStartIndex + VISIBLE_DATES_DESKTOP);

    return (
        <div className="fixed inset-0 z-[102] flex items-center justify-center bg-[rgba(0,0,0,0.30)]">
            <div className="bg-white rounded-[30px] w-full max-w-[746px] mx-4 p-[40px] relative shadow-lg max-h-[90vh] overflow-y-auto max-sm:p-[20px]">
                {/* Close Button */}
                <div className="flex justify-end ">
                    <button onClick={onClose} className="cursor-pointer absolute top-[26px] right-[26px]">
                        <CloseIcon className="w-[20px] h-[20px]" />
                    </button>
                </div>

                {/* Title */}
                <h2 className="text-[20px] font-[Bold] text-[#000] mb-[32px] text-center pb-[32px] max-sm:p-[0]">
                    Availability
                </h2>

                {/* Date Picker */}
                <div className="">
                    <div className="flex items-center gap-[12px] relative">
                        <button
                            onClick={() => scrollDates('left')}
                            className="max-sm:hidden absolute left-0 flex-shrink-0 w-[34px] h-[34px] rounded-full bg-[#fff] flex items-center justify-center cursor-pointer shadow-[0px_0px_15px_0px_rgba(0,0,0,0.1)] transition-colors"
                        >
                            <ArrowDownIcon className="w-[14px] h-[14px] rotate-90" />
                        </button>

                        <div
                            ref={dateScrollRef}
                            className="mx-auto absolute left-0 w-fit right-0 border-[2px] border-[#F8F8F8] bg-[#F8F8F8] rounded-full p-[4px] max-sm:p-[4px] flex items-center gap-[5px] flex-1 overflow-hidden max-sm:overflow-x-auto max-sm:static scrollbar-hide scroll-smooth"
                        >
                            {visibleDates.map((date) => (
                                <button
                                    key={date.fullDate}
                                    onClick={() => handleDateSelect(date.fullDate)}
                                    className={`flex-shrink-0 p-[5px_48px] rounded-full transition-all whitespace-nowrap shadow-[0px_4px_15px_0px_rgba(0,0,0,0.1)] max-sm:p-[5px_51px] ${selectedDate === date.fullDate
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
                            className="absolute right-0 max-sm:hidden flex-shrink-0 w-[34px] h-[34px] rounded-full bg-[#fff] flex items-center justify-center cursor-pointer shadow-[0px_0px_15px_0px_rgba(0,0,0,0.1)] transition-colors"
                        >
                            <ArrowDownIcon className="w-[14px] h-[14px] rotate-270" />
                        </button>
                    </div>
                </div>

                <div className="flex items-center gap-[10px] mt-[32px] py-[32px] max-sm:mt-[0]">
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

                        return (
                            <button
                                key={slot.id}
                                onClick={() => handleTimeSelect(slot.hour)}
                                disabled={isUnavailable}
                                className={`p-[14px_20px] rounded-[30px] text-[12px] font-[Regular] text-[#000] transition-colors 
                                    ${isUnavailable
                                        ? "bg-[#E5E5E5] cursor-not-allowed"
                                        : "bg-[#F8F8F8]"
                                    }`}
                            >
                                {slot.label}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default AvailabilityModal;

