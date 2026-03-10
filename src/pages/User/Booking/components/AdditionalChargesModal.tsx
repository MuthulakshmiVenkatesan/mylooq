import { useState, useEffect } from "react";
import { CloseIcon, InfoIcon } from "../../../../components/customfile/icons";
import { useLockBodyScroll } from "../../../../hooks/useLockBodyScroll";

interface ServiceItem {
    name: string;
    price: number;
}

interface AdditionalChargesModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (materialFee: number, miscFee: number, discount: number, finalAmount: number) => void;
    serviceCost: number;
    services?: ServiceItem[];
}

export default function AdditionalChargesModal({ isOpen, onClose, onSubmit, serviceCost, services = [] }: AdditionalChargesModalProps) {
    const [materialFee, setMaterialFee] = useState<string>("");
    const [miscFee, setMiscFee] = useState<string>("");
    const [discount, setDiscount] = useState<string>("");
    const [finalAmount, setFinalAmount] = useState<number>(serviceCost);
    const [showServiceTooltip, setShowServiceTooltip] = useState<boolean>(false);
    const [focusedField, setFocusedField] = useState<string | null>(null);
    useEffect(() => {
        if (isOpen) {
            // Reset form when modal opens
            setMaterialFee("");
            setMiscFee("");
            setDiscount("");
            setFinalAmount(serviceCost);
        }
    }, [isOpen, serviceCost]);

    useEffect(() => {
        // Calculate final amount whenever inputs change
        const material = parseFloat(materialFee) || 0;
        const misc = parseFloat(miscFee) || 0;
        const disc = parseFloat(discount) || 0;
        const total = serviceCost + material + misc - disc;
        setFinalAmount(Math.max(0, total)); // Ensure non-negative
    }, [materialFee, miscFee, discount, serviceCost]);

    const handleSubmit = () => {
        const material = parseFloat(materialFee) || 0;
        const misc = parseFloat(miscFee) || 0;
        const disc = parseFloat(discount) || 0;
        onSubmit(material, misc, disc, finalAmount);
        onClose();
    };

    useLockBodyScroll(isOpen);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[105] flex items-center justify-center bg-[rgba(0,0,0,0.30)]">
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
                    Any additional charges
                </h2>

                <div className="flex flex-col gap-[8px] mb-[30px]">
                    {/* Service Cost (Read-only) */}
                    <div className="w-full input-group relative flex bg-[rgba(0,0,0,0.15)] p-[0px_30px] rounded-full border transition-all duration-150 border-transparent">
                        <input
                            type="text"
                            value={`${serviceCost.toFixed(2)}`}
                            readOnly
                            className="w-full border-none bg-transparent shadow-none w-full focus:outline-none focus:shadow-none text-[#000000] font-[Medium] text-[16px]"
                        />
                        <label className="bg-transparent  text-[#878387] font-[Regular] text-[14px] " >Service Cost</label>
                        <div className="flex items-center justify-center relative">
                            <button
                                type="button"
                                onMouseEnter={() => setShowServiceTooltip(true)}
                                onMouseLeave={() => setShowServiceTooltip(false)}
                                className="cursor-pointer focus:outline-none"
                            >
                                <InfoIcon className="w-[16px] h-[16px]" />
                            </button>
                            {/* Service List Tooltip */}
                            {showServiceTooltip && services.length > 0 && (
                                <div className="absolute top-[60px] right-[-30px] bg-white rounded-[30px] shadow-[0px_4px_15px_0px_rgba(0,0,0,0.10)] w-[350px] z-[106]">
                                    <div className="flex flex-col">
                                        {services.map((service, index) => (
                                            <div key={index} className="flex items-center justify-between p-[16px_20px] border-b border-[rgba(0,0,0,0.10)] last:border-b-0">
                                                <h4 className="text-[14px] font-[Regular] text-[#000]">
                                                    {service.name}
                                                </h4>
                                                <h4 className="text-[14px] font-[SemiBold] text-[#000]">
                                                    ${service.price.toFixed(2)}
                                                </h4>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Material Fee Input */}
                    <div className={`w-full input-group relative flex p-[0px_30px] rounded-full border transition-all duration-150  ${focusedField === "materialFee" ? "bg-[#fff] border-[#6E2C91]" : "bg-[#F2F2F2] border-transparent"}`}>
                        <input
                            onFocus={() => setFocusedField("materialFee")}
                            onBlur={() => setFocusedField(null)}
                            type="text"
                            value={materialFee}
                            onChange={(e) => setMaterialFee(e.target.value)}
                            placeholder=""
                            className="w-full border-none bg-transparent shadow-none w-full focus:outline-none focus:shadow-none text-[#000000] font-[Medium] text-[16px]"
                        />
                        <label className="bg-transparent  text-[#878387] font-[Regular] text-[14px] " >Enter Material Fee</label>
                    </div>

                    {/* Misc Fee Input */}
                    <div className={`w-full input-group relative flex p-[0px_30px] rounded-full border transition-all duration-150  ${focusedField === "miscFee" ? "bg-[#fff] border-[#6E2C91]" : "bg-[#F2F2F2] border-transparent"}`}>
                        <input
                            onFocus={() => setFocusedField("miscFee")}
                            onBlur={() => setFocusedField(null)}
                            type="text"
                            value={miscFee}
                            onChange={(e) => setMiscFee(e.target.value)}
                            placeholder=""
                            className="w-full border-none bg-transparent shadow-none w-full focus:outline-none focus:shadow-none text-[#000000] font-[Medium] text-[16px]"
                        />
                        <label className="bg-transparent  text-[#878387] font-[Regular] text-[14px] " > Enter misc fee</label>
                    </div>

                    {/* LooQer Discount Input */}
                    <div className={`w-full input-group relative flex p-[0px_30px] rounded-full border transition-all duration-150  ${focusedField === "discount" ? "bg-[#fff] border-[#6E2C91]" : "bg-[#F2F2F2] border-transparent"}`}>
                        <input
                            onFocus={() => setFocusedField("discount")}
                            onBlur={() => setFocusedField(null)}
                            type="text"
                            value={discount}
                            onChange={(e) => setDiscount(e.target.value)}
                            placeholder=""
                            className="w-full border-none bg-transparent shadow-none w-full focus:outline-none focus:shadow-none text-[#000000] font-[Medium] text-[16px]"
                        />
                        <label className="bg-transparent  text-[#878387] font-[Regular] text-[14px] " >LooQer Discount</label>
                    </div>
                </div>

                {/* Final Amount */}
                <div className="mb-[30px] flex flex-col gap-[8px] justify-center items-center">
                    <h4 className="text-[14px] font-[Regular] text-[#000]">
                        Final amount
                    </h4>
                    <h3 className="text-[28px] font-[Bold] text-[#000]">
                        ${finalAmount.toFixed(2)}
                    </h3>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center">
                    <button
                        onClick={handleSubmit}
                        className="w-full py-[14px] bg-[#6E2C91] text-[#FFF] rounded-full text-[14px] font-[Bold] transition-colors cursor-pointer"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}

