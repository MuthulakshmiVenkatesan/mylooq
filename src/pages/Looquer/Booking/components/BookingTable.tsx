import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "../../../../components/Ui/Select";
import { SearchIcon } from "../../../../components/customfile/icons";

export interface BookingRequest {
    id: string;
    customer: string;
    datetime: string;
    services: string[];
    status?: "New" | "Accepted" | "Completed" | "Cancelled" | "Started" | "Arrived" | "Need to do";
    location: string;
    payment?: string;
}

interface BookingTableProps {
    entriesPerPage: string;
    setEntriesPerPage: (value: string) => void;
    currentPage: number;
    handlePageChange: (page: number) => void;
    totalPages: number;
    totalEntries: number;
    startEntry: number;
    endEntry: number;
    bookings: BookingRequest[];
    title?: string;
    showPayment?: boolean;
}

const statusStyles: Record<string, string> = {
    New: "bg-[#00C299]",
    Accepted: "bg-[#6E2C91]",
    Completed: "bg-[#000]",
    Cancelled: "bg-[#E88FA0]",
    "Started": "bg-[#6E2C91]",
    "Arrived": "bg-[#000]",
    "Need to do": "bg-[#E88FA0]",
};



export default function BookingTable({
    entriesPerPage,
    setEntriesPerPage,
    currentPage,
    handlePageChange,
    totalPages,
    totalEntries,
    startEntry,
    endEntry,
    bookings,
    title = "Booking requests",
    showPayment = false,
}: BookingTableProps) {
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    const handleRowClick = (bookingId: string) => {
        navigate(`/looqer/booking/${encodeURIComponent(bookingId)}`);
    };
    return (
        <div className="bg-[#fff]">
            {/* Header with Entries Select and Title */}
            <div className="mb-[30px]">
                <div className="max-sm:flex-col max-sm:gap-[10px] flex items-center justify-between gap-[20px] flex-1">
                    <div className="flex items-center gap-[8px]">
                        <p className="text-[14px] font-[Medium] text-[#000]">Show</p>
                        <Select value={entriesPerPage} onValueChange={setEntriesPerPage}>
                            <SelectTrigger className="p-[10px_20px] rounded-[10px] border border-[rgba(0,0,0,0.1)] bg-[#fff] text-[14px] font-[Regular] text-[#000] cursor-pointer">
                                <SelectValue>
                                    {entriesPerPage}
                                </SelectValue>
                            </SelectTrigger>
                            <SelectContent
                                className="cursor-pointer z-50 top-[2px] bg-[#fff] w-full border border-[#e5e5e5] rounded-[10px] p-[8px] font-[Regular] text-[14px] "
                                style={{ width: "100% !important" }}>
                                <SelectItem className="border-none outline-none cursor-pointer flex items-center gap-2 py-2 px-3"
                                    value="10">10</SelectItem>
                                <SelectItem className="border-none outline-none cursor-pointer flex items-center gap-2 py-2 px-3"
                                    value="20">20</SelectItem>
                                <SelectItem className="border-none outline-none cursor-pointer flex items-center gap-2 py-2 px-3"
                                    value="50">50</SelectItem>
                            </SelectContent>
                        </Select>
                        <p className="text-[14px] font-[Medium] text-[#000]">entries</p>
                    </div>
                    <h3 className="text-[22px] font-[Bold] text-[#000]">{title}</h3>
                    <div className="bg-[#EFEFEF] rounded-full p-[16px_20px] flex items-center gap-[10px]">
                        <SearchIcon className="w-[18px] h-[18px]" stroke="#000" />
                        <input
                            type="text"
                            placeholder="Search here"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-[230px] text-[12px] font-[Regular] text-[#000] placeholder:text-[#878387] focus:outline-none focus:border-none"
                        />
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto rounded-[30px] border border-[#E0DAF4] bg-[#fff] table_scrollbar">
                <table className="w-full max-sm:w-[330vw] looqer_home_table">
                    <thead className="bg-[#EBE4EF]">
                        <tr>
                            <th className="text-[#000] text-[14px] p-[16px_30px] text-left font-[SemiBold]">Booking ID</th>
                            <th className="text-[#000] text-[14px] p-[16px_30px] text-left font-[SemiBold]">Customer name</th>
                            <th className="text-[#000] text-[14px] p-[16px_30px] text-left font-[SemiBold]">Date & Time</th>
                            {showPayment ? (
                                <th className="text-[#000] text-[14px] p-[16px_30px] text-left font-[SemiBold]">Payment</th>
                            ) : (
                                <th className="text-[#000] text-[14px] p-[16px_30px] text-left font-[SemiBold]">Status</th>
                            )}
                            <th className="text-[#000] text-[14px] p-[16px_30px] text-left font-[SemiBold]">Booked services</th>
                            <th className="text-[#000] text-[14px] p-[16px_30px] text-left font-[SemiBold]">Location</th>
                        </tr>
                    </thead>
                    <tbody className="border-b border-[rgba(0,0,0,0.1)] last:border-b-0 last:border-none">
                        {bookings.map((booking, index) => (
                            <tr
                                key={`${booking.id}-${index}`}
                                onClick={() => handleRowClick(booking.id)}
                                className="border-b border-[rgba(0,0,0,0.1)] last:border-b-0 last:border-none cursor-pointer hover:bg-[#F8F8F8] transition-colors"
                            >
                                <td className="p-[15px_30px] text-[14px] font-[Regular] text-[#878387">
                                    {booking.id}
                                </td>
                                <td className="p-[15px_30px] text-[14px] font-[Regular] text-[#000">
                                    {booking.customer}
                                </td>
                                <td className="p-[15px_30px] text-[14px] font-[Regular] text-[#000">
                                    {booking.datetime}
                                </td>
                                {showPayment ? (
                                    <td className="p-[15px_30px] text-[14px] font-[Regular] text-[#000">
                                        {booking.payment || "$0.00"}
                                    </td>
                                ) : (
                                    <td className="p-[15px_30px]">
                                        {booking.status && (
                                            <p
                                                className={`inline-flex items-center justify-center rounded-[50px] px-[14px] py-[8px] text-[12px] font-[SemiBold] text-[#fff] ${statusStyles[booking.status] ?? ""
                                                    }`}
                                            >
                                                {booking.status}
                                            </p>
                                        )}
                                    </td>
                                )}
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
                                    <p className="text-[14px] font-[Regular] text-[#000] truncate max-w-[100px]">{booking.location}</p>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="p-[30px] flex flex-col items-center justify-between gap-[20px]">
                <nav className="flex items-center gap-[10px]">
                    <button
                        type="button"
                        onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                        disabled={currentPage === 1}
                        className="p-[10px_15px] bg-[#fff] text-[14px] font-[Regular] text-[#878387] cursor-pointer transition-colors"
                    >
                        Prev
                    </button>
                    {[...Array(totalPages)].map((_, index) => {
                        const page = index + 1;
                        const isActive = page === currentPage;
                        return (
                            <button
                                key={page}
                                type="button"
                                onClick={() => handlePageChange(page)}
                                className={`w-[40px] h-[40px] rounded-[10px] border text-[14px] font-[SemiBold] cursor-pointer transition-colors ${isActive
                                    ? "bg-[#6E2C91] border-[#6E2C91] text-[#fff]"
                                    : "border-[rgba(0,0,0,0.10)] bg-[#F8F8F8] text-[#000] "
                                    }`}
                            >
                                {page}
                            </button>
                        );
                    })}
                    <button
                        type="button"
                        onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                        disabled={currentPage === totalPages}
                        className="p-[10px_15px] bg-[#fff] text-[14px] font-[Regular] text-[#878387] cursor-pointer transition-colors"
                    >
                        Next
                    </button>
                </nav>
                <p className="text-[14px] font-[Regular] text-[#878387]">
                    Showing {startEntry} to {endEntry} of {totalEntries} entries
                </p>
            </div>
        </div>
    );
}

