import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "../../../../components/Ui/Select";
import { SearchIcon, DownloadIcon } from "../../../../components/customfile/icons";

export interface Transaction {
    id: string;
    bookingDate: string;
    fare: string;
    balanceFor: string;
    type: string;
    balance: string;
    paymentType: string;
}

interface TransactionHistoryProps {
    title: string;
    entriesPerPage: string;
    onEntriesPerPageChange: (value: string) => void;
    searchQuery: string;
    onSearchQueryChange: (value: string) => void;
    transactions: Transaction[];
    currentPage: number;
    totalPages: number;
    totalEntries: number;
    startEntry: number;
    endEntry: number;
    onPageChange: (page: number) => void;
}

export default function TransactionHistory({
    title,
    entriesPerPage,
    onEntriesPerPageChange,
    searchQuery,
    onSearchQueryChange,
    transactions,
    currentPage,
    totalPages,
    totalEntries,
    startEntry,
    endEntry,
    onPageChange,
}: TransactionHistoryProps) {
    return (
        <div className="">
            {/* Header with Title, Entries Select, and Search */}
            <div className="mb-[20px]">
                <div className="flex items-center justify-between gap-[20px] flex-1 max-sm:flex-col-reverse bookingtable_header">
                    <div className="flex items-center gap-[8px]">
                        <p className="text-[14px] font-[Medium] text-[#000]">Show</p>
                        <Select value={entriesPerPage} onValueChange={onEntriesPerPageChange}>
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
                    <h3 className="max-sm:order-1 text-[22px] font-[Bold] text-[#000]">{title}</h3>
                    <div className="bg-[#EFEFEF] rounded-full p-[16px_20px] flex items-center gap-[10px]">
                        <SearchIcon className="w-[18px] h-[18px]" stroke="#000" />
                        <input
                            type="text"
                            placeholder="Search here"
                            value={searchQuery}
                            onChange={(e) => onSearchQueryChange(e.target.value)}
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
                            <th className="text-[#000] text-[14px] p-[16px_30px] text-left font-[SemiBold] align-baseline">Transaction date</th>
                            <th className="text-[#000] text-[14px] p-[16px_30px] text-left font-[SemiBold] align-baseline">Fare</th>
                            <th className="text-[#000] text-[14px] p-[16px_30px] text-left font-[SemiBold] align-baseline">Balance for</th>
                            <th className="text-[#000] text-[14px] p-[16px_30px] text-left font-[SemiBold] align-baseline">Type</th>
                            <th className="text-[#000] text-[14px] p-[16px_30px] text-left font-[SemiBold] align-baseline">Balance</th>
                            <th className="text-[#000] text-[14px] p-[16px_30px] text-left font-[SemiBold] align-baseline">Invoice</th>
                        </tr>
                    </thead>
                    <tbody className="border-b border-[rgba(0,0,0,0.1)] last:border-b-0 last:border-none">
                        {transactions.map((transaction, index) => (
                            <tr
                                key={`${transaction.id}-${index}`}
                                className="border-b border-[rgba(0,0,0,0.1)] last:border-b-0 hover:bg-[#F8F8F8] "
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
                                    {transaction.balanceFor}
                                </td>
                                <td className="p-[15px_30px] text-[14px] font-[Regular] text-[#000]">
                                    <div className="border border-[rgba(0,0,0,0.1)] rounded-[5px] p-[4px_10px] w-fit">
                                        <p className="text-[12px] font-[Regular] text-[#000]">{transaction.paymentType}</p>
                                    </div>
                                </td>
                                <td className="p-[15px_30px] text-[14px] font-[Regular] text-[#000]">
                                    {transaction.balance}
                                </td>
                                <td className="p-[15px_30px]">
                                    <button className="flex items-center gap-[6px] cursor-pointer ">
                                        <DownloadIcon className="w-[16px] h-[16px]" fill="#6E2C91" />
                                        <p className="text-[14px] font-[SemiBold] text-[#6E2C91] ">Download</p>
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
                        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
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
                                onClick={() => onPageChange(page)}
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
                        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
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


