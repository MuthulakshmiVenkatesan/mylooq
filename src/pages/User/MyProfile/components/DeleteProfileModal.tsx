import { useEffect } from "react";
import { CloseIcon } from "../../../../components/customfile/icons";

interface DeleteProfileModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm?: () => void;
}

export default function DeleteProfileModal({ isOpen, onClose, onConfirm }: DeleteProfileModalProps) {
    useEffect(() => {
        if (!isOpen) return;

        const originalOverflow = document.body.style.overflow;
        const originalOverflowHtml = document.documentElement.style.overflow;
        document.body.style.overflow = "hidden";
        document.documentElement.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = originalOverflow;
            document.documentElement.style.overflow = originalOverflowHtml;
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const handleConfirm = () => {
        if (onConfirm) {
            onConfirm();
        }
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[101] flex items-center justify-center max-sm:px-[10px]">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-[rgba(0,0,0,0.5)]"
                onClick={onClose}
            />

            {/* Modal Card */}
            <div
                className="relative rounded-[30px] bg-[#fff] w-[400px] max-sm:w-full px-[40px] py-[40px] max-sm:px-[20px] max-sm:py-[30px]"
                onClick={(event) => event.stopPropagation()}
            >
                {/* Close Icon */}
                <button
                    className="z-[9] absolute top-[20px] right-[20px] cursor-pointer border-none bg-transparent outline-none"
                    aria-label="Close"
                    onClick={onClose}
                >
                    <CloseIcon />
                </button>

                {/* Title */}
                <div className="flex items-center justify-center mb-[30px] mt-[10px]">
                    <h4 className="text-[18px] font-[Bold] text-[#000] m-0 text-center leading-[24px]">
                        Are you sure you want to delete your profile?
                    </h4>
                </div>

                {/* Buttons */}
                <div className="flex items-center justify-center gap-[16px]">
                    <button
                        type="button"
                        className="w-full cursor-pointer p-[14px_30px] rounded-full bg-[#000] text-[#fff] text-[14px] font-[Bold] border-none outline-none"
                        onClick={onClose}
                    >
                        No
                    </button>
                    <button
                        type="button"
                        className="w-full cursor-pointer p-[14px_30px] rounded-full bg-[#6E2C91] text-[#fff] text-[14px] font-[Bold] border-none outline-none"
                        onClick={handleConfirm}
                    >
                        Yes
                    </button>
                </div>
            </div>
        </div>
    );
}


