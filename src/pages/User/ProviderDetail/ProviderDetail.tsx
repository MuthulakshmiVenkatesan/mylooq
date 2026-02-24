import { useState } from "react";
import { TickIcon, ArrowDownIcon, StarIcon, EditIcon, ViewAllIcon } from "../../../components/customfile/icons";
import { Link } from "react-router-dom";
import { Checkbox, CheckboxIndicator } from "../../../components/Ui/Checkbox";
import avatar from "../../../assets/img/avatar.png";
import AddServiceModal from "./components/AddServiceModal";
import CartDrawer from "./components/CartDrawer";
import ReviewsModal from "./components/ReviewsModal";
import AvailabilityModal from "./components/AvailabilityModal";

const serviceSections = [
  {
    title: "Bridal facial",
    items: [
      { id: "bridal-1", label: "Classic European Facial", price: "50.00 USD" },
      { id: "bridal-2", label: "Vitamin C Facial", price: "50.00 USD" },
      { id: "bridal-3", label: "Oxygen facial", price: "50.00 USD" },
      { id: "bridal-4", label: "Pearl Glow Facial", price: "50.00 USD" },
    ],
  },
  {
    title: "Classic facial",
    items: [
      { id: "classic-1", label: "Deep Cleanse", price: "$45.00 USD" },
      { id: "classic-2", label: "Anti-Aging Boost", price: "$55.00 USD" },
    ],
  },
  {
    title: "Mask",
    items: [
      { id: "mask-1", label: "Hydrating Mask", price: "$30.00 USD" },
      { id: "mask-2", label: "Detox Clay Mask", price: "$35.00 USD" },
    ],
  },
];

