import { Link } from "react-router-dom";
import {
  VerifyTickIcon,
  TargetIcon,
  LocationIcon,
  ArrowDownIcon,
} from "../../../components/customfile/icons";
import homebanner from "../../../assets/img/homebanner.png";
import { ServiceSlider } from "./components/ServiceSlider";
import phone from "../../../assets/img/phone.png";
import appstore from "../../../assets/img/appstore.png";
import playstore from "../../../assets/img/playstore.png";
import signup from "../../../assets/img/demand/signup.png";
import browse from "../../../assets/img/demand/browse.png";
import book from "../../../assets/img/demand/book.png";
import rate from "../../../assets/img/demand/rate.png";
import homebg from "../../../assets/img/homebg.png";
import looqer from "../../../assets/img/looqer.png";
import customer from "../../../assets/img/customer.png";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../../../components/Ui/Select";
import bannertick from "../../../assets/img/tick.svg";

const serviceOptions = [
  "Hair",
  "LooQer",
  "Makeup",
  "Spa",
  "Hair and care",
  "Salon",
  "Massage"
];

const highlightFeaturePoints = [
  "Browse nearby LooQers with detailed profiles",
  "Book appointments that fit your busy schedule",
  "Enjoy professional services from the comfort of your home",
];

const experienceSteps = [
  {
    title: "Download & Sign Up",
    description: "Get the MyLooQ app and create your profile in minutes.",
    icon: signup,
  },
  {
    title: "Browse LooQers",
    description: "View profiles of trusted, local LooQers with photos and reviews.",
    icon: browse,
  },
  {
    title: "Book Instantly",
    description: "Set a time and place, then confirm your LooQer with one tap.",
    icon: book,
  },
  {
    title: "Relax & Rate",
    description: "Enjoy your treatment and rate your LooQer after they leave.",
    icon: rate,
  },
];

const demandCards = [
  {
    title: "LooQers",
    description:
      "Join our group of top beauty professionals. Grow your business and reach more customers. Set your own hours and prices. Be part of a platform that values your skills and helps you succeed.",
    cta: "Register as a LooQer",
    image: looqer,
    button: "Register as a LooQer",
    cardbg: "#F6D3DA"
  },
  {
    title: "Customers",
    description:
      "Find the right beauty professional who has gone through multiple background checks. Book appointments easily from your phone. Choose from a wide range of services at prices that fit your budget.",
    cta: "Register as a Customer",
    image: customer,
    button: "Register as a Customer",
    cardbg: "#EBE4EF"
  },
];

