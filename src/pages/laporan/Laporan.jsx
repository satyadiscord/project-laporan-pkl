import { useLocation, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { laporanList } from "../../list-maping/LaporanList";

export default function Project() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <div className="lg:flex lg:items-center mt-5">
        <div className="w-full lg:w-[28%] h-[76vh] p-5">
          <h1 className="text-center font-[arial] text-2xl font-bold text-gray-800 md:text-4xl lg:mb-5">
            Laporan
          </h1>
          {/* button */}
          <div className="flex justify-center items-center flex-col">
            {laporanList.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  navigate(item.pathname);
                  window.scrollTo(0, 0);
                }}
                className={`px-28 py-2 border-2  mt-5 rounded-xl hover:text-yellow-300 hover:border-yellow-300  transition duration-300 md:px-40 md:py-3 lg:px-16 lg:text-start ${
                  location.pathname === item.pathname
                    ? "text-yellow-300 border-yellow-300"
                    : "text-gray-800 border-gray-700"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

        {/* content */}
        <div
          id="content"
          className="w-[100%] shadow-inner border-2 border-opacity-40 -mt-40 lg:-mt-20 p-2 h-[70vh] rounded-lg overflow-y-auto"
        >
          <Outlet />
        </div>
      </div>
    </>
  );
}
