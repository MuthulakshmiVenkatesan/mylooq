import { useState, useEffect } from "react";
import bridalfacial from "../../../assets/img/saloon/bridalfacial.png";
import classicfacial from "../../../assets/img/saloon/classicfacial.png";
import mask from "../../../assets/img/saloon/mask.png";
import premiumspecial from "../../../assets/img/saloon/premiumspecial.png";
import waxing from "../../../assets/img/saloon/waxing.png";
import threading from "../../../assets/img/saloon/threading.png";
import { ArrowDownIcon } from "../../../components/customfile/icons";

const items = [
    { icon: bridalfacial, label: "Bridal facial" },
    { icon: classicfacial, label: "Classic facial" },
    { icon: mask, label: "Mask" },
    { icon: premiumspecial, label: "Premium facial" },
    { icon: waxing, label: "Waxing" },
    { icon: threading, label: "Threading" },
    { icon: premiumspecial, label: "Deep facial" },
    { icon: mask, label: "Mask special" },
];

interface ServiceSliderProps {
    onServiceSelect?: (service: { icon: string; label: string }) => void;
    selectedService?: { icon: string; label: string } | null;
}

export function ServiceSlider({ onServiceSelect, selectedService }: ServiceSliderProps) {
    const [startIndex, setStartIndex] = useState(0);
    const [visibleSlots, setVisibleSlots] = useState(6);

    // Update visibleSlots based on screen width
    useEffect(() => {
        const updateVisibleSlots = () => {
            let newVisibleSlots;
            const width = window.innerWidth;
        
            if (width < 768) {
                newVisibleSlots = 1;
            } else if (width >= 768 && width < 1200) {
                newVisibleSlots = 3;
            } else {
                newVisibleSlots = 6;
            }

            setVisibleSlots(newVisibleSlots);

            // Reset startIndex if it's out of bounds with new visibleSlots
            setStartIndex((prevStartIndex) => {
                if (prevStartIndex + newVisibleSlots > items.length) {
                    return Math.max(0, items.length - newVisibleSlots);
                }
                return prevStartIndex;
            });
        };

        // Set initial value
        updateVisibleSlots();

        // Add event listener for window resize
        window.addEventListener('resize', updateVisibleSlots);

        // Cleanup
        return () => window.removeEventListener('resize', updateVisibleSlots);
    }, []);

    const visibleItems = items.slice(startIndex, startIndex + visibleSlots);
    const canPrev = startIndex > 0;
    const canNext = startIndex + visibleSlots < items.length;

    return (
        <div className="flex items-center justify-center gap-2">
            {/* Desktop: Always show both arrows */}
            <button
                onClick={() => setStartIndex((prev) => Math.max(prev - visibleSlots, 0))}
                disabled={!canPrev}
                className="flex border-none outline-none shadow-[0_4px_15px_rgba(0,0,0,0.1)] bg-[#fff] p-[10px] rounded-full bg-white text-lg text-[#6a6a6a] flex items-center justify-center relative left-[-20px] cursor-pointer"
            >
               <ArrowDownIcon className="w-[10px] h-[10px] rotate-90" stroke="#000" />
            </button>

            {/* Mobile: Show left arrow based on showArrowsOnMobile prop */}
            {/* {(showArrowsOnMobile || canPrev) && (
                <button
                    onClick={() => setStartIndex((prev) => Math.max(prev - visibleSlots, 0))}
                    disabled={!showArrowsOnMobile && !canPrev}
                    className="min-[993px]:hidden border-none outline-none shadow-[0_4px_15px_rgba(0,0,0,0.1)] bg-[#fff] p-[10px] rounded-full bg-white text-lg text-[#6a6a6a] flex items-center justify-center relative left-[-20px] cursor-pointer"
                >
                   <ArrowDownIcon className={`w-[14px] h-[14px] rotate-90 ${!showArrowsOnMobile && !canPrev ? 'opacity-50' : ''}`} stroke="#000" />
                </button>
            )} */}

            <div className="flex items-center justify-center gap-[10px]">
                {visibleItems.map((item) => {
                    const isActive = selectedService?.label === item.label;
                    return (
                        <div
                            key={`${item.label}-${item.icon}`}
                            onClick={() => onServiceSelect?.(item)}
                            className={`border p-[16px] rounded-[30px] flex items-center justify-center bg-[#fff] gap-[10px] flex-col w-[150px] h-[150px] cursor-pointer transition-all duration-200 ${
                                isActive
                                    ? "border-[#000] "
                                    : "border-[rgba(0,0,0,0.1)] "
                            }`}
                        >
                            <div className={`w-[70px] h-[70px] flex items-center justify-center rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.1)] ${
                                isActive ? "bg-[#fff]" : "bg-[#fff]"
                            }`}>
                                <img src={item.icon} alt={item.label} className="w-[46px] h-[46px]" />
                            </div>
                            <p className={`text-[14px] font-[Regular] m-[0] ${
                                isActive ? "text-[#000]" : "text-[#000]"
                            }`}>{item.label}</p>
                        </div>
                    );
                })}
            </div>

            {/* Desktop: Always show both arrows */}
            <button
                onClick={() => setStartIndex((prev) => Math.min(prev + visibleSlots, items.length - visibleSlots))}
                disabled={!canNext}
                className="flex border-none outline-none shadow-[0_4px_15px_rgba(0,0,0,0.1)] bg-[#fff] p-[10px] rounded-full bg-white text-lg text-[#6a6a6a] flex items-center justify-center relative right-[-20px] cursor-pointer"
            >
                <ArrowDownIcon className="w-[10px] h-[10px] rotate-270" stroke="#000" />
            </button>

            {/* Mobile: Show right arrow based on showArrowsOnMobile prop */}
            {/* {(showArrowsOnMobile || canNext) && (
                <button
                    onClick={() => setStartIndex((prev) => Math.min(prev + visibleSlots, items.length - visibleSlots))}
                    disabled={!showArrowsOnMobile && !canNext}
                    className="min-[993px]:hidden border-none outline-none shadow-[0_4px_15px_rgba(0,0,0,0.1)] bg-[#fff] p-[10px] rounded-full bg-white text-lg text-[#6a6a6a] flex items-center justify-center relative right-[-20px] cursor-pointer"
                >
                    <ArrowDownIcon className={`w-[14px] h-[14px] rotate-270 ${!showArrowsOnMobile && !canNext ? 'opacity-50' : ''}`} stroke="#000" />
                </button>
            )} */}
        </div>
    );
}

