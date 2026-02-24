import { useState } from "react";
import { PlusIcon, EditIcon, DeleteIcon, TickIcon } from "../../../../components/customfile/icons";
import SetLocation from "./SetLocation";

function BookingLocationStep() {

  const [locationType, setLocationType] = useState<"your" | "loqer">("your");
  const [isSetLocationOpen, setIsSetLocationOpen] = useState(false);
  const [locationContext, setLocationContext] = useState<"home" | "work" | "other" | null>(null);
  const [editingLocationId, setEditingLocationId] = useState<string | null>(null);
  const [savedLocations, setSavedLocations] = useState<
    { id: string; label: string; address: string; type: "home" | "work" | "other" }[]
  >([]);
  const [selectedSavedLocationId, setSelectedSavedLocationId] = useState<string | null>(null);

  const hasHomeLocation = savedLocations.some((loc) => loc.type === "home");
  const hasWorkLocation = savedLocations.some((loc) => loc.type === "work");

  return (
    <div className="">
      {/* Left Section - Booking Location */}
      <div className="flex-1">
        <h1 className="text-[28px] font-[Bold] text-[#000] mb-[30px] max-sm:text-[24px] max-sm:mb-[20px]">
          Booking location
        </h1>

        {/* Radio Buttons */}
        <div className="mb-[38px] max-sm:mb-[20px] flex items-center gap-[30px]">
          <label className="flex items-center gap-[16px] cursor-pointer">
            <div className="relative">
              <input
                type="radio"
                name="locationType"
                value="your"
                checked={locationType === "your"}
                onChange={(e) => setLocationType(e.target.value as "your" | "loqer")}
                className="sr-only"
              />
              <div className={`w-[18px] h-[18px] rounded-full border flex items-center justify-center ${locationType === "your"
                ? "bg-[#6E2C91] border-[#6E2C91]"
                : "bg-[#F8F8F8] border-[rgba(0,0,0,0.20)]"
                }`}>
                {locationType === "your" && (
                  <div className="p-[4px] rounded-full bg-[#fff]"></div>
                )}
              </div>
            </div>
            <p className="text-[14px] font-[Regular] text-[#000]">
              At your Location
            </p>
          </label>

          <label className="flex items-center gap-[16px] cursor-pointer">
            <div className="relative">
              <input
                type="radio"
                name="locationType"
                value="loqer"
                checked={locationType === "loqer"}
                onChange={(e) => setLocationType(e.target.value as "your" | "loqer")}
                className="sr-only"
              />
              <div className={`w-[18px] h-[18px] rounded-full border flex items-center justify-center ${locationType === "loqer"
                ? "bg-[#6E2C91] border-[#6E2C91]"
                : "bg-[#F8F8F8] border-[rgba(0,0,0,0.2)]"
                }`}>
                {locationType === "loqer" && (
                  <div className="p-[4px] rounded-full bg-[#fff]"></div>
                )}
              </div>
            </div>
            <p className="text-[14px] font-[Regular] text-[#000]">
              At LooQer Location
            </p>
          </label>
        </div>

        {/* Location Buttons - only show when \"At your Location\" is selected */}
        {locationType === "your" && (
          <div className="flex flex-col gap-[16px]">
            {/* Saved Locations list */}
            {savedLocations.length > 0 && (
              <div className="rounded-[30px] border border-[rgba(0,0,0,0.10)] bg-[#FFF] p-[30px] flex flex-col gap-[12px]">
                {savedLocations.map((loc) => {
                  const isActive = loc.id === selectedSavedLocationId;
                  return (
                    <button
                      key={loc.id}
                      type="button"
                      onClick={() => setSelectedSavedLocationId(loc.id)}
                      className={`w-full flex items-center justify-between rounded-[30px] border p-[24px] cursor-pointer transition-colors gap-[10px] ${isActive ? "bg-[#F6D3DA] border-[#F6D3DA]" : "bg-[#FFFFFF] border-[rgba(0,0,0,0.10)]"
                        }`}
                    >
                      <div className="flex items-start gap-[12px]">
                        {/* Custom radio */}
                        <div className="mt-[4px]">
                          <div
                            className={`w-[16px] h-[16px] rounded-[5px] border flex items-center justify-center ${isActive ? "bg-[#000] border-[#000]" : "bg-[#FFF] border-[#878387]"
                              }`}
                          >
                            {isActive && <TickIcon />}
                          </div>
                        </div>
                        <div className="flex flex-col text-left">
                          <p
                            className={`text-[12px] font-[Regular] mb-[4px] text-[#878387] ${isActive ? "" : ""
                              }`}
                          >
                            {loc.label}
                          </p>
                          <h4 className="text-[14px] font-[SemiBold] text-[#000]">{loc.address}</h4>
                        </div>
                      </div>
                      <div className="flex items-center gap-[8px] flex-col">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setEditingLocationId(loc.id);
                            setLocationContext(loc.type);
                            setIsSetLocationOpen(true);
                          }}
                          className="p-[6px] rounded-full hover:bg-[rgba(0,0,0,0.04)] cursor-pointer"
                        >
                          <EditIcon width={14} height={14} />
                        </button>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSavedLocations((prev) => prev.filter((item) => item.id !== loc.id));
                            setSelectedSavedLocationId((current) =>
                              current === loc.id ? null : current,
                            );
                          }}
                          className="p-[6px] rounded-full hover:bg-[rgba(0,0,0,0.04)] cursor-pointer"
                        >
                          <DeleteIcon width={14} height={14} />
                        </button>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
            <div className="">
              <div className="flex gap-[16px] max-sm:flex-col">
                {!hasHomeLocation && (
                  <button
                    onClick={() => {
                      setLocationContext("home");
                      setIsSetLocationOpen(true);
                    }}
                    className="flex-1 flex items-center justify-center gap-[8px] p-[34px] border border-[rgba(0,0,0,0.10)] rounded-[30px] bg-[#fff] transition-colors cursor-pointer"
                  >
                    <PlusIcon className="w-[12px] h-[12px]" stroke="#000" />
                    <p className="text-[14px] font-[Regular] text-[#000]">
                      Add your home location
                    </p>
                  </button>
                )}
                {!hasWorkLocation && (
                  <button
                    onClick={() => {
                      setLocationContext("work");
                      setIsSetLocationOpen(true);
                    }}
                    className="flex-1 flex items-center justify-center gap-[8px] p-[34px] border border-[rgba(0,0,0,0.10)] rounded-[30px] bg-[#fff] transition-colors cursor-pointer"
                  >
                    <PlusIcon className="w-[12px] h-[12px]" stroke="#000" />
                    <p className="text-[14px] font-[Regular] text-[#000]">
                      Add your work location
                    </p>
                  </button>
                )}
              </div>
              {/* {hasOtherLocation && ( */}
                <button
                  onClick={() => {
                    setLocationContext("other");
                    setIsSetLocationOpen(true);
                  }}
                  className="mt-[16px] w-full flex items-center justify-center gap-[8px] p-[16px] bg-[#EFEFEF] rounded-[30px] transition-colors cursor-pointer"
                >
                  <PlusIcon className="w-[12px] h-[12px]" stroke="#000" />
                  <p className="text-[14px] font-[Regular] text-[#000]">
                    Add new location
                  </p>
                </button>
              {/* )} */}
            </div>
          </div>
        )}

        {locationType === "loqer" && (
          <div className="border-b border-[rgba(0,0,0,0.10)] w-full"></div>
        )}
      </div>

      {isSetLocationOpen && (
        <SetLocation
          onClose={() => {
            setIsSetLocationOpen(false);
            setEditingLocationId(null);
            setLocationContext(null);
          }}
          title={
            editingLocationId
              ? locationContext === "home"
                ? "Edit your home location"
                : locationContext === "work"
                  ? "Edit your work location"
                  : "Edit other location"
              : locationContext === "home"
                ? "Add your home location"
                : locationContext === "work"
                  ? "Add your work location"
                  : "Add other location"
          }
          showNickname={locationContext === "other"}
          initialAddress={editingLocationId ? savedLocations.find((loc) => loc.id === editingLocationId)?.address : undefined}
          onSave={(address) => {
            if (!locationContext) return;
            
            if (editingLocationId) {
              // Update existing location
              setSavedLocations((prev) =>
                prev.map((loc) =>
                  loc.id === editingLocationId
                    ? { ...loc, address }
                    : loc
                )
              );
            } else {
              // Add new location
              const id = `${locationContext}-${Date.now()}`;
              const label =
                locationContext === "home"
                  ? "Home Address"
                  : locationContext === "work"
                    ? "Office address"
                    : "Other address";
              setSavedLocations((prev) => [...prev, { id, label, address, type: locationContext }]);
              setSelectedSavedLocationId(id);
            }
            setEditingLocationId(null);
            setLocationContext(null);
          }}
        />
      )}


    </div>
  );
}

export default BookingLocationStep;
