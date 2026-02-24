import { Link } from "react-router-dom";
import appStore from "../../assets/img/appstore.png";
import googlePlay from "../../assets/img/playstore.png";

const quickLinks = [
  [
    { label: "About us", to: "/user/about" },
    { label: "FAQ", to: "/user/faq" },
    { label: "Contact", to: "/user/contact" },
  ],
  [
    { label: "How it works", to: "/user/howitworks" },
    { label: "Trust-Safety-insurance", to: "/user/trust" },
    { label: "Help center", to: "/user/help" },
  ],
  [
    { label: "Register as a user", to: "/signup" },
    { label: "Register as a LooQer", to: "/register-process" },
    { label: "Register as a LooQer Company", to: "/register-process" },
  ],
  [
    { label: "Terms & conditions", to: "/user/terms" },
    { label: "Privacy policy", to: "/user/privacypolicy" },
    { label: "Legal", to: "/user/legal" },
  ],
];

const socialLinks = [
  { label: "Facebook", to: "https://www.facebook.com" },
  { label: "Twitter", to: "https://www.twitter.com" },
  { label: "LinkedIn", to: "https://www.linkedin.com" },
  { label: "Instagram", to: "https://www.instagram.com" },
  { label: "Newsletter", to: "/newsletter" },
];

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className=" border-t border-[rgba(0,0,0,0.1)] ">
      <footer
        className="bg-[#fff] w-full max-w-[1230px] mx-auto cursor-pointer"
        onClick={scrollToTop}
      >
        <div className="flex flex-col px-5 lg:px-[75px] max-sm:px-[20px] footer_sub ">
          <div className="flex-wrap flex gap-[24px] justify-between py-[80px] max-sm:flex-col max-sm:py-[30px] max-sm:gap-[18px]">
            {quickLinks.map((column, index) => (
              <div key={index} className="flex flex-col gap-[18px]">
                {column.map((link) => (
                  <Link key={link.label} to={link.to} className="text-[#000] text-[14px] font-[SemiBold]">
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
            <div className="flex flex-col gap-[8px]">
              <p className="text-[14px] font-[Regular] text-[#000]">Download on:</p>
              <div className="flex gap-[10px]">
                <a href="https://play.google.com" target="_blank" rel="noreferrer">
                  <img src={googlePlay} alt="Google Play" className="h-[42px]" />
                </a>
                <a href="https://www.apple.com/app-store/" target="_blank" rel="noreferrer">
                  <img src={appStore} alt="App Store" className="h-[42px]" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-[8px] border-t border-[rgba(0,0,0,0.1)] py-[40px] border-dashed max-sm:flex-col max-sm:justify-start max-sm:items-start">
            <p className="text-[14px] font-[Regular] text-[#000] text-left">Copyright © 2026 Mylooq.com. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-[16px]">
              <h4 className="font-[SemiBold] text-[#000] text-[14px]">Be social :</h4>
              {socialLinks.map((social) =>
                social.to.startsWith("http") ? (
                  <a
                    key={social.label}
                    href={social.to}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#000] text-[14px] font-[Regular]"
                  >
                    {social.label}
                  </a>
                ) : (
                  <Link key={social.label} to={social.to} className="text-[#000] text-[14px] font-[Regular]">
                    {social.label}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer