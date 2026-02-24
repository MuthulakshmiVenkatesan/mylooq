import { CloseIcon } from "../../../../components/customfile/icons";

interface BookingCancelReasonModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function BookingCancelReasonModal({ isOpen, onClose }: BookingCancelReasonModalProps) {
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
                    Booking cancel reason
                </h2>

                {/* Reason Content */}
                <div className="mb-[30px] text-center">
                    <p className="text-[14px] font-[Regular] text-[#000] leading-[25px]">
                        MyLooQTM is your go-to destination for modern, on-demand beauty and wellness. From flawless makeup and precision hairstyling to soothing spa and massage sessions, we make it easy to book talented beauty pros who come straight to your door—on your time, in your space.
                    </p>
                </div>
            </div>
        </div>
    );
}

