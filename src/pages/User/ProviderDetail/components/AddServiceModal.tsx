import { useState, useEffect } from "react";
import { CloseIcon } from "../../../../components/customfile/icons";

interface AddServiceModalProps {
    isOpen: boolean;
    onClose: () => void;
    serviceName: string;
    serviceCategory: string;
    servicePrice: string;
    initialSpecialInstruction?: string;
    onAdd: (specialInstruction: string) => void;
}

function AddServiceModal({
    isOpen,
    onClose,
    serviceName,
    serviceCategory,
    servicePrice,
    initialSpecialInstruction = "",
    onAdd,
}: AddServiceModalProps) {
    const [specialInstruction, setSpecialInstruction] = useState(initialSpecialInstruction);
    const isEditMode = !!initialSpecialInstruction && initialSpecialInstruction.trim() !== "";

    useEffect(() => {
        if (isOpen) {
            setSpecialInstruction(initialSpecialInstruction);
        }
    }, [isOpen, initialSpecialInstruction]);

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


    const handleSave = () => {
        onAdd(specialInstruction);
        if (!isEditMode) {
            setSpecialInstruction("");
        }
    };

    return (
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
                    {isEditMode ? "Edit instruction" : "Add services"}
                </h2>

                {/* Service Info */}
                <div className="bg-[#fff] rounded-[30px] p-[18px_26px] mb-[20px] shadow-[0px_4px_15px_0px_rgba(0,0,0,0.10)]">
                    <div className="flex items-center gap-[10px] mb-[6px]">
                        <h4 className="text-[14px] font-[SemiBold] text-[#000] ">
                            {serviceCategory}
                        </h4>
                        <div className="p-[2px] rounded-full bg-[#000]"></div>
                        <h4 className="text-[14px] font-[SemiBold] text-[#000] ">{serviceName}</h4>
                    </div>
                    <h3 className="text-[16px] font-[SemiBold] text-[#000]">{servicePrice}</h3>
                </div>

                {/* Special Instruction Field */}
                <div className="mb-[30px] min-h-[150px] p-[18px_20px] rounded-[30px] bg-[#EFEFEF]">
                    <label className="text-[14px] font-[Regular] text-[#878387] mb-[4px]">Add Special instruction</label>
                    <textarea
                        value={specialInstruction}
                        onChange={(e) => setSpecialInstruction(e.target.value)}
                        className="w-full text-[14px] font-[SemiBold] text-[#000] focus:outline-none focus:border-none resize-none border-none outline-none"
                    />
                </div>

                {/* Save/Add Button */}
                <button
                    onClick={handleSave}
                    className="w-full rounded-[30px] bg-[#6E2C91] text-white p-[16px] text-[16px] font-[Bold] cursor-pointer transition-colors hover:bg-[#5a2373]"
                >
                    {isEditMode ? "Save" : "Add"}
                </button>
            </div>
        </div >
    );
}

export default AddServiceModal;

