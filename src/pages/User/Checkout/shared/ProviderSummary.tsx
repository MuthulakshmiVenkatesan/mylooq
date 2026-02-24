import { useState } from "react";
import avatar from "../../../../assets/img/avatar.png";
import { StarIcon } from '../../../../components/customfile/icons';
interface SummaryItem {
    label: string;
    amount: number;
    isNegative?: boolean;
}

function ProviderSummary() {
    const [promoCode, setPromoCode] = useState("");
    const [summaryItems] = useState<SummaryItem[]>([
        { label: "Deep clean facial", amount: 15 },
        { label: "Detox facial", amount: 5 },
        { label: "Material fee", amount: 25 },
        { label: "Misc Fee", amount: 25 },
        { label: "Commission", amount: -25, isNegative: true },
    ]);

    const total = summaryItems.reduce((sum, item) => sum + item.amount, 0);

    const handleApplyPromo = () => {
        // Handle promo code application
        console.log("Apply promo:", promoCode);
    };

    // Render star rating (4.5/5)
    const renderStars = () => {
        const rating = 4.5;
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < Math.floor(rating)) {
                stars.push(
                    <StarIcon key={`full-${i}`} className="w-[14px] h-[14px]" fill="#FFCB2B" />
                );
            } else if (i < rating) {
                // Half star
                stars.push(
                    <div key={`half-${i}`} className="relative w-[14px] h-[14px]">
                        <StarIcon className="absolute inset-0 w-[14px] h-[14px]" fill="#878387" />
                        <div className="absolute inset-0 w-[7px] h-[14px] overflow-hidden">
                            <StarIcon className="w-[14px] h-[14px]" fill="#FFCB2B" />
                        </div>
                    </div>
                );
            } else {
                stars.push(
                    <StarIcon key={`empty-${i}`} className="w-[14px] h-[14px]" fill="#878387" />
                );
            }
        }
        return stars;
    };
    return (
        <div className="">
            <div className="">
                {/* Provider Details */}
                <div className="mb-[24px]">

                    <div className="flex items-center gap-[12px] mb-[20px]">
                        <img
                            src={avatar}
                            alt="Daisy Johnson"
                            className="w-[80px] h-[80px] rounded-full object-cover"
                        />
                        <div>
                            <p className="text-[12px] font-[Regular] text-[#878387]">
                                Provider name
                            </p>
                            <h3 className="text-[18px] font-[Bold] text-[#000] mb-[4px]">
                                Daisy Johnson
                            </h3>
                            <div className="flex items-center gap-[6px]">
                                <div className="flex items-center">{renderStars()}</div>
                                <p className="text-[12px] font-[Regular] text-[#000]">
                                    4.5/5
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-[#F8F8F8] rounded-[30px] py-[30px]">
                    {/* Promo Code */}
                    <div className="mb-[24px] px-[30px]">
                        <input
                            type="text"
                            placeholder="Enter promo code"
                            value={promoCode}
                            onChange={(e) => setPromoCode(e.target.value)}
                            className="w-full px-[18px] py-[14px] bg-[#EFEFEF] rounded-full text-[14px] font-[Regular] text-[#000] placeholder:text-[#878387] focus:outline-none mb-[10px]"
                        />
                        <button
                            onClick={handleApplyPromo}
                            className="w-full py-[12px] bg-[#000] text-[#FFF] rounded-full text-[14px] font-[Bold] transition-colors cursor-pointer"
                        >
                            Apply code
                        </button>
                    </div>

                    {/* Summary */}
                    <div className="border-t border-[rgba(0,0,0,0.06)] pt-[20px]">
                        <div className="px-[30px]">
                            <h2 className="text-[18px] font-[Bold] text-[#000] mb-[16px]">
                                Summary
                            </h2>

                            {/* Summary Items */}
                            <div className="flex flex-col gap-[14px] mb-[18px]">
                                {summaryItems.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center justify-between"
                                    >
                                        <h4 className="text-[14px] font-[Regular] text-[#000]">
                                            {item.label}
                                        </h4>
                                        <h3
                                            className={`text-[14px] font-[SemiBold] text-[#000] ${item.isNegative ? "" : ""
                                                }`}
                                        >
                                            {item.isNegative ? "-" : ""}${Math.abs(item.amount).toFixed(2)}
                                        </h3>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Total */}
                        <div className="px-[30px] pt-[20px] border-t border-[rgba(0,0,0,0.08)] flex items-center justify-between">
                            <h4 className="text-[14px] font-[Regular] text-[#878387]">
                                Total
                            </h4>
                            <h3 className="text-[18px] font-[Bold] text-[#000]">
                                ${total.toFixed(2)}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProviderSummary