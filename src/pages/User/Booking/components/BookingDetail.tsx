import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ViewAllIcon, StarIcon, PhoneIcon, EmailIcon, InfoIcon } from "../../../../components/customfile/icons";
import userImg from "../../../../assets/img/user.png";
import DeclineRequestModal from "./DeclineRequestModal";
import PaySummaryModal from "./PaySummaryModal";
import WriteReviewModal from "./WriteReviewModal";
import AdditionalChargesModal from "./AdditionalChargesModal";
import CancelBookingModal from "./CancelBookingModal";
import BookingCancelReasonModal from "./BookingCancelReasonModal";
export interface BookingDetailData {
    id: string;
    customer: string;
    customerImage?: string;
    rating: number;
    phone: string;
    email: string;
    datetime: string;
    services: {
        category: string;
        items: string[];
    }[];
    location: string;
    price?: string;
    status?: "New" | "Accepted" | "Completed" | "Cancelled" | "Started" | "Arrived" | "Need to do";
    paymentMode?: string;
    totalPay?: string;
}

// Mock data - in real app, this would come from API based on booking ID
const mockBookingDetails: Record<string, BookingDetailData> = {
    "#3832323313132": {
        id: "#SB32323313132",
        customer: "Daisy Johnson",
        customerImage: userImg,
        rating: 4.5,
        phone: "+(000) 1234 5678",
        email: "daisy.johnson@example.com",
        datetime: "18 Nov 2025, 4AM - 5AM",
        services: [
            {
                category: "Salon(Bridal facial)",
                items: ["Deep clean facial", "Detox facial"]
            },
            {
                category: "Makeup (Bride)",
                items: ["Bridal makeup", "Engagement makeup"]
            }
        ],
        location: "Curabitur pellentesque nec turpis ac vulputate.",
        price: "$50.00",
        status: "New"
    },
    // Add more mock data for other bookings
    "#3832323313133": {
        id: "#3832323313133",
        customer: "John Smith",
        customerImage: userImg,
        rating: 4.0,
        phone: "+(000) 1234 5679",
        email: "johnsmith@example.com",
        datetime: "18 Nov 2025, 5AM - 6AM",
        services: [
            {
                category: "Salon",
                items: ["Deep clean facial", "Detox facial"]
            }
        ],
        location: "Curabitur pellentesque nec turpis ac vulputate.",
        price: "$40.00",
        status: "New"
    },
    // Upcoming bookings data
    "#S0012321075132": {
        id: "#SB32323313132",
        customer: "Daisy Johnson",
        customerImage: userImg,
        rating: 4.5,
        phone: "+(000) 1234 5678",
        email: "daisy.johnson@example.com",
        datetime: "18 Nov 2025, 4AM - 5AM",
        services: [
            {
                category: "Salon(Bridal facial)",
                items: ["Deep clean facial", "Detox facial"]
            },
            {
                category: "Makeup (Bride)",
                items: ["Bridal makeup", "Engagement makeup"]
            }
        ],
        location: "Curabitur pellentesque nec turpis ac vulputate.",
        price: "$50.00",
        status: "Started"
    },
    "#S0012321075133": {
        id: "#SB32323313132",
        customer: "Daisy Johnson",
        customerImage: userImg,
        rating: 4.5,
        phone: "+(000) 1234 5678",
        email: "daisy.johnson@example.com",
        datetime: "18 Nov 2025, 4AM - 5AM",
        services: [
            {
                category: "Salon(Bridal facial)",
                items: ["Deep clean facial", "Detox facial"]
            },
            {
                category: "Makeup (Bride)",
                items: ["Bridal makeup", "Engagement makeup"]
            }
        ],
        location: "Curabitur pellentesque nec turpis ac vulputate.",
        price: "$50.00",
        status: "Arrived"
    },
    "#S0012321075134": {
        id: "#SB32323313132",
        customer: "Daisy Johnson",
        customerImage: userImg,
        rating: 4.5,
        phone: "+(000) 1234 5678",
        email: "daisy.johnson@example.com",
        datetime: "18 Nov 2025, 4AM - 5AM",
        services: [
            {
                category: "Salon(Bridal facial)",
                items: ["Deep clean facial", "Detox facial"]
            },
            {
                category: "Makeup (Bride)",
                items: ["Bridal makeup", "Engagement makeup"]
            }
        ],
        location: "Curabitur pellentesque nec turpis ac vulputate.",
        price: "$50.00",
        status: "Need to do"
    },
    // Past bookings data
    "#SB32323313132": {
        id: "#SB32323313132",
        customer: "Daisy Johnson",
        customerImage: userImg,
        rating: 4.5,
        phone: "+(000) 1234 5678",
        email: "daisyjohnson@example.com",
        datetime: "18 Nov 2025, 4AM - 5AM",
        services: [
            {
                category: "Salon(Bridal facial)",
                items: ["Deep clean facial", "Detox facial"]
            },
            {
                category: "Makeup (Bride)",
                items: ["Bridal makeup", "Engagement makeup"]
            }
        ],
        location: "Curabitur pellentesque nec turpis ac vulputate.",
        paymentMode: "Cash",
        totalPay: "$70.00",
        status: "Completed"
    },
    // Cancelled booking data
    "#SB32323313134": {
        id: "#SB32323313134",
        customer: "Daisy Johnson",
        customerImage: userImg,
        rating: 4.5,
        phone: "+(000) 1234 5678",
        email: "daisyjohnson@example.com",
        datetime: "18 Nov 2025, 4AM - 5AM",
        services: [
            {
                category: "Salon(Bridal facial)",
                items: ["Deep clean facial", "Detox facial"]
            }
        ],
        location: "Curabitur pellentesque nec turpis ac vulputate.",
        price: "$50.00",
        status: "Cancelled",
    },
    "#SB32323313133": {
        id: "#SB32323313133",
        customer: "Daisy johnson",
        customerImage: userImg,
        rating: 4.5,
        phone: "+(000) 1234 5678",
        email: "daisyjohnson@example.com",
        datetime: "18 Nov 2025, 4AM - 5AM",
        services: [
            {
                category: "Salon",
                items: ["Deep clean facial"]
            }
        ],
        location: "Curabitur pellentesque nec...",
        paymentMode: "Cash",
        totalPay: "$20.00",
        status: "Completed"
    },
};

