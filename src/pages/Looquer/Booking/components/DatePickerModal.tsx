import { useState } from "react";
import { Dialog, DialogContent, DialogOverlay, DialogHeader, DialogTitle, DialogClose } from "../../../../components/Ui/Dialog";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "../../../../components/Ui/Select";
import { CloseIcon, ArrowDownIcon, DateArrowIcon } from "../../../../components/customfile/icons";

interface DatePickerModalProps {
    isOpen: boolean;
    onClose: () => void;
    selectedDate: Date | null;
    onDateSelect: (date: Date) => void;
    onFilter: () => void;
}

const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const weekDays = ["M", "T", "W", "T", "F", "S", "S"];

export default function DatePickerModal({ isOpen, onClose, selectedDate, onDateSelect, onFilter }: DatePickerModalProps) {
    const [currentDate, setCurrentDate] = useState(selectedDate || new Date());
    const [selectedDates, setSelectedDates] = useState<Date[]>(selectedDate ? [selectedDate] : []);
    const [rangeStart, setRangeStart] = useState<Date | null>(null);
    const [rangeEnd, setRangeEnd] = useState<Date | null>(null);

    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    // Get first day of month and number of days
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    // Adjust first day (Monday = 0)
    const adjustedFirstDay = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

    // Get previous month's days
    const prevMonthDays = new Date(currentYear, currentMonth, 0).getDate();
    const prevMonthStart = prevMonthDays - adjustedFirstDay + 1;

    // Get next month's days
    const daysToShow = 42; // 6 weeks
    const totalDaysShown = adjustedFirstDay + daysInMonth;
    const nextMonthDays = daysToShow - totalDaysShown;

    const handleDateClick = (date: Date) => {
        // If clicking the same date, deselect it
        if (selectedDates.length === 1 &&
            selectedDates[0].getDate() === date.getDate() &&
            selectedDates[0].getMonth() === date.getMonth() &&
            selectedDates[0].getFullYear() === date.getFullYear()) {
            setRangeStart(null);
            setRangeEnd(null);
            setSelectedDates([]);
            return;
        }

        if (!rangeStart) {
            setRangeStart(date);
            setRangeEnd(null);
            setSelectedDates([date]);
            onDateSelect(date);
        } else if (!rangeEnd) {
            if (date < rangeStart) {
                setRangeEnd(rangeStart);
                setRangeStart(date);
            } else {
                setRangeEnd(date);
            }
            // Create range
            const range: Date[] = [];
            const start = date < rangeStart ? date : rangeStart;
            const end = date < rangeStart ? rangeStart : date;
            for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
                range.push(new Date(d));
            }
            setSelectedDates(range);
        } else {
            // Reset selection
            setRangeStart(date);
            setRangeEnd(null);
            setSelectedDates([date]);
            onDateSelect(date);
        }
    };

    const isDateInRange = (date: Date) => {
        if (!rangeStart || !rangeEnd) return false;
        return date >= rangeStart && date <= rangeEnd;
    };

    const isDateSelected = (date: Date) => {
        return selectedDates.some(d =>
            d.getDate() === date.getDate() &&
            d.getMonth() === date.getMonth() &&
            d.getFullYear() === date.getFullYear()
        );
    };

    const isPrimarySelected = (date: Date) => {
        if (!selectedDate) return false;
        return date.getDate() === selectedDate.getDate() &&
            date.getMonth() === selectedDate.getMonth() &&
            date.getFullYear() === selectedDate.getFullYear();
    };

    const formatSelectedDate = () => {
        if (!selectedDate) return "";
        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const dayName = days[selectedDate.getDay()];
        const monthName = months[selectedDate.getMonth()].substring(0, 3);
        return `${dayName}, ${monthName} ${selectedDate.getDate()}`;
    };

    const goToPreviousMonth = () => {
        setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
    };

    const goToNextMonth = () => {
        setCurrentDate(new Date(currentYear, currentMonth + 1, 1));
    };

    const handleMonthChange = (monthIndex: string) => {
        setCurrentDate(new Date(currentYear, parseInt(monthIndex), 1));
    };

    // const handleYearChange = (year: string) => {
    //     setCurrentDate(new Date(parseInt(year), currentMonth, 1));
    // };

    // // Generate years (current year ± 10)
    // const years = Array.from({ length: 21 }, (_, i) => currentYear - 10 + i);

    const handleFilter = () => {
        if (selectedDates.length > 0) {
            onDateSelect(selectedDates[0]);
        }
        onFilter();
        onClose();
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogOverlay className="fixed inset-0 bg-[rgba(0,0,0,0.5)] data-[state=open]:animate-in data-[state=closed]:animate-out z-[100]" />
            <DialogContent className="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[380px] bg-[#fff] rounded-[30px] p-0 border-none shadow-[0px_4px_20px_rgba(0,0,0,0.15)] z-[101] data-[state=open]:animate-in data-[state=closed]:animate-out max-sm:m-[20px] max-sm:max-w-[calc(100%-40px)]">
                {/* Header */}
                <DialogHeader className="bg-[#6E2C91] p-[30px] rounded-t-[30px] relative">
                    <DialogClose className="absolute right-[24px] top-[20px] cursor-pointer p-[4px] rounded-full transition-colors">
                        <CloseIcon className="w-[18px] h-[18px]" fill="#fff" />
                    </DialogClose>
                    <div className="flex flex-col gap-[30px]">
                        <DialogTitle className="text-[12px] font-[Regular] text-[#fff] m-0">
                            SELECT DATE
                        </DialogTitle>
                        <p className="text-[30px] font-[Bold] text-[#fff] m-0">
                            {formatSelectedDate() || "Select a date"}
                        </p>
                    </div>
                </DialogHeader>

                {/* Month/Year Navigation */}
                <div className="flex items-center justify-between p-[16px_30px]">
                    <div className="flex items-center gap-[6px]">
                        <Select value={currentMonth.toString()} onValueChange={handleMonthChange}>
                            <SelectTrigger className="w-auto  h-auto p-[0] border-none bg-transparent text-[14px] font-[Medium] text-[#878387] cursor-pointer ">
                                <SelectValue>
                                    {months[currentMonth]} {currentYear}
                                </SelectValue>
                            </SelectTrigger>
                            <SelectContent>
                                {months.map((month, index) => (
                                    <SelectItem key={index} value={index.toString()}>
                                        {month} {currentYear}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <DateArrowIcon />
                    </div>
                    <div className="flex items-center gap-[12px]">
                        <button
                            onClick={goToPreviousMonth}
                            className="w-[32px] h-[32px] flex items-center justify-center rounded-full hover:bg-[#F8F8F8] transition-colors cursor-pointer"
                        >
                            <ArrowDownIcon className="w-[10px] h-[10px] rotate-90" stroke="#878387" />
                        </button>
                        <button
                            onClick={goToNextMonth}
                            className="w-[32px] h-[32px] flex items-center justify-center rounded-full hover:bg-[#F8F8F8] transition-colors cursor-pointer"
                        >
                            <ArrowDownIcon className="w-[10px] h-[10px] rotate-270" stroke="#878387" />
                        </button>
                    </div>
                </div>

                {/* Calendar Grid */}
                <div className="">
                    {/* Week Days Header */}
                    <div className=" border-t border-b border-[rgba(0,0,0,0.1)] grid grid-cols-7 gap-[22px] mb-[12px] p-[12px_30px]">
                        {weekDays.map((day, index) => (
                            <div key={index} className="text-center text-[12px] font-[SemiBold] text-[#878387]">
                                {day}
                            </div>
                        ))}
                    </div>

                    {/* Calendar Days */}
                    <div className="grid grid-cols-7 gap-[2px] p-[0px_30px]">
                        {/* Previous month days */}
                        {Array.from({ length: adjustedFirstDay }, (_, i) => {
                            const date = new Date(currentYear, currentMonth - 1, prevMonthStart + i);
                            return (
                                <button
                                    key={`prev-${i}`}
                                    className="w-[40px] h-[40px] flex items-center justify-center text-[14px] font-[Regular] text-[#878387] rounded-full cursor-pointer "
                                    disabled
                                >
                                    {date.getDate()}
                                </button>
                            );
                        })}

                        {/* Current month days */}
                        {Array.from({ length: daysInMonth }, (_, i) => {
                            const date = new Date(currentYear, currentMonth, i + 1);
                            const isSelected = isDateSelected(date);
                            const isPrimary = isPrimarySelected(date);
                            const inRange = isDateInRange(date);
                            const isRangeStart = rangeStart && date.getDate() === rangeStart.getDate() && date.getMonth() === rangeStart.getMonth() && date.getFullYear() === rangeStart.getFullYear();
                            const isRangeEnd = rangeEnd && date.getDate() === rangeEnd.getDate() && date.getMonth() === rangeEnd.getMonth() && date.getFullYear() === rangeEnd.getFullYear();
                            const isRangeBoundary = (isRangeStart || isRangeEnd) && !isPrimary && rangeStart && rangeEnd;

                            return (
                                <button
                                    key={`current-${i}`}
                                    onClick={() => handleDateClick(date)}
                                    className={`w-[40px] h-[40px] flex items-center justify-center text-[14px] font-[Regular] rounded-full cursor-pointer transition-all relative ${isPrimary
                                            ? "bg-[#FFB6C1] text-[#000]"
                                            : inRange && !isPrimary
                                                ? "bg-[#F8F8F8] text-[#000]"
                                                : isSelected
                                                    ? "bg-[#F8F8F8] text-[#000]"
                                                    : "text-[#000] "
                                        }`}
                                >
                                    {date.getDate()}
                                    {isRangeBoundary && (
                                        <div className="absolute inset-0 rounded-full border-2 border-[#000] pointer-events-none"></div>
                                    )}
                                </button>
                            );
                        })}

                        {/* Next month days */}
                        {Array.from({ length: nextMonthDays }, (_, i) => {
                            const date = new Date(currentYear, currentMonth + 1, i + 1);
                            return (
                                <button
                                    key={`next-${i}`}
                                    className="w-[40px] h-[40px] flex items-center justify-center text-[14px] font-[Regular] text-[#000] opacity-20 rounded-full cursor-pointer "
                                    disabled
                                >
                                    {date.getDate()}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-[12px] p-[20px_30px]">
                    <button
                        onClick={onClose}
                        className="flex-1 py-[14px] bg-[#000] text-[#FFF] rounded-full text-[14px] font-[Bold] transition-colors cursor-pointer ">
                        Cancel
                    </button>
                    <button
                        onClick={handleFilter}
                        className="flex-1 py-[14px] bg-[#6E2C91] text-[#FFF] rounded-full text-[14px] font-[Bold] transition-colors cursor-pointer"
                    >
                        Filter
                    </button>
                </div>
            </DialogContent>
        </Dialog>
    );
}

