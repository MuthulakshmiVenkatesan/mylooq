import { Outlet } from "react-router-dom";
import Footer from "../../components/UserLayouts/Footer";
// import LandingHeader from "../../components/UserLayouts/LandingHeader";
import Sidebar from "../../components/UserLayouts/Sidebar";
import Header from "../../components/UserLayouts/Header";
function UserIndex() {
  return (
    <div className="flex min-h-screen bg-[#fff]">
      <Sidebar />
      <div className="flex w-full flex-col lg:pl-[70px]">
        
        <Header />
        <main className="">
          <div className="mx-auto w-full">
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default UserIndex;