import { useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import file from "../../../assets/img/file.svg";
import { UploadIcon, CloseIcon } from "../../../components/customfile/icons";
import { Progress } from "../../../components/Ui/progress";
import adobefile from "../../../assets/img/adobefile.svg";

type UploadedFile = {
  id: string;
  name: string;
  size: string;
  progress: number;
};

function DocumentsStep() {
  const location = useLocation();
  const isDocumentsRoute = location.pathname.includes("/document");
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const progressIntervals = useRef<Record<string, number>>({});

  const clickUpload = () => {
    fileInputRef.current?.click();
  };

  const addFileEntry = (file: File) => {
    const id = `${file.name}-${Date.now()}`;
    const entry: UploadedFile = {
      id,
      name: file.name,
      size: `${(file.size / (1024 * 1024)).toFixed(1)}MB`,
      progress: 0,
    };
    setFiles((prev) => [entry, ...prev]);
    startProgress(id);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files?.[0];
    if (!file) return;
    addFileEntry(file);
  };

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    addFileEntry(file);
    event.target.value = "";
  };

  const startProgress = (fileId: string) => {
    if (progressIntervals.current[fileId]) return;
    const intervalId = window.setInterval(() => {
      setFiles((prev) =>
        prev.map((fileItem) => {
          if (fileItem.id !== fileId) return fileItem;
          const nextProgress = Math.min(100, fileItem.progress + Math.floor(Math.random() * 20) + 5);
          if (nextProgress >= 100) {
            window.clearInterval(intervalId);
            delete progressIntervals.current[fileId];
            return { ...fileItem, progress: 100 };
          }
          return { ...fileItem, progress: nextProgress };
        })
      );
    }, 180);
    progressIntervals.current[fileId] = intervalId;
  };

  const handleRemove = (id: string) => {
    setFiles((prev) => prev.filter((fileItem) => fileItem.id !== id));
    const interval = progressIntervals.current[id];
    if (interval) {
      window.clearInterval(interval);
      delete progressIntervals.current[id];
    }
  };

  useEffect(() => {
    return () => {
      Object.values(progressIntervals.current).forEach((interval) => window.clearInterval(interval));
    };
  }, []);

  return (
    <div className={`bg-[#fff] p-[24px_30px_0px] flex-1 max-sm:p-[24px_15px_0px] mt-[120px] max-sm:mt-[118px] max-sm:pb-[0px] ${isDocumentsRoute ? "!m-[0] pt-[60px] pb-[80px] max-sm:pb-[30px] min-h-[100vh] max-sm:min-h-auto main_height" : ""}`}>
      <div className="flex flex-col items-center">
        <div className="flex flex-col mb-[30px] text-center">
          <h4 className="m-[0px] text-[24px] font-[Bold] text-[#000] text30px">Documents</h4>
          <p className="m-[0px] text-[14px] font-[Regular] text-[#000]">Upload your work experience document</p>
        </div>

        <div
          className="relative flex cursor-pointer flex-col items-center justify-center rounded-[30px] border border-dashed border-[rgba(0,0,0,0.3)] bg-[#fff] p-[30px_50px] text-center w-[600px] transition max-sm:p-[14px] max-sm:w-full"
          onClick={clickUpload}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        >
          <input type="file" hidden ref={fileInputRef} onChange={handleUpload} />
          <div className="relative">
            <img src={file} alt="file" className="w-[45px] h-[60px]" />
            <div className="absolute bottom-[0px] right-[-4px] w-[24px] h-[24px] rounded-full bg-[#000] flex items-center justify-center">
              <UploadIcon className="w-[12px] h-[12px]" />
            </div>
          </div>
          <div className="flex flex-col items-center gap-[6px] mt-[20px]">
            <h4 className="m-[0px] text-[14px] font-[SemiBold] text-[#878387]">
              Click to upload <span className="text-[#000]">or drag and drop</span>
            </h4>
            <p className="text-[14px] text-[#000000] font-[Regular] m-[0]">Maximum file size is 50MB</p>
          </div>
        </div>

        <div className="flex flex-col w-[600px] gap-[14px] mt-[14px] max-sm:w-full">
          {files.map((fileItem, index) => (
            <div
              key={`${fileItem.name}-${index}`}
              className="rounded-[30px] bg-[#EFEFEF] p-[20px_20px] "
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-[14px] w-full">
                  <div className="bg-[#FFF] p-[8px] rounded-[5px]">
                    <img src={adobefile} alt="adobefile" className="w-[16px] h-[16px]" />
                  </div>
                  <div className="flex flex-col w-full">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="m-[0px] text-[14px] font-[SemiBold] text-[#000]">{fileItem.name}</h4>
                        <p className="m-[0px] text-[12px] font-[Regular] text-[#878387]">{fileItem.size}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleRemove(fileItem.id)}
                        className="border-none bg-transparent outline-none cursor-pointer"
                      >
                        <CloseIcon />
                      </button>
                    </div>
                    {fileItem.progress < 100 && fileItem.progress > 0 && (
                      <div className="mt-[4px] flex items-center gap-[6px] justify-between">
                        <Progress value={fileItem.progress} className="h-[6px] flex-1 rounded-full bg-[#D0D0D0]" />
                        <span className="text-[12px] font-[SemiBold] text-[#000]">{fileItem.progress}%</span>
                      </div>
                    )}
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>
      </div>
      {isDocumentsRoute && (
          <div className="flex items-center justify-center gap-4">
            <button
              className="max-sm:w-full mt-[25px] w-[600px] border-none shadow-none outline-none cursor-pointer bg-[#6E2C91] rounded-[50px] py-[14px] text-[#FFF] font-[Medium] text-[14px] max-sm:mt-[20px]"
            >
              Submit
            </button>
          </div>
        )}
    </div>
  );
}

export default DocumentsStep