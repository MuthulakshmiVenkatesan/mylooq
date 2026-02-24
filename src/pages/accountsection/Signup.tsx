import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../components/Ui/Tabs";
import { Select, SelectTrigger, SelectContent, SelectItem } from "../../components/Ui/Select";
import { Button } from "../../components/Ui/Button";
import { Checkbox, CheckboxIndicator } from "../../components/Ui/Checkbox";
import { TitleLg, Body, Input } from "../../components/customfile/parts";
import logoImg from "../../assets/img/logo.png";
import accountbg from "../../assets/img/accountbg.png";
import { ArrowDownIcon, TickIcon, VerifyTickIcon } from "../../components/customfile/icons";

const countryOptions = [
    { value: "+31", label: "NL", flag: "https://flagcdn.com/w20/nl.png" },
    { value: "+1", label: "US", flag: "https://flagcdn.com/w20/us.png" },
    { value: "+44", label: "GB", flag: "https://flagcdn.com/w20/gb.png" },
    { value: "+49", label: "DE", flag: "https://flagcdn.com/w20/de.png" },
    { value: "+33", label: "FR", flag: "https://flagcdn.com/w20/fr.png" },
];

export default function Signup() {
    const [userType, setUserType] = useState("user");
    const [countryCode, setCountryCode] = useState("+31");
    const [isMobileVerified, setMobileVerified] = useState(false);
    const location = useLocation();
    const showVerifyTick = (location.state as { showVerifyTick?: boolean })?.showVerifyTick;
    const [focusedField, setFocusedField] = useState<string | null>(null);
    const navigate = useNavigate();
    useEffect(() => {
        if (showVerifyTick) {
            setMobileVerified(true);
            navigate(location.pathname, { replace: true });
        }
    }, [showVerifyTick, location.pathname, navigate]);
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        mobile: "",
        accept: false,
    });

    const handleInputChange = (field: keyof typeof form, value: string | boolean) => {
        if (field === "mobile") {
            setMobileVerified(false);
        }
        setForm((current) => ({ ...current, [field]: value }));
    };

    const handleVerifyClick = () => {
        if (!form.mobile.trim()) {
            return;
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden"
            style={{ backgroundImage: `url(${accountbg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >

            <div className="fixed inset-0 z-50 flex items-center justify-center max-sm:relative" >
                {/* Login Card */}
                <div className="relative z-10 w-full max-sm:p-[10px]">
                    <div className="bg-[#fff] rounded-[30px] relative w-[480px] p-[50px_0] max-sm:w-[100%] max-sm:rounded-[30px] max-sm:p-[20px_0px] mx-auto" >
                        {/* Logo */}
                        <div className="flex justify-center mb-6">
                            <div className="flex items-center justify-center w-[40px] h-[40px] mb-[4px]">
                                <img src={logoImg} alt="Logo" className="w-full h-full" />
                            </div>
                        </div>

                        {/* Title */}
                        <div className="text-center mb-[30px] max-sm:px-[14px]">
                            <TitleLg className="">Register Account</TitleLg>
                            <Body className="">
                                Sign up and start managing your account
                            </Body>
                        </div>
                        <div className="max-h-[50vh] overflow-y-auto px-[50px] max-sm:px-[14px] signup_height max-sm:max-h-[100%]">
                            <Tabs value={userType} onValueChange={setUserType} className="mb-6">
                                <TabsList className="grid w-full grid-cols-2 bg-[#F8F8F8] rounded-full p-[4px] gap-[4px] mb-[20px]">
                                    <TabsTrigger
                                        value="user"
                                        className="w-full p-[14px_12px] rounded-full text-[14px] font-[Semibold] border-none data-[state=inactive]:bg-[#FFFFFF] data-[state=inactive]:text-[#000000] data-[state=active]:bg-[#000000] data-[state=active]:text-[#FFFFFF] shadow-[0px_4px_15px_rgba(0,0,0,0.1)] transition-all data-[state=active]:shadow-none cursor-pointer"
                                    >
                                        User
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="looqer"
                                        className="w-full p-[14px_12px] rounded-full text-[14px] font-[Semibold] border-none data-[state=inactive]:bg-[#FFFFFF] data-[state=inactive]:text-[#000000] data-[state=active]:bg-[#000000] data-[state=active]:text-[#FFFFFF] shadow-[0px_4px_15px_rgba(0,0,0,0.1)] transition-all data-[state=active]:shadow-none cursor-pointer"
                                    >
                                        LooQer
                                    </TabsTrigger>
                                </TabsList>
                                <TabsContent value="user" className="mt-0" />
                                <TabsContent value="looqer" className="mt-0" />
                            </Tabs>
                            <div className="flex flex-col gap-[12px]">
                                <div className={`input-groups relative flex bg-[#F2F2F2] p-[0px_30px] rounded-full border transition-all duration-150 ${focusedField === "firstName"
                                        ? "bg-[#fff] border-[#6E2C91] "
                                        : "border-transparent"
                                    }`}>
                                    <Input
                                        type="text"
                                        placeholder=" "
                                        value={form.firstName}
                                        onChange={(event) => handleInputChange("firstName", event.target.value)}
                                        onFocus={() => setFocusedField("firstName")}
                                        onBlur={() => setFocusedField(null)}
                                        className="w-full border-none bg-transparent shadow-none w-full focus:outline-none focus:shadow-none text-[#000000] font-[Medium] text-[14px]"
                                    />
                                    <label className="bg-transparent text-[#878387] font-[Regular] text-[14px]"> First name</label>
                                </div>
                                <div className={`input-groups relative flex bg-[#F2F2F2] p-[0px_30px] rounded-full border transition-all duration-150 ${focusedField === "lastName"
                                        ? "bg-[#fff] border-[#6E2C91] "
                                        : "border-transparent"
                                    }`}>

                                    <Input
                                        type="text"
                                        placeholder=" "
                                        value={form.lastName}
                                        onChange={(event) => handleInputChange("lastName", event.target.value)}
                                        onFocus={() => setFocusedField("lastName")}
                                        onBlur={() => setFocusedField(null)}
                                        className="w-full border-none bg-transparent shadow-none w-full focus:outline-none focus:shadow-none text-[#000000] font-[Medium] text-[14px]"
                                    />
                                    <label
                                        className="bg-transparent text-[#878387] font-[Regular] text-[14px]"
                                    >
                                        Last name
                                    </label>
                                </div>

                                <div
                                    className={`flex border gap-[12px] items-center rounded-full p-[6px_14px_6px_8px] shadow-none transition-all duration-150 ${
                                        focusedField === "mobile"
                                            ? "bg-[#fff] border-[#6E2C91]"
                                            : "bg-[#f2f2f2] border-transparent"
                                    }`}
                                >
                                    <Select value={countryCode} onValueChange={setCountryCode}>
                                        <SelectTrigger className="cursor-pointer flex items-center gap-[10px] bg-[#fff] border-none outline-none px-[16px] py-[16px] rounded-full w-[84px]">
                                            <img
                                                src={countryOptions.find((country) => country.value === countryCode)?.flag}
                                                alt="country flag"
                                                className="w-[22px] h-[22px] rounded-full"
                                            />
                                            <ArrowDownIcon />
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
                                        <div className="input-group relative flex-1 flex items-center">
                                            <Input
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
                                            {isMobileVerified ? (
                                                <Link to="/verify" state={{ mobile: form.mobile }}>
                                                    <button
                                                        type="button"
                                                        className="cursor-pointer rounded-full bg-[#00C299] p-[10px] flex items-center justify-center gap-[4px] shadow-[0px_4px_15px_rgba(0,0,0,0.1)] disabled:opacity-0 disabled:cursor-not-allowed"
                                                    >
                                                        <VerifyTickIcon className="w-[14px] h-[14px]" />
                                                    </button>
                                                </Link>
                                            ) : (
                                                <Link to="/verify" state={{ mobile: form.mobile }}>
                                                    <button
                                                        type="button"
                                                        onClick={handleVerifyClick}
                                                        disabled={!form.mobile.trim()}
                                                        className="cursor-pointer rounded-full bg-[#00C299] text-white text-[12px] font-[SemiBold] px-[24px] py-[10px] flex items-center justify-center gap-[4px] disabled:opacity-0 disabled:cursor-not-allowed"
                                                    >
                                                        Verify
                                                    </button>
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-start gap-[10px] my-[30px]">
                                <Checkbox
                                    checked={form.accept}
                                    onCheckedChange={(checked) => handleInputChange("accept", Boolean(checked))}
                                    className="mt-[2px] h-[15px] w-[15px] rounded-[5px] border border-[#878387] bg-[#fff] focus:outline-none flex items-center justify-center cursor-pointer data-[state=checked]:bg-[#6E2C91] data-[state=checked]:border-transparent"
                                >
                                    <CheckboxIndicator className="flex items-center justify-center opacity-0 data-[state=checked]:opacity-100 transition">
                                        <TickIcon className="w-[8px] h-[8px]" />
                                    </CheckboxIndicator>
                                </Checkbox>
                                <Body className="text-[#000000] font-[Regular] flex items-center gap-[5px] flex-wrap">
                                    Accept the
                                    <Link to="" className="text-[#878387] font-[SemiBold] no-underline">
                                        Terms conditions
                                    </Link>
                                    and
                                    <Link to="" className="text-[#878387] font-[SemiBold] no-underline">
                                        Privacy policy
                                    </Link>
                                </Body>
                            </div>
                            <Link to="/register-process">
                                <Button
                                    className="w-full bg-[#6E2C91] rounded-full p-[14px] text-[#fff] text-[14px] font-[Medium] border-none shadow-none cursor-pointer mb-[30px]"
                                >
                                    Register
                                </Button>
                            </Link>
                            <div className="text-center">
                                <Body className="text-[#000000] text-[14px] font-[Regular] flex items-center gap-[5px] justify-center">
                                    Already have an account?
                                    <Link className="text-[#878387] font-[SemiBold] no-underline" to="/">
                                        Login
                                    </Link>
                                </Body>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

