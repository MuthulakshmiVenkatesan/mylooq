import { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { HomeIcon, ServicesIcon, NotificationIcon, LogoutIcon, HamburgerIcon, MyBookingIcon, WalletIcon } from "../customfile/icons";
import { Dialog, DialogContent, DialogOverlay } from "../Ui/Dialog";
import logoImg from "../../assets/img/logo.png";
import userImg from "../../assets/img/user.png";
import NotificationDrawer from "./NotificationDrawer";

const navItems = [
    { icon: <HomeIcon className="w-[22px] h-[22px]" />, path: "/user/home", label: "Home" },
    { icon: <ServicesIcon className="w-[22px] h-[22px]" />, path: "/user/services", label: "Services" },
    { icon: <MyBookingIcon className="w-[22px] h-[22px]" />, path: "/user/booking", label: "My Booking" },
    { icon: <WalletIcon className="w-[22px] h-[22px]" />, path: "/user/wallet", label: "Wallet" },
    // { icon: <NotificationIcon className="w-[22px] h-[22px]" />, path: "/home", label: "Notifications" },
];

function Sidebar() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const location = useLocation();
    const isCheckoutRoute = location.pathname === "/user/checkout";
    const [isNotificationDrawerOpen, setIsNotificationDrawerOpen] = useState(false);
    const SidebarContent = () => (
        <div className="flex flex-col items-center h-full bg-[#fff] w-[70px] p-[16px] max-sm:w-full justify-between sidebar">
            <Link to="/user/home">
                <div className="mb-[20px] max-sm:flex max-sm:justify-between max-sm:items-center max-sm:w-full sidebar_logo">
                    <img src={logoImg} alt="logo" className="w-[35px] h-[35px]" />
                </div>
            </Link>
            <aside className="flex flex-col items-center gap-[6px] w-[24px] h-[76vh] sidebar_aside">
                {navItems.map((item, index) => (
                    <NavLink
                        key={index}
                        to={item.path}
                        end
                        className={({ isActive }) =>
                            `flex h-[44px] w-[44px] items-center justify-center rounded-[10px] p-[6px] transition hover:bg-[#EFEFEF] focus:outline-none focus:border-none focus:shadow-none ${isActive && !isNotificationDrawerOpen ? "bg-[#EFEFEF] " : "bg-transparent "
                            }`
                        }
                        onClick={() => {
                            setIsDrawerOpen(false);
                            setIsNotificationDrawerOpen(false);
                        }}
                    >
                        {item.icon}
                    </NavLink>
                ))}
                <button
                    onClick={() => {
                        setIsNotificationDrawerOpen(true);
                        setIsDrawerOpen(false);
                    }}
                    className={`flex h-[44px] w-[44px] items-center justify-center rounded-[10px] p-[6px] transition cursor-pointer focus:outline-none focus:border-none focus:shadow-none ${
                        isNotificationDrawerOpen ? "bg-[#EFEFEF]" : "bg-transparent hover:bg-[#EFEFEF]"
                    }`}
                >
                    <NotificationIcon className="w-[22px] h-[22px]" />
                </button>
            </aside>
            <div className="cursor-pointer mb-[20px]">
                <LogoutIcon className="w-[20px] h-[20px]" />
            </div>
            <Link to="/user/profile" onClick={() => setIsDrawerOpen(false)}>
                <div className="cursor-pointer">
                    <img src={userImg} alt="user" className="w-[35px] h-[35px] laptop_user_img" />
                </div>
            </Link>
        </div>
    );

    return (
        <>
            {/* Mobile Hamburger Menu */}
            <div className={`lg:hidden fixed top-[-1px] left-[0px] bg-[#fff] p-[14px] z-[10] flex items-center justify-center border-b border-[rgba(0,0,0,0.1)]  ${isCheckoutRoute ? "border-none" : ""}`}>
                <Dialog open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
                    <button
                        type="button"
                        className="bg-[#fff] border-none relative top-[-3px]"
                        onClick={() => setIsDrawerOpen(true)}
                    >
                        <HamburgerIcon className="w-[24px] h-[24px]" />
                    </button>
                    <DialogOverlay className="fixed inset-0 bg-[rgba(0,0,0,0.5)] data-[state=open]:animate-in data-[state=closed]:animate-out" />
                    <DialogContent className="fixed left-0 top-0 h-full  bg-[#fff] border-r border-[rgba(0,0,0,0.1)] p-0 translate-x-0 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left z-[99]">
                        <SidebarContent />
                    </DialogContent>
                </Dialog>
            </div>

            {/* Desktop Sidebar */}
            <div className="hidden lg:flex flex-col items-center h-[100vh] bg-[#fff] border-r border-[rgba(0,0,0,0.1)] fixed max-sm:w-full z-[100]">
                <SidebarContent />
            </div>
            <NotificationDrawer isOpen={isNotificationDrawerOpen} onClose={() => setIsNotificationDrawerOpen(false)} />
        </>
    );
}

export default Sidebar