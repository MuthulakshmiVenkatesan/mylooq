import { CloseIcon } from "../../../../components/customfile/icons";

interface PaySummaryItem {
    name: string;
    amount: number;
}

interface PaySummaryModalProps {
    isOpen: boolean;
    onClose: () => void;
    items: PaySummaryItem[];
    earnedAmount: number;
}

export default function PaySummaryModal({ isOpen, onClose, items, earnedAmount }: PaySummaryModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[104] flex items-center justify-center bg-[rgba(0,0,0,0.30)]">
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
                <h2 className="text-[20px] font-[Bold] text-[#000] mb-[30px] text-center">
                    Pay summary
                </h2>

                {/* Items List */}
                <div className="mb-[30px] bg-[#F8F8F8] rounded-[30px]">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="border-b border-[rgba(0,0,0,0.10)] flex items-center justify-between p-[16px_20px] last:border-b-0"
                        >
                            <h4 className="text-[14px] font-[Regular] text-[#000]">
                                {item.name}
                            </h4>
                            <h3 className={`text-[14px] font-[SemiBold] ${item.amount < 0 ? 'text-[#000]' : 'text-[#000]'}`}>
                                {item.amount < 0 ? '-' : ''} ${Math.abs(item.amount).toFixed(2)}
                            </h3>
                        </div>
                    ))}
                </div>

                {/* Earned Amount */}
                <div className="flex flex-col items-center justify-between">
                    <h4 className="text-[14px] font-[Regular] text-[#000] mb-[4px]">
                        Earned amount
                    </h4>
                    <h3 className="text-[28px] font-[Bold] text-[#000]">
                        ${earnedAmount.toFixed(2)}
                    </h3>
                </div>
            </div>
        </div>
    );
}

