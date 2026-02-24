import { useState, useEffect } from "react";
import { TickIcon, CloseIcon } from "../../../../components/customfile/icons";
import { Input } from "../../../../components/customfile/parts";
import { Checkbox, CheckboxIndicator } from "../../../../components/Ui/Checkbox";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import pin from '../../../../assets/img/pin.svg'

const center = { lat: 10.4447, lng: 77.9865 };
const mapOptions = { mapTypeControl: false, streetViewControl: false };

interface SetLocationProps {
    onClose?: () => void;
    title?: string;
    showNickname?: boolean;
    initialAddress?: string;
    onSave?: (address: string) => void;
    isOpen?: boolean;
    locationType?: "home" | "work";
}

function SetLocation({ isOpen = false, onClose, title, showNickname = true, initialAddress, onSave, locationType = "home" }: SetLocationProps) {

    const description =
        "Vestibulum sit amet finibus justo. Mauris porttitor mattis odio vitae accumsan. Nullam rhoncus dolor at porta dictum.";
    const [locationConfirmed, setLocationConfirmed] = useState(true);
    const [workNote, setWorkNote] = useState(initialAddress || description);

    useEffect(() => {
        if (initialAddress) {
            setWorkNote(initialAddress);
        }
    }, [initialAddress]);

    const handleClose = () => {
        onClose?.();
    };

    const [form, setForm] = useState({
        building: "",
        landmark: "",
        nickname: "",
    });
    const [focusedField, setFocusedField] = useState<string | null>(null);

    const handleInputChange = (field: keyof typeof form, value: string | boolean) => {
        setForm((current) => ({ ...current, [field]: value }));
    };

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY ?? "",
        libraries: ["places"],
    });

    if (!isOpen) return null;

    return (
        <div className="fixed top-[0] left-[0] right-[0] bottom-[0] z-50 flex items-center justify-center max-sm:px-[10px] ">
            <div
                className="absolute top-[0] left-[0] right-[0] bottom-[0] bg-[rgba(0,0,0,0.5)]"
                onClick={onClose}
            />

            <div
                className="relative rounded-[30px] bg-[#fff] w-[850px] py-[50px] max-sm:py-[20px]  "
                onClick={(event) => event.stopPropagation()}
            >
                <button
                    className="z-[9] absolute top-[30px] right-[30px] cursor-pointer border-none bg-transparent outline-none"
                    aria-label="Close"
                    onClick={handleClose}
                >
                    <CloseIcon />
                </button>
                <div className="flex items-center justify-center mb-[30px] relative px-[50px] max-sm:mb-[20px]">
                    <h4 className="text-[18px] font-[Bold] text-[#000] m-[0] text-center">
                        {title}
                    </h4>

                </div>
                <div className="px-[50px] overflow-y-auto max-sm:px-[14px] max-h-[60vh] max-sm:!max-h-[550px]">
                    <div className="grid grid-cols-2 gap-[26px] max-sm:grid-cols-1">
                        <div className="relative flex w-full overflow-hidden rounded-[30px] max-sm:h-[300px]">
                            {loadError ? (
                                <div className="flex w-full items-center justify-center text-[12px] font-[Regular] text-[#878387]">
                                    Failed to load Google Maps
                                </div>
                            ) : !isLoaded ? (
                                <div className="flex w-full items-center justify-center text-[12px] font-[Regular] text-[#878387]">
                                    Loading map...
                                </div>
                            ) : (
                                <GoogleMap
                                    mapContainerStyle={{ width: "100%", height: "100%" }}
                                    center={center}
                                    zoom={15}
                                    options={mapOptions}
                                >
                                    <Marker
                                        position={center}
                                        icon={
                                            isLoaded
                                                ? {
                                                    url: pin,
                                                    scaledSize: new window.google.maps.Size(32, 32),
                                                    anchor: new window.google.maps.Point(16, 32),
                                                }
                                                : undefined
                                        }
                                    />
                                </GoogleMap>
                            )}
                            <div className="pointer-events-none absolute inset-x-0 bottom-4 z-10 flex items-center justify-center rounded-full bg-white/90 px-3 py-1 text-[11px] font-[Medium] text-[#111] shadow-[0_6px_16px_rgba(0,0,0,0.15)]">
                                Google Maps
                            </div>
                        </div>
                        <div className="flex flex-col gap-[10px]">
                            <div className="rounded-[30px] bg-[#EFEFEF] p-[20px]">
                                <div className="flex items-start gap-[10px] w-full">
                                    <div>
                                        <Checkbox
                                            checked={locationConfirmed}
                                            onCheckedChange={(checked) => setLocationConfirmed(Boolean(checked))}
                                            className="flex w-[15px] h-[15px] items-center justify-center rounded-[5px] border border-transparent bg-[#000] cursor-pointer"
                                        >
                                            <CheckboxIndicator className="flex items-center justify-center">
                                                <TickIcon className="w-[10px] h-[10px]" stroke="#fff" />
                                            </CheckboxIndicator>
                                        </Checkbox>
                                    </div>
                                    <div className="flex flex-col gap-1 w-full">
                                        <label className="bg-transparent text-[12px] font-[Regular] text-[#878387]">
                                            {locationType === "home" ? "Your home location" : "Your work location"}
                                        </label>
                                        <textarea
                                            rows={3}
                                            placeholder=" "
                                            value={workNote}
                                            onChange={(event) => setWorkNote(event.target.value)}
                                            className="w-full border-none bg-transparent shadow-none w-full focus:outline-none focus:shadow-none text-[#000000] font-[SemiBold] text-[14px] resize-none"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div
                                className={`input-group relative flex bg-[#F2F2F2] rounded-full border p-[0_24px] transition-all duration-150 ${
                                    focusedField === "building"
                                        ? "bg-[#fff] border-[#6E2C91] "
                                        : "border-transparent"
                                }`}
                            >
                                <Input
                                    type="text"
                                    placeholder=" "
                                    value={form.building}
                                    onChange={(event) => handleInputChange("building", event.target.value)}
                                    onFocus={() => setFocusedField("building")}
                                    onBlur={() => setFocusedField(null)}
                                    className="w-full border-none bg-transparent shadow-none w-full focus:outline-none focus:shadow-none text-[#000000] font-[Medium] text-[16px]"
                                />
                                <label className="bg-transparent  text-[#878387] font-[Regular] text-[14px] " >Building / House / Flat No.</label>
                            </div>
                            
                            <div
                                className={`input-group relative flex bg-[#F2F2F2] rounded-full border p-[0_24px] transition-all duration-150 ${
                                    focusedField === "landmark"
                                        ? "bg-[#fff] border-[#6E2C91] "
                                        : "border-transparent"
                                }`}
                            >
                                <Input
                                    type="text"
                                    placeholder=" "
                                    value={form.landmark}
                                    onChange={(event) => handleInputChange("landmark", event.target.value)}
                                    onFocus={() => setFocusedField("landmark")}
                                    onBlur={() => setFocusedField(null)}
                                    className="w-full border-none bg-transparent shadow-none w-full focus:outline-none focus:shadow-none text-[#000000] font-[Medium] text-[16px]"
                                />
                                <label
                                    className={`  bg-transparent  text-[#878387] pointer-events-none font-[Regular] text-[14px]`}
                                >
                                    Landmark (eg hospital, park etc.).
                                </label>
                            </div>
                            {showNickname && (
                                <div
                                    className={`input-group relative flex bg-[#F2F2F2] rounded-full border p-[0_24px] transition-all duration-150 ${
                                        focusedField === "nickname"
                                            ? "bg-[#fff] border-[#6E2C91] "
                                            : "border-transparent"
                                    }`}
                                >
                                    <Input
                                        type="text"
                                        placeholder=" "
                                        value={form.nickname}
                                        onChange={(event) => handleInputChange("nickname", event.target.value)}
                                        onFocus={() => setFocusedField("nickname")}
                                        onBlur={() => setFocusedField(null)}
                                        className="w-full border-none bg-transparent shadow-none w-full focus:outline-none focus:shadow-none text-[#000000] font-[Medium] text-[16px]"
                                    />
                                    <label
                                        className="bg-transparent  text-[#878387] font-[Regular] text-[14px]"
                                    >
                                        Nickname (Optional-home, office etc.)
                                    </label>
                                </div>
                            )}
                            <button
                                type="button"
                                className="cursor-pointer mt-[30px] rounded-[50px] p-[16px] text-[#fff] bg-[#6E2C91] text-[14px] font-[Bold] text-white  transition border-none outline-none"
                                onClick={() => {
                                    onSave?.(workNote);
                                    handleClose();
                                }}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SetLocation