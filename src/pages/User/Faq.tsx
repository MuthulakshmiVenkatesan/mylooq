import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ViewAllIcon, ArrowDownIcon } from "../../components/customfile/icons";

const faqTabs = [
    {
        id: "general",
        label: "General",
        items: [
            {
                question: "How it works?",
                answer:
                    "Login to the application and select the appropriate service type. After that the application will ask you to perform required steps.",
            },
            {
                question: "Do you face any problems?",
                answer:
                    "Reach out to our support team through the Help Center or live chat; we monitor requests instantly and try to respond within minutes.",
            },
            {
                question: "Sharing your location",
                answer:
                    "Enable precise location so we can match you with nearby LooQers. You can always pause sharing and still book, though travel estimates may be less accurate.",
            },
        ],
    },
    {
        id: "user",
        label: "User",
        items: [
            {
                question: "How do I book?",
                answer:
                    "Search for a service, pick a LooQer, choose a time, and confirm the booking with one tap.",
            },
            {
                question: "What payment methods work?",
                answer: "We accept cards via Stripe, plus select digital wallets depending on your region.",
            },
            {
                question: "Can I rate the LooQer?",
                answer: "Yes, after every visit you can leave a review and feedback on the LooQer's profile.",
            },
        ],
    },
    {
        id: "looquer",
        label: "LooQer",
        items: [
            {
                question: "How do I become a LooQer?",
                answer: "Complete the registration, upload your portfolio, and wait for verification.",
            },
            {
                question: "How do I get bookings?",
                answer:
                    "Keep your profile updated, accept requests quickly, and maintain great reviews to rank higher in searches.",
            },
            {
                question: "Do you handle payments?",
                answer:
                    "Yes, transactions flow through Stripe and we release payouts after the service is marked complete plus any hold period.",
            },
        ],
    },
];

function Faq() {
    const [activeTab, setActiveTab] = useState(faqTabs[0].id);
    const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
    const tabContent = useMemo(() => faqTabs.find((tab) => tab.id === activeTab)?.items ?? [], [activeTab]);

    const toggleExpanded = (idx: number) => {
        setExpandedIndex((prev) => (prev === idx ? null : idx));
    };

    return (
        <div className="mx-auto w-full bg-[#fff] mt-[70px] max-w-[1230px] max-sm:mt-[50px]">
            <div className="px-5 lg:px-[75px] py-[80px] common_p_80 max-sm:py-[20px]">
                <div className="flex items-center justify-between border-b border-[rgba(0,0,0,0.1)] pb-[10px] max-sm:gap-[10px] ">
                    <div className="max-sm:overflow-x-auto max-sm:w-[calc(80vw-15px)] hide-scrollbar laptop_tabs">
                        <div className="flex gap-[4px] rounded-[30px] bg-[#F8F8F8] p-[4px]">
                            {faqTabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    className={`cursor-pointer rounded-[50px] p-[18px_80px] text-[14px] font-[SemiBold] transition shadow-[0_4px_15px_0px_rgba(0,0,0,0.10)] ${activeTab === tab.id
                                        ? "bg-[#000] text-white"
                                        : "text-[#000] bg-[#fff]"
                                        }`}
                                    onClick={() => {
                                        setActiveTab(tab.id);
                                        setExpandedIndex(null);
                                    }}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center gap-[4px]">
                        <Link to="/user/home">
                            <button className="flex items-center gap-[4px] cursor-pointer">
                                <ViewAllIcon className="w-[16px] h-[16px] rotate-180" />
                                <p className="text-[14px] font-[Bold] text-[#000]">Back</p>
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="">
                    {tabContent.map((item, idx) => (
                        <div
                            key={item.question}
                            className="border-b border-[rgba(0,0,0,0.1)] py-[24px] max-sm:py-[18px] max-sm:last:border-b-0 "
                        >
                            <button
                                onClick={() => toggleExpanded(idx)}
                                className="cursor-pointer w-full flex items-center justify-between text-left"
                            >
                                <div>
                                    <h4 className="text-[18px] font-[SemiBold] text-[#000]">{idx + 1}. {item.question}</h4>
                                </div>
                                <div className="">
                                    {expandedIndex === idx ? <ArrowDownIcon className="rotate-180" /> : <ArrowDownIcon className="" />}
                                </div>
                            </button>
                            {expandedIndex === idx && (
                                <p className="pl-[18px] pt-[8px] text-[14px] font-[Regular] text-[#000] leading-[24px]">
                                    {item.answer}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Faq;