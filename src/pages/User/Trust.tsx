import { Link } from "react-router-dom";
import { ViewAllIcon } from "../../components/customfile/icons";

function Trust() {
    return (
        <div className="mx-auto w-full bg-[#fff] mt-[70px] max-w-[1230px] max-sm:mt-[50px]">
            <div className="px-5 lg:px-[75px] py-[80px] common_p_80 max-sm:py-[20px] max-sm:mb-[20px]">
                <div className="flex items-center justify-between border-b border-[rgba(0,0,0,0.1)] pb-[20px] mb-[20px]">
                    <h4 className="text-[24px] font-[Bold] text-[#000] text30px">Trust, Safety & Insurance</h4>
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
                    <p className="text-[14px] font-[Regular] text-[#000] leading-[26px]">Ensuring the utmost trust, safety, and security for our users is a fundamental cornerstone of the MyLooQ platform. We recognize the importance of creating a secure environment that fosters confidence in every interaction. To achieve this, MyLooQ employs a stringent vetting process for all our partners, encompassing thorough background checks and verification procedures. This meticulous screening ensures that users can rely on the professionalism and credibility of those within the MyLooQ network.</p>
                    <p className="text-[14px] font-[Regular] text-[#000] leading-[26px]">Our commitment to user safety extends beyond the initial vetting process. MyLooQ integrates advanced real-time tracking features into the application, allowing users to monitor the status of their engagements in real-time. This transparency not only enhances the overall user experience but also ensures accountability throughout the service lifecycle. Additionally, MyLooQ prioritizes secure payment options within the app, promoting financial safety and peace of mind for our users.</p>
                    <p className="text-[14px] font-[Regular] text-[#000] leading-[26px]">Recognizing the unpredictability of life, MyLooQ takes proactive steps to provide comprehensive insurance coverage for users. This additional layer of protection is designed to address unforeseen circumstances and emergencies, offering users reassurance in their engagements on the platform. In the rare event that issues arise, MyLooQ's dedicated support team is readily available to assist users. Open communication channels and a responsive support system underscore our commitment to addressing user concerns promptly and effectively.</p>
                    <p className="text-[14px] font-[Regular] text-[#000] leading-[26px]">MyLooQ values the input of its user community and actively encourages feedback. We believe that fostering an open dialogue contributes to an ongoing culture of improvement and refinement. By consistently upholding the principles of trust, safety, and insurance, MyLooQ aims to be a reliable and secure platform that not only meets but exceeds the expectations of its diverse user base, enriching their overall experience with us.</p>
                </div>
            </div>
        </div>
    )
}

export default Trust