function UserHome() {
  return (
    <div className="min-h-screen mx-auto w-full" style={{ minHeight: '200vh' }}>
      <div
        className=""
        style={{ backgroundImage: `url(${homebg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div
          className="px-5 lg:px-[75px] p-[0px_0_50px] desktop_width bannerwhole">
          <div className="flex flex-col gap-[32px] lg:flex-row lg:items-center pt-[50px] max-sm:pt-[100px] banner_home">
            <div className="flex-1">
              <div className="rounded-[100px] p-[12px] w-fit mb-[14px]" style={{ background: "linear-gradient(90deg, rgba(246, 211, 218, 0.00) 0%, #F6D3DA 100%)" }}>
                <p className="text-[12px] font-[Medium] text-[#000]">
                  Book Your next Beauty Appointment in Minutes
                </p>
              </div>
              <h1 className="text-[64px] font-[Bold] leading-[1.1] text-[#000]">
                MyLooQ
              </h1>
              <p className="my-[30px] max-w-[520px] text-[18px] font-[SemiBold] text-[#000] leading-[30px] banner_cont">
                Get beauty services anytime, anywhere, with our easy-to-use app. Enjoy convenience at your fingertips and pamper yourself on your schedule.
              </p>
              <ul className="flex flex-col gap-[18px] ">
                <li className="flex items-start gap-[10px]">
                  <img src={bannertick} alt="bannertick" className="w-[20px] h-[20px] mt-[6px]" />
                  <p className="text-[14px] font-[Medium] text-[#000] leading-[26px] text16px">Find skilled LooQers near you who can come right to your home. Browse profiles, read reviews, and choose the perfect professional for your needs.</p>
                </li>
                <li className="flex items-start gap-[10px]">
                  <img src={bannertick} alt="bannertick" className="w-[20px] h-[20px] mt-[6px]" />
                  <p className="text-[14px] font-[Medium] text-[#000] leading-[26px] text16px">See their profiles, reviews, and photos before you book. Whether you want a quick makeup touch-up, a relaxing massage, or a new hairstyle, our app makes it simple.</p>
                </li>
              </ul>
            </div>

            <div className="flex-1">
              <div className="">
                <img src={homebanner} alt="homebanner" className="w-auto h-[550px] max-sm:h-auto banner_img" />
              </div>
            </div>
          </div>
          <div className="mt-[46px] rounded-[30px] border border-[rgba(0,0,0,0.1)] bg-white p-[50px] max-sm:p-[20px]">
            <div className="mb-[24px] text-[28px] font-[Bold] text-[#000] text-center text30px">
              Book On-Demand Services
            </div>
            <div className="flex gap-[2px] w-full max-sm:flex-col max-sm:gap-[10px] search_Cont">
              <div className="flex items-center justify-between bg-[#F8F8F8] rounded-[50px] p-[18px_30px] w-full gap-[10px] search_Cont_Sub">
                <div className="flex items-center gap-[10px] w-full">
                  <LocationIcon className="w-[25px] h-[25px]" />
                  <input
                    placeholder="Enter your Location to Find and Book LooQers nearby you"
                    className="flex-1 rounded-[0] border border-transparent bg-transparent p-[0px] text-[14px] font-[Regular] text-[#000] focus:border-none focus:outline-none placeholder:text-[#878387] w-full"
                  />
                </div>
                <div className="cursor-pointer">
                  <TargetIcon className="w-[25px] h-[25px]" />
                </div>
              </div>
              <div className="w-full max-w-[200px] bg-[#F8F8F8] rounded-[50px] p-[4px] max-sm:max-w-full">
                <Select defaultValue="">
                  <SelectTrigger
                    className="cursor-pointer flex w-full items-center justify-between rounded-[50px] border-none bg-white p-[16px] text-[14px] font-[SemiBold] text-[#000] shadow-[0px_4px_15px_0px_rgba(0,0,0,0.1)] bg-[#fff] focus:outline-none focus:border-none "
                  >
                    <SelectValue placeholder="Service type" />
                    <ArrowDownIcon className="text-[#544862]" />
                  </SelectTrigger>
                  <SelectContent className="mt-[6px] rounded-[16px] border border-[#E4DAF1] bg-white shadow-[0_25px_45px_rgba(0,0,0,0.15)]">
                    {serviceOptions.map((option) => (
                      <SelectItem
                        key={option}
                        value={option}
                        className="px-[16px] py-[12px] text-[14px] font-[Regular] text-[#2E2352] data-[highlighted]:bg-[#F2ECFF] focus:outline-none focus:border-none focus:shadow-none border-none"
                      >
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Link to="/user/search" className="rounded-[50px] bg-[#6E2C91] p-[4px_60px] text-[14px] font-[Bold] text-white font-[Bold] max-sm:w-full max-sm:p-[16px] flex items-center justify-center">
                <button className="">
                  Search
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ServiceSlider />
      <div className="border-b border-[rgba(0,0,0,0.1)] ">
        <div className="px-5 lg:px-[75px] w-full desktop_width !py-[0]">
          <div className="grid gap-[28px] grid-cols-2 max-sm:flex max-sm:flex-col-reverse max-sm:gap-[0px] find_div">
            <div className="flex items-end ">
              <div className="absolute max-sm:relative finddiv_img">
                <img
                  src={phone}
                  alt="MyLooQ phone preview"
                  className="w-[800px] max-sm:w-full"
                />
              </div>
            </div>
            <div className="py-[100px] max-sm:p-[30px_0_0] mobile_common_p30 relative z-[1] finddiv_content">
              <h3 className="text-[26px] font-[Bold] text-[#000] leading-[36px] mb-[16px] text30px max-sm:text-[20px] max-sm:leading-[26px]">
                Find Most Perfect Beauty Professional Nearby
              </h3>
              <p className="text-[14px] font-[Regular] text-[#000] mb-[20px] leading-[26px]">
                No more struggling to book appointments or settling for whatever salon has an opening. No more fixed salon schedules - enjoy beauty treatments when it suit you. The app lets you browse through a bunch of local beauty pros, and you can see their specialties, check out their work, and read reviews from other customers            </p>
              <div className="mb-[20px] flex flex-col gap-[6px]">
                {highlightFeaturePoints.map((point) => (
                  <div key={point} className="flex items-center gap-[10px]  border border-[rgba(0,0,0,0.1)] rounded-[5px] p-[6px_10px] w-fit">
                    <VerifyTickIcon stroke="#00C299" />
                    <p className="text-[14px] font-[SemiBold] text-[#000]">{point}</p>
                  </div>
                ))}
              </div>
              <p className="text-[14px] font-[Regular] text-[#000] leading-[26px]">This app will forever change the way you look at the salon business. With multiple payment options and real-time tracking, rest assured that the booked professional will arrive, do the work, and exceed your expectations. Our professional LooQers are properly vetted and thoroughly background checked to maintain the standards.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b border-[rgba(0,0,0,0.1)] ">
        <div className="px-5 lg:px-[75px] py-[80px] w-full bg-[#fff] max-sm:!py-[30px] desktop_width">
          <div className="mx-auto max-w-[1230px]">
            <div className="mb-[80px] max-sm:mb-[30px]">
              <div className="text-center mb-[40px]">
                <h4 className="text-[26px] font-[Bold] text-[#000] mb-[8px] text30px max-sm:text-[20px]">See How Beauty-On-Demand Works!</h4>
                <p className="text-[14px] font-[Regular] text-[#000]">
                  Experience the luxury of professional beauty services tailored just for you, available whenever you desire.
                </p>
              </div>
              <div className="grid gap-[20px] md:grid-cols-2 lg:grid-cols-4">
                {experienceSteps.map((step) => (
                  <div
                    key={step.title}
                    className="border border-[rgba(0,0,0,0.1)] rounded-[30px] p-[42px_30px] "
                  >
                    <div className="flex flex-col gap-[24px]">
                      <div className="w-[64px] h-[64px]">
                        <img src={step.icon} alt={step.title} className="w-full h-full" />
                      </div>
                      <div className="flex flex-col gap-[4px]">
                        <h4 className="text-[18px] font-[Bold] text-[#000] text20px">{step.title}</h4>
                        <p className="text-[14px] font-[Regular] text-[#000] leading-[26px]">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-cover bg-center bg-no-repeat rounded-[30px] p-[80px] max-sm:p-[20px]" style={{ backgroundImage: `url(${homebg})` }}>
              <div className="flex flex-col items-center justify-center gap-[30px]">
                <h4 className="text-[30px] font-[Bold] text-[#000] w-[750px] mx-auto text-center max-sm:w-full text30px max-sm:text-[20px] leading-[40px] w100 max-sm:leading-[30px] w100">
                  Download our app now and enjoy salon-quality services on your terms. It’s beauty made easy, just for you.
                </h4>
                <div>
                  <h5 className="text-[14px] font-[Regular] text-[#000] mb-[6px] text-center">Click below to download the app!</h5>
                  <div className="flex flex-wrap items-center justify-center gap-[12px]">
                    <Link to="">
                      <img src={playstore} alt="Google Play" className="h-[42px]" />
                    </Link>
                    <Link to="">
                      <img src={appstore} alt="App Store" className="h-[42px]" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="px-5 lg:px-[75px] py-[80px] w-full bg-[#fff] max-sm:!py-[30px] desktop_width">
          <div className="">
            <div className="text-center mb-[40px]">
              <h4 className="text-[30px] font-[Bold] text-[#000] mb-[8px] text30px max-sm:text-[20px]">Download the App Now or Apply as a LooQer</h4>
              <p className="text-[14px] font-[Regular] text-[#000] w-[700px] mx-auto leading-[26px] max-sm:w-full w100">
                Join our group of people who love beauty care. We offer makeup, hair styling, spa treatments, full salon services, and relaxing massages. Use our app to book these anytime. Get the most from your salon visits with just a few taps.            </p>
            </div>
            <div className="grid gap-[24px] lg:grid-cols-2">
              {demandCards.map((card) => (
                <div
                  key={card.title}
                  className={`rounded-[30px] bg-[${card.cardbg}] p-[40px] relative h-[500px] max-sm:h-[600px] max-sm:h-auto max-sm:p-[26px]`}
                >
                  <div>
                    <h4 className="text-[20px] font-[Bold] text-[#000] mb-[12px]">
                      {card.title}
                    </h4>
                    <p className="text-[14px] font-[Regular] text-[#000] leading-[26px] w-[300px] mb-[28px] max-sm:w-full">
                      {card.description}
                    </p>
                    <button className="cursor-pointer bg-[#6E2C91] text-[14px] font-[SemiBold] text-white p-[16px_30px] rounded-[50px]">
                      {card.button}
                    </button>
                  </div>
                  <div className="absolute bottom-[40px] right-[40px] max-sm:hidden">
                    <img src={card.image} alt={card.title} className="h-[305px] w-auto max-sm:h-[170px] registerdiv_height" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserHome;
