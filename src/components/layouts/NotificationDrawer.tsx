import { Dialog, DialogContent, DialogOverlay, DialogHeader, DialogTitle } from "../Ui/Dialog";
import { CloseIcon } from "../customfile/icons";
import notificationImg from "../../assets/img/roundedlogo.png";
import first from '../../assets/img/notify/1.png';
import second from '../../assets/img/notify/2.png';



interface NotificationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NotificationDrawer({ isOpen, onClose }: NotificationDrawerProps) {
  // Mock notification data
  const notifications = [
    {
      id: 1,
      title: "Request received from",
      name: "Smile john",
      time: "2h ago",
      image: first,
    },
    {
      id: 2,
      title: "Request received from",
      name: "Diane",
      time: "4h ago",
      image: second,
    },
    {
      id: 3,
      title: "Today you have 4 Bookings",
      time: "5h ago",
      image: notificationImg,
    },
    {
      id: 4,
      title: "Today you have booking with",
      name: "Diane",
      time: "1 day ago",
      image: second,
    },
    {
      id: 5,
      title: "Immediate request from",
      name: "Smile john",
      time: "2h ago",
      image: first,
      timer: "00:50",
    },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogOverlay className="fixed inset-0 bg-[rgba(0,0,0,0.5)] data-[state=open]:animate-in data-[state=closed]:animate-out z-[99]" />
      <DialogContent className="fixed left-[70px] top-0 h-full w-full max-w-[380px] bg-[#fff] border-l border-[rgba(0,0,0,0.1)] p-0 translate-x-0 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right z-[101] flex flex-col max-sm:left-[0px] notification_drawer max-sm:max-w-full">
        <DialogHeader className="p-[24px] border-b border-[rgba(0,0,0,0.10)] flex-shrink-0">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-[18px] font-[Bold] text-[#000] m-0">
              Notifications
            </DialogTitle>
            <button
              onClick={onClose}
              className="cursor-pointer p-[4px] hover:bg-[#F8F8F8] rounded-full transition-colors"
            >
              <CloseIcon className="w-[16px] h-[16px]" />
            </button>
          </div>
        </DialogHeader>
        <div className="flex-1 overflow-y-auto">
          {notifications.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="text-[14px] font-[Regular] text-[#878387]">No notifications</p>
            </div>
          ) : (
            <div className="flex flex-col">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className="p-[20px] cursor-pointer transition-colors border-b border-[rgba(0,0,0,0.10)]"
                >
                  <div className="flex items-start justify-between gap-[12px]">
                    <div
                      className={`w-[40px] h-[40px] rounded-full overflow-hidden flex-shrink-0 relative ${
                        notification.timer ? "notification_timer" : ""
                      }`}
                    >
                      <img
                        src={notification.image}
                        alt="notification"
                        className="w-full h-full rounded-full object-cover"
                      />
                      {notification.timer && (
                        <div className="absolute inset-0 flex items-center justify-center z-[1]">
                          <p className="text-[10px] font-[Bold] text-[#fff]">
                            {notification.timer}
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-[14px] font-[SemiBold] text-[#878387] mb-[4px] truncate">
                        {notification.title}
                        {notification.name && (
                          <>
                            {" "}
                            <span className="text-[#000]">{notification.name}</span>
                          </>
                        )}
                      </h4>
                      <p className="text-[12px] font-[Regular] text-[#878387] m-0">{notification.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

