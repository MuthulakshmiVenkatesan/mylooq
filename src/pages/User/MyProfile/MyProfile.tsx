import { useState } from "react";
import { Link } from "react-router-dom";
import { StarIcon, LocationIcon, EmailIcon, PhoneIcon, EditIcon, PlusIcon, DeleteIcon } from "../../../components/customfile/icons";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../../components/Ui/Tabs";
import userImg from "../../../assets/img/user.png";
import EditProfileModal from "./components/EditProfileModal";
import SetLocation from "./components/SetLocation";
import AddCard from "./components/AddCard";
import cardimg from "../../../assets/img/card.png";
import DeleteProfileModal from "./components/DeleteProfileModal";

interface SavedLocation {
    address: string;
    building?: string;
    landmark?: string;
    nickname?: string;
}

interface SavedCard {
    id: string;
    holderName: string;
    cardNumber: string;
    expiry: string;
    cvv: string;
    cardType?: "visa" | "mastercard" | "other";
}

export default function MyProfile() {

    const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("manage-location");
    const [isSetLocationOpen, setIsSetLocationOpen] = useState(false);
    const [locationType, setLocationType] = useState<"home" | "work">("home");
    const [isDeleteProfileOpen, setIsDeleteProfileOpen] = useState(false);
    const [isAddCardOpen, setIsAddCardOpen] = useState(false);
    const [editingCardId, setEditingCardId] = useState<string | null>(null);
    const [savedCards, setSavedCards] = useState<SavedCard[]>([]);
    const [savedLocations, setSavedLocations] = useState<{
        home: SavedLocation | null;
        work: SavedLocation | null;
    }>({
        home: null,
        work: null,
    });

    const handleEditProfile = () => {
        setIsEditProfileOpen(true);
    };

    const handleCloseEditProfile = () => {
        setIsEditProfileOpen(false);
    };

    const handleSetLocation = (type: "home" | "work") => {
        setLocationType(type);
        setIsSetLocationOpen(true);
    };

    const handleCloseSetLocation = () => {
        setIsSetLocationOpen(false);
    };

    const handleSaveLocation = (address: string) => {
        setSavedLocations((prev) => ({
            ...prev,
            [locationType]: {
                address: address,
            },
        }));
        setIsSetLocationOpen(false);
    };

    const handleEditLocation = (type: "home" | "work") => {
        setLocationType(type);
        setIsSetLocationOpen(true);
    };

    const handleDeleteLocation = (type: "home" | "work") => {
        setSavedLocations((prev) => ({
            ...prev,
            [type]: null,
        }));
    };

    const handleOpenDeleteProfile = () => {
        setIsDeleteProfileOpen(true);
    };

    const handleCloseDeleteProfile = () => {
        setIsDeleteProfileOpen(false);
    };

    const getCardType = (cardNumber: string): "visa" | "mastercard" | "other" => {
        const firstDigit = cardNumber.charAt(0);
        if (firstDigit === "4") return "visa";
        if (firstDigit === "5" || firstDigit === "2") return "mastercard";
        return "other";
    };

    const maskCardNumber = (cardNumber: string): string => {
        const cleaned = cardNumber.replace(/\s/g, "");
        if (cleaned.length < 4) return cardNumber;
        const last4 = cleaned.slice(-4);
        return `XXXX XXXX XXXX ${last4}`;
    };

    const handleAddCard = () => {
        setEditingCardId(null);
        setIsAddCardOpen(true);
    };

    const handleCloseAddCard = () => {
        setIsAddCardOpen(false);
        setEditingCardId(null);
    };

    const handleSaveCard = (cardData: { holderName: string; cardNumber: string; expiry: string; cvv: string }) => {
        const cardType = getCardType(cardData.cardNumber);
        if (editingCardId) {
            setSavedCards((prev) =>
                prev.map((card) =>
                    card.id === editingCardId
                        ? { ...card, ...cardData, cardType }
                        : card
                )
            );
        } else {
            const newCard: SavedCard = {
                id: Date.now().toString(),
                ...cardData,
                cardType,
            };
            setSavedCards((prev) => [...prev, newCard]);
        }
        setIsAddCardOpen(false);
        setEditingCardId(null);
    };

    const getEditingCardData = () => {
        if (!editingCardId) return undefined;
        const card = savedCards.find((c) => c.id === editingCardId);
        if (!card) return undefined;
        return {
            holderName: card.holderName,
            cardNumber: card.cardNumber,
            expiry: card.expiry,
            cvv: card.cvv,
        };
    };

    const handleEditCard = (cardId: string) => {
        setEditingCardId(cardId);
        setIsAddCardOpen(true);
    };

    const handleDeleteCard = (cardId: string) => {
        setSavedCards((prev) => prev.filter((card) => card.id !== cardId));
    };
    return (
        <>
            <div className="bg-[#fff] mt-[70px]">
                <div className="py-[80px] common_p_80 max-sm:py-[0px_0px]">
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
                            <div className="flex items-center gap-[10px]">
                                <Link
                                    to="/user/editprofile"
                                    className="p-[12px_34px] bg-[#000] text-[#FFF] rounded-[30px] text-[14px] font-[Bold] transition-colors cursor-pointer inline-block"
                                >
                                    Edit profile
                                </Link>
                                <button
                                    className="p-[12px_30px] bg-[#FF0000] text-[#FFF] rounded-[30px] text-[14px] font-[Bold] transition-colors cursor-pointer inline-block"
                                    onClick={handleOpenDeleteProfile}
                                >
                                    Delete Profile
                                </button>
                            </div>
                        </div>

                        {/* Bottom Information Panel */}
                        <div className="w-fit mx-auto max-sm:w-full">
                            <div className="border border-[rgba(0,0,0,0.10)] rounded-[30px] py-[30px] flex justify-center max-sm:flex-col gap-[40px] max-sm:gap-[20px] profilestatus_div">
                                {/* Account Status */}
                                <div className="profilestatus_subdiv px-[30px] flex items-center text-center gap-[12px] max-sm:px-[20px]">
                                    <div className="flex items-center justify-center bg-[#F8F8F8] p-[16px] rounded-full">
                                        <LocationIcon className="w-[20px] h-[20px]" />
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

                    <div className="w-full border-t border-[rgba(0,0,0,0.10)] pt-[40px] mt-[40px] max-sm:mb-[40px]">
                        <div className="px-5 lg:px-[75px] max-w-[1230px] mx-auto w-full">
                            {/* Manage Location and Cards Section */}
                            <div className="w-full">
                                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                                    <TabsList className="flex gap-[6px] mb-[30px] max-sm:mb-[20px] bg-[#F8F8F8] m-[0px_70px] p-[4px] rounded-full max-sm:m-0 max-sm:p-0">
                                        <TabsTrigger
                                            value="manage-location"
                                            className={`w-full py-[18px] max-sm:px-[30px] max-sm:py-[14px] rounded-full text-[14px] font-[SemiBold] border-none transition-all cursor-pointer shadow-[0px_4px_15px_0px_rgba(0,0,0,0.10)] ${activeTab === "manage-location"
                                                ? "bg-[#000] text-[#fff]"
                                                : "bg-[#fff] text-[#000]"
                                                }`}
                                        >
                                            Manage location
                                        </TabsTrigger>
                                        <TabsTrigger
                                            value="manage-cards"
                                            className={`w-full py-[18px] max-sm:px-[30px] max-sm:py-[14px] rounded-full text-[14px] font-[SemiBold] border-none transition-all cursor-pointer shadow-[0px_4px_15px_0px_rgba(0,0,0,0.10)]  ${activeTab === "manage-cards"
                                                ? "bg-[#000] text-[#fff]"
                                                : "bg-[#fff] text-[#000]"
                                                }`}
                                        >
                                            Manage cards
                                        </TabsTrigger>
                                    </TabsList>

                                    <TabsContent value="manage-location" className="mt-0">
                                        <div className="flex gap-[20px] max-sm:flex-col">
                                            {/* Home Location Card */}
                                            {savedLocations.home ? (
                                                <div className="flex-1 border border-[rgba(0,0,0,0.10)] rounded-[30px] p-[30px] bg-[#fff] relative">
                                                    <div className="flex items-center justify-between gap-[4px] max-sm:gap-[10px]">
                                                        <div className="flex-1">
                                                            <h4 className="text-[12px] font-[Regular] text-[#878387] mb-[4px]">Home Address</h4>
                                                            <h3 className="text-[14px] font-[SemiBold] text-[#000]">{savedLocations.home.address}</h3>
                                                        </div>
                                                        <div className="flex flex-col gap-[22px] items-center">
                                                            <button
                                                                onClick={() => handleEditLocation("home")}
                                                                className="cursor-pointer border-none bg-transparent outline-none p-0"
                                                                aria-label="Edit home location"
                                                            >
                                                                <EditIcon className="w-[16px] h-[16px]" stroke="#878387" />
                                                            </button>
                                                            <button
                                                                onClick={() => handleDeleteLocation("home")}
                                                                className="cursor-pointer border-none bg-transparent outline-none p-0"
                                                                aria-label="Delete home location"
                                                            >
                                                                <DeleteIcon className="w-[16px] h-[16px]" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : (
                                                <button onClick={() => handleSetLocation("home")} className="flex-1 border border-[rgba(0,0,0,0.10)] rounded-[30px] p-[40px] bg-[#fff] flex items-center justify-center gap-[12px] cursor-pointer max-sm:p-[20px]">
                                                    <div className="flex items-center justify-center flex-shrink-0">
                                                        <PlusIcon className="w-[12px] h-[12px]" stroke="#000" />
                                                    </div>
                                                    <p className="text-[14px] font-[Regular] text-[#000]">Add your home location</p>
                                                </button>
                                            )}

                                            {/* Work Location Card */}
                                            {savedLocations.work ? (
                                                <div className="flex-1 border border-[rgba(0,0,0,0.10)] rounded-[30px] p-[30px] bg-[#fff] relative">
                                                    <div className="flex items-center justify-between gap-[4px] max-sm:gap-[10px]">
                                                        <div className="flex-1">
                                                            <h4 className="text-[12px] font-[Regular] text-[#878387] mb-[4px]">Office address</h4>
                                                            <h3 className="text-[14px] font-[SemiBold] text-[#000]">{savedLocations.work.address}</h3>
                                                        </div>
                                                        <div className="flex flex-col gap-[22px] items-center">
                                                            <button
                                                                onClick={() => handleEditLocation("work")}
                                                                className="cursor-pointer border-none bg-transparent outline-none p-0"
                                                                aria-label="Edit work location"
                                                            >
                                                                <EditIcon className="w-[16px] h-[16px]" stroke="#878387" />
                                                            </button>
                                                            <button
                                                                onClick={() => handleDeleteLocation("work")}
                                                                className="cursor-pointer border-none bg-transparent outline-none p-0"
                                                                aria-label="Delete work location"
                                                            >
                                                                <DeleteIcon className="w-[16px] h-[16px]" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : (
                                                <button onClick={() => handleSetLocation("work")} className="flex-1 border border-[rgba(0,0,0,0.10)] rounded-[30px] p-[40px] bg-[#fff] flex items-center justify-center gap-[12px] cursor-pointer max-sm:p-[20px]">
                                                    <div className="flex items-center justify-center flex-shrink-0">
                                                        <PlusIcon className="w-[12px] h-[12px]" stroke="#000" />
                                                    </div>
                                                    <p className="text-[14px] font-[Regular] text-[#000]">Add your work location</p>
                                                </button>
                                            )}
                                        </div>
                                    </TabsContent>

                                    <TabsContent value="manage-cards" className="mt-0">
                                        <div className="w-full">
                                            {savedCards.length > 0 ? (
                                                <>
                                                    {/* Cards Grid */}
                                                    <div className="grid grid-cols-2 gap-[20px] mb-[30px] max-sm:grid-cols-1">
                                                        {savedCards.map((card) => (
                                                            <div
                                                                key={card.id}
                                                                className="border border-[rgba(0,0,0,0.10)] rounded-[30px] p-[30px] bg-[#fff] relative"
                                                            >
                                                                <div className="flex items-center justify-between gap-[12px]">
                                                                    <div className="flex items-center justify-between gap-[12px] w-full">
                                                                        {/* Left: Card Logo */}
                                                                        <div className="flex-shrink-0 relative">
                                                                            <img src={cardimg} alt="Card" className="w-[38px] h-[25px] object-cover" />
                                                                        </div>

                                                                        {/* Center: Card Info */}
                                                                        <div className="flex-1 ">
                                                                            <h4 className="text-[16px] font-[SemiBold] text-[#000] leading-[16px] mb-[8px] truncate max-sm:w-[165px]">
                                                                                {maskCardNumber(card.cardNumber)}
                                                                            </h4>
                                                                            <div className="flex items-center gap-[10px]">
                                                                                <p className="text-[12px] font-[Regular] text-[#878387]">
                                                                                    {card.holderName}
                                                                                </p>
                                                                                <div className="bg-[#000] p-[2px] rounded-full"></div>
                                                                                <p className="text-[12px] font-[Regular] text-[#878387]">{card.expiry}</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    {/* Right: Edit/Delete Icons */}
                                                                    <div className="flex flex-col gap-[20px] items-center flex-shrink-0">
                                                                        <button
                                                                            onClick={() => handleEditCard(card.id)}
                                                                            className="cursor-pointer border-none bg-transparent outline-none p-0"
                                                                            aria-label="Edit card"
                                                                        >
                                                                            <EditIcon className="" stroke="#878387" />
                                                                        </button>
                                                                        <button
                                                                            onClick={() => handleDeleteCard(card.id)}
                                                                            className="cursor-pointer border-none bg-transparent outline-none p-0"
                                                                            aria-label="Delete card"
                                                                        >
                                                                            <DeleteIcon className="" />
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>

                                                    {/* Add New Card Button */}
                                                    <button
                                                        onClick={handleAddCard}
                                                        className="w-full rounded-[30px] p-[18px] bg-[#EFEFEF] flex items-center justify-center gap-[10px] cursor-pointer"
                                                    >
                                                        <PlusIcon className="w-[12px] h-[12px]" stroke="#000" />
                                                        <p className="text-[14px] font-[Regular] text-[#000]">Add new card</p>
                                                    </button>
                                                </>
                                            ) : (
                                                <button
                                                    onClick={handleAddCard}
                                                    className="w-full border border-[rgba(0,0,0,0.10)] rounded-[30px] p-[40px] bg-[#fff] flex items-center justify-center gap-[12px] cursor-pointer max-sm:p-[20px]"
                                                >
                                                    <div className="flex items-center justify-center flex-shrink-0">
                                                        <PlusIcon className="w-[12px] h-[12px]" stroke="#000" />
                                                    </div>
                                                    <p className="text-[14px] font-[Regular] text-[#000]">Add your card</p>
                                                </button>
                                            )}
                                        </div>
                                    </TabsContent>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <EditProfileModal isOpen={isEditProfileOpen} onClose={handleCloseEditProfile} />
            <SetLocation
                isOpen={isSetLocationOpen}
                onClose={handleCloseSetLocation}
                title={savedLocations[locationType]
                    ? (locationType === "home" ? "Edit your home location" : "Edit your work location")
                    : (locationType === "home" ? "Add your home location" : "Add your work location")
                }
                locationType={locationType}
                initialAddress={savedLocations[locationType]?.address}
                onSave={handleSaveLocation}
            />

            <AddCard
                isOpen={isAddCardOpen}
                onClose={handleCloseAddCard}
                onSave={handleSaveCard}
                initialCardData={getEditingCardData()}
            />
            <DeleteProfileModal
                isOpen={isDeleteProfileOpen}
                onClose={handleCloseDeleteProfile}
            />
        </>
    );
}
