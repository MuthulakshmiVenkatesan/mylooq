import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "../../../components/Ui/Tabs";
import { CalendarIcon } from "@radix-ui/react-icons";
import BookingTable, { type BookingRequest } from "./components/BookingTable";
import DatePickerModal from "./components/DatePickerModal";

const mockBookingRequests: BookingRequest[] = [
    {
        id: "#3832323313132",
        customer: "Daisy johnson",
        datetime: "18 Nov 2025, 4AM - 5AM",
        services: ["Deep clean facial", "Detox facial", "Haircut", "Hair color", "Manicure", "Pedicure", "Massage"],
        status: "New",
        location: "Curabitur pellentesque nect..."
    },
    {
        id: "#3832323313133",
        customer: "John Smith",
        datetime: "18 Nov 2025, 5AM - 6AM",
        services: ["Deep clean facial", "Detox facial"],
        status: "New",
        location: "Curabitur pellentesque nect..."
    },
    {
        id: "#3832323313134",
        customer: "Jane Doe",
        datetime: "18 Nov 2025, 6AM - 7AM",
        services: ["Haircut", "Hair color"],
        status: "New",
        location: "Curabitur pellentesque nect..."
    },
    {
        id: "#3832323313135",
        customer: "Mike Wilson",
        datetime: "18 Nov 2025, 7AM - 8AM",
        services: ["Manicure", "Pedicure"],
        status: "New",
        location: "Curabitur pellentesque nect..."
    },
    {
        id: "#3832323313136",
        customer: "Sarah Brown",
        datetime: "18 Nov 2025, 8AM - 9AM",
        services: ["Deep clean facial", "Detox facial", "Massage"],
        status: "New",
        location: "Curabitur pellentesque nect..."
    },
    {
        id: "#3832323313137",
        customer: "Tom Anderson",
        datetime: "18 Nov 2025, 9AM - 10AM",
        services: ["Haircut"],
        status: "New",
        location: "Curabitur pellentesque nect..."
    },
    {
        id: "#3832323313138",
        customer: "Emily Davis",
        datetime: "18 Nov 2025, 10AM - 11AM",
        services: ["Deep clean facial", "Detox facial", "Haircut", "Hair color"],
        status: "New",
        location: "Curabitur pellentesque nect..."
    },
    {
        id: "#3832323313139",
        customer: "Chris Lee",
        datetime: "18 Nov 2025, 11AM - 12PM",
        services: ["Manicure", "Pedicure", "Massage"],
        status: "New",
        location: "Curabitur pellentesque nect..."
    },
    {
        id: "#3832323313140",
        customer: "Lisa Taylor",
        datetime: "18 Nov 2025, 12PM - 1PM",
        services: ["Deep clean facial"],
        status: "New",
        location: "Curabitur pellentesque nect..."
    },
    {
        id: "#3832323313141",
        customer: "David Martinez",
        datetime: "18 Nov 2025, 1PM - 2PM",
        services: ["Detox facial", "Haircut", "Hair color", "Manicure"],
        status: "New",
        location: "Curabitur pellentesque nect..."
    },
];

const mockUpcomingBookings: BookingRequest[] = [
    {
        id: "#S0012321075132",
        customer: "Daisy johnson",
        datetime: "10 Nov 2025, 10 AM - 11 AM",
        services: ["Deep clean facial"],
        status: "Started",
        location: "Curabitur pellentesque nec t..."
    },
    {
        id: "#S0012321075133",
        customer: "Daisy johnson",
        datetime: "10 Nov 2025, 10 AM - 11 AM",
        services: ["Deep clean facial"],
        status: "Arrived",
        location: "Curabitur pellentesque nec t..."
    },
    {
        id: "#S0012321075134",
        customer: "Daisy johnson",
        datetime: "10 Nov 2025, 10 AM - 11 AM",
        services: ["Deep clean facial"],
        status: "Need to do",
        location: "Curabitur pellentesque nec t..."
    },
    {
        id: "#S0012321075135",
        customer: "Daisy johnson",
        datetime: "10 Nov 2025, 10 AM - 11 AM",
        services: ["Deep clean facial"],
        status: "Need to do",
        location: "Curabitur pellentesque nec t..."
    },
    {
        id: "#S0012321075136",
        customer: "Daisy johnson",
        datetime: "10 Nov 2025, 10 AM - 11 AM",
        services: ["Deep clean facial"],
        status: "Need to do",
        location: "Curabitur pellentesque nec t..."
    },
    {
        id: "#S0012321075137",
        customer: "Daisy johnson",
        datetime: "10 Nov 2025, 10 AM - 11 AM",
        services: ["Deep clean facial"],
        status: "Need to do",
        location: "Curabitur pellentesque nec t..."
    },
    {
        id: "#S0012321075138",
        customer: "Daisy johnson",
        datetime: "10 Nov 2025, 10 AM - 11 AM",
        services: ["Deep clean facial", "Detox facial"],
        status: "Need to do",
        location: "Curabitur pellentesque nec t..."
    },
    {
        id: "#S0012321075139",
        customer: "Daisy johnson",
        datetime: "10 Nov 2025, 10 AM - 11 AM",
        services: ["Deep clean facial", "Detox facial"],
        status: "Need to do",
        location: "Curabitur pellentesque nec t..."
    },
    {
        id: "#S0012321075140",
        customer: "Daisy johnson",
        datetime: "10 Nov 2025, 10 AM - 11 AM",
        services: ["Deep clean facial", "Detox facial"],
        status: "Need to do",
        location: "Curabitur pellentesque nec t..."
    },
    {
        id: "#S0012321075141",
        customer: "Daisy johnson",
        datetime: "10 Nov 2025, 10 AM - 11 AM",
        services: ["Deep clean facial", "Haircut"],
        status: "Need to do",
        location: "Curabitur pellentesque nec t..."
    },
    {
        id: "#S0012321075142",
        customer: "Daisy johnson",
        datetime: "10 Nov 2025, 10 AM - 11 AM",
        services: ["Deep clean facial"],
        status: "Need to do",
        location: "Curabitur pellentesque nec t..."
    },
];

