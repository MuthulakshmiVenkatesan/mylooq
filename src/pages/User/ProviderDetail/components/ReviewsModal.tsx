import { useEffect, useState } from "react";
import { CloseIcon, StarIcon, ArrowDownIcon } from "../../../../components/customfile/icons";

interface Review {
    id: string;
    name: string;
    avatar: string;
    rating: number;
    text: string;
}

interface ReviewsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const reviews: Review[] = [
    {
        id: "1",
        name: "Daisy Johanson",
        avatar: "https://i.pravatar.cc/150?img=47",
        rating: 4.2,
        text: "Integer sagittis ex et lorem aliquet tristique. Phasellus hendrerit dignissim nisi sed vehicula. In porttitor sem purus, sed scelerisque nulla luctus nec. Fusce ac vestibulum augue. Quisque a cursus elit. Aenean commodo enim sit amet nibh volutpat, a congue neque aliquet.",
    },
    {
        id: "2",
        name: "Sarah Williams",
        avatar: "https://i.pravatar.cc/150?img=12",
        rating: 5.0,
        text: "Excellent service! The professional was punctual, skilled, and very friendly. I would definitely book again. Highly recommend to anyone looking for quality service.",
    },
    {
        id: "3",
        name: "Emily Chen",
        avatar: "https://i.pravatar.cc/150?img=33",
        rating: 4.5,
        text: "Great experience overall. The service was exactly as described and the provider was very professional. The only minor issue was a slight delay, but it was worth the wait.",
    },
];

function ReviewsModal({ isOpen, onClose }: ReviewsModalProps) {
    const [currentIndex, setCurrentIndex] = useState(0);


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


    const currentReview = reviews[currentIndex];

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    };

    const renderStars = (rating: number) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

        return (
            <div className="flex items-center gap-[2px]">
                {[...Array(fullStars)].map((_, i) => (
                    <StarIcon key={`full-${i}`} className="w-[16px] h-[16px]" fill="#FFCB2B" />
                ))}
                {hasHalfStar && (
                    <div className="relative w-[16px] h-[16px]">
                        <StarIcon className="w-[16px] h-[16px] absolute" fill="#878387" />
                        <div className="absolute overflow-hidden w-[8px] h-[16px]">
                            <StarIcon className="w-[16px] h-[16px]" fill="#FFCB2B" />
                        </div>
                    </div>
                )}
                {[...Array(emptyStars)].map((_, i) => (
                    <StarIcon key={`empty-${i}`} className="w-[16px] h-[16px]" fill="#878387" />
                ))}
                <h4 className="ml-[4px] text-[12px] font-[SemiBold] text-[#000]">{rating}</h4>
            </div>
        );
    };

    return (
        <div className="fixed inset-0 z-[102] flex items-center justify-center bg-[rgba(0,0,0,0.30)]">
            <div className="bg-white rounded-[30px] w-full max-w-[450px] p-[50px] relative max-sm:m-[10px] max-sm:p-[20px]">
                {/* Close Button */}
                <div className="flex justify-end">
                    <button onClick={onClose} className="cursor-pointer absolute top-[26px] right-[26px]">
                        <CloseIcon className="" />
                    </button>
                </div>

                {/* Title */}
                <h2 className="text-[20px] font-[Bold] text-[#000] mb-[24px] text-center">
                    Reviews
                </h2>

                {/* Review Card */}
                <div className="bg-[#fff] rounded-[10px] border border-[rgba(0,0,0,0.1)] py-[20px] mb-[34px]">
                    <div className="flex items-start gap-[16px] mb-[8px] px-[20px]">
                        {/* Profile Picture */}
                        <div className="flex-shrink-0">
                            <img
                                src={currentReview.avatar}
                                alt={currentReview.name}
                                className="w-[45px] h-[45px] rounded-full object-cover"
                            />
                        </div>
                        {/* Review Content */}
                        <div className="flex-1">
                            <div className="">
                                <h3 className="text-[14px] font-[SemiBold] text-[#000] mb-[4px]">
                                    {currentReview.name}
                                </h3>
                                {renderStars(currentReview.rating)}
                            </div>

                        </div>
                    </div>
                    <h4 className="text-[14px] font-[Medium] text-[#000] leading-[24px] h-[148px] overflow-y-auto px-[20px] review_height">
                        {currentReview.text}
                    </h4>
                </div>

                {/* Navigation Arrows */}
                <div className="flex gap-[8px] items-center justify-center">
                    <button
                        type="button"
                        onClick={handlePrevious}
                        className="flex w-[28px] h-[28px] cursor-pointer items-center justify-center rounded-full bg-white shadow-[0_0_15px_0_rgba(0,0,0,0.1)]"
                    >
                        <ArrowDownIcon className="rotate-90" />
                    </button>
                    <button
                        type="button"
                        onClick={handleNext}
                        className="flex w-[28px] h-[28px] cursor-pointer items-center justify-center rounded-full bg-white shadow-[0_0_15px_0_rgba(0,0,0,0.1)]"
                    >
                        <ArrowDownIcon className="rotate-270" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ReviewsModal;

