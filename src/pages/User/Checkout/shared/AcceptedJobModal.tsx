import { useEffect } from "react";
import { CloseIcon } from "../../../../components/customfile/icons";

interface AcceptedJobModalProps {
    isOpen: boolean;
    onClose: () => void;
}

function AcceptedJobModal({ isOpen, onClose }: AcceptedJobModalProps) {
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
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[rgba(0,0,0,0.5)]">
            <div
                className="relative rounded-[30px] bg-[#fff] w-full max-w-[400px] p-[50px] max-sm:p-[40px] max-sm:mx-[20px]"
                onClick={(event) => event.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    className="absolute top-[20px] right-[20px] cursor-pointer border-none bg-transparent outline-none p-[8px] hover:bg-[rgba(0,0,0,0.05)] rounded-full transition-colors"
                    aria-label="Close"
                    onClick={onClose}
                >
                    <CloseIcon />
                </button>

                {/* Content */}
                <div className="flex flex-col items-center gap-[30px]">
                    {/* Message */}
                    <p className="text-[18px] font-[Bold] text-[#000] text-center">
                        Looqer accepted your job
                    </p>

                    {/* OK Button */}
                    <button
                        onClick={onClose}
                        className="w-full p-[12px] bg-[#6E2C91] text-[#FFF] rounded-full text-[16px] font-[Bold] hover:bg-[#5a2e88] transition-colors cursor-pointer"
                    >
                        ok
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AcceptedJobModal;

