import { useEffect, useState } from "react";
import { CloseIcon } from "../../../../components/customfile/icons";
import { Input } from "../../../../components/customfile/parts";
import cardimg from "../../../../assets/img/card.svg";

interface AddCardProps {
    isOpen: boolean;
    onClose: () => void;
    onSave?: (cardData: { holderName: string; cardNumber: string; expiry: string; cvv: string }) => void;
    initialCardData?: { holderName: string; cardNumber: string; expiry: string; cvv: string };
}

function AddCard({ isOpen, onClose, onSave, initialCardData }: AddCardProps) {
    const [form, setForm] = useState({
        holderName: "",
        cardNumber: "",
        expiry: "",
        cvv: "",
    });
    const [focusedField, setFocusedField] = useState<string | null>(null);

    useEffect(() => {
        if (isOpen && initialCardData) {
            setForm(initialCardData);
        } else if (isOpen && !initialCardData) {
            setForm({
                holderName: "",
                cardNumber: "",
                expiry: "",
                cvv: "",
            });
        }
    }, [isOpen, initialCardData]);

    const handleInputChange = (field: keyof typeof form, value: string) => {
        setForm((current) => ({ ...current, [field]: value }));
    };

    const handleSave = () => {
        if (onSave) {
            onSave({
                holderName: form.holderName,
                cardNumber: form.cardNumber,
                expiry: form.expiry,
                cvv: form.cvv,
            });
        }
        // Reset form
        setForm({
            holderName: "",
            cardNumber: "",
            expiry: "",
            cvv: "",
        });
        onClose();
    };

    useEffect(() => {
        if (!isOpen) return;

        const originalOverflow = document.body.style.overflow;
        const originalOverflowhtml = document.documentElement.style.overflow;
        document.body.style.overflow = "hidden";
        document.documentElement.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = originalOverflow;
            document.documentElement.style.overflow = originalOverflowhtml;
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed top-[0] left-[0] right-[0] bottom-[0] z-[101] flex items-center justify-center max-sm:px-[10px]">
            <div
                className="absolute top-[0] left-[0] right-[0] bottom-[0] bg-[rgba(0,0,0,0.5)]"
                onClick={onClose}
            />

            <div
                className="relative rounded-[30px] bg-[#fff] w-[450px] pt-[50px] max-sm:pt-[20px] max-sm:w-full"
                onClick={(event) => event.stopPropagation()}
            >
                <button
                    className="z-[9] absolute top-[30px] right-[30px] cursor-pointer border-none bg-transparent outline-none"
                    aria-label="Close"
                    onClick={onClose}
                >
                    <CloseIcon />
                </button>

                <div >
                    <div className="px-[50px] max-sm:px-[20px] mb-[40px] ">
                        {/* Title */}
                        <div className="flex items-center justify-center mb-[30px] max-sm:mb-[20px]">
                            <h4 className="text-[18px] font-[Bold] text-[#000] m-[0] text-center">
                                {initialCardData ? "Edit card" : "Add card"}
                            </h4>
                        </div>

                        {/* Input Fields */}
                        <div className="flex flex-col gap-[20px] mb-[30px]">
                            {/* Card Holder Name */}
                            <div
                                className={`input-group_card relative flex bg-[#F2F2F2] rounded-full border p-[0_24px] transition-all duration-150 ${focusedField === "holderName"
                                    ? "bg-[#fff] border-[#6E2C91]"
                                    : "border-transparent"
                                    }`}
                            >
                                <Input
                                    type="text"
                                    placeholder=" "
                                    value={form.holderName}
                                    onChange={(event) => handleInputChange("holderName", event.target.value)}
                                    onFocus={() => setFocusedField("holderName")}
                                    onBlur={() => setFocusedField(null)}
                                    className="w-full border-none bg-transparent shadow-none focus:outline-none focus:shadow-none text-[#000000] font-[Medium] text-[16px]"
                                />
                                <label className="bg-transparent text-[#878387] font-[Regular] text-[14px] pointer-events-none">
                                    Enter card holder name
                                </label>
                            </div>

                            {/* Card Number */}
                            <div
                                className={`input-group_card relative flex bg-[#F2F2F2] rounded-full border p-[0_24px] transition-all duration-150 ${focusedField === "cardNumber"
                                    ? "bg-[#fff] border-[#6E2C91]"
                                    : "border-transparent"
                                    }`}
                            >
                                <Input
                                    type="text"
                                    placeholder=" "
                                    value={form.cardNumber}
                                    onChange={(event) => handleInputChange("cardNumber", event.target.value)}
                                    onFocus={() => setFocusedField("cardNumber")}
                                    onBlur={() => setFocusedField(null)}
                                    className="w-full border-none bg-transparent shadow-none focus:outline-none focus:shadow-none text-[#000000] font-[Medium] text-[16px]"
                                />
                                <label className="bg-transparent text-[#878387] font-[Regular] text-[14px] pointer-events-none">
                                    Card number
                                </label>
                            </div>

                            {/* Expiry and CVV */}
                            <div className="flex gap-[16px]">
                                {/* Expiry */}
                                <div
                                    className={`input-group_card relative flex bg-[#F2F2F2] rounded-full border p-[0_24px] transition-all duration-150 flex-1 ${focusedField === "expiry"
                                        ? "bg-[#fff] border-[#6E2C91]"
                                        : "border-transparent"
                                        }`}
                                >
                                    <Input
                                        type="text"
                                        placeholder=" "
                                        value={form.expiry}
                                        onChange={(event) => handleInputChange("expiry", event.target.value)}
                                        onFocus={() => setFocusedField("expiry")}
                                        onBlur={() => setFocusedField(null)}
                                        maxLength={5}
                                        className="w-full border-none bg-transparent shadow-none focus:outline-none focus:shadow-none text-[#000000] font-[Medium] text-[16px]"
                                    />
                                    <label className="bg-transparent text-[#878387] font-[Regular] text-[14px] pointer-events-none">
                                        Expiry (MM/YY)
                                    </label>
                                </div>

                                {/* CVV */}
                                <div
                                    className={`input-group_card relative flex bg-[#F2F2F2] rounded-full border p-[0_24px] transition-all duration-150 flex-1 ${focusedField === "cvv"
                                        ? "bg-[#fff] border-[#6E2C91]"
                                        : "border-transparent"
                                        }`}
                                >
                                    <Input
                                        type="text"
                                        placeholder=" "
                                        value={form.cvv}
                                        onChange={(event) => handleInputChange("cvv", event.target.value)}
                                        onFocus={() => setFocusedField("cvv")}
                                        onBlur={() => setFocusedField(null)}
                                        maxLength={4}
                                        className="w-full border-none bg-transparent shadow-none focus:outline-none focus:shadow-none text-[#000000] font-[Medium] text-[16px]"
                                    />
                                    <label className="bg-transparent text-[#878387] font-[Regular] text-[14px] pointer-events-none">
                                        CVV
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Add/Update Button */}
                        <button
                            type="button"
                            onClick={handleSave}
                            className="cursor-pointer w-full rounded-[50px] p-[16px] text-[#fff] bg-[#6E2C91] text-[14px] font-[Bold] transition border-none outline-none "
                        >
                            {initialCardData ? "Update" : "Add"}
                        </button>
                    </div>


                    {/* Accepted Cards Section */}
                    <div className="flex flex-col items-center bg-[#EFEFEF] rounded-[0px_0px_30px_30px] px-[50px] max-sm:px-[20px] py-[20px]">
                        <h4 className="text-[14px] font-[Medium] text-[#000] mb-[8px]">We accept</h4>
                        <div className="flex items-center justify-center mb-[16px]">
                            <img src={cardimg} alt="card" className="" />
                        </div>
                        {/* Note */}
                        <p className="text-[12px] font-[Medium] text-[#878387] text-center">
                            <span className="font-[Bold]">Note:</span> Other card type may not be supported by us.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default AddCard;

