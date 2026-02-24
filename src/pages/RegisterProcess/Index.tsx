import { useState } from "react";
import Sidebar from "../../components/layouts/Sidebar";
import ProcessHeader from "./shared/ProcessHeader";
import Footer from "../../components/layouts/Footer";
import { Button } from "../../components/Ui/Button";
import StepContent from "./shared/StepContent";
import FinishProcess from "./shared/FinishProcess";



export default function RegisterProcess() {
  const [activeStep, setActiveStep] = useState(0);
  
  const [isCompleted, setIsCompleted] = useState(false);

  const handleContinue = () => {
    if (activeStep >= 3) {
      setIsCompleted(true);
      return;
    }
    setActiveStep((prev) => Math.min(prev + 1, 3));
  };
 

  const handleStepClick = (stepIndex: number) => {
    // Allow navigation to completed steps (steps before or equal to current step)
    if (stepIndex <= activeStep || isCompleted) {
      setActiveStep(stepIndex);
      setIsCompleted(false); // Reset completion status when navigating back
    }
  };

  return (
    <div className="">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 pl-[71px] max-sm:pl-0 laptop_pl">
          <ProcessHeader activeStep={activeStep} isCompleted={isCompleted} onStepClick={handleStepClick} />
          <main className="pb-[80px] max-sm:pb-[30px] min-h-[100vh] max-sm:min-h-auto main_height">
            <div className="">
              {isCompleted ? (
                <FinishProcess />
              ) : (
                <StepContent
                  activeStep={activeStep}
                  onNavigateToServices={() => setActiveStep(0)}
                  // categories={categories}
                  // selectedCategory={selectedCategory}
                  // onSelectCategory={setSelectedCategory}
                  // services={services}
                  // selectedServices={selectedServices}
                  // setSelectedServices={setSelectedServices}
                  // servicePrices={servicePrices}
                  // onServicePriceChange={handleServicePriceChange}
                  // selectedSliderService={selectedSliderService}
                  // onSliderServiceSelect={handleSliderServiceSelect}
                />
              )}
            </div>
            {!isCompleted && (
              <div className="flex items-center justify-center gap-4 max-sm:px-[15px]">
                <Button
                  onClick={handleContinue}
                  className="max-sm:w-full mt-[45px] w-[600px] border-none shadow-none outline-none cursor-pointer bg-[#6E2C91] rounded-[50px] py-[14px] text-[#FFF] font-[Medium] text-[14px] max-sm:mt-[20px]"
                >
                  {activeStep === 3 ? "Finish" : "Continue"}
                </Button>
              </div>
            )}
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}

