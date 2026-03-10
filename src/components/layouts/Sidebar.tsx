import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { HomeIcon, ServicesIcon, AvailabilityIcon, DocumentIcon, LocationIcon, NotificationIcon, LogoutIcon, HamburgerIcon, BookingIcon, WalletIcon } from "../customfile/icons";
import { Dialog, DialogContent, DialogOverlay } from "../Ui/Dialog";
import NotificationDrawer from "./NotificationDrawer";
import logoImg from "../../assets/img/logo.png";
import userImg from "../../assets/img/user.png";

const navItems = [
    { icon: <HomeIcon className="w-[22px] h-[22px]" />, path: "/looqer/home", label: "Home" },
    { icon: <ServicesIcon className="w-[22px] h-[22px]" />, path: "/looqer/services", label: "Services" },
    { icon: <AvailabilityIcon className="w-[22px] h-[22px]" />, path: "/looqer/availability", label: "Availability" },
    { icon: <DocumentIcon className="w-[22px] h-[22px]" />, path: "/looqer/document", label: "Documents" },
    { icon: <BookingIcon className="w-[22px] h-[22px]" />, path: "/looqer/booking", label: "Bookings" },
    { icon: <WalletIcon className="w-[22px] h-[22px]" />, path: "/looqer/wallet", label: "Wallet" },
    { icon: <LocationIcon className="w-[22px] h-[22px]" />, path: "/looqer/location", label: "Location" },
];

function Sidebar() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isNotificationDrawerOpen, setIsNotificationDrawerOpen] = useState(false);
    const [isHeaderToggleVisible, setIsHeaderToggleVisible] = useState(false);

    useEffect(() => {
        const checkHeaderToggleVisibility = () => {
            // The Header toggle has classes: max-sm:flex hidden
            // On mobile (width < 640px), max-sm:flex makes it visible (flex display)
            // On desktop (width >= 640px), hidden makes it not visible
            // So we check if window width is < 640px to determine visibility
            const isVisible = window.innerWidth < 640; // Tailwind sm breakpoint
            setIsHeaderToggleVisible(isVisible);
        };

        checkHeaderToggleVisibility();
        window.addEventListener('resize', checkHeaderToggleVisibility);

        return () => {
            window.removeEventListener('resize', checkHeaderToggleVisibility);
        };
    }, []);

    const SidebarContent = () => (
        <div className="flex flex-col items-center h-full bg-[#fff] w-[70px] p-[16px] max-sm:w-full justify-start sidebar">
            <div className="flex flex-col h-full items-center">
                <div className="mb-[20px] max-sm:flex max-sm:justify-between max-sm:items-center max-sm:w-full sidebar_logos">
                    <img src={logoImg} alt="logo" className="w-[35px] h-[35px]" />
                    {/* <div className="max-sm:block hidden cursor-pointer" onClick={() => setIsDrawerOpen(false)}>
                    <CloseIcon className="w-[20px] h-[20px] " />
                </div> */}
                </div>
                <aside className="flex flex-col items-center gap-[6px] h-[70vh] sidebar_aside overflow-y-auto overflow-x-hidden">
                    {navItems.map((item, index) => (
                        <NavLink
                            key={index}
                            to={item.path}
                            end
                            className={({ isActive }) =>
                                `flex h-[44px] w-[44px] items-center justify-center rounded-[10px] p-[6px] transition focus:outline-none focus:border-none focus:shadow-none ${isActive && !isNotificationDrawerOpen ? "bg-[#EFEFEF] " : "bg-transparent "
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
            </div>
            <div className="cursor-pointer mb-[20px]">
                <LogoutIcon className="w-[20px] h-[20px]" />
            </div>
            <Link to="/looqer/myprofile" onClick={() => setIsDrawerOpen(false)}>
                <div className="cursor-pointer">
                    <img src={userImg} alt="user" className="w-[35px] h-[35px] laptop_user_img" />
                </div>
            </Link>
        </div>
    );

    return (
        <>
            {/* Mobile Hamburger Menu */}
            <div className={`lg:hidden fixed top-[-1px] left-[0px] bg-[#fff] p-[14px] z-[10] flex items-center justify-center header_hamburger ${isHeaderToggleVisible ? 'max-sm:border-none' : 'border-b border-[rgba(0,0,0,0.1)]'}`}>
                <Dialog open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
                    <button
                        type="button"
                        className="bg-[#fff] border-none"
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

            {/* Notification Drawer */}
            <NotificationDrawer isOpen={isNotificationDrawerOpen} onClose={() => setIsNotificationDrawerOpen(false)} />
        </>
    );
}

export default Sidebar