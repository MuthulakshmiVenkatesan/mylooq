import { Link } from "react-router-dom";
import { ViewAllIcon } from "../../components/customfile/icons";
const sections = [
    {
        title: "User Eligibility",
        points: [
            "To utilize MyLooQ, you must be at least 18 years old and capable of entering into a legally binding agreement.",
        ],
    },
    {
        title: "User Accounts",
        points: [
            "Access to MyLooQ's services requires the creation of a user account.",
            "Safeguard your account credentials, and immediately report any unauthorized access to MyLooQ.",
        ],
    },
    {
        title: "Service Description",
        points: [
            "MyLooQ operates as a comprehensive platform connecting users with diverse services.",
            "Users have the ability to request various services through the user-friendly interface of the App.",
        ],
    },
    {
        title: "Pricing and Payment",
        points: [
            "Users agree to pay the fees presented on the App for the requested services.",
            "Payment methods, including credit cards and digital wallets, are processed securely through the App.",
            "Additional fees may be applied for specific circumstances, such as cancellations or any other charges.",
        ],
    },
    {
        title: "Cancellations and Refunds",
        points: [
            "Users have the right to cancel services, subject to applicable conditions & cancellation fees.",
            "Refunds for completed services are at the discretion of MyLooQ.",
        ],
    },
    {
        title: "Conduct Guidelines",
        points: [
            "Users are expected to treat LooQers and fellow users with respect and courtesy.",
            "Prohibited behavior includes discrimination, harassment, and any violations of applicable laws.",
        ],
    },
    {
        title: "Privacy Policy",
        points: [
            "MyLooQ collects and processes user data in accordance with its Privacy Policy, compliant with privacy laws.",
            "By using the App, you consent to the collection and use of your information as outlined in the Privacy Policy.",
        ],
    },
    {
        title: "Intellectual Property",
        points: [
            "MyLooQ retains ownership of all intellectual property related to the App.",
            "Users are granted a limited, non-exclusive, revocable license to use the App.",
        ],
    },
    {
        title: "Limitation of Liability",
        points: [
            "MyLooQ is not liable for direct, indirect, incidental, or consequential damages arising from App use or services provided, to the extent permitted by law.",
        ],
    },
    {
        title: "Governing Law",
        points: [
            "These terms are governed by and construed in accordance with the laws.",
        ],
    },
    {
        title: "Modifications",
        points: [
            "MyLooQ reserves the right to modify these terms at any time. Users will be notified of any changes.",
        ],
    },
];

function Terms() {
    return (
        <div className="mx-auto w-full bg-[#fff] mt-[70px] max-w-[1230px] max-sm:mt-[50px]">
            <div className="px-5 lg:px-[75px] py-[80px] common_p_80 max-sm:py-[20px] max-sm:mb-[20px]">
                <div className="flex items-center justify-between border-b border-[rgba(0,0,0,0.1)] pb-[20px] mb-[20px]">
                    <h4 className="text-[24px] font-[Bold] text-[#000] text30px">Terms & Conditions</h4>
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
                    <p className="text-[14px] font-[Regular] text-[#000] leading-[26px] mb-[20px]">Welcome to MyLooQ, a cutting-edge platform connecting users with a various services, designed to enhance your convenience and lifestyle. MyLooQ aims to provide an efficient and seamless experience, and by using the MyLooQ application ("the App"), You are consenting to be bound by these T&Cs. It is essential to thoroughly review and understand the following T&Cs, as they govern your use of the App. Please refrain from using the App if you do not agree with any part of these T&Cs.</p>
                    <div className="grid gap-[20px]">
                        {sections.map((section) => (
                            <div
                                key={section.title}
                                className=""
                            >
                                <h3 className="text-[16px] font-[SemiBold] text-[#000] mb-[10px]">
                                    {section.title}
                                </h3>
                                <ul className="space-y-[6px] pl-[16px] text-[14px] font-[Regular] text-[#000] leading-[24px] list-disc">
                                    {section.points.map((point, index) => (
                                        <li key={index}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <p className="text-[14px] font-[Regular] text-[#000] leading-[24px] mb-[20px] mt-[20px]">By using MyLooQ, you acknowledge having read, understood, and agreed to these T&Cs.</p>
                </div>
            </div>
        </div>
    );
}

export default Terms;

