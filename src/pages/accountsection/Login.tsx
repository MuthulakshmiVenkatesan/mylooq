import { useState } from "react";
import { Link } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../components/Ui/Tabs";
import { Select, SelectTrigger, SelectContent, SelectItem } from "../../components/Ui/Select";
import { Button } from "../../components/Ui/Button";
import { TitleLg, Body, Input } from "../../components/customfile/parts";
import logoImg from "../../assets/img/logo.png";
import accountbg from '../../assets/img/accountbg.png'
import { ArrowDownIcon } from "../../components/customfile/icons";
const countryOptions = [
  { value: "+31", label: "NL", flag: "https://flagcdn.com/w20/nl.png" },
  { value: "+1", label: "US", flag: "https://flagcdn.com/w20/us.png" },
  { value: "+44", label: "GB", flag: "https://flagcdn.com/w20/gb.png" },
  { value: "+49", label: "DE", flag: "https://flagcdn.com/w20/de.png" },
  { value: "+33", label: "FR", flag: "https://flagcdn.com/w20/fr.png" },
];

export default function Login() {
  const [userType, setUserType] = useState("user");
  const [countryCode, setCountryCode] = useState("+31");
  const [focusedField, setFocusedField] = useState<string | null>(null);    
  const [form, setForm] = useState({
    mobile: "",
  });   
  const handleInputChange = (field: keyof typeof form, value: string | boolean) => {
    if (field === "mobile") {
      setFocusedField("mobile");
    }
    setForm((current) => ({ ...current, [field]: value as string }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ backgroundImage: `url(${accountbg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >

      <div className="fixed inset-0 z-50 flex items-center justify-center " >
        {/* Login Card */}
        <div className="relative z-10 w-full max-w-md max-sm:p-[10px]">
          <div className="bg-[#fff] rounded-[30px] relative w-[448px] p-[50px] flex flex-col max-sm:w-[100%] max-sm:rounded-[30px] max-sm:p-[20px]" >
            {/* Logo */}
            <div className="flex justify-center">
              <div className="flex items-center justify-center w-[40px] h-[40px] mb-[10px]">
                <img src={logoImg} alt="Logo" className="w-full h-full" />
              </div>
            </div>

            {/* Title */}
            <div className="text-center mb-[30px]">
              <TitleLg className="mb-[10px]">Login your account</TitleLg>
              <Body className="">
                Use your My.aaQ registered mobile number
              </Body>
            </div>

            {/* User Type Tabs (Segmented Control) */}
            <Tabs value={userType} onValueChange={setUserType} className="">
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

            {/* Mobile Number Input */}
            <div className="mb-[20px]">
              <div className={`flex gap-[10px] rounded-full p-[4px] items-center border ${focusedField === "mobile"
                ? "bg-[#fff] border-[#6E2C91] "
                : "border-transparent bg-[#EFEFEF] "
              }`}>
                {/* Country Code Select */}
                <Select value={countryCode} onValueChange={setCountryCode}>
                  <SelectTrigger className="border-none outline-none flex items-center justify-between bg-[#fff] rounded-full p-[14px_16px] shadow-none focus:outline-none focus:border-none focus:shadow-none cursor-pointer w-[84px]">
                    <div className="flex items-center gap-[6px]">
                      <img
                        src={countryOptions.find((country) => country.value === countryCode)?.flag}
                        alt="selected flag"
                        className="w-[25px] h-[25px] rounded-full"
                      />
                      <ArrowDownIcon />
                    </div>

                  </SelectTrigger>
                  <SelectContent 
                  className="cursor-pointer z-50 bg-[#fff] w-full border border-[#e5e5e5] rounded-[14px] p-[8px] font-[Regular] text-[14px] " 
                  style={{ width: "100% !important" }}>
                    {countryOptions.map((country) => (
                      <SelectItem
                        key={country.value}
                        value={country.value}
                        className="border-none outline-none cursor-pointer flex items-center gap-2 py-2 px-3"
                      >
                        <div className="flex items-center gap-2">
                          <img src={country.flag} alt={`${country.label} flag`} className="w-[20px] h-[15px]" />
                          <p className="text-[14px] font-[Regular]">{country.value}</p>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>


                <div className="input-group relative flex bg-transparent rounded-full  focus:border-[#6E2C91] focus:bg-[#fff] w-full">
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

              </div>
            </div>

            {/* Login Button */}
            <Link to="/looqer/home">
              <Button
                className="w-full bg-[#6E2C91] rounded-full p-[14px] text-[#fff] text-[14px] font-[Medium] border-none shadow-none cursor-pointer mb-[30px]"
              >
                Login account
              </Button>
            </Link>

            {/* Register Link */}
            <div className="text-center">
              <Body className="text-[#000000] text-[14px] font-[Regular]">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="text-[#878387] font-[Medium] no-underline"
                >
                  Register
                </Link>
              </Body>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

