import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function MainApp() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow m-auto mt-5 p-2 bg-transparent sm:w-[100%] lg:w-[100%] xl:w-[77%]">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}
