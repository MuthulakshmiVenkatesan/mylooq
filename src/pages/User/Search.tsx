import { useRef, useState } from "react";
import { ArrowDownIcon, LocationIcon, TargetIcon, TickIcon, StarIcon } from "../../components/customfile/icons";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "../../components/Ui/Select";
import { Checkbox, CheckboxIndicator } from "../../components/Ui/Checkbox";
import { Link } from "react-router-dom";
const serviceOptions = [
    "Hair",
    "LooQer",
    "Makeup",
    "Spa",
    "Hair and care",
    "Salon",
    "Massage"
];

const providers = Array.from({ length: 100 }).map((_, index) => ({
    name: `Diane William`,
    status: index % 3 === 0 ? "Offline" : "Online",
    badge: index % 3 === 0 ? "Scheduled booking only" : "Available for booking",
    rating: "4",
    photo: `https://i.pravatar.cc/150?img=${index + 10}`,
}));

const filters = ["Dialed facial", "Classic facial", "Mask", "Premium facial", "Threading", "Waxing"];

const sortOptions = ["Featured", "Rating", "Availability"];

const renderStars = (rating: number) => {
    const stars = [];
    for (let idx = 0; idx < 5; idx += 1) {
        const threshold = idx + 1;
        if (rating >= threshold) {
            stars.push(
                <StarIcon key={`full-${idx}`} className="w-[12px] h-[11px]" fill="#FFCB2B" />
            );
        } else if (rating >= threshold - 0.5) {
            stars.push(
                <div
                    key={`half-${idx}`}
                    className="relative inline-flex w-[12px] h-[11px]"
                >
                    <StarIcon className="absolute inset-0 w-[12px] h-[11px]" fill="#878387" />
                </div>
            );
        } else {
            stars.push(<StarIcon key={`empty-${idx}`} className="w-[12px] h-[11px]" fill="#878387" />);
        }
    }
    return stars;
};

