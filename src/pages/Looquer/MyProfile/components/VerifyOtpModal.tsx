import { useRef, useState, type KeyboardEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../../../components/Ui/Button";
import { TitleLg, Body } from "../../../../components/customfile/parts";
import logoImg from "../../../../assets/img/logo.png";
import { CloseIcon } from "../../../../components/customfile/icons";

const CODE_LENGTH = 6;

interface VerifyOtpModalProps {
    isOpen: boolean;
    onClose: () => void;
}

function VerifyOtpModal({ isOpen, onClose }: VerifyOtpModalProps) {
    const [code, setCode] = useState<string[]>(Array(CODE_LENGTH).fill(""));
    const inputsRef = useRef<Array<HTMLInputElement | null>>([]);
    const navigate = useNavigate();

    const handleChange = (index: number, value: string) => {
        if (!/^\d*$/.test(value)) return;

        const updated = [...code];
        updated[index] = value.slice(-1);
        setCode(updated);

        if (value && index < CODE_LENGTH - 1) {
            inputsRef.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>, index: number) => {
        if (event.key === "Backspace" && !code[index] && index > 0) {
            inputsRef.current[index - 1]?.focus();
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[102] flex items-center justify-center bg-[rgba(0,0,0,0.30)]">
            {/* Login Card */}
            <div className="relative z-10 w-full max-w-md max-sm:p-[10px]">
                <div className="bg-white rounded-[30px] w-full max-w-[450px] p-[50px] relative max-sm:p-[20px]">
                    {/* Close Button */}
                    <div className="flex justify-end">
                        <button
                            onClick={onClose}
                            className="cursor-pointer absolute top-[26px] right-[26px]"
                        >
                            <CloseIcon className="w-[15px] h-[15px]" />
                        </button>
                    </div>
                    {/* Logo */}
                    <div className="flex justify-center">
                        <div className="flex items-center justify-center w-[40px] h-[40px] mb-[10px]">
                            <img src={logoImg} alt="Logo" className="w-full h-full" />
                        </div>
                    </div>

                    <div className="text-center mb-[30px]">
                        <TitleLg className="">Check your message inbox</TitleLg>
                        <Body className="text-[#878387]">
                            Enter the verification code send to
                        </Body>
                        <Body className="text-[#000000] font-[SemiBold]">
                            XX XXX 4567
                        </Body>
                    </div>
                    {/* otp */}
                    <div className="flex items-center justify-center gap-[8px] mb-[16px] px-2">
                        {code.map((digit, idx) => (
                            <input
                                key={idx}
                                ref={(el) => {
                                    inputsRef.current[idx] = el;
                                }}
                                type="text"
                                inputMode="numeric"
                                maxLength={1}
                                value={digit}
                                onChange={(event) => handleChange(idx, event.target.value)}
                                onKeyDown={(event) => handleKeyDown(event, idx)}
                                className={`h-[44px] w-[44px] rounded-[10px] border-none text-center text-[14px] font-[SemiBold] outline-none focus:border-none max-sm:h-[34px] max-sm:w-[34px] ${digit ? "bg-white shadow-[0_0_15px_0px_rgba(0,0,0,0.15)]" : "bg-[#EFEFEF]"
                                    }`}
                            />
                        ))}
                    </div>
                    <div className="text-center mb-[30px]">
                        <Body className="text-[#000000] text-[14px] font-[Regular] flex gap-[4px] justify-center">
                            Didn’t receive it?
                            <Link
                                to="#"
                                className="text-[#878387] font-[Medium] no-underline"
                            >
                                Resend it
                            </Link>
                        </Body>
                    </div>
                    <Button
                        className="w-full bg-[#6E2C91] rounded-full p-[14px] text-[#fff] text-[14px] font-[Medium] border-none shadow-none cursor-pointer"
                        onClick={() => navigate("/signup", { state: { showVerifyTick: true } })}
                    >
                        Verify
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default VerifyOtpModal;