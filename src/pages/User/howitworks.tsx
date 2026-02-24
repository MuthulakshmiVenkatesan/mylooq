import { Link } from "react-router-dom";
import { ViewAllIcon } from "../../components/customfile/icons";

function HowItWorks() {
    return (
        <div className="mx-auto w-full bg-[#fff] mt-[70px] max-w-[1230px] max-sm:mt-[50px]">
            <div className="px-5 lg:px-[75px] py-[80px] common_p_80 max-sm:py-[20px] max-sm:mb-[20px]">
                <div className="flex items-center justify-between border-b border-[rgba(0,0,0,0.1)] pb-[20px] mb-[20px]">
                    <h4 className="text-[24px] font-[Bold] text-[#000] text30px">How It Works</h4>
                    <div>
                        <Link to="/user/home">
                            <button className="flex items-center gap-[4px] cursor-pointer">
                                <ViewAllIcon className="w-[16px] h-[16px] rotate-180" />
                                <p className="text-[14px] font-[Bold] text-[#000]">Back</p>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col gap-[20px]">
                    <p className="text-[14px] font-[Regular] text-[#000] leading-[26px]">MyLooQ functions as an integrated lifestyle platform, offering users a versatile range of services through a single, user-friendly application. Users can easily start by downloading the MyLooQ app and creating a personalized account. The application's intuitive interface allows users to explore and choose from a diverse set of essential services tailored to their daily needs, providing a seamless and convenient experience.</p>
                    <p className="text-[14px] font-[Regular] text-[#000] leading-[26px]">Upon selecting a service, MyLooQ employs advanced technology to efficiently connect users with various services as per their need. The platform prioritizes user satisfaction by incorporating features such as real-time tracking, secure payment options, and user reviews, ensuring a reliable and trustworthy experience. MyLooQ's commitment to user convenience is evident in its efforts to streamline processes and optimize the overall user journey.</p>
                    <p className="text-[14px] font-[Regular] text-[#000] leading-[26px]">With a focus on enhancing daily life, MyLooQ serves as a go-to solution for users seeking a comprehensive and efficient way to access essential services. The platform's all-encompassing approach reflects its dedication to simplifying the user experience and contributing to an improved and more convenient lifestyle.</p>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks