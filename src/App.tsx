import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/accountsection/Login";
import Verify from "./pages/accountsection/Verify";
import Signup from "./pages/accountsection/Signup";
import Home from "./pages/Looquer/LooqerHome/Home";
import Viewall from "./pages/Looquer/LooqerHome/components/Viewall";
import "./App.css";
import RegisterProcess from "./pages/RegisterProcess/Index";
import LooquerIndex from "./pages/Looquer/LooquerIndex";
import UserIndex from "./pages/User/UserIndex";
import UserHome from "./pages/User/UserHome/UserHome";
import Trust from "./pages/User/Trust";
import Legal from "./pages/User/legal";
import HowItWorks from "./pages/User/howitworks";
import About from "./pages/User/About";
import Terms from "./pages/User/Terms";
import Help from "./pages/User/Help";
import PrivacyPolicy from "./pages/User/privacypolicy";
import Faq from "./pages/User/Faq";
import Contact from "./pages/User/Contact";
import Search from "./pages/User/Search";
import ProviderDetail from "./pages/User/ProviderDetail/ProviderDetail";
import Cart from "./pages/User/Cart";
import Checkout from "./pages/User/Checkout/Index";
import Services from "./pages/User/Services";
import Location from './pages/RegisterProcess/shared/Location'
import Document from './pages/RegisterProcess/shared/Documents'
import Availability from './pages/RegisterProcess/shared/Availability'
import ServicesStep from './pages/RegisterProcess/shared/Services'
import MyProfile from "./pages/Looquer/MyProfile/MyProfile";
import EditProfile from "./pages/Looquer/MyProfile/components/EditProfile";
import Wallet from "./pages/Looquer/Wallet";
import Booking from "./pages/Looquer/Booking/Booking";
import BookingDetail from "./pages/Looquer/Booking/components/BookingDetail";
import LooqerTerms from "./pages/Looquer/Terms";
import LooqerPrivacypolicy from "./pages/Looquer/privacypolicy";
import LooqerContact from "./pages/Looquer/Contact";
import UserBooking from "./pages/User/Booking/Booking";
import UserBookingDetail from "./pages/User/Booking/components/BookingDetail";
import UserWallet from "./pages/User/Wallet/Wallet";
import UserProfile from "./pages/User/MyProfile/MyProfile";
import UserEditProfile from "./pages/User/MyProfile/components/EditProfile";
import ScrollToTop from "./hooks/ScrollToTop";

function App() {
  
  return (
    <div className="whole_app">
      <BrowserRouter basename="/mylooq">

      <ScrollToTop />

        <Routes>
          <Route element={<LooquerIndex />}>
            <Route path="/looqer/home" element={<Home />} />
            <Route path="/looqer/viewall" element={<Viewall />} />
            <Route path="/looqer/location" element={<Location />} />
            <Route path="/looqer/document" element={<Document />} />
            <Route path="/looqer/availability" element={<Availability />} />
            <Route path="/looqer/services" element={<ServicesStep />} />
            <Route path="/looqer/myprofile" element={<MyProfile />} />
            <Route path="/looqer/editprofile" element={<EditProfile />} />
            <Route path="/looqer/wallet" element={<Wallet />} />
            <Route path="/looqer/booking" element={<Booking />} />
            <Route path="/looqer/booking/:bookingId" element={<BookingDetail />} />
            <Route path="/looqer/terms" element={<LooqerTerms />} />
            <Route path="/looqer/privacypolicy" element={<LooqerPrivacypolicy />} />
            <Route path="/looqer/contact" element={<LooqerContact />} />
          </Route>
          <Route element={<UserIndex />}>
            <Route path="/user/home" element={<UserHome />} />
            <Route path="/user/trust" element={<Trust />} />
            <Route path="/user/legal" element={<Legal />} />
            <Route path="/user/howitworks" element={<HowItWorks />} />
            <Route path="/user/about" element={<About />} />
            <Route path="/user/terms" element={<Terms />} />
            <Route path="/user/help" element={<Help />} />
            <Route path="/user/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/user/faq" element={<Faq />} />
            <Route path="/user/contact" element={<Contact />} />
            <Route path="/user/search" element={<Search />} />
            <Route path="/user/providerdetail" element={<ProviderDetail />} />
            <Route path="/user/cart" element={<Cart />} />
            <Route path="/user/services" element={<Services />} />
            <Route path="/user/booking" element={<UserBooking />} />
            <Route path="/user/booking/:bookingId" element={<UserBookingDetail />} />
            <Route path="/user/wallet" element={<UserWallet />} />
            <Route path="/user/profile" element={<UserProfile />} />
            <Route path="/user/editprofile" element={<UserEditProfile />} />
          </Route>
          <Route path="/" element={<Login />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/register-process" element={<RegisterProcess />} />
          <Route path="/user/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
