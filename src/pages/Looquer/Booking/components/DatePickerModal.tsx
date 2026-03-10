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
        onDateSelect(date);
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

    const handleYearChange = (year: string) => {
        const yearNumber = parseInt(year, 10);
        if (!Number.isNaN(yearNumber)) {
            setCurrentDate(new Date(yearNumber, currentMonth, 1));
        }
    };

    // Years from 2020 up to 10 years in the future
    const startYear = 2020;
    const endYear = currentYear + 10;
    const years = Array.from({ length: endYear - startYear + 1 }, (_, i) => startYear + i);

    const handleFilter = () => {
        if (selectedDate) {
            onDateSelect(selectedDate);
        }
        onFilter();
        onClose();
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogOverlay className="fixed inset-0 bg-[rgba(0,0,0,0.5)] data-[state=open]:animate-in data-[state=closed]:animate-out z-[100]" />
            <DialogContent className="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[380px] bg-[#fff] rounded-[30px] p-0 border-none shadow-[0px_4px_20px_rgba(0,0,0,0.15)] z-[101] data-[state=open]:animate-in data-[state=closed]:animate-out max-sm:max-w-[calc(100%-40px)]">
                {/* Header */}
                <DialogHeader className="bg-[#6E2C91] p-[30px_30px_20px] rounded-t-[30px] relative">
                    <DialogClose className="absolute right-[24px] top-[20px] cursor-pointer p-[4px] rounded-full transition-colors border-none outline-none shadow-none focus:outline-none focus:border-none focus:shadow-none">
                        <CloseIcon className="w-[18px] h-[18px]" fill="#fff" />
                    </DialogClose>
                    <div className="flex flex-col gap-[30px]">
                        <DialogTitle className="text-[10px] tracking-[2px] font-[Regular] text-[#fff] m-0">
                            SELECT DATE
                        </DialogTitle>
                        <p className="text-[30px] font-[Bold] text-[#fff] m-0">
                            {formatSelectedDate() || "Select a date"}
                        </p>
                    </div>
                </DialogHeader>

                {/* Month/Year Navigation */}
                <div className="flex items-center justify-between p-[16px_30px]">
                    <div className="flex items-center w-full gap-[10px]">
                        {/* Custom Month select */}
                        <div className="flex items-center">
                            <Select value={currentMonth.toString()} onValueChange={handleMonthChange}>
                                <SelectTrigger className="flex items-center gap-[6px] h-auto bg-[#fff] rounded-[14px] text-[14px] font-[Medium] text-[#878387] cursor-pointer">

                                    <SelectValue>{months[currentMonth]}</SelectValue>

                                    <DateArrowIcon
                                        stroke="#878387"
                                    />

                                </SelectTrigger>
                                <SelectContent
                                    className="h-[260px] cursor-pointer z-[999] bg-[#fff] w-full border border-[#e5e5e5] rounded-[14px] p-[8px] font-[Regular] text-[14px] "
                                    style={{ width: "100%" }}
                                >
                                    {months.map((month, index) => (
                                        <SelectItem
                                            className="rounded-[12px] px-[12px] py-[8px] text-[14px]"
                                            key={index} value={index.toString()}>
                                            {month}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        {/* Custom Year select (2020 -> future, scrollable) */}
                        <div className="">
                            <Select value={currentYear.toString()} onValueChange={handleYearChange}>
                                <SelectTrigger className="flex items-center gap-[6px] h-auto bg-[#fff] rounded-[14px] text-[14px] font-[Medium] text-[#878387] cursor-pointer">
                                    <SelectValue>{currentYear}</SelectValue>
                                    <DateArrowIcon
                                        stroke="#878387"
                                    />
                                </SelectTrigger>
                                <SelectContent
                                    className="h-[260px] cursor-pointer z-[999] bg-[#fff] w-full border border-[#e5e5e5] rounded-[14px] p-[8px] font-[Regular] text-[14px] "
                                    style={{ width: "100%" }}
                                >
                                    {years.map((year) => (
                                        <SelectItem
                                            className="rounded-[12px] px-[12px] py-[8px] text-[14px]"
                                            key={year} value={year.toString()}>
                                            {year}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
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
                    <div className=" border-t border-b border-[rgba(0,0,0,0.1)] grid grid-cols-7 gap-[2px] mb-[12px] p-[12px_30px]">
                        {weekDays.map((day, index) => (
                            <div key={index} className="w-[40px] h-[20px] flex items-center justify-center text-center text-[12px] font-[SemiBold] text-[#878387]">
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
                            const isSelected =
                                selectedDate &&
                                date.getDate() === selectedDate.getDate() &&
                                date.getMonth() === selectedDate.getMonth() &&
                                date.getFullYear() === selectedDate.getFullYear();

                            return (
                                <button
                                    key={`current-${i}`}
                                    onClick={() => handleDateClick(date)}
                                    className={`w-[40px] h-[40px] flex items-center justify-center text-[14px] font-[Regular] rounded-full cursor-pointer transition-all relative focus:outline-none focus:border-none focus:shadow-none ${isSelected
                                        ? "bg-[#FFB6C1] text-[#000]"
                                        : "text-[#000]"
                                        }`}
                                >
                                    {date.getDate()}
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

