import { useState } from "react";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "../../components/Ui/Select";
import { SearchIcon, DownloadIcon } from "../../components/customfile/icons";

interface Transaction {
    id: string;
    bookingDate: string;
    fare: string;
    commission: string;
    totalFee: string;
    tip: string;
    payment: string;
    paymentType: string;
}

const mockTransactions: Transaction[] = [
    { id: "#006", bookingDate: "18 Nov 2025", fare: "$550.00", commission: "$550.00", totalFee: "$580.00", tip: "$550.00", payment: "$555.00", paymentType: "Cash" },
    { id: "#005", bookingDate: "18 Nov 2025", fare: "$550.00", commission: "$550.00", totalFee: "$580.00", tip: "$550.00", payment: "$565.00", paymentType: "Cash" },
    { id: "#004", bookingDate: "18 Nov 2025", fare: "$550.00", commission: "$550.00", totalFee: "$580.00", tip: "$550.00", payment: "$552.00", paymentType: "Cash" },
    { id: "#003", bookingDate: "18 Nov 2025", fare: "$550.00", commission: "$550.00", totalFee: "$580.00", tip: "$550.00", payment: "$554.00", paymentType: "Cash" },
    { id: "#002", bookingDate: "18 Nov 2025", fare: "$550.00", commission: "$550.00", totalFee: "$580.00", tip: "$550.00", payment: "$564.00", paymentType: "Cash" },
    { id: "#001", bookingDate: "18 Nov 2025", fare: "$550.00", commission: "$550.00", totalFee: "$580.00", tip: "$550.00", payment: "$558.00", paymentType: "Cash" },
    { id: "#000", bookingDate: "18 Nov 2025", fare: "$550.00", commission: "$550.00", totalFee: "$580.00", tip: "$550.00", payment: "$559.00", paymentType: "Cash" },
    { id: "#009", bookingDate: "18 Nov 2025", fare: "$550.00", commission: "$550.00", totalFee: "$580.00", tip: "$550.00", payment: "$560.00", paymentType: "Cash" },
    { id: "#008", bookingDate: "18 Nov 2025", fare: "$550.00", commission: "$550.00", totalFee: "$580.00", tip: "$550.00", payment: "$563.00", paymentType: "Cash" },
    { id: "#007", bookingDate: "18 Nov 2025", fare: "$550.00", commission: "$550.00", totalFee: "$580.00", tip: "$550.00", payment: "$553.00", paymentType: "Cash" },
];

