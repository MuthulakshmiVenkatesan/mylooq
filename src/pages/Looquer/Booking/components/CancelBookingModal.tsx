import { useState } from "react";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "../../../../components/Ui/Select";
import { CloseIcon, ArrowDownIcon } from "../../../../components/customfile/icons";
import { useLockBodyScroll } from "../../../../hooks/useLockBodyScroll";

interface CancelBookingModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (reason: string) => void;
}

const declineReasons = [
    "User don't want to give material fee?",
    "User wants different thing to be completed",
    "Other"
];

export default function CancelBookingModal({ isOpen, onClose, onConfirm }: CancelBookingModalProps) {
    const [selectedReason, setSelectedReason] = useState<string>("");
    const [customReason, setCustomReason] = useState<string>("");

    const isOtherSelected = selectedReason === "Other";

    const handleConfirm = () => {
        if (selectedReason) {
            // If "Other" is selected, use the custom reason, otherwise use the selected reason
            const finalReason = isOtherSelected && customReason.trim()
                ? customReason.trim()
                : selectedReason;
            onConfirm(finalReason);
            setSelectedReason("");
            setCustomReason("");
            // Close decline modal and show success modal
            onClose();
        }
    };



    const handleClose = () => {
        setSelectedReason("");
        setCustomReason("");
        onClose();
    };

    useLockBodyScroll(isOpen);

    if (!isOpen) return null;

    return (
        <>
            <div className="fixed inset-0 z-[102] flex items-center justify-center bg-[rgba(0,0,0,0.30)]">
                <div className="bg-white rounded-[30px] w-full max-w-[450px] p-[50px] relative max-sm:m-[10px] max-sm:p-[20px]">
                    {/* Close Button */}
                    <div className="flex justify-end">
                        <button
                            onClick={onClose}
                            className="cursor-pointer absolute top-[26px] right-[26px]"
                        >
                            <CloseIcon className="w-[15px] h-[15px]" />
                        </button>
                    </div>
                    {/* Title */}
                    <h2 className="text-[20px] font-[Bold] text-[#000] mb-[24px] text-center">
                        Cancel Booking
                    </h2>

                    <div className="">
                        {/* Reason Dropdown */}
                        <div className="mb-[40px]">
                            <Select value={selectedReason} onValueChange={setSelectedReason}>
                                <SelectTrigger className="cursor-pointer flex items-center justify-between rounded-[50px] bg-[#EFEFEF] p-[12px_20px] border-none shadow-none focus:outline-none w-full cursor-pointer">
                                    <div className="text-left w-full">
                                        <label className="text-left text-[12px] font-[Regular] text-[#878387]">Select reason</label>
                                        <p className="text-[14px] font-[SemiBold] text-[#000] m-[0px]">
                                            <SelectValue />
                                        </p>
                                    </div>
                                    <ArrowDownIcon />
                                </SelectTrigger>
                                <SelectContent
                                    className="cursor-pointer z-[999] bg-[#fff] w-full border border-[#e5e5e5] rounded-[14px] p-[8px] font-[Regular] text-[14px] "
                                    style={{ width: "100%" }}
                                >
                                    {declineReasons.map((reason) => (
                                        <SelectItem
                                            key={reason}
                                            value={reason}
                                            className="rounded-[12px] px-[12px] py-[8px] text-[14px]"
                                        >
                                            {reason}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            {/* Custom Reason Textarea - Show when "Other" is selected */}
                            {isOtherSelected && (
                                <div className="mt-[10px]">
                                    <textarea
                                        value={customReason}
                                        onChange={(e) => setCustomReason(e.target.value)}
                                        placeholder="Tap to write reason"
                                        className="w-full min-h-[150px] rounded-[30px] bg-[#EFEFEF] text-[14px] font-[Regular] text-[#000] p-[16px_20px] resize-none focus:outline-none focus:border-none transition-colors placeholder:text-[#878387]"
                                    />
                                </div>
                            )}
                        </div>



                        {/* Action Buttons */}
                        <div className="flex gap-[12px]">
                            <button
                                onClick={handleClose}
                                className="flex-1 py-[14px] bg-[#000] text-[#FFF] rounded-full text-[14px] font-[Bold] transition-colors cursor-pointer"
                            >
                                No
                            </button>
                            <button
                                onClick={handleConfirm}
                                disabled={!selectedReason || (isOtherSelected && !customReason.trim())}
                                className="flex-1 py-[14px] bg-[#6E2C91] text-[#FFF] rounded-full text-[14px] font-[Bold] transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Yes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

