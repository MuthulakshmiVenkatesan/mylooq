import { useState } from "react";
import { Link } from "react-router-dom";
import { StarIcon, RefreshIcon, EmailIcon, PhoneIcon, EditIcon } from "../../../components/customfile/icons";
import userImg from "../../../assets/img/user.png";
import EditProfileModal from "./components/EditProfileModal";


export default function MyProfile() {

    const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
    const handleEditProfile = () => {
        setIsEditProfileOpen(true);
    };

    const handleCloseEditProfile = () => {
        setIsEditProfileOpen(false);
    };
    return (
        <>
            <div className="min-h-[100vh] max-sm:min-h-auto myprofile_height ">
                <div className="bg-[#fff] pb-[80px] pt-[80px] max-sm:py-[30px]">
                    <div className="px-5 lg:px-[75px] max-w-[1230px] mx-auto w-full">
                        {/* Top Profile Section */}
                        <div className="flex flex-col items-center mb-[40px]">
                            {/* Profile Picture with Edit Icon */}
                            <div className="relative mb-[10px]">
                                <div className="w-[80px] h-[80px] rounded-full bg-[#F5F5F5] flex items-center justify-center overflow-hidden">
                                    <img src={userImg} alt="Profile" className="w-full h-full object-cover" />
                                </div>
                                <button onClick={handleEditProfile} className="absolute top-0 right-[-10px] w-[30px] h-[30px] rounded-full bg-[#E88FA0] flex items-center justify-center cursor-pointer transition-colors">
                                    <EditIcon stroke="#fff" className="w-[14px] h-[14px]" />
                                </button>
                            </div>

                            <div className="flex flex-col items-center gap-[2px] mb-[28px]">
                                {/* Name */}
                                <h2 className="text-[28px] font-[Bold] text-[#000] max-sm:text-[22px]">Diane william</h2>
                                {/* Rating */}
                                <div className="flex items-center gap-[8px]">
                                    <div className="flex items-center ">
                                        {[...Array(5)].map((_, i) => (
                                            <StarIcon key={i} className="w-[12px] h-[12px]" fill="#878387" />
                                        ))}
                                    </div>
                                    <p className="text-[12px] font-[Regular] text-[#000]">0.0/5</p>
                                </div>
                            </div>

                            {/* Edit Profile Button */}
                            <Link
                                to="/looqer/editprofile"
                                className="p-[12px_40px] bg-[#000] text-[#FFF] rounded-[30px] text-[14px] font-[Bold] transition-colors cursor-pointer inline-block"
                            >
                                Edit profile
                            </Link>
                        </div>

                        {/* Bottom Information Panel */}
                        <div className="w-fit mx-auto max-sm:w-full">
                            <div className="border border-[rgba(0,0,0,0.10)] rounded-[30px] py-[30px] flex justify-center max-sm:flex-col gap-[40px] max-sm:gap-[20px] profilestatus_div">
                                {/* Account Status */}
                                <div className="profilestatus_subdiv px-[30px] flex items-center text-center gap-[12px] max-sm:px-[20px]">
                                    <div className="flex items-center justify-center bg-[#E88FA0] p-[16px] rounded-full">
                                        <RefreshIcon className="w-[20px] h-[20px]" />
                                    </div>
                                    <div className="text-left flex flex-col items-start gap-[2px]">
                                        <p className="text-[12px] font-[Regular] text-[#878387]">Account status</p>
                                        <h4 className="text-[14px] font-[SemiBold] text-[#000]">Admin Verifying</h4>
                                    </div>
                                </div>

                                {/* Email Address */}
                                <div className="profilestatus_subdiv px-[50px] flex items-center text-center gap-[12px] border-l border-r border-[rgba(0,0,0,0.1)] max-sm:border-l-0 max-sm:border-r-0 max-sm:border-t max-sm:border-b max-sm:pt-[24px] max-sm:pb-[24px] max-sm:px-[20px]">
                                    <div className="flex items-center justify-center bg-[#F8F8F8] p-[16px] rounded-full">
                                        <EmailIcon className="w-[20px] h-[20px]" />
                                    </div>
                                    <div className="text-left flex flex-col items-start gap-[2px]">
                                        <p className="text-[12px] font-[Regular] text-[#878387]">Email address</p>
                                        <h4 className="text-[14px] font-[SemiBold] text-[#000]  truncate profileemail_text">dianewilliam@example.com</h4>
                                    </div>
                                </div>

                                {/* Phone Number */}
                                <div className="profilestatus_subdiv px-[30px] flex items-center text-center gap-[12px] max-sm:px-[20px] !border-none">
                                    <div className="flex items-center justify-center bg-[#F8F8F8] p-[16px] rounded-full">
                                        <PhoneIcon className="w-[20px] h-[20px]" />
                                    </div>
                                    <div className="text-left flex flex-col items-start gap-[2px]">
                                        <p className="text-[12px] font-[Regular] text-[#878387]">Phone number</p>
                                        <h4 className="text-[14px] font-[SemiBold] text-[#000]">+(000) 1234 5678</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <EditProfileModal isOpen={isEditProfileOpen} onClose={handleCloseEditProfile} />
        </>
    );
}

