import { useState, useRef, useEffect } from "react";
import { CloseIcon, UploadIcon } from "../../../../components/customfile/icons";
import file from "../../../../assets/img/file.svg";
interface EditProfileModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function EditProfileModal({ isOpen, onClose }: EditProfileModalProps) {

    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (!isOpen) {
            return;
        }
        // reset state when modal opens
        return () => {
            if (previewUrl) {
                URL.revokeObjectURL(previewUrl);
            }
            setPreviewUrl(null);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;
        const url = URL.createObjectURL(file);
        if (previewUrl) {
            URL.revokeObjectURL(previewUrl);
        }
        setPreviewUrl(url);
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.stopPropagation();
        const file = event.dataTransfer.files?.[0];
        if (!file) return;
        const url = URL.createObjectURL(file);
        if (previewUrl) {
            URL.revokeObjectURL(previewUrl);
        }
        setPreviewUrl(url);
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.stopPropagation();
    };

    const openFilePicker = () => {
        fileInputRef.current?.click();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[102] flex items-center justify-center bg-[rgba(0,0,0,0.30)]">
            <div className="bg-white rounded-[30px] w-full max-w-[450px] p-[50px] relative max-sm:m-[10px] max-sm:p-[20px]">
                {/* Close Button */}
                <div className="flex justify-end">
                    <button
                        onClick={onClose}
                        className="cursor-pointer absolute top-[26px] right-[26px]"
                    >
                        <CloseIcon className="w-[15px] h-[15px]" />
                    </button>
                </div>
                {/* Title */}
                <h2 className="text-[18px] font-[Bold] text-[#000] mb-[30px] text-center">
                    Edit profile photo
                </h2>

                {previewUrl ? (
                    <div className="flex flex-col items-center justify-center gap-[30px]">
                        {/* Preview avatar */}
                        <div className="w-[150px] h-[150px] rounded-full overflow-hidden flex items-center justify-center">
                            <img src={previewUrl} alt="Preview" className="w-full h-full object-cover rounded-full" />
                        </div>

                        {/* Change / Save buttons */}
                        <div className="flex items-center justify-center gap-[16px] w-full max-sm:flex-col max-sm:gap-[10px]">
                            <button
                                type="button"
                                onClick={openFilePicker}
                                className="cursor-pointer w-full p-[14px] rounded-full bg-[#000] text-[#fff] text-[14px] font-[Bold] max-sm:w-full"
                            >
                                Change
                            </button>
                            <button
                                type="button"
                                onClick={onClose}
                                className="cursor-pointer w-full p-[14px] rounded-full bg-[#6E2C91] text-[#fff] text-[14px] font-[Bold] max-sm:w-full"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                ) : (
                    /* Upload view */
                    <div
                        className="cursor-pointer rounded-[24px] border border-dashed border-[rgba(0,0,0,0.30)] bg-[#fff] p-[30px] flex flex-col items-center justify-center text-center gap-[10px]"
                        onClick={openFilePicker}
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                    >
                        {/* File icon with upload arrow */}
                        <div className="flex items-center justify-center mb-[4px]">
                            <div className="relative flex items-center justify-center">
                                <img src={file} alt="file" className="w-[64px] h-[64px]" />
                                <div className="absolute bottom-[0px] right-[0px] w-[22px] h-[22px] rounded-full bg-[#000] flex items-center justify-center">
                                    <UploadIcon className="w-[12px] h-[12px]" />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-center text-center gap-[4px]">
                            <h4 className="text-[14px] font-[SemiBold] text-[#878387]">
                                Click to upload <span className="text-[#000]">or drag and drop</span>
                            </h4>
                            <p className="text-[12px] font-[Regular] text-[#000]">
                                Maximum file size is 50MB
                            </p>
                        </div>
                    </div>
                )}

                {/* Hidden file input */}
                <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileChange}
                />
            </div>
        </div >
    );
}


