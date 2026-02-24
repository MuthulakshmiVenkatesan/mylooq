import { useEffect, useState } from "react";
import avatar from "../../../../assets/img/avatar.png";
import Lottie from "lottie-react";
import animationprofile from "../../../../assets/img/json/animateprofile.json";
import AcceptedJobModal from "./AcceptedJobModal";

interface RequestingModalProps {
    isOpen: boolean;
    onClose?: () => void;
    onBookNow?: () => void;
}

function RequestingModal({ isOpen, onClose }: RequestingModalProps) {
    const [isAcceptedModalOpen, setIsAcceptedModalOpen] = useState(false);

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

    const handleRetry = () => {
        setIsAcceptedModalOpen(true);
    };

    const handleAcceptedClose = () => {
        setIsAcceptedModalOpen(false);
        // Close RequestingModal when AcceptedJobModal closes
        if (onClose) {
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <>
            {/* Requesting Modal - Hide when AcceptedJobModal is open */}
            {!isAcceptedModalOpen && (
                <div className="fixed inset-0 z-[102] flex items-center justify-center bg-[rgba(0,0,0,0.30)]">
                    <div className="w-full">
                        <div className="bg-[#000] w-full p-[20px]">
                            <h4 className="text-[20px] font-[Bold] text-[#fff]">Requesting</h4>
                        </div>
                        {/* Central Animation with Profile Picture */}
                        <div className="relative flex items-center justify-center lottie_height">
                            <Lottie
                                animationData={animationprofile}
                                loop={true}
                                className="w-[614px] h-[510px] mobile_lottie_height"
                            />

                            {/* Profile Picture in Center */}
                            <div className="absolute z-10 w-[100px] h-[100px] max-sm:w-[100px] max-sm:h-[100px] rounded-full overflow-hidden">
                                <img
                                    src={avatar}
                                    alt="Provider"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        <div className="bg-[#000] w-full p-[20px] flex items-center justify-between max-sm:flex-col max-sm:gap-[10px]">
                            <p className="text-[14px] font-[Regular] text-[#fff] max-sm:text-center">LooQer didn't accept your request now. you may retry or cancel</p>
                            <div className="flex items-center gap-[10px]">
                                <button 
                                    onClick={handleRetry}
                                    className="bg-[#FFF] text-[14px] text-[#000] font-[Bold] rounded-full p-[10px_30px] cursor-pointer hover:bg-[#F5F5F5] transition-colors"
                                >
                                    Retry
                                </button>
                                <button 
                                    onClick={onClose}
                                    className="bg-[#FFF] text-[14px] text-[#000] font-[Bold] rounded-full p-[10px_30px] cursor-pointer hover:bg-[#F5F5F5] transition-colors"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Accepted Job Modal */}
            <AcceptedJobModal
                isOpen={isAcceptedModalOpen}
                onClose={handleAcceptedClose}
            />
        </>
    );
}

export default RequestingModal;

