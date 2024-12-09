import Border from "../../components/border";
import { listIcons } from "../../list-maping/Icons";
import myfoto from "../home/myfoto.jpeg";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full p-5 h-[74vh] lg:flex lg:items-center lg:justify-between lg:flex-row-reverse xl:flex xl:items-center xl:justify-between xl:flex-row-reverse">
        <div>
          <Border images={myfoto} />
        </div>
        <div>
          <h1 className="text-center mt-10 text-3xl font-bold font-[arial] sm:text-4xl lg:text-start lg:text-5xl xl:text-start xl:text-6xl tracking-widest">
            Satya
          </h1>
          <p className="text-center text-base font-light mt-1 text-gray-600 sm:text-lg lg:text-start xl:text-start">
            Perkenalkan nama saya I Made Satya Wiguna, Kelas XI Rpl 3 saya{" "}
            <br />
            bersekolah di SMK TI Bali Global Denpasar
          </p>
          {/* icons */}
          <div>
            <ul className="flex justify-center items-center gap-5 lg:justify-start xl:justify-start">
              {listIcons.map((item, index) => (
                <li
                  key={index}
                  className="text-base border-2 border-gray-400 rounded-full p-2 mt-5 hover:text-yellow-300 hover:border-yellow-300 transition duration-300 sm:text-lg md:text-xl"
                >
                  <a href={item.href}>{item.icons}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center item-center lg:justify-start xl:justify-start">
            <button
              onClick={() => navigate("/laporan")}
              className="px-7 py-2 border-2 border-gray-700 mt-10 rounded-xl hover:shadow-lg hover:shadow-yellow-300 hover:text-yellow-600  transition duration-300 sm:px-10 sm:py-3 md:px-20 md:py-4"
            >
              Explore More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