function ProviderDetail() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    "Bridal facial": true, // First section open by default
  });
  const [selectedItems, setSelectedItems] = useState<Record<string, boolean>>({});
  const [addedServices, setAddedServices] = useState<Record<string, {
    id: string;
    category: string;
    name: string;
    price: string;
    specialInstruction: string;
  }>>({});
  const [modalService, setModalService] = useState<{
    id: string;
    category: string;
    name: string;
    price: string;
    specialInstruction?: string;
  } | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isReviewsOpen, setIsReviewsOpen] = useState(false);
  const [isAvailabilityOpen, setIsAvailabilityOpen] = useState(false);
  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const findServiceDetails = (itemId: string) => {
    for (const section of serviceSections) {
      const item = section.items.find((i) => i.id === itemId);
      if (item) {
        return {
          id: item.id,
          category: section.title,
          name: item.label,
          price: item.price,
        };
      }
    }
    return null;
  };

  const toggleItem = (itemId: string) => {
    const isCurrentlySelected = selectedItems[itemId] || false;

    if (!isCurrentlySelected) {
      // Opening modal when checking
      const serviceDetails = findServiceDetails(itemId);
      if (serviceDetails) {
        setModalService(serviceDetails);
        setSelectedItems((prev) => ({
          ...prev,
          [itemId]: true,
        }));
      }
    } else {
      // Unchecking - remove from added services
      setSelectedItems((prev) => {
        const newState = { ...prev };
        delete newState[itemId];
        return newState;
      });
      setAddedServices((prev) => {
        const newState = { ...prev };
        delete newState[itemId];
        return newState;
      });
    }
  };

  const handleAddService = (specialInstruction: string) => {
    if (modalService) {
      // Save the service with special instruction
      setAddedServices((prev) => ({
        ...prev,
        [modalService.id]: {
          id: modalService.id,
          category: modalService.category,
          name: modalService.name,
          price: modalService.price,
          specialInstruction: specialInstruction,
        },
      }));
      // Keep the checkbox checked
      setSelectedItems((prev) => ({
        ...prev,
        [modalService.id]: true,
      }));
    }
    setModalService(null);
  };

  const handleEditService = (itemId: string) => {
    const service = addedServices[itemId];
    if (service) {
      setModalService({
        id: service.id,
        category: service.category,
        name: service.name,
        price: service.price,
        specialInstruction: service.specialInstruction,
      });
    }
  };

  const handleRemoveFromCart = (itemId: string) => {
    setSelectedItems((prev) => {
      const newState = { ...prev };
      delete newState[itemId];
      return newState;
    });
    setAddedServices((prev) => {
      const newState = { ...prev };
      delete newState[itemId];
      return newState;
    });
  };

  const handleCloseModal = () => {
    // Uncheck the item when modal is closed without adding
    if (modalService) {
      setSelectedItems((prev) => ({
        ...prev,
        [modalService.id]: false,
      }));
    }
    setModalService(null);
  };

  return (
    <div className="bg-[#fff] pt-[70px] pb-[80px] max-sm:pb-[30px]">
      <div className="" >
        <div className="border-b border-[rgba(0,0,0,0.1)]">
          <div className="px-5 lg:px-[75px] pt-[80px] pb-[50px] w-full max-sm:py-[30px] provider_detail_container">
            <div className="flex items-start justify-center relative">
              <div className="w-full">
                <div className="">
                  <div className="flex flex-col items-center gap-[6px]">
                    <div className="relative">
                      <img
                        src={avatar}
                        alt="Diane william"
                        className="h-[80px] w-[80px] rounded-full object-cover"
                      />
                      <div className="absolute right-[-4px] top-[2px] rounded-full bg-[#00C299] p-[4px] border-[2px] border-white">
                        <TickIcon className="w-[14px] h-[14px]" strokeWidth="1.5" />
                      </div>
                    </div>
                    <div className="text-center">
                      <h2 className="text-[28px] font-[Bold] text-[#000] mb-[4px] leading-[32px] max-sm:text-[20px]">Diane william</h2>
                      <div className="flex items-center gap-[6px] justify-center mb-[24px]">
                        <div className="flex items-center gap-[2px]">
                          <div className="flex items-center gap-[2px]">
                            <div className="flex items-center gap-[2px]">
                              {[1, 2, 3, 4, 5].map((star) => {
                                if (star <= 4) {
                                  // Full star
                                  return (
                                    <StarIcon
                                      key={star}
                                      className="w-[14px] h-[14px]"
                                      fill="#FFCB2B"
                                    />
                                  );
                                } else {
                                  // Half star for 4.5 rating
                                  return (
                                    <div key={star} className="relative w-[14px] h-[14px]">
                                      <StarIcon
                                        className="w-[14px] h-[14px] absolute"
                                        fill="#E5E5E5"
                                      />
                                      <div className="absolute overflow-hidden w-[7px] h-[14px]">
                                        <StarIcon
                                          className="w-[14px] h-[14px]"
                                          fill="#FFCB2B"
                                        />
                                      </div>
                                    </div>
                                  );
                                }
                              })}
                            </div>
                            <p className="text-[12px] font-[Regular] text-[#000]">4.5 / 5</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-[6px]">
                          <div className="w-[3px] h-[3px] rounded-full bg-[#000]"></div>
                          <p className="text-[12px] font-[Regular] text-[#000]">Online</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="flex items-center gap-[12px] max-sm:flex-col max-sm:gap-[10px]">
                    <button onClick={() => setIsAvailabilityOpen(true)} className="max-sm:w-full cursor-pointer rounded-[50px] bg-[#000] text-[#fff] border border-[#000] p-[12px_32px] text-[14px] font-[Bold]">
                      View availability
                    </button>
                    <button
                      onClick={() => setIsReviewsOpen(true)}
                      className="max-sm:w-full cursor-pointer rounded-[50px] bg-[#fff] p-[12px_32px] text-[14px] font-[Bold] border border-[#000]"
                    >
                      LooQer reviews
                    </button>
                  </div>
                </div>
              </div>
              <Link to="/user/search" className="flex items-center gap-[2px] justify-end max-sm:absolute max-sm:top-[0px] max-sm:right-[0px] max-sm:w-full">
                <ViewAllIcon className="w-[15px] h-[15px] rotate-180" />
                <p className="text-[14px] font-[Bold] text-[#000]">Back</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="px-5 lg:px-[75px] !pt-[30px] !pb-[0px] w-full max-sm:pt-[30px] provider_detail_container">
          <h3 className="text-[28px] font-[Bold] text-[#000] mb-[10px] max-sm:text-[20px]">Providing services</h3>
          <div className="">
            {serviceSections.map((section) => {
              const isOpen = openSections[section.title] || false;
              return (
                <div key={section.title} className="border-b border-[rgba(0,0,0,0.1)] bg-[#fff] p-[24px_0]">
                  <div
                    className="cursor-pointer flex items-center justify-between"
                    onClick={() => toggleSection(section.title)}
                  >
                    <h4 className="text-[18px] font-[Bold] text-[#000]">{section.title}</h4>
                    <ArrowDownIcon
                      className={`${isOpen ? "rotate-180" : ""
                        }`}
                    />
                  </div>
                  {isOpen && (
                    <div className="mt-[10px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px]">
                      {section.items.map((item) => {
                        const isAdded = !!addedServices[item.id];
                        const isChecked = selectedItems[item.id] || isAdded;

                        return (
                          <div
                            key={item.id}
                            className={`rounded-[30px] cursor-pointer p-[18px_20px] shadow-[0_4px_15px_0px_rgba(0,0,0,0.10)] relative ${isAdded
                              ? "bg-[#F6D3DA]"
                              : "bg-[#fff]"
                              }`}
                            onClick={() => !isAdded && toggleItem(item.id)}
                          >
                            <div className="mb-[10px] flex items-start justify-between" onClick={(e) => e.stopPropagation()}>
                              <Checkbox
                                checked={isChecked}
                                onCheckedChange={(checked) => {
                                  if (isAdded) {
                                    // If it's an added service, allow unchecking to remove it
                                    if (checked === false) {
                                      setSelectedItems((prev) => {
                                        const newState = { ...prev };
                                        delete newState[item.id];
                                        return newState;
                                      });
                                      setAddedServices((prev) => {
                                        const newState = { ...prev };
                                        delete newState[item.id];
                                        return newState;
                                      });
                                    }
                                  } else {
                                    // For non-added services, open modal when checking
                                    if (checked === true) {
                                      const serviceDetails = findServiceDetails(item.id);
                                      if (serviceDetails) {
                                        setModalService(serviceDetails);
                                        setSelectedItems((prev) => ({
                                          ...prev,
                                          [item.id]: true,
                                        }));
                                      }
                                    } else {
                                      // Unchecking
                                      setSelectedItems((prev) => ({
                                        ...prev,
                                        [item.id]: false,
                                      }));
                                    }
                                  }
                                }}
                                className="h-[15px] w-[15px] rounded-[5px] border border-[#878387] bg-[#fff] focus:outline-none flex items-center justify-center cursor-pointer data-[state=checked]:bg-[#000] data-[state=checked]:border-[#000]"
                              >
                                <CheckboxIndicator className="flex items-center justify-center opacity-0 data-[state=checked]:opacity-100 transition relative top-[-1px] left-[0px]">
                                  <TickIcon className="w-[8px] h-[8px]" stroke="white" />
                                </CheckboxIndicator>
                              </Checkbox>
                              {isAdded && (
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleEditService(item.id);
                                  }}
                                  className="cursor-pointer"
                                >
                                  <EditIcon className="w-[15px] h-[15px]" />
                                </button>
                              )}
                            </div>
                            <h4 className="text-[14px] font-[SemiBold] text-[#000] mb-[4px]">{item.label}</h4>
                            <h5 className="text-[16px] font-[SemiBold] text-[#000]">{item.price}</h5>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          {Object.keys(addedServices).length > 0 && (
            <div className="flex items-center justify-center mt-[40px]">
              <button
                onClick={() => setIsCartOpen(true)}
                className="max-sm:w-full max-sm:px-[0px] rounded-[50px] bg-[#6E2C91] text-white p-[14px_160px] text-[14px] font-[Bold] cursor-pointer"
              >
                {Object.keys(addedServices).length} {Object.keys(addedServices).length === 1 ? 'Item' : 'Items'} in your cart
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Add Service Modal */}
      {modalService && (
        <AddServiceModal
          isOpen={!!modalService}
          onClose={handleCloseModal}
          serviceName={modalService.name}
          serviceCategory={modalService.category}
          servicePrice={modalService.price}
          initialSpecialInstruction={modalService.specialInstruction || ""}
          onAdd={handleAddService}
        />
      )}

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={addedServices}
        onRemoveItem={handleRemoveFromCart}
      />

      {/* Reviews Modal */}
      <ReviewsModal
        isOpen={isReviewsOpen}
        onClose={() => setIsReviewsOpen(false)}
      />

      {/* Availability Modal */}
      <AvailabilityModal
        isOpen={isAvailabilityOpen}
        onClose={() => setIsAvailabilityOpen(false)}
      />
    </div>
  );
}

export default ProviderDetail;

