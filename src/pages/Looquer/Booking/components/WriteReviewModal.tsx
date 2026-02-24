import { useState } from "react";
import { CloseIcon, StarIcon } from "../../../../components/customfile/icons";

interface WriteReviewModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (rating: number, comment: string) => void;
}

export default function WriteReviewModal({ isOpen, onClose, onSubmit }: WriteReviewModalProps) {
    const [rating, setRating] = useState<number>(4);
    const [comment, setComment] = useState<string>("");

    if (!isOpen) return null;

    const handleSubmit = () => {
        onSubmit(rating, comment);
        setRating(4);
        setComment("");
        onClose();
    };

    const handleStarClick = (starIndex: number) => {
        setRating(starIndex + 1);
    };

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
                    Write review
                </h2>

                {/* Star Rating */}
                <div className="flex items-center justify-center gap-[4px] mb-[34px]">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            onClick={() => handleStarClick(index)}
                            className="cursor-pointer focus:outline-none"
                        >
                            <StarIcon
                                className="w-[30px] h-[30px]"
                                fill={index < rating ? "#FFCB2B" : "#878387"}
                            />
                        </button>
                    ))}
                </div>

                {/* Comment Text Area */}
                <div className="mb-[34px]">
                    <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Enter your comments"
                        className="w-full min-h-[150px] rounded-[30px] bg-[#F8F8F8] text-[14px] font-[Regular] text-[#000] p-[16px_20px] resize-none focus:outline-none focus:border-none transition-colors placeholder:text-[#878387] overflow-y-auto"
                    />
                </div>

                {/* Submit Button */}
                <div className="flex justify-center">
                    <button
                        onClick={handleSubmit}
                        className="w-full py-[14px] bg-[#6E2C91] text-[#FFF] rounded-full text-[14px] font-[Bold] transition-colors cursor-pointer "
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}