const mockPastBookings: BookingRequest[] = [
    {
        id: "#SB32323313132",
        customer: "Daisy johnson",
        datetime: "18 Nov 2025, 4AM - 5AM",
        services: ["Deep clean facial"],
        location: "Curabitur pellentesque nec...",
        payment: "$20.00"
    },
    {
        id: "#SB32323313133",
        customer: "Daisy johnson",
        datetime: "18 Nov 2025, 4AM - 5AM",
        services: ["Deep clean facial", "Detox facial"],
        location: "Curabitur pellentesque nec...",
        payment: "$20.00"
    },
    {
        id: "#SB32323313134",
        customer: "Daisy johnson",
        datetime: "18 Nov 2025, 4AM - 5AM",
        services: ["Deep clean facial"],
        location: "Curabitur pellentesque nec...",
        payment: "$20.00"
    },
    {
        id: "#SB32323313135",
        customer: "Daisy johnson",
        datetime: "18 Nov 2025, 4AM - 5AM",
        services: ["Deep clean facial", "Detox facial"],
        location: "Curabitur pellentesque nec...",
        payment: "$20.00"
    },
    {
        id: "#SB32323313136",
        customer: "Daisy johnson",
        datetime: "18 Nov 2025, 4AM - 5AM",
        services: ["Deep clean facial"],
        location: "Curabitur pellentesque nec...",
        payment: "$20.00"
    },
    {
        id: "#SB32323313137",
        customer: "Daisy johnson",
        datetime: "18 Nov 2025, 4AM - 5AM",
        services: ["Deep clean facial", "Detox facial"],
        location: "Curabitur pellentesque nec...",
        payment: "$20.00"
    },
    {
        id: "#SB32323313138",
        customer: "Daisy johnson",
        datetime: "18 Nov 2025, 4AM - 5AM",
        services: ["Deep clean facial"],
        location: "Curabitur pellentesque nec...",
        payment: "$20.00"
    },
    {
        id: "#SB32323313139",
        customer: "Daisy johnson",
        datetime: "18 Nov 2025, 4AM - 5AM",
        services: ["Deep clean facial", "Detox facial"],
        location: "Curabitur pellentesque nec...",
        payment: "$20.00"
    },
    {
        id: "#SB32323313140",
        customer: "Daisy johnson",
        datetime: "18 Nov 2025, 4AM - 5AM",
        services: ["Deep clean facial"],
        location: "Curabitur pellentesque nec...",
        payment: "$20.00"
    },
    {
        id: "#SB32323313141",
        customer: "Daisy johnson",
        datetime: "18 Nov 2025, 4AM - 5AM",
        services: ["Deep clean facial", "Detox facial"],
        location: "Curabitur pellentesque nec...",
        payment: "$20.00"
    },
];

