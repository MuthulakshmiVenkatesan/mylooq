import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { ArrowDownIcon } from "../customfile/icons";
import cash from '../../assets/img/cash.png';

// Compact list used for the header chip (code + flag).
// Codes match `languageOptions` below so selection stays in sync.
const languages = [
    { value: "ar", label: "Ar", flag: "https://flagcdn.com/w20/sa.png" },   // Saudi Arabia
    { value: "bn", label: "BN", flag: "https://flagcdn.com/w20/bd.png" },  // Bangladesh
    { value: "zh", label: "ZH", flag: "https://flagcdn.com/w20/cn.png" },  // China
    { value: "cs", label: "CS", flag: "https://flagcdn.com/w20/cz.png" },    // Czech Republic
    { value: "nl", label: "NL", flag: "https://flagcdn.com/w20/nl.png" },    // Netherlands
    { value: "en", label: "EN", flag: "https://flagcdn.com/w20/gb.png" },  // United Kingdom
    { value: "fil", label: "TL", flag: "https://flagcdn.com/w20/ph.png" },// Philippines
    { value: "fr", label: "FR", flag: "https://flagcdn.com/w20/fr.png" },   // France
    { value: "de", label: "DE", flag: "https://flagcdn.com/w20/de.png" },   // Germany
    { value: "el", label: "EL", flag: "https://flagcdn.com/w20/gr.png" },    // Greece
    { value: "hi", label: "HT", flag: "https://flagcdn.com/w20/in.png" },    // India
    { value: "ig", label: "HI", flag: "https://flagcdn.com/w20/ng.png" },     // Nigeria
    { value: "it", label: "IG", flag: "https://flagcdn.com/w20/it.png" },  // Italy
    { value: "ko", label: "IT", flag: "https://flagcdn.com/w20/kr.png" },   // South Korea
    { value: "pl", label: "KO", flag: "https://flagcdn.com/w20/pl.png" },   // Poland
    { value: "pt", label: "PL", flag: "https://flagcdn.com/w20/pt.png" },// Portugal
    { value: "ru", label: "RU", flag: "https://flagcdn.com/w20/ru.png" },  // Russia
    { value: "es", label: "ES", flag: "https://flagcdn.com/w20/es.png" },  // Spain
    { value: "sw", label: "SW", flag: "https://flagcdn.com/w20/tz.png" },  // Tanzania
    { value: "th", label: "TH", flag: "https://flagcdn.com/w20/th.png" },     // Thailand
    { value: "tr", label: "TR", flag: "https://flagcdn.com/w20/tr.png" },  // Türkiye
    { value: "vi", label: "VI", flag: "https://flagcdn.com/w20/vn.png" },// Vietnam
    { value: "yo", label: "YO", flag: "https://flagcdn.com/w20/ng.png" },   // Nigeria
    { value: "zu", label: "ZU", flag: "https://flagcdn.com/w20/za.png" },     // South Africa
];

const languageOptions = [
    { code: "ar", label: "Arabic", nativeLabel: "عربی" },
    { code: "bn", label: "Bengali", nativeLabel: "বাঙালি" },
    { code: "zh", label: "Chinese", nativeLabel: "中文" },
    { code: "cs", label: "Czech" },
    { code: "nl", label: "Dutch", nativeLabel: "Nederlands" },
    { code: "en", label: "English" },
    { code: "fil", label: "Filipino" },
    { code: "fr", label: "French", nativeLabel: "Français" },
    { code: "de", label: "German" },
    { code: "el", label: "Greek", nativeLabel: "Ελληνικά" },
    { code: "hi", label: "Hindi", nativeLabel: "हिंदी" },
    { code: "ig", label: "Igbo" },
    { code: "it", label: "Italian", nativeLabel: "Italiano" },
    { code: "ko", label: "Korean", nativeLabel: "한국어" },
    { code: "pl", label: "Polish", nativeLabel: "Polskie" },
    { code: "pt", label: "Portuguese", nativeLabel: "Português" },
    { code: "ru", label: "Russian", nativeLabel: "Русский" },
    { code: "es", label: "Spanish", nativeLabel: "Español" },
    { code: "sw", label: "Swahili", nativeLabel: "Kiswahili" },
    { code: "th", label: "Thai", nativeLabel: "ไทย" },
    { code: "tr", label: "Turkish", nativeLabel: "Türk" },
    { code: "vi", label: "Vietnamese", nativeLabel: "Tiếng Việt" },
    { code: "yo", label: "Yoruba", nativeLabel: "Yorùbá" },
    { code: "zu", label: "Zulu" },
];