export default function Wallet() {
    const [entriesPerPage, setEntriesPerPage] = useState("10");
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const totalPages = 5;
    const totalEntries = 200;
    const startEntry = (currentPage - 1) * parseInt(entriesPerPage) + 1;
    const endEntry = Math.min(currentPage * parseInt(entriesPerPage), totalEntries);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div className="min-h-screen bg-[#fff] py-[80px] max-sm:py-[30px]">
            <div className="px-5 lg:px-[75px] max-w-[1230px] mx-auto w-full looqer_home_container max-sm:px-[15px]">
                {/* Earnings Summary */}
                <div className="flex items-center justify-center gap-[80px] mb-[40px] max-sm:flex-col border-b border-[rgba(0,0,0,0.10)] pb-[40px] max-sm:gap-[20px]">
                    <div className="text-center max-sm:border-b border-[rgba(0,0,0,0.10)] pb-[20px] max-sm:w-full">
                        <h4 className="text-[14px] font-[Regular] text-[#000] mb-[6px]">Wallet balance</h4>
                        <h3 className="text-[28px] font-[Bold] text-[#000]">$20,000.00</h3>
                    </div>
                    <div className="w-[1px] h-[40px] bg-[rgba(0,0,0,0.10)] max-sm:hidden"></div>
                    <div className="text-center">
                        <h4 className="text-[14px] font-[Regular] text-[#000] mb-[6px]">Total earnings</h4>
                        <h3 className="text-[28px] font-[Bold] text-[#000]">$20,000.00</h3>
                    </div>
                </div>

                {/* Transaction History Section */}
                <div className="">
                    {/* Header with Title, Entries Select, and Search */}
                    <div className="mb-[20px]">
                        <div className="flex items-center justify-between gap-[20px] flex-1 max-sm:flex-col-reverse max-sm:gap-[10px] bookingtable_header">
                            <div className="flex items-center gap-[8px] w-[240px] max-sm:w-full">
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
                            <h3 className="text-[22px] font-[Bold] text-[#000] max-sm:order-1">Transaction history</h3>
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
                    <div className="overflow-x-auto rounded-[30px] border border-[rgba(0,0,0,0.10)] bg-[#fff] table_scrollbar">
                        <table className="w-full max-sm:w-[330vw] looqer_home_table">
                            <thead className="bg-[#EBE4EF]">
                                <tr>
                                    <th className="text-[#000] text-[14px] p-[16px_30px] text-left font-[SemiBold] align-baseline">ID</th>
                                    <th className="text-[#000] text-[14px] p-[16px_30px] text-left font-[SemiBold] align-baseline">Booking date</th>
                                    <th className="text-[#000] text-[14px] p-[16px_30px] text-left font-[SemiBold] align-baseline">Fare</th>
                                    <th className="text-[#000] text-[14px] p-[16px_30px] text-left font-[SemiBold] align-baseline">Commission</th>
                                    <th className="text-[#000] text-[14px] p-[16px_30px] text-left font-[SemiBold] align-baseline">Total Fee</th>
                                    <th className="text-[#000] text-[14px] p-[16px_30px] text-left font-[SemiBold] align-baseline">Tip</th>
                                    <th className="text-[#000] text-[14px] p-[16px_30px] text-left font-[SemiBold] align-baseline">Payment</th>
                                    <th className="text-[#000] text-[14px] p-[16px_30px] text-left font-[SemiBold] align-baseline">Payment Type</th>
                                    <th className="text-[#000] text-[14px] p-[16px_30px] text-left font-[SemiBold] align-baseline">Invoice</th>
                                </tr>
                            </thead>
                            <tbody className="border-b border-[rgba(0,0,0,0.1)] last:border-b-0 last:border-none">
                                {mockTransactions.map((transaction, index) => (
                                    <tr
                                        key={`${transaction.id}-${index}`}
                                        className="border-b border-[rgba(0,0,0,0.1)] last:border-b-0"
                                    >
                                        <td className="p-[15px_30px] text-[14px] font-[Regular] text-[#878387]">
                                            {transaction.id}
                                        </td>
                                        <td className="p-[15px_30px] text-[14px] font-[Regular] text-[#000]">
                                            {transaction.bookingDate}
                                        </td>
                                        <td className="p-[15px_30px] text-[14px] font-[Regular] text-[#000]">
                                            {transaction.fare}
                                        </td>
                                        <td className="p-[15px_30px] text-[14px] font-[Regular] text-[#000]">
                                            {transaction.commission}
                                        </td>
                                        <td className="p-[15px_30px] text-[14px] font-[Regular] text-[#000]">
                                            {transaction.totalFee}
                                        </td>
                                        <td className="p-[15px_30px] text-[14px] font-[Regular] text-[#000]">
                                            {transaction.tip}
                                        </td>
                                        <td className="p-[15px_30px] text-[14px] font-[Regular] text-[#000]">
                                            {transaction.payment}
                                        </td>
                                        <td className="p-[15px_30px]">
                                            <div className="border border-[rgba(0,0,0,0.1)] rounded-[5px] p-[4px_10px] w-fit">
                                                <p className="text-[12px] font-[Regular] text-[#000]">{transaction.paymentType}</p>
                                            </div>
                                        </td>
                                        <td className="p-[15px_30px]">
                                            <button className="flex items-center gap-[6px] cursor-pointer ">
                                                <DownloadIcon className="w-[16px] h-[16px]" fill="#6E2C91" />
                                                <p className="text-[14px] font-[Regular] text-[#6E2C91] ">Download</p>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="pt-[30px] flex flex-col items-center justify-between gap-[20px]">
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
            </div>
        </div>
    );
}

