import { useState } from "react";
import { CalendarIcon } from "../../../components/customfile/icons";
import { Tabs, TabsList, TabsTrigger } from "../../../components/Ui/Tabs";
import DatePickerModal from "./components/DatePickerModal";
import TransactionHistory, { type Transaction } from "./components/TransactionHistory";

const mockTransactions: Transaction[] = [
    { id: "#006", bookingDate: "18 Nov 2025", fare: "$550.00", balanceFor: "Balance", type: "Cash", balance: "$555.00", paymentType: "Cash" },
    { id: "#005", bookingDate: "18 Nov 2025", fare: "$550.00", balanceFor: "Balance", type: "Cash", balance: "$565.00", paymentType: "Cash" },
    { id: "#004", bookingDate: "18 Nov 2025", fare: "$550.00", balanceFor: "Balance", type: "Cash", balance: "$552.00", paymentType: "Card" },
    { id: "#003", bookingDate: "18 Nov 2025", fare: "$550.00", balanceFor: "Balance", type: "Cash", balance: "$554.00", paymentType: "Cash" },
    { id: "#002", bookingDate: "18 Nov 2025", fare: "$550.00", balanceFor: "Balance", type: "Cash", balance: "$564.00", paymentType: "Cash" },
    { id: "#001", bookingDate: "18 Nov 2025", fare: "$550.00", balanceFor: "Balance", type: "Cash", balance: "$558.00", paymentType: "Card" },
    { id: "#000", bookingDate: "18 Nov 2025", fare: "$550.00", balanceFor: "Balance", type: "Cash", balance: "$559.00", paymentType: "Cash" },
    { id: "#009", bookingDate: "18 Nov 2025", fare: "$550.00", balanceFor: "Balance", type: "Cash", balance: "$560.00", paymentType: "Cash" },
    { id: "#008", bookingDate: "18 Nov 2025", fare: "$550.00", balanceFor: "Balance", type: "Cash", balance: "$563.00", paymentType: "Cash" },
    { id: "#007", bookingDate: "18 Nov 2025", fare: "$550.00", balanceFor: "Balance", type: "Cash", balance: "$553.00", paymentType: "Cash" },
];

export default function UserWallet() {
    const [entriesPerPage, setEntriesPerPage] = useState("10");
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const totalPages = 5;
    const totalEntries = 200;
    const startEntry = (currentPage - 1) * parseInt(entriesPerPage) + 1;
    const endEntry = Math.min(currentPage * parseInt(entriesPerPage), totalEntries);
    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("all-transactions");
    const [selectedDate, setSelectedDate] = useState("12 December 2025");
    const [selectedDateObj, setSelectedDateObj] = useState<Date | null>(new Date(2025, 11, 12)); // December 12, 2025

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

    // Filter transactions based on active tab (for now we just filter by paymentType)
    const filteredTransactions =
        activeTab === "card-payments"
            ? mockTransactions.filter((t) => t.paymentType.toLowerCase() === "card")
            : activeTab === "cash-payments"
                ? mockTransactions.filter((t) => t.paymentType.toLowerCase() === "cash")
                : mockTransactions;

    const currentTitle =
        activeTab === "card-payments"
            ? "Card payments"
            : activeTab === "cash-payments"
                ? "Cash payments"
                : "All Transactions";

    return (
        <>
            <div className="bg-[#fff] mt-[70px]">
                <div className="px-5 lg:px-[75px] py-[80px] common_p_80 max-sm:py-[0px_40px] max-w-[1230px] mx-auto w-full user_container">
                    {/* Earnings Summary */}
                    <div className="flex items-center justify-center gap-[80px] mb-[40px] max-sm:flex-col border-b border-[rgba(0,0,0,0.10)] pb-[40px] max-sm:gap-[20px]">
                        <div className="text-center">
                            <h4 className="text-[14px] font-[Regular] text-[#000] mb-[6px]">Wallet Balance</h4>
                            <h3 className="text-[28px] font-[Bold] text-[#000]">$20,000.00</h3>
                        </div>
                    </div>

                    <div className="flex items-center justify-center mb-[30px] flex-wrap max-sm:gap-[10px] booking_tabs">
                        <div className="">
                            <Tabs value={activeTab} onValueChange={setActiveTab} className="">
                                <TabsList className="flex gap-[6px] max-sm:w-[95vw] max-sm:overflow-x-auto hide-scrollbar bg-[#F8F8F8] rounded-full p-[4px]">
                                    <TabsTrigger
                                        value="all-transactions"
                                        className={`flex flex-shrink-0 wallettab_buttons px-[79px] py-[18px] max-sm:p-[16px_30px] rounded-full text-[14px] font-[SemiBold] border-none transition-all cursor-pointer ${activeTab === "all-transactions"
                                            ? "bg-[#000] text-[#fff]"
                                            : "bg-[#fff] text-[#000] shadow-[0px_4px_15px_rgba(0,0,0,0.1)]"
                                            }`}
                                    >
                                        All Transactions
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="card-payments"
                                        className={`flex flex-shrink-0 wallettab_buttons px-[79px] py-[18px] max-sm:p-[16px_30px] rounded-full text-[14px] font-[SemiBold] border-none transition-all cursor-pointer ${activeTab === "card-payments"
                                            ? "bg-[#000] text-[#fff]"
                                            : "bg-[#fff] text-[#000] shadow-[0px_4px_15px_rgba(0,0,0,0.1)]"
                                            }`}
                                    >
                                        Card payments
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="cash-payments"
                                        className={`flex flex-shrink-0 wallettab_buttons px-[79px] py-[18px] max-sm:p-[16px_30px] rounded-full text-[14px] font-[SemiBold] border-none transition-all cursor-pointer ${activeTab === "cash-payments"
                                            ? "bg-[#000] text-[#fff]"
                                            : "bg-[#fff] text-[#000] shadow-[0px_4px_15px_rgba(0,0,0,0.1)]"
                                            }`}
                                    >
                                        Cash payments
                                    </TabsTrigger>
                                </TabsList>
                            </Tabs>
                        </div>

                        {/* Date Filter */}
                        <div
                            className="flex items-center gap-[10px] bg-[#F8F8F8] p-[12px_20px] rounded-full justify-between cursor-pointer max-sm:w-full datediv"
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
                            <CalendarIcon className="w-[20px] h-[20px]" />
                        </div>
                    </div>

                    {/* Transaction History Section */}
                    <TransactionHistory
                        title={currentTitle}
                        entriesPerPage={entriesPerPage}
                        onEntriesPerPageChange={setEntriesPerPage}
                        searchQuery={searchQuery}
                        onSearchQueryChange={setSearchQuery}
                        transactions={filteredTransactions}
                        currentPage={currentPage}
                        totalPages={totalPages}
                        totalEntries={totalEntries}
                        startEntry={startEntry}
                        endEntry={endEntry}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
            <DatePickerModal
                isOpen={isDatePickerOpen}
                onClose={() => setIsDatePickerOpen(false)}
                selectedDate={selectedDateObj}
                onDateSelect={handleDateSelect}
                onFilter={handleFilter}
            />
        </>
    );
}

