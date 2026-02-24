import { useState } from "react";
import Sidebar from "../../../components/UserLayouts/Sidebar";
import ProcessHeader from "./shared/ProcessHeader";
import Footer from "../../../components/UserLayouts/Footer";
import StepContent from "./shared/StepContent";
import FinishProcess from "./shared/FinishProcess";
import ProviderSummary from "./shared/ProviderSummary";
import RequestingModal from "./shared/RequestingModal";
import { ViewAllIcon } from "../../../components/customfile/icons";

export default function Checkout() {
  const [activeStep, setActiveStep] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isRequestingModalOpen, setIsRequestingModalOpen] = useState(false);
  const [bookingType, setBookingType] = useState<"immediate" | "scheduled">("immediate");
  const [paymentType, setPaymentType] = useState<"cash" | "card" | null>(null);

  const handleContinue = () => {
    if (activeStep >= 2) {
      // Show requesting modal for immediate booking
      if (bookingType === "immediate" && paymentType) {
        setIsRequestingModalOpen(true);
        return;
      }
      // Show finish process for scheduled booking
      if (bookingType === "scheduled" && paymentType) {
      setIsCompleted(true);
        return;
      }
      return;
    }
    setActiveStep((prev) => Math.min(prev + 1, 2));
  };

  const handleBookNow = () => {
    setIsRequestingModalOpen(false);
    // You can add additional logic here, like submitting the booking
    // For now, we'll just close the modal
  };


  const handleStepClick = (stepIndex: number) => {
    // Allow navigation to completed steps (steps before or equal to current step)
    if (stepIndex <= activeStep || isCompleted) {
      setActiveStep(stepIndex);
      setIsCompleted(false); // Reset completion status when navigating back
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prev) => prev - 1);
      setIsCompleted(false); // Reset completion status when going back
    }
  };

  return (
    <div className="">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 pl-[71px] max-sm:pl-0 laptop_pl">
          <ProcessHeader activeStep={activeStep} isCompleted={isCompleted} onStepClick={handleStepClick} />
          <main className="bg-[#fff] flex-1 mt-[70px] max-sm:mt-[118px] ">
            <div className="px-5 lg:px-[75px] py-[80px] common_p_80 max-sm:py-[40px] max-w-[1230px] mx-auto w-full">
              <div className="flex gap-[50px] justify-between max-sm:flex-col max-sm:gap-[20px]">
                <div className="flex-1">
                  {isCompleted ? (
                    <FinishProcess />
                  ) : (
                    <StepContent
                      activeStep={activeStep}
                      onNavigateToServices={() => setActiveStep(0)}
                      bookingType={bookingType}
                      onBookingTypeChange={setBookingType}
                      paymentType={paymentType}
                      onPaymentTypeChange={setPaymentType}
                    />
                  )}

                  {!isCompleted && (
                  <div className="flex items-center justify-between mt-auto pt-[40px] max-sm:pt-[30px]">
                      {activeStep > 0 ? (
                    <button
                          onClick={handleBack}
                      className="flex items-center gap-[6px] transition-colors cursor-pointer"
                    >
                      <ViewAllIcon className="rotate-180" />
                      <p className="text-[14px] font-[Bold] text-[#000]">Back</p>
                    </button>
                      ) : (
                        <div></div>
                      )}
                      <button
                        onClick={handleContinue}
                        className={`px-[32px] py-[14px] bg-[#6A3E99] text-[#FFF] rounded-full text-[14px] font-[Bold] hover:bg-[#5a2e88] transition-colors cursor-pointer ${
                          activeStep > 0 ? "max-sm:w-fit" : "max-sm:w-full"
                        }`}
                      >
                    {activeStep === 2 ? "Book now" : "Next"}
                    </button>
                  </div>
                  )}
                </div>
                {!isCompleted && (
                  <div className="w-[300px] max-sm:w-full max-sm:mt-[30px]">
                  <ProviderSummary />
                </div>
                )}
              </div>
             
            </div>
          </main>
          <Footer />
        </div>
      </div>

      {/* Requesting Modal for Immediate Booking */}
      <RequestingModal
        isOpen={isRequestingModalOpen}
        onClose={() => setIsRequestingModalOpen(false)}
        onBookNow={handleBookNow}
      />
    </div>
  );
}