const currencyOptions = [
    { code: "AUD", label: "AUD", symbol: "A$" },
    { code: "BBD", label: "BBD", symbol: "$" },
    { code: "BGN", label: "BGN", symbol: "лв." },
    { code: "BRL", label: "BRL", symbol: "R$" },
    { code: "BZD", label: "BZD", symbol: "$" },
    { code: "CAD", label: "CAD", symbol: "$" },
    { code: "CHF", label: "CHF", symbol: "CHF" },
    { code: "CNY", label: "CNY", symbol: "¥" },
    { code: "DOP", label: "DOP", symbol: "RD$" },
    { code: "EUR", label: "EUR", symbol: "€" },
    { code: "GBP", label: "GBP", symbol: "£" },
    { code: "GHS", label: "GHS", symbol: "¢" },
    { code: "HTG", label: "HTG", symbol: "G" },
    { code: "INR", label: "INR", symbol: "₹" },
    { code: "JMD", label: "JMD", symbol: "$" },
    { code: "KES", label: "KES", symbol: "KSH" },
    { code: "LRD", label: "LRD", symbol: "L$" },
    { code: "MAD", label: "MAD", symbol: "م.د." },
    { code: "MXN", label: "MXN", symbol: "$" },
    { code: "NGN", label: "NGN", symbol: "₦" },
    { code: "PKR", label: "PKR", symbol: "Rs" },
    { code: "SEK", label: "SEK", symbol: "KR" },
    { code: "TTD", label: "TTD", symbol: "$" },
    { code: "USD", label: "USD", symbol: "$" },
    { code: "XCD", label: "XCD", symbol: "$" },
    { code: "ZAR", label: "ZAR", symbol: "R" },
];

const pathTitles: Record<string, string> = {
    "/user/home": "Home",
    "/user/about": "About Us",
    "/user/legal": "Legal",
    "/user/howitworks": "How it works",
    "/user/terms": "Terms & Conditions",
    "/user/help": "Help Center",
    "/user/privacypolicy": "Privacy Policy",
    "/user/trust": "Trust, Safety & Insurance",
    "/user/faq": "FAQ",
    "/user/contact": "Contact Us",
    "/user/search": "Search",
    "/user/providerdetail": "Provider",
    "/user/cart": "Cart",
    "/user/services": "Services",
    "/looqer/home": "Home",
};

