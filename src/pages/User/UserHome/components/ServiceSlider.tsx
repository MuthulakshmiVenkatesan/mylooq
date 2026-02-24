import { useRef } from "react";
import { ArrowDownIcon } from "../../../../components/customfile/icons";
import first from "../../../../assets/img/service/1.png";
import second from "../../../../assets/img/service/2.png";
import third from "../../../../assets/img/service/3.png";
import four from "../../../../assets/img/service/4.png";
import five from "../../../../assets/img/service/5.png";
import six from "../../../../assets/img/service/6.png";
import seven from "../../../../assets/img/service/7.png";

const serviceCategories = [
    {
        label: "LooQer",
        count: 2,
        image: first,
    },
    {
        label: "Hair",
        count: 2,
        image: second,
    },
    {
        label: "Salon",
        count: 2,
        image: third,
    },
    {
        label: "Makeup",
        count: 3,
        image: four,
    },
    {
        label: "Hair & Care",
        count: 2,
        image: five,
    },
    {
        label: "Spa",
        count: 2,
        image: six,
    },
    {
        label: "Massage",
        count: 2,
        image: seven,
    },
];

export function ServiceSlider() {
    const trackRef = useRef<HTMLDivElement>(null);

    const scroll = (dir: "left" | "right") => {
        if (!trackRef.current) return;
        const width = trackRef.current.clientWidth;
        trackRef.current.scrollTo({
            left: dir === "left" ? trackRef.current.scrollLeft - width * 0.6 : trackRef.current.scrollLeft + width * 0.6,
            behavior: "smooth",
        });
    };

    return (
        <div className="border-b border-[rgba(0,0,0,0.1)] ">
            <div className="px-5 lg:px-[75px] py-[80px] w-full bg-[#fff] max-sm:py-[30px] desktop_width">
                <div className="mb-[28px] flex items-center justify-between">
                    <h2 className="text-[26px] font-[Bold] text-[#000] text30px max-sm:text-[20px]">Services category</h2>
                    <div className="flex gap-[8px]">
                        <button
                            type="button"
                            onClick={() => scroll("left")}
                            className="flex w-[28px] h-[28px] cursor-pointer items-center justify-center rounded-full bg-white shadow-[0_0_15px_0_rgba(0,0,0,0.1)]"
                        >
                            <ArrowDownIcon className="rotate-90" />
                        </button>
                        <button
                            type="button"
                            onClick={() => scroll("right")}
                            className="flex w-[28px] h-[28px] cursor-pointer items-center justify-center rounded-full bg-white shadow-[0_0_15px_0_rgba(0,0,0,0.1)]"
                        >
                            <ArrowDownIcon className="rotate-270" />
                        </button>
                    </div>
                </div>
                <div
                    ref={trackRef}
                    className="flex gap-[18px] overflow-x-auto pb-[10px] snap-x snap-mandatory touch-pan-x hide-scrollbar"
                >
                    {serviceCategories.map((item) => (
                        <div
                            key={item.label}
                            className="min-w-[160px] snap-start rounded-[24px] "
                        >
                            <div className={`relative h-[200px] rounded-t-[24px] overflow-hidden slider_img`}>
                                <img src={item.image} alt={item.label} className="absolute rounded-[30px] h-full w-full object-cover" />
                                <div className="absolute bottom-[20px] left-0 right-0 flex items-center justify-center flex-col gap-[2px] z-[2]">
                                    <h4 className="text-[#FFF] font-[Bold] text-[14px]">{item.label}</h4>
                                    <p className="text-[#FFF] font-[Regular] text-[12px]">{item.count} services</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

