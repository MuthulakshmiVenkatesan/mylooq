import { CloseIcon } from "../../../../components/customfile/icons";
import { useLockBodyScroll } from "../../../../hooks/useLockBodyScroll";

interface RequestDeclinedModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function RequestDeclinedModal({ isOpen, onClose }: RequestDeclinedModalProps) {
    useLockBodyScroll(isOpen);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[103] flex items-center justify-center bg-[rgba(0,0,0,0.30)]">
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
                <h2 className="text-[20px] font-[Bold] text-[#000] mb-[35px] text-center">
                    Request declined
                </h2>

                {/* Ok Button */}
                <div className="flex justify-center">
                    <button
                        onClick={onClose}
                        className="w-full py-[14px] bg-[#6E2C91] text-[#FFF] rounded-full text-[14px] font-[Bold] transition-colors cursor-pointer hover:bg-[#5a2e88]"
                    >
                        Ok
                    </button>
                </div>
            </div>
        </div>
    );
}