const Header = () => {
    const location = useLocation();
    const currentTitle = pathTitles[location.pathname] ?? "Home";
    const [language, setLanguage] = useState("en");
    const [currency, setCurrency] = useState("USD");
    const [isScrolled, setIsScrolled] = useState(false);
    const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
    const [isCurrencyDropdownOpen, setIsCurrencyDropdownOpen] = useState(false);
    const languageDropdownRef = useRef<HTMLDivElement>(null);
    const currencyDropdownRef = useRef<HTMLDivElement>(null);
    const isLanding = location.pathname === "/user/home";

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
                    setIsScrolled(scrollTop > 10);
                    ticking = false;
                });
                ticking = true;
            }
        };

        // Check initial scroll position
        const initialScroll = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
        setIsScrolled(initialScroll > 10);

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target as Node)) {
                setIsLanguageDropdownOpen(false);
            }
            if (currencyDropdownRef.current && !currencyDropdownRef.current.contains(event.target as Node)) {
                setIsCurrencyDropdownOpen(false);
            }
        };

        if (isLanguageDropdownOpen || isCurrencyDropdownOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isLanguageDropdownOpen, isCurrencyDropdownOpen]);

    return (
        <header
            className={`fixed w-auto z-9 right-[0] p-[20px_40px] transition duration-200 left-[71px] max-sm:left-[22px] max-sm:p-[12px_20px] header_div max-sm:bg-[#fff] ${isLanding
                    ? "bg-transparent max-sm:border-b max-sm:border-[rgba(0,0,0,0.1)]"
                    : "bg-[#fff] border-b border-[rgba(0,0,0,0.1)] "
                }`}
            style={isScrolled ? {
                backgroundColor: '#fff',
                borderBottom: '1px solid rgba(0,0,0,0.1)'
            } : {}}
        >
            <div className="w-full" />
            <div className={`flex gap-4 max-sm:relative max-sm:left-[14px] max-sm:flex-wrap  ${isLanding ? "justify-end max-sm:justify-end max-sm:items-end" : "justify-between"}`}>
                <div className={`${isLanding ? "opacity-0" : ""}`}>
                    <h4 className="text-[18px] font-[Bold] text-[#000] max-sm:truncate max-sm:w-[70px] header_txt">{currentTitle}</h4>
                </div>
                <div className="flex items-center gap-[12px]">
                    {/* Language dropdown */}
                    <div ref={languageDropdownRef} className="relative">
                        <button
                            type="button"
                            onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                            className="flex items-center gap-[6px] cursor-pointer border-r border-[rgba(0,0,0,0.1)] pr-[18px]"
                        >
                            <div className="flex items-center gap-[8px]">
                                <img
                                    src={languages.find((option) => option.value === language)?.flag}
                                    alt="language flag"
                                    className="h-[25px] w-[25px] rounded-full"
                                />
                                <p className="text-[12px] font-[SemiBold] text-[#000]">
                                    {languages.find((option) => option.value === language)?.label}
                                </p>
                            </div>
                            <ArrowDownIcon className={`w-[10px] h-[10px] transition-transform ${isLanguageDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Language Dropdown */}
                        {isLanguageDropdownOpen && (
                            <div className="absolute top-[40px] left-[-600px] w-[800px] bg-white rounded-[12px] shadow-[0px_4px_30px_rgba(0,0,0,0.15)] border border-[rgba(0,0,0,0.1)] z-[999] overflow-hidden max-sm:left-[-122px] max-sm:w-[220px] max-sm:top-[33px] header_languagedrop">
                                {/* Header */}
                                <div className="px-[24px] py-[16px] border-b border-[rgba(0,0,0,0.08)]">
                                    <h2 className="text-[16px] font-[Bold] text-[#000]">Select Language</h2>
                                </div>

                                {/* Language Grid */}
                                <div className="px-[24px] py-[20px] max-h-[400px] overflow-y-auto">
                                    <div className="grid grid-cols-4 gap-x-[32px] gap-y-[12px] max-sm:grid-cols-1 dropdown_grid">
                                        {languageOptions.map((lang) => {
                                            const isSelected = lang.code === language;
                                            return (
                                                <button
                                                    key={lang.code}
                                                    onClick={() => {
                                                        setLanguage(lang.code);
                                                        setIsLanguageDropdownOpen(false);
                                                    }}
                                                    className={`cursor-pointer w-full flex items-center gap-[4px] text-left rounded-[6px] px-[10px] py-[6px] transition-colors ${isSelected
                                                            ? "bg-[#F2F2F2]"
                                                            : "bg-transparent hover:bg-[rgba(0,0,0,0.03)]"
                                                        }`}
                                                >
                                                    <p className="text-[14px] font-[SemiBold] text-[#000]">
                                                        {lang.label}

                                                    </p>
                                                    {lang.nativeLabel && (
                                                        <p className="text-[12px] font-[Regular] text-[#878387]">
                                                            ({lang.nativeLabel})
                                                        </p>
                                                    )}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Currency dropdown */}
                    <div ref={currencyDropdownRef} className="relative">
                        <button
                            type="button"
                            onClick={() => setIsCurrencyDropdownOpen(!isCurrencyDropdownOpen)}
                            className="flex items-center gap-[6px] cursor-pointer"
                        >
                            <div className="flex items-center gap-[8px]">
                                <img
                                    src={cash}
                                    alt="currency icon"
                                    className="h-[25px] w-[25px]"
                                />
                                <p className="text-[12px] font-[SemiBold] text-[#000]">
                                    {currencyOptions.find((option) => option.code === currency)?.label || "USD"}
                                </p>
                            </div>
                            <ArrowDownIcon className={`w-[10px] h-[10px] transition-transform ${isCurrencyDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Currency Dropdown */}
                        {isCurrencyDropdownOpen && (
                            <div className="absolute top-[33px] left-[-700px] w-[800px] bg-white rounded-[12px] shadow-[0px_4px_30px_rgba(0,0,0,0.15)] border border-[rgba(0,0,0,0.1)] z-[999] overflow-hidden max-sm:left-[-152px] max-sm:w-[220px] header_currencydrop">
                                {/* Header */}
                                <div className="px-[24px] py-[16px] border-b border-[rgba(0,0,0,0.08)]">
                                    <h2 className="text-[16px] font-[Bold] text-[#000]">Select Currency</h2>
                                </div>

                                {/* Currency Grid */}
                                <div className="px-[24px] py-[20px] max-h-[400px] overflow-y-auto">
                                    <div className="grid grid-cols-4 gap-x-[32px] gap-y-[12px] max-sm:grid-cols-1 dropdown_grid">
                                        {currencyOptions.map((curr) => {
                                            const isSelected = curr.code === currency;
                                            return (
                                                <button
                                                    key={curr.code}
                                                    onClick={() => {
                                                        setCurrency(curr.code);
                                                        setIsCurrencyDropdownOpen(false);
                                                    }}
                                                    className={`cursor-pointer w-full flex items-center gap-[4px] text-left rounded-[6px] px-[10px] py-[6px] transition-colors ${isSelected
                                                            ? "bg-[#F2F2F2]"
                                                            : "bg-transparent hover:bg-[rgba(0,0,0,0.03)]"
                                                        }`}
                                                >
                                                    <p className="text-[14px] font-[SemiBold] text-[#000]">
                                                        {curr.label}
                                                    </p>
                                                    <p className="text-[12px] font-[Regular] text-[#878387]">
                                                        ({curr.symbol})
                                                    </p>
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
