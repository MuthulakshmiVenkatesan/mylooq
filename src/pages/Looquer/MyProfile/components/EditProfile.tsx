import { useState } from "react";
import { Link } from "react-router-dom";
import { Select, SelectTrigger, SelectContent, SelectItem } from "../../../../components/Ui/Select";
import { ArrowDownIcon, VerifyTickIcon, ViewAllIcon } from "../../../../components/customfile/icons";
import VerifyOtpModal from "./VerifyOtpModal";

const countryOptions = [
    { value: "+31", label: "NL", flag: "https://flagcdn.com/w20/nl.png" },
    { value: "+1", label: "US", flag: "https://flagcdn.com/w20/us.png" },
    { value: "+44", label: "GB", flag: "https://flagcdn.com/w20/gb.png" },
    { value: "+49", label: "DE", flag: "https://flagcdn.com/w20/de.png" },
    { value: "+33", label: "FR", flag: "https://flagcdn.com/w20/fr.png" },
];

export default function EditProfile() {
    const [countryCode, setCountryCode] = useState("+31");
    const [focusedField, setFocusedField] = useState<string | null>(null);
    const initialMobile = "50 123 4567";
    const [form, setForm] = useState({
        firstName: "Diane william",
        lastName: "K",
        mobile: initialMobile,
        email: "dianewilliam@gmail.com",
    });

    const handleInputChange = (field: keyof typeof form, value: string) => {
        setFocusedField(field);
        setForm((current) => ({ ...current, [field]: value }));
    };

    // Check if mobile number has been changed from initial value
    const isMobileChanged = form.mobile !== initialMobile;

    const [isVerifyOtpModalOpen, setIsVerifyOtpModalOpen] = useState(false);

    return (
        <>
            <div className="min-h-[100vh] max-sm:min-h-auto myprofile_height ">
                <div className="bg-[#fff] pb-[80px] pt-[80px] max-sm:py-[30px]">
                    <div className="px-5 lg:px-[75px] max-w-[1230px] mx-auto w-full">

                        <div className="max-w-[600px] mx-auto w-full">
                            {/* Title */}
                            <h1 className="text-[28px] font-[Bold] text-[#000] text-center mb-[30px] max-sm:text-[22px]">
                                Edit profile
                            </h1>

                            {/* Form Fields */}
                            <div className="flex flex-col gap-[15px] mb-[40px]">
                                {/* First Name */}
                                <div className={`input-groupedit relative flex p-[0px_30px] rounded-full transition-all duration-150
                                     ${focusedField === "firstName"
                                        ? "bg-[#fff] border border-[#6E2C91]"
                                        : "bg-[#EFEFEF] border border-transparent"}`}>                                    <input
                                        type="text"
                                        placeholder=" "
                                        value={form.firstName}
                                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                                        onFocus={() => setFocusedField("firstName")}
                                        onBlur={() => setFocusedField(null)}
                                        className="w-full border-none bg-transparent shadow-none w-full focus:outline-none focus:shadow-none text-[#000000] font-[Medium] text-[16px]"
                                    />
                                    <label className="bg-transparent  text-[#878387] font-[Regular] text-[14px] " >First name</label>
                                </div>
                                {/* Last Name */}
                                <div className={`input-groupedit relative flex p-[0px_30px] rounded-full transition-all duration-150
                                     ${focusedField === "lastName"
                                        ? "bg-[#fff] border border-[#6E2C91]"
                                        : "bg-[#EFEFEF] border border-transparent"}`}>
                                    <input
                                        type="text"
                                        placeholder=" "
                                        value={form.lastName}
                                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                                        onFocus={() => setFocusedField("lastName")}
                                        onBlur={() => setFocusedField(null)}
                                        className="w-full border-none bg-transparent shadow-none w-full focus:outline-none focus:shadow-none text-[#000000] font-[Medium] text-[16px]"
                                    />
                                    <label className="bg-transparent  text-[#878387] font-[Regular] text-[14px] " >Last name</label>
                                </div>
                                {/* Mobile Number */}
                                <div
                                    className={`flex border gap-[12px] items-center rounded-full p-[2px_14px_2px_4px] shadow-none transition-all duration-150
                                 ${focusedField === "mobile"
                                            ? "bg-[#fff] border border-[#6E2C91]"
                                            : "bg-[#EFEFEF] border border-transparent"
                                        }`}>

                                    <Select value={countryCode} onValueChange={setCountryCode}>
                                        <SelectTrigger className="cursor-pointer flex items-center gap-[10px] bg-[#fff] border-none outline-none p-[16px_20px] rounded-full ">
                                            <img
                                                src={countryOptions.find((country) => country.value === countryCode)?.flag}
                                                alt="country flag"
                                                className="w-[24px] h-[24px] rounded-full"
                                            />
                                            <ArrowDownIcon className="w-[10px] h-[10px] flex-shrink-0" />
                                        </SelectTrigger>
                                        <SelectContent
                                            className="z-50 bg-[#fff] w-full border border-[#e5e5e5] rounded-[14px] p-[8px] font-[Regular] text-[14px] "
                                            style={{ width: "100% !important" }}>
                                            {countryOptions.map((country) => (
                                                <SelectItem
                                                    key={country.value}
                                                    value={country.value}
                                                    className="border-none outline-none cursor-pointer flex items-center gap-2 rounded-[14px] px-[12px] py-[8px] text-[14px]"
                                                >
                                                    <div className="flex items-center gap-2">
                                                        <img src={country.flag} alt={`${country.label} flag`} className="w-[20px] h-[13px]" />
                                                        <p className="text-[14px] font-[Regular]">{country.value}</p>
                                                    </div>
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <div className="relative flex items-center gap-[8px] justify-between w-full">
                                        <div className="input-groupedit relative flex-1 flex items-center">
                                            <input
                                                type="text"
                                                placeholder=" "
                                                value={form.mobile}
                                                onChange={(event) => handleInputChange("mobile", event.target.value)}
                                                onFocus={() => setFocusedField("mobile")}
                                                onBlur={() => setFocusedField(null)}
                                                className="w-full border-none bg-transparent shadow-none w-full focus:outline-none focus:shadow-none text-[#000000] font-[Medium] text-[16px]"
                                            />
                                            <label className="bg-transparent  text-[#878387] font-[Regular] text-[14px] " >Mobile number</label>
                                        </div>
                                        <div>
                                            {isMobileChanged ? (
                                                <Link to="#" onClick={() => setIsVerifyOtpModalOpen(true)}>
                                                    <button
                                                        type="button"
                                                        disabled={!form.mobile.trim()}
                                                        className="cursor-pointer rounded-full bg-[#00C299] text-white text-[12px] font-[SemiBold] px-[24px] py-[10px] flex items-center justify-center gap-[4px] disabled:opacity-0 disabled:cursor-not-allowed"
                                                    >
                                                        Verify
                                                    </button>
                                                </Link>
                                            ) : (
                                                <button
                                                    type="button"
                                                    className="cursor-pointer rounded-full bg-[#00C299] p-[10px] flex items-center justify-center gap-[4px] shadow-[0px_4px_15px_rgba(0,0,0,0.1)]"
                                                >
                                                    <VerifyTickIcon className="w-[14px] h-[14px]" stroke="#fff" />
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Email Address */}
                                <div className={`input-groupedit relative flex p-[0px_30px] rounded-full transition-all duration-150
                                     ${focusedField === "email"
                                        ? "bg-[#fff] border border-[#6E2C91]"
                                        : "bg-[#EFEFEF] border border-transparent"}`}>
                                    <input
                                        type="email"
                                        placeholder=" "
                                        value={form.email}
                                        onChange={(e) => handleInputChange("email", e.target.value)}
                                        onFocus={() => setFocusedField("email")}
                                        onBlur={() => setFocusedField(null)}
                                        className="w-full border-none bg-transparent shadow-none w-full focus:outline-none focus:shadow-none text-[#000000] font-[Medium] text-[16px]"
                                    />
                                    <label className="bg-transparent  text-[#878387] font-[Regular] text-[14px] " >Email address (optional)</label>
                                </div>
                            </div>

                            {/* Save Changes Button */}
                            <div className="flex justify-center mb-[40px]">
                                <button className="w-full py-[14px] bg-[#6E2C91] text-[#fff] rounded-[30px] text-[14px] font-[Bold] cursor-pointer transition-colors ">
                                    Save changes
                                </button>
                            </div>

                            {/* Back Link */}
                            <div className="flex justify-center">
                                <Link
                                    to="/looqer/myprofile"
                                    className="cursor-pointer flex items-center gap-[2px] text-[14px] font-[Bold] text-[#000] transition-colors"
                                >
                                    <ViewAllIcon className="rotate-180 w-[16px] h-[8px]" />
                                    <span>Back</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <VerifyOtpModal isOpen={isVerifyOtpModalOpen} onClose={() => setIsVerifyOtpModalOpen(false)} />
        </>
    );
}

