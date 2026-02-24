import { Link } from "react-router-dom";
import { ViewAllIcon } from "../../components/customfile/icons";
const sections = [
    {
        title: "Navigating the Help Center:",
        points: [
            "Our Help Center is designed with user accessibility in mind. Utilize the intuitive navigation to explore a variety of topics and find answers to commonly asked questions. From understanding account settings to troubleshooting technical issues, the Help Center is structured to cater to your needs efficiently. If you don't find what you're looking for, our dedicated support team is always ready to assist you further.",
        ],
    },
    {
        title: "Account Management and Security:",
        points: [
            "Learn more about managing your MyLooQ account and ensuring its security. The Help Center provides insights into updating personal information, password management, and implementing additional security measures. Your peace of mind is crucial to us, and we aim to empower you with the tools needed to maintain a secure and personalized account.",
        ],
    },
    {
        title: "Troubleshooting and Technical Support:",
        points: [
            "Encountering technical challenges? Our Help Center offers a troubleshooting guide to address common issues you may face while using the MyLooQ application. Additionally, find information on how to reach our technical support team for more personalized assistance. We're here to ensure your experience on our platform remains smooth and hassle-free.",
        ],
    },
    {
        title: "Policy and Compliance:",
        points: [
            "Stay informed about MyLooQ policies and compliance standards by exploring the relevant sections in the Help Center. From understanding our user agreement to privacy policies, this section is dedicated to providing clarity on the legal aspects governing your interaction with our platform.",
        ],
    },
    {
        title: "Feedback and Suggestions:",
        points: [
            "MyLooQ values your feedback. If you have suggestions or ideas for improvement, our Help Center guides you on how to provide feedback. We believe in continuous enhancement, and your insights contribute to making MyLooQ a better platform for everyone.",
        ],
    },
    {
        title: "Contacting Support:",
        points: [
            "Should you require personalized assistance, the Help Center provides details on how to contact our support team. Whether it's a specific concern or a general inquiry, our support team is committed to addressing your needs promptly and effectively. Your satisfaction is our priority, and we are here to assist you throughout your journey with MyLooQ.",
        ],
    },
];

function Help() {
    return (
        <div className="mx-auto w-full bg-[#fff] mt-[70px] max-w-[1230px] max-sm:mt-[50px]">
            <div className="px-5 lg:px-[75px] py-[80px] common_p_80 max-sm:py-[20px]">
                <div className="flex items-center justify-between border-b border-[rgba(0,0,0,0.1)] pb-[20px] mb-[20px]">
                    <h4 className="text-[24px] font-[Bold] text-[#000] text30px">Help Center</h4>
                    <div>
                        <Link to="/user/home">
                            <button className="flex items-center gap-[4px] cursor-pointer">
                                <ViewAllIcon className="w-[16px] h-[16px] rotate-180" />
                                <p className="text-[14px] font-[Bold] text-[#000]">Back</p>
                            </button>
                        </Link>
                    </div>
                </div>
                <div>
                    <p className="text-[14px] font-[Regular] text-[#000] leading-[26px] mb-[20px]">We are dedicated to providing a comprehensive and user-friendly Help Center to assist you in navigating our platform seamlessly. Our Help Center serves as a valuable resource for addressing queries, concerns, and guiding you through various aspects of the MyLooQ application. Whether you're seeking information about account management, troubleshooting, or general inquiries, our goal is to empower you with the knowledge needed for a smooth user experience.</p>
                    <div className="grid gap-[20px]">
                        {sections.map((section) => (
                            <div
                                key={section.title}
                                className=""
                            >
                                <h3 className="text-[16px] font-[SemiBold] text-[#000] mb-[10px]">
                                    {section.title}
                                </h3>
                                <div className="">
                                    {section.points.map((point, index) => (
                                        <p className=" text-[14px] font-[Regular] text-[#000] leading-[26px] " key={index}>{point}</p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="text-[14px] font-[Regular] text-[#000] leading-[26px] mb-[20px]">By using MyLooQ, you acknowledge having read, understood, and agreed to these T&Cs.</p>
                </div>
            </div>
        </div>
    );
}

export default Help;

