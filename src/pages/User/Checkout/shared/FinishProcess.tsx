import { TickIcon } from "../../../../components/customfile/icons";

function FinishProcess() {
    return (
        <div className="flex flex-col min-h-[60vh] items-center justify-center bg-[#fff] ">
            <div className="flex p-[20px] items-center justify-center rounded-full bg-[#6e2c91] mb-[30px]">
                <TickIcon className="h-[28px] w-[28px]" strokeWidth={1} />
            </div>
            <div className="mb-[30px]">
                <h3 className="text-[28px] font-[Bold] text-[#000] mb-[6px] text-center">Your Booking successful</h3>
                <p className="text-[14px] font-[Regular] text-[#000] text-center">Please wait for admin approval</p>
            </div>
            <div className="mb-[30px]">
                <h4 className="text-[20px] font-[Bold] text-[#000] text-center">Your booking ID : <span className="text-[#6E2C91]">#SB32323313132</span></h4>
            </div>

            <button className="bg-[#000] rounded-full p-[14px_30px] text-[#fff] text-[14px] font-[Bold] border-none shadow-none cursor-pointer w-fit">Go to bookings</button>
        </div>
    );
}

export default FinishProcess

