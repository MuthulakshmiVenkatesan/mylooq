import { Link } from "react-router-dom";
import appStore from "../../assets/img/appstore.png";
import googlePlay from "../../assets/img/playstore.png";

function Footer() {
  return (
    <footer className="flex-wrap flex items-center justify-between bg-[#fff] border-t border-[rgba(0,0,0,0.1)] p-[24px_50px] max-sm:px-[14px] max-sm:gap-[14px] footer_whole">
      <p className="text-[14px] font-[Regular] text-[#000] m-[0]">Copyright © 2026 Mylooq.com. All rights reserved.</p>
      <div className="flex-wrap flex items-center">
        {[
          { label: "Terms & Conditions", to: "/looqer/terms" },
          { label: "Privacy policy", to: "/looqer/privacypolicy" },
          { label: "Contact", to: "/looqer/contact" },
        ].map((link, index, list) => (
          <Link
            key={link.label}
            to={link.to}
            className={`text-[14px] font-[Regular] text-[#000] m-[0] no-underline pr-[12px] ${
              index < list.length - 1 ? "border-r border-[#000] pr-[20px] mr-[10px]" : "pr-0 mr-0"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-[10px]">
        <h4 className="text-[14px] font-[Regular] text-[#000] m-[0] font-[400]">Download on:</h4>
        <div className="flex items-center gap-[10px]">
          <Link to="/app-store" >
            <img className="w-[120px] h-[40px]" src={appStore} alt="app-store" />
          </Link>
          <Link to="/google-play">
            <img className="w-[120px] h-[40px]" src={googlePlay} alt="google-play" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer