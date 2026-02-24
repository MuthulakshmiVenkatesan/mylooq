import { VerifyTickIcon } from "../../../../components/customfile/icons";

const steps = ["Booking location", "Date & time", "Payment"];

type ProcessHeaderProps = {
  activeStep: number;
  isCompleted?: boolean;
  onStepClick?: (stepIndex: number) => void;
};

function ProcessHeader({ activeStep, isCompleted, onStepClick }: ProcessHeaderProps) {
  const normalizedStep = Math.min(Math.max(activeStep, 0), steps.length - 1);

  return (
    <header className="flex justify-between gap-4  bg-[#fff] p-[24px_50px] border-b border-[rgba(0,0,0,0.1)] max-sm:flex-col fixed w-[95%] z-[9] max-sm:w-auto processheader_whole max-sm:p-[16px] max-sm:w-full">
      <div className="flex items-center gap-4 max-sm:justify-center max-sm:relative max-sm:left-[15px] process_head">
        <div>
          <h4 className="m-[0] text-[18px] font-[Bold] text-[#000]">Checkout</h4>
        </div>
      </div>
      <div className="max-sm:overflow-x-auto max-sm:w-[calc(100vw-32px)] hide-scrollbar">
      <div className="flex items-center gap-[40px] max-sm:min-w-max header_Sub">
          {steps.map((label, index) => {
            const status = isCompleted
              ? "complete"
              : index === normalizedStep
                ? "active"
                : index < normalizedStep
                  ? "complete"
                  : "upcoming";
            const isActive = status === "active";
            const isComplete = status === "complete";
            return (
              <div
                key={label}
                className={`flex items-center gap-[10px] ${isComplete && onStepClick ? "cursor-pointer hover:opacity-80" : ""}`}
                onClick={() => isComplete && onStepClick && onStepClick(index)}
              >
                <div
                  className={`flex items-center justify-center w-[30px] h-[30px] rounded-full transition flex items-center justify-center text-[14px] font-[SemiBold] ${isActive
                    ? "text-[#fff] bg-[#6E2C91]"
                    : isComplete
                      ? "bg-[#00C299]"
                      : "bg-[#EFEFEF] text-[#000000]"
                    }`}
                >
                  <div className="flex">
                    {isComplete ? (
                      <VerifyTickIcon className="w-[16px] h-[16px]" />
                    ) : (
                      <span>{index + 1}</span>
                    )}
                  </div>
                </div>
                <h4 className={`m-[0px] text-[14px] font-[Regular] font-[400] ${isActive ? "text-[#000] " : isComplete ? "text-[#000]" : "text-[#878387]"}`}>{label}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </header >
  );
}

export default ProcessHeader
