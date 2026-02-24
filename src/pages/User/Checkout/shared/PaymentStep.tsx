import { useState, useEffect } from "react";
import { PlusIcon, EditIcon, DeleteIcon, TickIcon } from "../../../../components/customfile/icons";
import AddCard from "./AddCard";
import visa from "../../../../assets/img/visa.png";

interface PaymentStepProps {
  paymentType: "cash" | "card" | null;
  onPaymentTypeChange: (type: "cash" | "card" | null) => void;
}

function PaymentStep({ paymentType, onPaymentTypeChange }: PaymentStepProps) {
  const [localPaymentType, setLocalPaymentType] = useState<"cash" | "card">(paymentType || "cash");
  const [isAddCardOpen, setIsAddCardOpen] = useState(false);
  const [cards, setCards] = useState<
    {
      id: string;
      holderName: string;
      last4: string;
      brand: "visa" | "mastercard" | "other";
      expiry: string;
    }[]
  >([]);
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);
  const hasCards = cards.length > 0;

  // Initialize payment type on mount if null
  useEffect(() => {
    if (paymentType === null) {
      onPaymentTypeChange("cash");
      setLocalPaymentType("cash");
    }
  }, []);

  // Sync local state when prop changes (but don't call onPaymentTypeChange to avoid loop)
  useEffect(() => {
    if (paymentType !== null && paymentType !== localPaymentType) {
      setLocalPaymentType(paymentType);
    }
  }, [paymentType]);

  // Sync local state with parent
  const handlePaymentTypeChange = (type: "cash" | "card") => {
    setLocalPaymentType(type);
    onPaymentTypeChange(type);
  };

  const detectBrand = (cardNumber: string): "visa" | "mastercard" | "other" => {
    const trimmed = cardNumber.replace(/\s+/g, "");
    if (trimmed.startsWith("4")) return "visa";
    if (trimmed.startsWith("5")) return "mastercard";
    return "other";
  };


  return (
    <div className="">
      {/* Left Section - Booking Location */}
      <div className="flex-1">
        <h1 className="text-[28px] font-[Bold] text-[#000] mb-[30px] max-sm:text-[24px] max-sm:mb-[20px]">
          Payment
        </h1>

        {/* Radio Buttons */}
        <div className="mb-[38px] max-sm:mb-[20px] flex items-center gap-[30px]">
          <label className="flex items-center gap-[16px] cursor-pointer">
            <div className="relative">
              <input
                type="radio"
                name="paymentType"
                value="cash"
                checked={localPaymentType === "cash"}
                onChange={(e) => handlePaymentTypeChange(e.target.value as "cash" | "card")}
                className="sr-only"
              />
              <div className={`w-[18px] h-[18px] rounded-full border flex items-center justify-center ${localPaymentType === "cash"
                ? "bg-[#6E2C91] border-[#6E2C91]"
                : "bg-[#F8F8F8] border-[rgba(0,0,0,0.20)]"
                }`}>
                {localPaymentType === "cash" && (
                  <div className="p-[4px] rounded-full bg-[#fff]"></div>
                )}
              </div>
            </div>
            <p className="text-[14px] font-[Regular] text-[#000]">
              Cash
            </p>
          </label>

          <label className="flex items-center gap-[16px] cursor-pointer">
            <div className="relative">
              <input
                type="radio"
                name="locationType"
                value="card"
                checked={localPaymentType === "card"}
                onChange={(e) => handlePaymentTypeChange(e.target.value as "cash" | "card")}
                className="sr-only"
              />
              <div className={`w-[18px] h-[18px] rounded-full border flex items-center justify-center ${localPaymentType === "card"
                ? "bg-[#6E2C91] border-[#6E2C91]"
                : "bg-[#F8F8F8] border-[rgba(0,0,0,0.2)]"
                }`}>
                {localPaymentType === "card" && (
                  <div className="p-[4px] rounded-full bg-[#fff]"></div>
                )}
              </div>
            </div>
            <p className="text-[14px] font-[Regular] text-[#000]">
              Card
            </p>
          </label>
        </div>



        {localPaymentType === "cash" && (
          <div className="border-b border-[rgba(0,0,0,0.10)] w-full"></div>
        )}


        {localPaymentType === "card" && (
          <div className="flex flex-col gap-[16px]">
            {/* Saved cards list */}
            {cards.length > 0 && (
              <div className="border border-[rgba(0,0,0,0.10)] rounded-[30px] p-[30px] flex flex-col gap-[16px] max-sm:p-[20px]">
                {cards.map((card) => {
                  const isActive = card.id === selectedCardId;


                  return (
                    <button
                      key={card.id}
                      type="button"
                      onClick={() => setSelectedCardId(card.id)}
                      className={`w-full flex items-center justify-between rounded-[30px] p-[24px_30px] border cursor-pointer transition-colors max-sm:gap-[10px] max-sm:p-[20px] max-sm:flex-wrap ${isActive ? "bg-[#F6D3DA] border-[#F6D3DA]" : "bg-[#FFFFFF] border-[rgba(0,0,0,0.10)]"
                        }`}
                    >
                      <div className="flex items-start gap-[14px]">
                        {/* Custom radio */}
                        <div
                          className={`w-[16px] h-[16px] rounded-[5px] border flex items-center justify-center ${isActive ? "bg-[#000] border-[#000]" : "bg-[#FFF] border-[#878387]"
                            }`}
                        >
                          {isActive && <TickIcon />}
                        </div>
                        <div className="flex flex-col items-start">
                          <h4 className="text-[16px] font-[SemiBold] text-[#000] leading-[16px] mb-[8px] truncate max-sm:w-[165px]">
                            XXXX XXXX XXXX {card.last4}
                          </h4>
                          <div className="flex items-center gap-[10px]">
                            <p className="text-[12px] font-[Medium] text-[#000]">
                              {card.holderName}
                            </p>
                            <div className="p-[2px] rounded-[5px] bg-[#000]"></div>
                            <p className="text-[12px] font-[Medium] text-[#000]">
                              {card.expiry}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-[30px]">
                        <div>
                          <img src={visa} alt="card" className="w-[38px] h-[25px]" />
                        </div>
                        <div className="flex flex-col items-center gap-[10px]">
                          <button
                            type="button"
                            className="p-[6px] rounded-full cursor-pointer"
                          >
                            <EditIcon width={14} height={14} />
                          </button>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setCards((prev) => prev.filter((c) => c.id !== card.id));
                              setSelectedCardId((current) =>
                                current === card.id ? null : current,
                              );
                            }}
                            className="p-[6px] rounded-full cursor-pointer"
                          >
                            <DeleteIcon width={14} height={14} />
                          </button>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}

            {/* Add new card pill button */}
            <button
              type="button"
              onClick={() => setIsAddCardOpen(true)}
              className={`flex-1 flex items-center justify-center gap-[8px] border rounded-[30px] transition-colors cursor-pointer ${hasCards ? "bg-[#EFEFEF] border-[#EFEFEF] p-[16px]" : "bg-[#fff] border-[rgba(0,0,0,0.10)] p-[34px] "}`}
            >
              <PlusIcon className="w-[12px] h-[12px]" stroke="#000" />
              <p className="text-[14px] font-[Regular] text-[#000]">
                Add card
              </p>
            </button>
          </div>
        )}

        {isAddCardOpen && (
          <AddCard
            isOpen={isAddCardOpen}
            onClose={() => setIsAddCardOpen(false)}
            onSave={(cardData) => {
              const brand = detectBrand(cardData.cardNumber);
              const last4 = cardData.cardNumber.replace(/\s+/g, "").slice(-4) || "0000";
              const id = `${Date.now()}`;

              setCards((prev) => [
                ...prev,
                {
                  id,
                  holderName: cardData.holderName || "Card holder",
                  last4,
                  brand,
                  expiry: cardData.expiry || "--/--",
                },
              ]);
              setSelectedCardId(id);
            }}
          />
        )}
      </div>




    </div>
  );
}

export default PaymentStep;
