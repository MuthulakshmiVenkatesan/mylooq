import { Link } from "react-router-dom";
import todaybookings from "../../../assets/img/home/todaybooking.png";
import rating from "../../../assets/img/home/rating.png";
import bookings from "../../../assets/img/home/bookings.png";
import clock from "../../../assets/img/home/clock.png";
import { ViewAllIcon } from "../../../components/customfile/icons";
import emptydata from "../../../assets/img/emptydata.png";

const statCards = [
  {
    title: "Today’s bookings",
    value: "0",
    label: "Bookings",
    accent: "bg-[#00C299]",
    icon: todaybookings,
  },
  {
    title: "Average rating",
    value: "0.0",
    label: "Feedback",
    accent: "bg-[#6E2C91]",
    icon: rating,
  },
  {
    title: "Total bookings",
    value: "0",
    label: "Completed",
    accent: "bg-[#878387]",
    icon: bookings,
  },
  {
    title: "Upcoming bookings",
    value: "0",
    label: "Future jobs",
    accent: "bg-[#E88FA0]",
    icon: clock,
  },
];

const todayBookings = [
  {
    id: "#SB3233313132",
    customer: "Daisy Johnson",
    datetime: "18 Nov 2025, 4AM - 5AM",
    services: ["Deep clean facial", "Detox facial"],
    status: "Completed",
  },
  {
    id: "#SB3233313132",
    customer: "Daisy Johnson",
    datetime: "18 Nov 2025, 4AM - 5AM",
    services: ["Deep clean facial", "Detox facial"],
    status: "Completed",
  },
  {
    id: "#SB3233313132",
    customer: "Daisy Johnson",
    datetime: "18 Nov 2025, 4AM - 5AM",
    services: ["Deep clean facial", "Detox facial"],
    status: "Started",
  },
  {
    id: "#SB3233313132",
    customer: "Daisy Johnson",
    datetime: "18 Nov 2025, 4AM - 5AM",
    services: ["Detox facial"],
    status: "Arrived",
  },
  {
    id: "#SB3233313132",
    customer: "Daisy Johnson",
    datetime: "18 Nov 2025, 4AM - 5AM",
    services: ["Deep clean facial", "Detox facial"],
    status: "Need to do",
  },
];

const statusStyles: Record<string, string> = {
  Completed: "bg-[#00C299]",
  Started: "bg-[#6E2C91]",
  Arrived: "bg-[#000]",
  "Need to do": "bg-[#E88FA0]",
};

function Home() {
  return (
    <div className="bg-[#fff] pb-[80px] pt-[80px] max-sm:py-[30px]">
      <div className="flex items-center justify-center">
        <div className="w-full ">
          <div className="px-5 lg:px-[75px] max-w-[1230px] mx-auto w-full looqer_home_container"> 
            <div className="text-center mb-[36px]">
              <p className="m-[0_0_4px] text-[14px] font-[Regular] text-[#000]">
                Today’s earnings
              </p>
              <h4 className="m-[0] text-[28px] font-[Bold] text-[#000]">$0.00</h4>
            </div>
            <div className="max-sm:grid-cols-1 grid grid-cols-4 items-center justify-center gap-[10px] mb-[50px] looqer_home_grid">
              {statCards.map((card) => (
                <div
                  key={card.title}
                  className={`flex items-center justify-between gap-[10px] rounded-[30px] p-[20px_30px]  ${card.accent}`}
                >
                  <div className="flex flex-col">
                    <p className="text-[14px] font-[Regular] text-[#fff]">{card.title}</p>
                    <h4 className="text-[18px] font-[Bold] text-[#fff]">{card.value}</h4>
                  </div>
                  <div className="p-[10px] rounded-[50px] bg-white" >
                    <img src={card.icon} alt={card.title} className="w-[30px] h-[30px] object-cover" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="border-t border-[rgba(0,0,0,0.1)] pt-[50px]">
            <div className="px-5 lg:px-[75px] max-w-[1230px] mx-auto w-full looqer_home_container">
              <div className="mb-[20px] flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-[22px] font-[Bold] text-[#000]">Today Bookings</h3>
                <div className="flex items-center gap-[14px]">
                  <Link
                    to="/looqer/viewall"
                    className="cursor-pointer flex items-center gap-[6px]"
                  >
                    <p className="text-[14px] font-[Bold] text-[#000]">View all</p>
                    <ViewAllIcon />
                  </Link>
                </div>
              </div>
              <div className="overflow-x-auto rounded-[30px] border border-[#E0DAF4] bg-[#fff] table_scrollbar">
                <table className="w-full max-sm:w-[330vw] looqer_home_table">
                  <thead className="bg-[#EBE4EF]">
                    <tr>
                      <th className="text-[#000] text-[14px] p-[16px_30px] text-left font-[SemiBold]">Booking ID</th>
                      <th className="text-[#000] text-[14px] p-[16px_30px] text-left font-[SemiBold]">Customer name</th>
                      <th className="text-[#000] text-[14px] p-[16px_30px] text-left font-[SemiBold]">Date &amp; Time</th>
                      <th className="text-[#000] text-[14px] p-[16px_30px] text-left font-[SemiBold]">Booked services</th>
                      <th className="text-[#000] text-[14px] p-[16px_30px] text-left font-[SemiBold]">Status</th>
                    </tr>
                  </thead>
                  <tbody className="border-b border-[rgba(0,0,0,0.1)] last:border-b-0 last:border-none">
                    {todayBookings.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="p-[40px_30px]">
                          <div className="flex flex-col items-center justify-center gap-[20px] text-center">
                            <div className="flex items-center justify-center ">
                              <img src={emptydata} alt="file" className="w-[80px] h-[80px] object-cover" />
                            </div>
                            <p className="text-[14px] font-[Bold] text-[#000]">No Bookings</p>
                          </div>
                        </td>
                      </tr>
                    ) : (
                      todayBookings.map((booking, index) => (
                        <tr
                          key={`${booking.id}-${index}`}
                          className="border-b border-[rgba(0,0,0,0.1)] last:border-b-0 last:border-none"
                        >
                          <td className="p-[15px_30px] text-[14px] font-[Regular] text-[#878387]">{booking.id}</td>
                          <td className="p-[15px_30px] text-[14px] font-[Regular] text-[#000]">{booking.customer}</td>
                          <td className="p-[15px_30px] text-[14px] font-[Regular] text-[#000]">{booking.datetime}</td>
                          <td className="p-[15px_30px]">
                            <div className="flex flex-wrap gap-[6px]">
                              {booking.services.map((service) => (
                                <p
                                  key={service}
                                  className="rounded-[5px] border border-[rgba(0,0,0,0.1)] p-[4px_10px] text-[12px] font-[Regular] text-[#000]"
                                >
                                  {service}
                                </p>
                              ))}
                            </div>
                          </td>
                          <td className="p-[15px_30px]">
                            <p
                              className={`inline-flex items-center justify-center rounded-[50px] px-[14px] py-[8px] text-[12px] font-[SemiBold] text-[#fff] ${statusStyles[booking.status] ?? ""
                                }`}
                            >
                              {booking.status}
                            </p>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;