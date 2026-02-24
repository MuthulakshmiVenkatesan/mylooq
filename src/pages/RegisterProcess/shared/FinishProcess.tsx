import { TickIcon } from "../../../components/customfile/icons";

function FinishProcess() {
    return (
        <div className="bg-[#fff] p-[24px_30px_0px] flex-1 max-sm:p-[24px_15px_0px] mt-[120px] max-sm:mt-[118px] max-sm:pb-[0px]">
            <div className="flex flex-col min-h-[60vh] items-center justify-center bg-[#fff] ">
                <div className="flex p-[20px] items-center justify-center rounded-full bg-[#6e2c91] mb-[30px]">
                    <TickIcon className="h-[28px] w-[28px]" />
                </div>
                <h3 className="text-[30px] font-[Bold] text-[#000] m-[0] mb-[4px] text-center max-sm:mb-[6px] leading-[1.2]">You have completed all the process</h3>
                <p className="text-[14px] font-[Regular] text-[#000] m-[0] text-center">Please wait for admin approval</p>
            </div>
        </div>
    );
}

export default FinishProcess

