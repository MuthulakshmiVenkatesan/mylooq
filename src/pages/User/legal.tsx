import { Link } from "react-router-dom";
import { ViewAllIcon } from "../../components/customfile/icons";

function Legal() {
    return (
        <div className="mx-auto w-full bg-[#fff] mt-[70px] max-w-[1230px] max-sm:mt-[50px]">
            <div className="px-5 lg:px-[75px] py-[80px] common_p_80 max-sm:py-[20px] max-sm:mb-[20px]">
                <div className="flex items-center justify-between border-b border-[rgba(0,0,0,0.1)] pb-[20px] mb-[20px]">
                    <h4 className="text-[24px] font-[Bold] text-[#000] text30px">Legal</h4>
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
                    <p className="text-[14px] font-[Regular] text-[#000] leading-[26px]">MyLooQ is dedicated to upholding the highest legal standards to ensure a secure and reliable platform for our users. By accessing and using the MyLooQ application, you are entering into a legally binding agreement with MyLooQ. It is imperative that users carefully review and understand the terms and conditions outlined in our user agreement. The terms cover various aspects of your engagement with the platform, including user conduct, privacy, and intellectual property rights.</p>
                    <p className="text-[14px] font-[Regular] text-[#000] leading-[26px]">We prioritize user privacy and data protection, and our legal framework includes robust provisions to safeguard user information. MyLooQ complies with applicable data protection laws and regulations, and our privacy policy outlines how user data is collected, used, and protected. By utilizing the MyLooQ application, users agree to abide by these privacy policies, and any breaches are subject to legal consequences.</p>
                    <p className="text-[14px] font-[Regular] text-[#000] leading-[26px]">MyLooQ reserves the right to take appropriate legal action in the event of any unauthorized use or violation of our intellectual property rights. All content, trademarks, logos, and other intellectual property featured on the MyLooQ application are the exclusive property of MyLooQ or its affiliates. Any unauthorized reproduction or use of these elements is strictly prohibited.</p>
                    <p className="text-[14px] font-[Regular] text-[#000] leading-[26px]">Our commitment to user safety and satisfaction extends beyond legal agreements. MyLooQ employs advanced security measures within the application, including real-time monitoring and secure payment options. These features are designed to enhance user safety and maintain a trustworthy environment for all interactions on our platform.</p>
                    <p className="text-[14px] font-[Regular] text-[#000] leading-[26px]">In the rare instance of disputes, MyLooQ encourages users to engage in open communication and amicable resolution. However, should disagreements persist, users consent to arbitration as the primary method of dispute resolution, in accordance with the rules and regulations applicable in the jurisdiction of MyLooQ's legal headquarters.</p>
                    <p className="text-[14px] font-[Regular] text-[#000] leading-[26px]">MyLooQ may, at its discretion, update or modify these legal terms and conditions. Users are responsible for regularly reviewing the terms to stay informed about any changes. Continued use of the MyLooQ application after such modifications constitutes acceptance of the revised terms. We appreciate your cooperation and commitment to maintaining a secure and reliable platform for everyone in the MyLooQ community.</p>
                </div>
            </div>
        </div>
    )
}

export default Legal