export default function UserBookingDetail() {
    const { bookingId } = useParams<{ bookingId: string }>();
    const [isDeclineModalOpen, setIsDeclineModalOpen] = useState(false);
    const [isCancelBookingModalOpen, setIsCancelBookingModalOpen] = useState(false);
    const [isPaySummaryModalOpen, setIsPaySummaryModalOpen] = useState(false);
    const [isWriteReviewModalOpen, setIsWriteReviewModalOpen] = useState(false);
    const [isAdditionalChargesModalOpen, setIsAdditionalChargesModalOpen] = useState(false);
    const [isPaymentReady, setIsPaymentReady] = useState(false);
    const [isCancelReasonModalOpen, setIsCancelReasonModalOpen] = useState(false);

    // Get booking details - in real app, fetch from API
    const decodedBookingId = bookingId ? decodeURIComponent(bookingId) : null;
    const booking = decodedBookingId ? mockBookingDetails[decodedBookingId] : null;

    if (!booking) {
        return (
            <div className="min-h-screen bg-[#f5f4ff] flex items-center justify-center">
                <div className="text-center">
                    <p className="text-[18px] font-[SemiBold] text-[#000] mb-[20px]">Booking not found</p>
                    <Link to="/looqer/booking" className="text-[#6E2C91] font-[SemiBold]">
                        ← Back to Bookings
                    </Link>
                </div>
            </div>
        );
    }



    const handleDecline = () => {
        setIsDeclineModalOpen(true);
    };

    const handleDeclineConfirm = (reason: string) => {
        // Handle decline logic with reason
        console.log("Decline booking:", booking.id, "Reason:", reason);
        // Navigate back or update status
        // You can add API call here to decline the booking
        setIsDeclineModalOpen(false);
    };


    const handleAdditionalChargesSubmit = (materialFee: number, miscFee: number, discount: number, finalAmount: number) => {
        // Handle additional charges submission
        console.log("Additional charges:", { materialFee, miscFee, discount, finalAmount });
        // Set payment ready state to show "Collect payment" button
        setIsPaymentReady(true);
        // You can add API call here to submit the charges
    };

    // const handleCollectPayment = () => {
    //     // Handle collect payment logic
    //     console.log("Collect payment:", booking.id);
    //     // You can add API call here to process payment
    // };

    const handleCancelBookingConfirm = (reason: string) => {
        console.log(reason);
    };

    const handleCancelBooking = () => {
        setIsCancelBookingModalOpen(true);
        // Handle cancel booking logic
        console.log("Cancel booking:", booking.id);
        // Show cancel confirmation modal or directly cancel
        // Navigate back or update status
    };

    // Check if this is an upcoming booking (not a new booking request)
    const isUpcomingBooking = booking.status === "Started" || booking.status === "Arrived" || booking.status === "Need to do";
    // Check if this is a past booking (completed)
    const isPastBooking = booking.status === "Completed" || (!booking.status && booking.totalPay);

    const renderStars = (rating: number) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

        return (
            <div className="flex items-center gap-[2px]">
                {Array.from({ length: fullStars }).map((_, i) => (
                    <StarIcon key={`full-${i}`} className="w-[12px] h-[11px]" fill="#FFCB2B" />
                ))}
                {hasHalfStar && (
                    <div className="relative w-[12px] h-[11px]">
                        <StarIcon className="w-[12px] h-[11px]" fill="#878387" />
                        <div className="absolute inset-0 overflow-hidden w-1/2">
                            <StarIcon className="w-[12px] h-[11px]" fill="#878387" />
                        </div>
                    </div>
                )}
                {Array.from({ length: emptyStars }).map((_, i) => (
                    <StarIcon key={`empty-${i}`} className="w-[12px] h-[11px]" fill="#878387" />
                ))}
                <p className="text-[12px] font-[Regular] text-[#000] ml-[4px]">
                    {rating}/5
                </p>
            </div>
        );
    };

    return (
        <>
            <div className="bg-[#fff] mt-[70px]">
                <div className="px-5 lg:px-[75px] py-[80px] common_p_80 max-sm:py-[0px_40px] max-w-[1230px] mx-auto w-full">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-[20px]">
                        <h1 className="text-[18px] font-[Bold] text-[#878387]">{booking.id}</h1>
                        <Link
                            to="/user/booking"
                            className="flex items-center gap-[4px] text-[14px] font-[SemiBold] text-[#000] cursor-pointer "
                        >
                            <ViewAllIcon className="rotate-180" />
                            <span>Back</span>
                        </Link>
                    </div>

                    {/* Main Card */}
                    <div className="">
                        {/* Customer Information Section */}
                        <div className="p-[30px] border border-[rgba(0,0,0,0.1)] rounded-[30px] max-sm:p-[20px] mb-[40px]">
                            <div className="flex items-center justify-between max-sm:flex-col flex-wrap gap-[10px]">
                                {/* Customer Profile */}
                                <div className="flex items-center gap-[12px] flex-shrink-0">
                                    <div className="w-[80px] h-[80px] rounded-full overflow-hidden">
                                        <img
                                            src={booking.customerImage || userImg}
                                            alt={booking.customer}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="flex flex-col items-start gap-[2px]">
                                        <p className="text-[12px] font-[Regular] text-[#878387]">
                                            Customer name
                                        </p>
                                        <h4 className="text-[18px] font-[Bold] text-[#000]">
                                            {booking.customer}
                                        </h4>
                                        {renderStars(booking.rating)}
                                    </div>
                                </div>

                                {/* Contact Details */}
                                <div className="flex items-center gap-[40px] max-sm:flex-col max-sm:items-start max-sm:gap-[20px]">
                                    <div className="flex items-center gap-[14px] flex-1">
                                        <div className="p-[16px] rounded-full bg-[#F8F8F8] flex items-center justify-center flex-shrink-0">
                                            <PhoneIcon className="w-[20px] h-[20px]" />
                                        </div>
                                        <div>
                                            <p className="text-[12px] font-[Regular] text-[#878387] mb-[4px]">
                                                Phone number
                                            </p>
                                            <h4 className="text-[14px] font-[SemiBold] text-[#000]">
                                                {booking.phone}
                                            </h4>
                                        </div>
                                    </div>

                                    <div className="w-[1px] h-[50px] bg-[rgba(0,0,0,0.10)] max-sm:hidden"></div>

                                    <div className="flex items-center gap-[14px] flex-1">
                                        <div className="p-[16px] rounded-full bg-[#F8F8F8] flex items-center justify-center flex-shrink-0">
                                            <EmailIcon className="w-[20px] h-[20px]" />
                                        </div>
                                        <div>
                                            <p className="text-[12px] font-[Regular] text-[#878387] mb-[4px]">
                                                Email address
                                            </p>
                                            <h4 className="text-[14px] font-[SemiBold] text-[#000]">
                                                {booking.email}
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Booking Details Section */}
                        <div className="">
                            {/* Booked Services */}
                            <div className="mb-[20px]">
                                <h3 className="text-[12px] font-[Regular] text-[#878387] mb-[12px]">
                                    Booked services
                                </h3>
                                <div className="flex flex-col gap-[6px]">
                                    {booking.services.map((serviceGroup, index) => (
                                        <div key={index} className="flex items-center gap-[8px]">
                                            <p className="text-[14px] font-[SemiBold] text-[#000] ">
                                                {serviceGroup.category} -
                                            </p>
                                            <div className="flex flex-wrap gap-[6px]">
                                                {serviceGroup.items.map((service, serviceIndex) => (
                                                    <p
                                                        key={serviceIndex}
                                                        className="inline-block rounded-[5px] border border-[rgba(0,0,0,0.1)] p-[4px_10px] text-[12px] font-[Regular] text-[#000]"
                                                    >
                                                        {service}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Service Date & Time */}
                            <div className="mb-[30px]">
                                <h3 className="text-[12px] font-[Regular] text-[#878387] mb-[2px]">
                                    Service date & time
                                </h3>
                                <p className="text-[14px] font-[SemiBold] text-[#000]">
                                    {booking.datetime}
                                </p>
                            </div>

                            {/* Service Location */}
                            <div className="mb-[30px]">
                                <h3 className="text-[12px] font-[Regular] text-[#878387] mb-[2px]">
                                    Service location
                                </h3>
                                <p className="text-[14px] font-[SemiBold] text-[#000]">
                                    {booking.location}
                                </p>
                            </div>

                            {/* Payment Mode - Show for past bookings */}
                            {isPastBooking && booking.paymentMode && (
                                <div className="mb-[30px]">
                                    <h3 className="text-[12px] font-[Regular] text-[#878387] mb-[2px]">
                                        Payment mode
                                    </h3>
                                    <p className="text-[14px] font-[SemiBold] text-[#000]">
                                        {booking.paymentMode}
                                    </p>
                                </div>
                            )}

                            {/* Total Pay - Show for past bookings, Estimated Service Price for others */}
                            {isPastBooking ? (
                                booking.totalPay && (
                                    <div className="mb-[30px]">
                                        <div className="flex items-center gap-[4px]">
                                            <h3 className="text-[12px] font-[Regular] text-[#878387] mb-[2px]">
                                                Total Pay
                                            </h3>
                                            <div className="cursor-pointer" onClick={() => setIsPaySummaryModalOpen(true)}>
                                                <InfoIcon className="w-[16px] h-[16px]" />
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-[8px]">
                                            <p className="text-[14px] font-[SemiBold] text-[#000]">
                                                {booking.totalPay}
                                            </p>
                                        </div>
                                    </div>
                                )
                            ) : (
                                booking.price && (
                                    <div className="mb-[30px]">
                                        <h3 className="text-[12px] font-[Regular] text-[#878387] mb-[2px]">
                                            Estimated service price
                                        </h3>
                                        <p className="text-[14px] font-[SemiBold] text-[#000]">
                                            {booking.price}
                                        </p>
                                    </div>
                                )
                            )}
                        </div>

                        {/* Action Buttons */}
                        {isPastBooking ? (
                            <>
                                <div className="flex gap-[16px] max-sm:flex-col mt-[40px]">
                                    <button
                                        className="p-[14px_30px] bg-[#00C299] text-[#FFF] rounded-full text-[14px] font-[Bold] transition-colors cursor-pointer"
                                    >
                                        The job was successfully completed
                                    </button>
                                    <button
                                        onClick={handleCancelBooking}
                                        className="p-[14px_30px] bg-[#fff] text-[#000] border border-[#000] rounded-full text-[14px] font-[Bold] transition-colors cursor-pointer"
                                    >
                                        Cancel booking
                                    </button>
                                </div>
                                <div className="flex gap-[16px] max-sm:flex-col mt-[40px] hidden">
                                    <button
                                        className="p-[14px_30px] bg-[#FF0000] text-[#FFF] rounded-full text-[14px] font-[Bold] transition-colors cursor-pointer"
                                    >
                                        Cancelled
                                    </button>
                                    <button
                                        onClick={() => setIsCancelReasonModalOpen(true)}
                                        className="p-[14px_30px] bg-[#fff] text-[#000] border border-[#000] rounded-full text-[14px] font-[Bold] transition-colors cursor-pointer"
                                    >
                                        View reason
                                    </button>
                                </div>
                            </>
                        ) : (
                            <div className="flex gap-[16px] max-sm:flex-col mt-[40px]">
                                {isUpcomingBooking ? (
                                    <>
                                        {isPaymentReady ? (
                                            <button
                                                onClick={() => setIsWriteReviewModalOpen(true)}
                                                className="p-[14px_30px] bg-[#6E2C91] text-[#FFF] rounded-full text-[14px] font-[Bold] transition-colors cursor-pointer"
                                            >
                                                Collect payment
                                            </button>
                                        ) : (
                                            <>
                                                <button
                                                    className="hidden p-[14px_30px] bg-[#F6D3DA] text-[#000] border border-[#F6D3DA] rounded-full text-[14px] font-[Bold] transition-colors cursor-pointer"
                                                >
                                                    Service provider arrived
                                                </button>

                                                <button
                                                    onClick={handleCancelBooking}
                                                    className="p-[14px_30px] bg-[#fff] text-[#000] border border-[#000] rounded-full text-[14px] font-[Bold] transition-colors cursor-pointer"
                                                >
                                                    Cancel booking
                                                </button>
                                            </>
                                        )}
                                    </>
                                ) : (
                                    <>
                                        <button
                                            onClick={handleDecline}
                                            className="p-[14px_30px] bg-[#fff] text-[#000] border border-[#000] rounded-full text-[14px] font-[Bold] transition-colors cursor-pointer"
                                        >
                                            Cancel request
                                        </button>
                                    </>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Decline Request Modal */}
            <DeclineRequestModal
                isOpen={isDeclineModalOpen}
                onClose={() => setIsDeclineModalOpen(false)}
                onConfirm={handleDeclineConfirm}
            />

            {/* Pay Summary Modal */}
            {
                isPastBooking && booking && (
                    <PaySummaryModal
                        isOpen={isPaySummaryModalOpen}
                        onClose={() => setIsPaySummaryModalOpen(false)}
                        items={[
                            { name: "Deep clean facial", amount: 15.00 },
                            { name: "Detox facial", amount: 5.00 },
                            { name: "Bridal makeup", amount: 15.00 },
                            { name: "Engagement makeup", amount: 25.00 },
                            { name: "Material fee", amount: 25.00 },
                            { name: "Misc Fee", amount: 25.00 },
                            { name: "Commission", amount: -25.00 },
                        ]}
                        earnedAmount={70.00}
                    />
                )
            }

            {/* Write Review Modal */}
            {
                (isPastBooking || isPaymentReady) && booking && (
                    <WriteReviewModal
                        isOpen={isWriteReviewModalOpen}
                        onClose={() => setIsWriteReviewModalOpen(false)}
                        onSubmit={() => { }}
                    />
                )
            }

            {/* Additional Charges Modal */}
            {
                isUpcomingBooking && booking && (() => {
                    // Service prices mapping - in real app, this would come from API
                    const servicePrices: Record<string, number> = {
                        "Deep clean facial": 15.00,
                        "Detox facial": 5.00,
                        "Bridal makeup": 15.00,
                        "Engagement makeup": 25.00,
                    };

                    // Convert booking services to service items with prices
                    const services = booking.services.flatMap(serviceGroup =>
                        serviceGroup.items.map(item => ({
                            name: item,
                            price: servicePrices[item] || 0
                        }))
                    );

                    return (
                        <AdditionalChargesModal
                            isOpen={isAdditionalChargesModalOpen}
                            onClose={() => setIsAdditionalChargesModalOpen(false)}
                            onSubmit={handleAdditionalChargesSubmit}
                            serviceCost={booking.price ? parseFloat(booking.price.replace("$", "")) : 50.00}
                            services={services}
                        />
                    );
                })()
            }

            {/* Cancel Booking Modal */}
            <CancelBookingModal
                isOpen={isCancelBookingModalOpen}
                onClose={() => setIsCancelBookingModalOpen(false)}
                onConfirm={handleCancelBookingConfirm}
            />

            {/* Booking Cancel Reason Modal */}
            <BookingCancelReasonModal
                isOpen={isCancelReasonModalOpen}
                onClose={() => setIsCancelReasonModalOpen(false)}
            />
        </>
    );
}

