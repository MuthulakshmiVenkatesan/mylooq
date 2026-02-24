import { Link } from "react-router-dom";
import { ViewAllIcon } from "../../../../components/customfile/icons";

interface Booking {
    id: string;
    customer: string;
    datetime: string;
    services: string[];
    status: "Completed" | "Started" | "Arrived" | "Need to do";
}

const todayBookings: Booking[] = [
    {
        id: "#S000503515",
        customer: "Daisy johnson",
        datetime: "18 Nov 2025, 4 AM - 5 AM",
        services: ["Deep clean facial", "Detox facial"],
        status: "Completed",
    },
    {
        id: "#S000503515",
        customer: "Daisy johnson",
        datetime: "18 Nov 2025, 4 AM - 5 AM",
        services: ["Deep clean facial", "Detox facial"],
        status: "Completed",
    },
    {
        id: "#S000503515",
        customer: "Daisy johnson",
        datetime: "18 Nov 2025, 4 AM - 5 AM",
        services: ["Deep clean facial", "Detox facial"],
        status: "Started",
    },
    {
        id: "#S000503515",
        customer: "Daisy johnson",
        datetime: "18 Nov 2025, 4 AM - 5 AM",
        services: ["Detox facial"],
        status: "Arrived",
    },
    {
        id: "#S000503515",
        customer: "Daisy johnson",
        datetime: "18 Nov 2025, 4 AM - 5 AM",
        services: ["Deep clean facial", "Detox facial"],
        status: "Need to do",
    },
    {
        id: "#S000503515",
        customer: "Daisy johnson",
        datetime: "18 Nov 2025, 4 AM - 5 AM",
        services: ["Detox facial"],
        status: "Need to do",
    },
    {
        id: "#S000503515",
        customer: "Daisy johnson",
        datetime: "18 Nov 2025, 4 AM - 5 AM",
        services: ["Deep clean facial", "Detox facial"],
        status: "Need to do",
    },
    {
        id: "#S000503515",
        customer: "Daisy johnson",
        datetime: "18 Nov 2025, 4 AM - 5 AM",
        services: ["Detox facial"],
        status: "Need to do",
    },
    {
        id: "#S000503515",
        customer: "Daisy johnson",
        datetime: "18 Nov 2025, 4 AM - 5 AM",
        services: ["Deep clean facial", "Detox facial"],
        status: "Need to do",
    },
    {
        id: "#S000503515",
        customer: "Daisy johnson",
        datetime: "18 Nov 2025, 4 AM - 5 AM",
        services: ["Detox facial"],
        status: "Need to do",
    },
];

const statusStyles: Record<string, string> = {
    Completed: "bg-[#00C299]",
    Started: "bg-[#6E2C91]",
    Arrived: "bg-[#000]",
    "Need to do": "bg-[#E88FA0]",
};

export default function Viewall() {
    return (
        <div className="min-h-screen bg-[#fff] py-[80px] max-sm:py-[30px]">
            <div className="px-5 lg:px-[75px] max-w-[1230px] mx-auto w-full looqer_home_container max-sm:px-[15px]">
                <div className="mb-[30px] flex items-center justify-between flex-wrap gap-2">
                    <h3 className="text-[22px] font-[Bold] text-[#000]">Today Bookings</h3>
                    <div className="flex items-center gap-[14px]">
                        <Link
                            to="/looqer/home"
                            className="cursor-pointer flex items-center gap-[6px]"
                        >
                            <ViewAllIcon className="rotate-180" />
                            <p className="text-[14px] font-[Bold] text-[#000]">Back</p>
                        </Link>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto rounded-[30px] border border-[#E0DAF4] bg-[#fff] table_scrollbar">
                    <table className="w-full max-sm:w-[330vw] looqer_home_table">
                        <thead className="bg-[#EBE4EF]">
                            <tr>
                                <th className="text-[#000] text-[14px] p-[16px_30px] text-left font-[SemiBold]">Booking ID</th>
                                <th className="text-[#000] text-[14px] p-[16px_30px] text-left font-[SemiBold]">Customer name</th>
                                <th className="text-[#000] text-[14px] p-[16px_30px] text-left font-[SemiBold]">Date &amp; Time</th>
                                <th className="text-[#000] text-[14px] p-[16px_30px] text-left font-[SemiBold]">Booked services</th>
                                <th className="text-[#000] text-[14px] p-[16px_30px] text-left font-[SemiBold]">Status</th>
                            </tr>
                        </thead>
                        <tbody className="border-b border-[rgba(0,0,0,0.1)] last:border-b-0 last:border-none">
                            {todayBookings.map((booking, index) => (
                                <tr
                                    key={`${booking.id}-${index}`}
                                    className="border-b border-[rgba(0,0,0,0.1)] last:border-b-0 last:border-none"
                                >
                                    <td className="p-[15px_30px] text-[14px] font-[Regular] text-[#878387]">
                                        {booking.id}
                                    </td>
                                    <td className="p-[15px_30px] text-[14px] font-[Regular] text-[#000]">
                                        {booking.customer}
                                    </td>
                                    <td className="p-[15px_30px] text-[14px] font-[Regular] text-[#000]">
                                        {booking.datetime}
                                    </td>
                                    <td className="p-[15px_30px]">
                                        <div className="flex flex-wrap gap-[6px]">
                                            {booking.services.map((service) => (
                                                <p
                                                    key={service}
                                                    className="rounded-[5px] border border-[rgba(0,0,0,0.1)] p-[4px_10px] text-[12px] font-[Regular] text-[#000]"
                                                >
                                                    {service}
                                                </p>
                                            ))}
                                        </div>
                                    </td>
                                    <td className="p-[15px_30px]">
                                        <p
                                            className={`inline-flex items-center justify-center rounded-[50px] px-[14px] py-[8px] text-[12px] font-[Bold] text-[#fff] ${statusStyles[booking.status] ?? ""
                                                }`}
                                        >
                                            {booking.status}
                                        </p>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