function Search() {
    const [sortMethod, setSortMethod] = useState(sortOptions[0]);
    const selectTriggerRef = useRef<HTMLButtonElement | null>(null);
    const [activeFilters, setActiveFilters] = useState<string[]>([]);
    const [page, setPage] = useState(1);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const cardsPerPage = 12;
    const totalPages = Math.ceil(providers.length / cardsPerPage);

    const tabContent = providers.slice((page - 1) * cardsPerPage, page * cardsPerPage);

    const visiblePages = () => {
        const maxButtons = 5;
        const start = Math.max(1, Math.min(totalPages - maxButtons + 1, page - 2));
        return Array.from({ length: Math.min(maxButtons, totalPages) }, (_, idx) => start + idx);
    };

    const toggleFilter = (filter: string) => {
        setActiveFilters((prev) =>
            prev.includes(filter) ? prev.filter((item) => item !== filter) : [...prev, filter]
        );
    };

    return (
        <div className="mx-auto w-full bg-[#fff] mt-[70px] ">
            <div className="p-[20px_0_80px] max-sm:p-[20px_0_60px]">
                <div className="px-5 lg:px-[40px] flex gap-[2px] w-full max-sm:flex-col max-sm:gap-[10px] border-b border-[rgba(0,0,0,0.1)] pb-[20px] mb-[80px] max-sm:mb-[20px]">
                    <div className="flex items-center justify-between bg-[#F8F8F8] rounded-[50px] p-[18px_30px] w-full gap-[10px]">
                        <div className="flex items-center gap-[10px] w-full">
                            <LocationIcon className="w-[25px] h-[25px]" />
                            <input
                                placeholder="Enter your Location to Find and Book LooQers nearby you"
                                className="flex-1 rounded-[0] border border-transparent bg-transparent p-[0px] text-[14px] font-[Regular] text-[#000] focus:border-none focus:outline-none placeholder:text-[#878387] w-full"
                            />
                        </div>
                        <div className="cursor-pointer">
                            <TargetIcon className="w-[25px] h-[25px]" />
                        </div>
                    </div>
                    <div className="w-full max-w-[200px] bg-[#F8F8F8] rounded-[50px] p-[4px] max-sm:max-w-full">
                        <Select defaultValue="">
                            <SelectTrigger
                                className="cursor-pointer flex w-full items-center justify-between rounded-[50px] border-none bg-white p-[16px] text-[14px] font-[SemiBold] text-[#000] shadow-[0px_4px_15px_0px_rgba(0,0,0,0.1)] bg-[#fff] focus:outline-none focus:border-none "
                            >
                                <SelectValue placeholder="Service type" />
                                <ArrowDownIcon className="text-[#544862]" />
                            </SelectTrigger>
                            <SelectContent className="mt-[6px] rounded-[16px] border border-[#E4DAF1] bg-white shadow-[0_25px_45px_rgba(0,0,0,0.15)]">
                                {serviceOptions.map((option) => (
                                    <SelectItem
                                        key={option}
                                        value={option}
                                        className="px-[16px] py-[12px] text-[14px] font-[Regular] text-[#2E2352] data-[highlighted]:bg-[#F2ECFF] focus:outline-none focus:border-none focus:shadow-none border-none"
                                    >
                                        {option}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <button className="rounded-[50px] bg-[#6E2C91] p-[4px_60px] text-[14px] font-[Bold] text-white font-[SemiBold] max-sm:w-full max-sm:p-[16px]">
                        Search
                    </button>
                </div>

                <div className="px-5 lg:px-[75px] w-full desktop_width !py-[0] flex flex-col gap-[50px] lg:flex-row max-sm:gap-[20px]">
                    <aside className="filtersection max-sm:max-w-full w-full max-w-[300px] rounded-[30px] bg-[#F8F8F8] h-[100%]">
                        <div
                            className="flex items-center justify-between p-[26px] max-sm:cursor-pointer"
                            onClick={() => setIsFilterOpen((prev) => !prev)}
                        >
                            <h5 className="text-[18px] font-[Bold] text-[#000] ">Filters</h5>
                            <button className="text-[14px] font-[SemiBold] text-[#878387] cursor-pointer">Clear all</button>
                        </div>
                        <div className={`p-[26px] border-t border-[rgba(0,0,0,0.1)] ${isFilterOpen ? "filteropen" : "filterhide max-sm:hidden"}`}>
                            <p className="text-[16px] font-[SemiBold] text-[#000] mb-[14px]">By Service Type</p>
                            <div className="space-y-[12px] mb-[30px]">
                                {filters.map((filter) => (
                                    <div
                                        key={filter}
                                        onClick={() => toggleFilter(filter)}
                                        className="flex items-center gap-[10px] cursor-pointer"
                                    >
                                        <Checkbox
                                            key={filter}
                                            onClick={() => toggleFilter(filter)}
                                            checked={activeFilters.includes(filter)}
                                            onCheckedChange={() => toggleFilter(filter)}
                                            className="cursor-pointer h-[18px] w-[18px] rounded-[6px] border border-[#878387] bg-transparent data-[state=checked]:bg-[#6E2C91] data-[state=checked]:border-transparent"
                                        >
                                            <CheckboxIndicator className="flex h-full w-full items-center justify-center text-[12px] text-[#6E2C91]">
                                                <TickIcon className="w-[10px] h-[10px]" />
                                            </CheckboxIndicator>
                                        </Checkbox>
                                        <p className="text-[14px] font-[Regular] text-[#000]">{filter}</p>
                                    </div>
                                ))}
                            </div>
                            <button className="cursor-pointer mt-[20px] w-fit rounded-[50px] bg-[#000] p-[12px_30px] text-[14px] font-[Bold] text-white">
                                Apply filters
                            </button>
                        </div>
                    </aside>

                    <section className="flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-[10px] mb-[26px] bo">
                            <p className="text-[14px] font-[Regular] text-[#000]">20 Providers found</p>
                            <div
                                className="flex items-center gap-[2px] border border-[rgba(0,0,0,0.10)] rounded-[100px] p-[16px_20px]"
                                onClick={() => selectTriggerRef.current?.click()}
                            >
                                {/* <p className="text-[14px] font-[Regular] text-[#878387]">Sort by:</p> */}
                                <div className="">
                                    <Select value={sortMethod} onValueChange={setSortMethod}>
                                        <SelectTrigger
                                            className="cursor-pointer flex items-center gap-[2px] bg-transparent text-[14px] font-[SemiBold] text-[#000] focus:outline-none focus:border-none focus:shadow-none"
                                            ref={selectTriggerRef}
                                        >

                                            <p className="text-[14px] font-[Regular] text-[#878387]">Sort by:</p>
                                            <SelectValue placeholder={sortOptions[0]} />
                                            <ArrowDownIcon className="ml-[24px]" />
                                        </SelectTrigger>
                                        <SelectContent
                                            className="mt-[6px] rounded-[10px] border border-[rgba(0,0,0,0.10)] bg-white focus:outline-none focus:shadow-none">
                                            {sortOptions.map((option) => (
                                                <SelectItem
                                                    key={option}
                                                    value={option}
                                                    className="cursor-pointer focus:outline-none focus:border-none focus:shadow-none px-[16px] py-[12px] text-[14px] font-[Regular] text-[#000]"
                                                >
                                                    {option}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </div>

                        <div className="grid gap-[20px] md:grid-cols-2 lg:grid-cols-3 search_grid">
                            {tabContent.map((provider) => (
                                <Link to='/user/providerdetail' >
                                    <div
                                        key={`${provider.name}-${provider.badge}`}
                                        className="rounded-[30px] border border-[rgba(0,0,0,0.10)] bg-[#fff] "
                                    >
                                        <div className="flex flex-col items-center gap-[12px] border-b border-[rgba(0,0,0,0.10)] p-[24px]">
                                            <div className="relative ">
                                                <img
                                                    src={provider.photo}
                                                    alt={provider.name}
                                                    className="h-[80px] w-[80px] rounded-full object-cover"
                                                />
                                                <div className="absolute top-[0] right-[-7px] bg-[#00C299] rounded-full p-[4px] border-[2px] border-[#fff]">
                                                    <TickIcon className="w-[12px] h-[12px]" strokeWidth="1" />
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <h6 className="text-[18px] font-[Bold] text-[#000]">{provider.name}</h6>
                                                <div className="flex items-center justify-center gap-[4px]">
                                                    <div className="flex items-center justify-center gap-[1px]">
                                                        {renderStars(Number(provider.rating))}
                                                    </div>
                                                    <p className="text-[12px] font-[Regular] text-[#000] leading-[21px]">
                                                        {provider.rating} / 5
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-[24px] text-center">
                                            <h4 className={`text-[12px] font-[Regular] mb-[2px] ${provider.status === "Online" ? "text-[#00C299]" : "text-[#FF0000]"}`}>{provider.status}</h4>
                                            <p className="text-[14px] font-[SemiBold] text-[#000]">{provider.badge}</p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        <div className="flex flex-wrap items-center justify-center gap-[12px] pt-[30px]">
                            <div className="flex items-center gap-[12px]">
                                <button
                                    onClick={() => setPage((prev) => Math.max(1, prev - 1))}
                                    className="cursor-pointer mr-[10px] flex items-center justify-center rounded-full text-[#878387] text-[14px] font-[Regular]"
                                >
                                    Prev
                                </button>
                                {visiblePages().map((pageNum) => (
                                    <button
                                        key={pageNum}
                                        onClick={() => setPage(pageNum)}
                                        className={`cursor-pointer h-[44px] w-[44px] rounded-[10px] border border-[rgba(0,0,0,0.10)] font-[SemiBold] ${pageNum === page ? "bg-[#6E2C91] text-white" : "bg-[#F8F8F8] text-[#000]"}`}
                                    >
                                        {pageNum}
                                    </button>
                                ))}
                                <button
                                    onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}
                                    className="cursor-pointer ml-[10px] flex items-center justify-center rounded-full text-[#878387] text-[14px] font-[Regular]"
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Search;