export default function Booking() {
    const [activeTab, setActiveTab] = useState("booking-requests");
    const [entriesPerPage, setEntriesPerPage] = useState("10");
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedDate, setSelectedDate] = useState("12 December 2025");
    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
    const [selectedDateObj, setSelectedDateObj] = useState<Date | null>(new Date(2025, 11, 12)); // December 12, 2025
    const totalPages = 5;
    const totalEntries = 200;
    const startEntry = (currentPage - 1) * parseInt(entriesPerPage) + 1;
    const endEntry = Math.min(currentPage * parseInt(entriesPerPage), totalEntries);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handleDateSelect = (date: Date) => {
        setSelectedDateObj(date);
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const formattedDate = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
        setSelectedDate(formattedDate);
    };

    const handleFilter = () => {
        // Apply filter logic here
        console.log("Filter applied with date:", selectedDateObj);
    };

    return (
        <div className="min-h-screen bg-[#fff] py-[80px] max-sm:py-[30px]">
            <div className="px-5 lg:px-[75px] max-w-[1230px] mx-auto w-full looqer_home_container max-sm:px-[15px]">
                {/* Tabs and Date Filter */}
                <div className="flex items-center justify-center mb-[30px] flex-wrap max-sm:gap-[10px] booking_tabs">
                    <div className="max-sm:overflow-x-auto max-sm:w-[calc(100vw-32px)] hide-scrollbar">
                        <Tabs value={activeTab} onValueChange={setActiveTab} className="bg-[#F8F8F8] rounded-full p-[4px] max-sm:w-fit">
                            <TabsList className="flex gap-[6px] bg-transparent p-0">
                                <TabsTrigger
                                    value="booking-requests"
                                    className={`px-[73px] py-[18px] max-sm:p-[16px_30px] rounded-full text-[14px] font-[SemiBold] border-none transition-all cursor-pointer ${activeTab === "booking-requests"
                                        ? "bg-[#000] text-[#fff]"
                                        : "bg-[#fff] text-[#000] shadow-[0px_4px_15px_rgba(0,0,0,0.1)]"
                                        }`}
                                >
                                    Booking requests
                                </TabsTrigger>
                                <TabsTrigger
                                    value="upcoming-bookings"
                                    className={`px-[73px] py-[18px] max-sm:p-[16px_30px] rounded-full text-[14px] font-[SemiBold] border-none transition-all cursor-pointer ${activeTab === "upcoming-bookings"
                                        ? "bg-[#000] text-[#fff]"
                                        : "bg-[#fff] text-[#000] shadow-[0px_4px_15px_rgba(0,0,0,0.1)]"
                                        }`}
                                >
                                    Upcoming bookings
                                </TabsTrigger>
                                <TabsTrigger
                                    value="past-bookings"
                                    className={`px-[73px] py-[18px] max-sm:p-[16px_30px] rounded-full text-[14px] font-[SemiBold] border-none transition-all cursor-pointer ${activeTab === "past-bookings"
                                        ? "bg-[#000] text-[#fff]"
                                        : "bg-[#fff] text-[#000] shadow-[0px_4px_15px_rgba(0,0,0,0.1)]"
                                        }`}
                                >
                                    Past bookings
                                </TabsTrigger>
                            </TabsList>
                        </Tabs>
                    </div>

                    {/* Date Filter */}
                    <div
                        className="flex items-center gap-[10px] bg-[#F8F8F8] p-[12px_20px] rounded-full justify-between cursor-pointer max-sm:w-full"
                        onClick={() => setIsDatePickerOpen(true)}
                    >
                        <div className="flex flex-col gap-[2px] ">
                            <label className="text-[12px] font-[Regular] text-[#878387] whitespace-nowrap focus:outline-none focus:border-none focus:shadow-none">Filter by date</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={selectedDate}
                                    readOnly
                                    className="text-[14px] font-[Bold] text-[#000] focus:outline-none focus:border-none focus:shadow-none cursor-pointer bg-transparent"
                                />
                            </div>
                        </div>
                        <CalendarIcon className="w-[18px] h-[18px]" />
                    </div>
                </div>

                {/* Search Bar */}


                {/* Table Section */}
                {activeTab === "booking-requests" && (
                    <BookingTable
                        entriesPerPage={entriesPerPage}
                        setEntriesPerPage={setEntriesPerPage}
                        currentPage={currentPage}
                        handlePageChange={handlePageChange}
                        totalPages={totalPages}
                        totalEntries={totalEntries}
                        startEntry={startEntry}
                        endEntry={endEntry}
                        bookings={mockBookingRequests}
                        title="Booking requests"
                    />
                )}
                {activeTab === "upcoming-bookings" && (
                    <BookingTable
                        entriesPerPage={entriesPerPage}
                        setEntriesPerPage={setEntriesPerPage}
                        currentPage={currentPage}
                        handlePageChange={handlePageChange}
                        totalPages={totalPages}
                        totalEntries={totalEntries}
                        startEntry={startEntry}
                        endEntry={endEntry}
                        bookings={mockUpcomingBookings}
                        title="Upcoming bookings"
                    />
                )}
                {activeTab === "past-bookings" && (
                    <BookingTable
                        entriesPerPage={entriesPerPage}
                        setEntriesPerPage={setEntriesPerPage}
                        currentPage={currentPage}
                        handlePageChange={handlePageChange}
                        totalPages={totalPages}
                        totalEntries={totalEntries}
                        startEntry={startEntry}
                        endEntry={endEntry}
                        bookings={mockPastBookings}
                        title="Past bookings"
                        showPayment={true}
                    />
                )}
            </div>

            {/* Date Picker Modal */}
            <DatePickerModal
                isOpen={isDatePickerOpen}
                onClose={() => setIsDatePickerOpen(false)}
                selectedDate={selectedDateObj}
                onDateSelect={handleDateSelect}
                onFilter={handleFilter}
            />
        </div>
    );
}

