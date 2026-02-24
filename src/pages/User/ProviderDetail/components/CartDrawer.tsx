import { CloseIcon, DeleteIcon } from "../../../../components/customfile/icons";
import { Link } from "react-router-dom";

interface CartItem {
    id: string;
    category: string;
    name: string;
    price: string;
    specialInstruction: string;
}

interface CartDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    items: Record<string, CartItem>;
    onRemoveItem: (itemId: string) => void;
}

function CartDrawer({ isOpen, onClose, items, onRemoveItem }: CartDrawerProps) {
    if (!isOpen) return null;

    const cartItems = Object.values(items);
    const itemCount = cartItems.length;

    // Calculate total price
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => {
            const priceStr = item.price.replace(/[^0-9.]/g, ""); // Remove currency symbols
            const price = parseFloat(priceStr) || 0;
            return total + price;
        }, 0);
    };

    const total = calculateTotal();

    return (
        <div className="fixed inset-0 z-50 flex">
            {/* Backdrop */}
            <div
                className="flex-1 bg-[rgba(0,0,0,0.30)]"
                onClick={onClose}
            />

            {/* Drawer */}
            <div className="w-full max-w-[400px] bg-white shadow-xl flex flex-col max-sm:max-w-full">
                {/* Header */}
                <div className="flex items-center justify-between p-[24px] border-b border-[rgba(0,0,0,0.10)]">
                    <h2 className="text-[18px] font-[Bold] text-[#000]">Your cart</h2>
                    <button onClick={onClose} className="cursor-pointer">
                        <CloseIcon className="" />
                    </button>
                </div>

                {/* Cart Items */}
                <div className="flex-1 overflow-y-auto">
                    {cartItems.length === 0 ? (
                        <div className="p-[24px] text-center text-[14px] font-[Regular] text-[#878387]">
                            Your cart is empty
                        </div>
                    ) : (
                        cartItems.map((item, index) => (
                            <div key={item.id}>
                                <div className="p-[26px] flex items-start justify-between gap-[16px] border-b border-[rgba(0,0,0,0.10)]">
                                    <div className="">
                                        <div className="flex items-center gap-[10px] mb-[6px]">
                                            <h4 className="text-[14px] font-[SemiBold] text-[#000] ">
                                                {item.category}
                                            </h4>
                                            <div className="p-[2px] rounded-full bg-[#000]"></div>
                                            <h4 className="text-[14px] font-[SemiBold] text-[#000] ">{item.name}</h4>
                                        </div>
                                        <h3 className="text-[16px] font-[SemiBold] text-[#000]">{item.price}</h3>
                                    </div>
                                    <button
                                        onClick={() => onRemoveItem(item.id)}
                                        className="cursor-pointer flex-shrink-0"
                                    >
                                        <DeleteIcon className="" />
                                    </button>
                                </div>
                                {index < cartItems.length - 1 && (
                                    <div className="border-b border-[rgba(0,0,0,0.1)]" />
                                )}
                            </div>
                        ))
                    )}
                </div>

                {/* Footer */}
                {cartItems.length > 0 && (
                    <div className="border-t border-[rgba(0,0,0,0.1)] p-[26px]">
                        {/* Total */}
                        <div className="flex items-center justify-between mb-[24px]">
                            <p className="text-[14px] font-[Regular] text-[#878387]">
                                Total ({itemCount} {itemCount === 1 ? "item" : "items"})
                            </p>
                            <h5 className="text-[28px] font-[Bold] text-[#000]">
                                ${total.toFixed(2)}
                            </h5>
                        </div>

                        {/* View in cart button */}
                        <Link to="/user/cart">
                            <button
                                className="w-full rounded-full bg-[#6A3E99] text-[#FFF] p-[14px] text-[14px] font-[Bold] cursor-pointer transition-colors"
                            >
                                View in cart
                            </button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CartDrawer;

