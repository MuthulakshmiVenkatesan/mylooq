import { Link } from "react-router-dom";
import { ContactLocationIcon, ViewAllIcon, PhoneIcon, EmailIcon } from "../../components/customfile/icons";
import { Input } from "../../components/customfile/parts";

const companyContact = [
    {
        label: "Address",
        value: "209 N Dixie Hwy, Lake Worth, FL 33460",
        icon: <ContactLocationIcon className="w-[20px] h-[20px]" />,
    },
    {
        label: "Phone number",
        value: "+ (000) 1234 5678",
        icon: <PhoneIcon className="w-[20px] h-[20px]" />,
    },
    {
        label: "Email address",
        value: "dianewilliam@example.com",
        icon: <EmailIcon className="w-[20px] h-[20px]" />,
    },
];

function Contact() {
    return (
        <div className="mx-auto w-full bg-[#fff] mt-[70px] max-w-[1230px] max-sm:mt-[50px]">
            <div className="px-5 lg:px-[75px] py-[80px] common_p_80 max-sm:py-[20px]">
                <div className="flex items-center justify-between border-b border-[rgba(0,0,0,0.1)] pb-[20px] mb-[20px]">
                    <h4 className="text-[24px] font-[Bold] text-[#000]">Contact Us</h4>
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
                    <div className="mb-[30px] flex flex-col gap-[14px]">
                        <p className="text-[14px] font-[Regular] text-[#000] leading-[24px]">You can contact us any way that is convenient for you. We are available 24/7 via fax or email. You can also use a quick contact form below or visit our office personally.</p>
                        <p className="text-[14px] font-[Regular] text-[#000] leading-[24px]">Welcome to MyLooQ, the easiest to get around at the tap of a button</p>
                    </div>
                    <div className="flex flex-col gap-[60px] lg:flex-row">
                        <div className="w-full lg:w-[50%]">
                            <div className="mb-[24px] flex items-center justify-between">
                                <h4 className="text-[18px] font-[Bold] text-[#000]">Fill & submit the form</h4>
                            </div>
                            <div className="space-y-[16px]">
                                <div className="flex gap-[16px] max-sm:flex-col">
                                    <div className="w-full input-groups relative flex bg-[#F2F2F2] p-[0px_30px] rounded-full border transition-all duration-150 border-transparent">
                                        <Input
                                            type="text"
                                            placeholder=" "
                                            className="w-full border-none bg-transparent shadow-none w-full focus:outline-none focus:shadow-none text-[#000000] font-[Medium] text-[16px]"
                                        />
                                        <label className="bg-transparent  text-[#878387] font-[Regular] text-[14px] " >First name</label>
                                    </div>
                                    <div className="w-full input-groups relative flex bg-[#F2F2F2] p-[0px_30px] rounded-full border transition-all duration-150 border-transparent">
                                        <Input
                                            type="text"
                                            placeholder=" "
                                            className="w-full border-none bg-transparent shadow-none w-full focus:outline-none focus:shadow-none text-[#000000] font-[Medium] text-[16px]"
                                        />
                                        <label className="bg-transparent  text-[#878387] font-[Regular] text-[14px] " >Last name</label>
                                    </div>
                                </div>
                                <div className="flex gap-[16px] max-sm:flex-col">
                                    <div className="w-full input-groups relative flex bg-[#F2F2F2] p-[0px_30px] rounded-full border transition-all duration-150 border-transparent">
                                        <Input
                                            type="text"
                                            placeholder=" "
                                            className="w-full border-none bg-transparent shadow-none w-full focus:outline-none focus:shadow-none text-[#000000] font-[Medium] text-[16px]"
                                        />
                                        <label className="bg-transparent  text-[#878387] font-[Regular] text-[14px] " >Email</label>
                                    </div>
                                    <div className="w-full input-groups relative flex bg-[#F2F2F2] p-[0px_30px] rounded-full border transition-all duration-150 border-transparent">
                                        <Input
                                            type="text"
                                            placeholder=" "
                                            className="w-full border-none bg-transparent shadow-none w-full focus:outline-none focus:shadow-none text-[#000000] font-[Medium] text-[16px]"
                                        />
                                        <label className="bg-transparent  text-[#878387] font-[Regular] text-[14px] " >Phone number</label>
                                    </div>
                                </div>
                                <div className="w-full input-groups relative flex bg-[#F2F2F2] p-[0px_30px] rounded-full border transition-all duration-150 border-transparent">
                                    <Input
                                        type="text"
                                        placeholder=" "
                                        className="w-full border-none bg-transparent shadow-none w-full focus:outline-none focus:shadow-none text-[#000000] font-[Medium] text-[16px]"
                                    />
                                    <label className="bg-transparent  text-[#878387] font-[Regular] text-[14px] " >Tap to write</label>
                                </div>
                                <div className="w-full relative bg-[#F2F2F2] p-[20px_30px] rounded-[30px] border transition-all duration-150 border-transparent">
                                    <textarea
                                        placeholder="Please enter details"
                                        className="w-full border-none bg-transparent shadow-none w-full focus:outline-none focus:shadow-none text-[#000000] font-[Regular] text-[14px] resize-none h-[130px] placeholder:text-[#878387]"
                                    />
                                </div>
                                <button className="mt-[26px] w-full rounded-[50px] bg-[#6E2C91] p-[16px] text-[14px] font-[Bold] text-white ">
                                    Submit
                                </button>
                            </div>
                        </div>
                        <div className="w-full lg:w-[50%] pl-[30px] max-sm:pl-0">
                            <div className="">
                                <h5 className="text-[18px] font-[Bold] text-[#000] mb-[24px]">Company info</h5>
                                <div className="space-y-[16px]">
                                    {companyContact.map((entry) => (
                                        <div key={entry.label} className="flex items-start gap-[14px]">
                                            <div className="bg-[#F8F8F8] p-[16px] rounded-[50px]">{entry.icon}</div>
                                            <div>
                                                <p className="text-[12px] font-[Regular] text-[#878387] mb-[2px]">
                                                    {entry.label}
                                                </p>
                                                <h4 className="text-[14px] font-[SemiBold] text-[#000]">{entry.value}</h4>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;

