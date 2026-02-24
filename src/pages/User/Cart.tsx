import { Link } from "react-router-dom";
import { DeleteIcon, ViewAllIcon } from "../../components/customfile/icons";



interface CartItem {
    id: string;
    category: string;
    name: string;
    price: string;
    specialInstruction?: string;
}

interface SummaryItem {
    label: string;
    amount: number;
    isNegative?: boolean;
}

function Cart() {
    // Mock cart data - in a real app, this would come from context/state management
    const cartItems: CartItem[] = [
        {
            id: "bridal-1",
            category: "Bridal facial",
            name: "Classic European Facial",
            price: "50.00 USD",
        },
        {
            id: "bridal-2",
            category: "Bridal facial",
            name: "Classic European Facial",
            price: "50.00 USD",
        },
    ];

    // Summary items
    const summaryItems: SummaryItem[] = [
        { label: "Deep-clean facial", amount: 15.00 },
        { label: "Detox facial", amount: 5.00 },
        { label: "Material fee", amount: 25.00 },
        { label: "Misc Fee", amount: 25.00 },
        { label: "Commission", amount: -25.00, isNegative: true },
    ];

    const itemCount = cartItems.length;

    // Calculate total from summary items
    const total = summaryItems.reduce((sum, item) => sum + item.amount, 0);

    const handleRemoveItem = (itemId: string) => {
        // In a real app, this would remove from cart state
        console.log("Remove item:", itemId);
    };

    return (
        <div className="bg-[#fff] mt-[70px] max-sm:mt-[50px]">

            <div className="border-b border-[rgba(0,0,0,0.1)]">
                <div className="px-5 lg:px-[75px] py-[80px] common_p_80 max-sm:py-[40px] max-w-[1230px] mx-auto w-full ">
                    {/* Main Content */}
                    <div className="flex flex-col lg:flex-row gap-[50px] max-sm:gap-[30px]">
                        {/* Left Section - Services List */}
                        <div className="flex-1">
                            <div className="flex items-center justify-between mb-[20px] max-sm:mb-[30px] border-b border-[rgba(0,0,0,0.1)] pb-[20px] max-sm:gap-[10px]">
                                <div className="flex items-center gap-[12px]">
                                    <h1 className="text-[28px] font-[Bold] text-[#000] max-sm:text-[24px]">
                                        <span className="text-[#6E2C91]">{itemCount}</span> Services in cart
                                    </h1>
                                </div>
                                <Link
                                    to="/user/providerdetail"
                                    className="flex items-center gap-[6px] transition-colors cursor-pointer"
                                >
                                    <ViewAllIcon className="w-[15px] h-[15px] rotate-180" />
                                    <p className="text-[14px] font-[SemiBold] text-[#000]">Select more services</p>
                                </Link>
                            </div>
                            {cartItems.length === 0 ? (
                                <div className="text-center py-[60px]">
                                    <p className="text-[16px] font-[Regular] text-[#878387]">
                                        Your cart is empty
                                    </p>
                                    <Link
                                        to="/user/search"
                                        className="mt-[20px] inline-block text-[14px] font-[SemiBold] text-[#6A3E99] hover:underline"
                                    >
                                        Browse services
                                    </Link>
                                </div>
                            ) : (
                                <div className="space-y-0">
                                    {cartItems.map((item) => (
                                        <div key={item.id}>
                                            <div className="flex items-center justify-between py-[24px] pr-[24px] max-sm:py-[16px] border-b border-[rgba(0,0,0,0.1)]">
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-[8px] mb-[6px] flex-wrap">
                                                        <h4 className="text-[14px] font-[SemiBold] text-[#000]">
                                                            {item.category}
                                                        </h4>
                                                        <div className="bg-[#000] p-[2px] rounded-full"></div>
                                                        <h4 className="text-[14px] font-[SemiBold] text-[#000]">
                                                            {item.name}
                                                        </h4>
                                                    </div>
                                                    <h5 className="text-[16px] font-[SemiBold] text-[#000]">
                                                        {item.price}
                                                    </h5>
                                                </div>
                                                <button
                                                    onClick={() => handleRemoveItem(item.id)}
                                                    className="ml-[20px] cursor-pointer flex-shrink-0 hover:opacity-70 transition-opacity"
                                                >
                                                    <DeleteIcon className="" />
                                                </button>
                                            </div>
                                            {/* {index < cartItems.length - 1 && (
                                            <div className="border-b border-[rgba(0,0,0,0.1)]" />
                                        )} */}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Right Section - Summary */}
                        <div className="lg:w-[300px] w-full ">
                            <div className="bg-[#F8F8F8] rounded-[30px] py-[24px] max-sm:py-[20px]">
                                <h2 className="px-[24px] max-sm:px-[20px] text-[18px] font-[Bold] text-[#000] mb-[24px] max-sm:mb-[20px]">
                                    Summary
                                </h2>

                                {/* Summary Items */}
                                <div className="flex flex-col gap-[14px] mb-[20px] px-[24px] max-sm:px-[20px] border-b border-[rgba(0,0,0,0.1)] pb-[20px]">
                                    {summaryItems.map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center justify-between"
                                        >
                                            <h4 className="text-[14px] font-[Regular] text-[#000]">
                                                {item.label}
                                            </h4>
                                            <h3
                                                className={`text-[14px] text-[#000] font-[SemiBold]  ${item.isNegative ? "" : ""
                                                    }`}
                                            >
                                                {item.isNegative ? "-" : ""}${Math.abs(item.amount).toFixed(2)}
                                            </h3>
                                        </div>
                                    ))}
                                </div>

                                <div className="px-[24px] max-sm:px-[20px]">
                                    {/* Total */}
                                    <div className="flex items-center justify-between mb-[28px]">
                                        <p className="text-[14px] font-[Regular] text-[#878387]">
                                            Total
                                        </p>
                                        <h4 className="text-[18px] font-[Bold] text-[#000]">
                                            ${total.toFixed(2)}
                                        </h4>
                                    </div>
                                    {/* Proceed to Checkout Button */}
                                    <button className="w-full rounded-full bg-[#6E2C91] text-[#FFF] p-[14px] text-[14px] font-[Bold] cursor-pointer transition-colors">
                                        Proceed to checkout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#fff] w-full max-w-[1230px] mx-auto px-5 lg:px-[75px] py-[40px] max-sm:py-[40px] cart_foot">
                {/* Footer */}
                <div className="text-left">
                    <p className="text-[14px] font-[Regular] text-[#000] leading-relaxed">
                        By proceeding you agree to our{" "}
                        <Link
                            to="/user/terms"
                            className="text-[#878387] font-[SemiBold]"
                        >
                            Terms & conditions
                        </Link>{" "}
                        and{" "}
                        <Link
                            to="/user/privacypolicy"
                            className="text-[#878387] font-[SemiBold]"
                        >
                            Privacy policy
                        </Link>
                        . Please verify before proceeding further.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Cart;
