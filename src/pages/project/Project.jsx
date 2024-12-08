import { useState } from "react";
import { ImageSlider } from "../../list-maping/ImageSlide";

export default function Project() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitionState, setTransitionState] = useState("opacity-0");

  const handlerNext = () => {
    setTransitionState("opacity-0");
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === ImageSlider.length - 1 ? 0 : prevIndex + 1
      );
      setTransitionState("opacity-100");
    }, 200);
  };

  const handlerPrev = () => {
    setTransitionState("opacity-0");
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? ImageSlider.length - 1 : prevIndex - 1
      );
      setTransitionState("opacity-100");
    }, 200);
  };

  return (
    <>
      <div className="relative w-full mt-5">
        {/* Carousel Wrapper */}
        <div className="relative h-96 sm:h-[440px] md:h-[450px] w-[320px] sm:w-auto overflow-hidden rounded-lg">
          {ImageSlider.map((image, index) => (
            <img
              key={index}
              src={image.images}
              alt={image.title}
              className={`absolute w-full h-full object-cover bg-center bg-cover transition-opacity duration-700 ease-in-out ${
                index === currentIndex
                  ? `${transitionState} z-10`
                  : "opacity-0 z-0"
              }`}
            />
          ))}
        </div>
        {/* Controls */}
        <div className="flex justify-center items-center pt-4">
          <button
            type="button"
            className="flex justify-center items-center me-4 h-full cursor-pointer group focus:outline-none"
            onClick={handlerPrev}
          >
            <span className="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
              <svg
                className="rtl:rotate-180 w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 5H1m0 0 4 4M1 5l4-4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="flex justify-center items-center h-full cursor-pointer group focus:outline-none"
            onClick={handlerNext}
          >
            <span className="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
              <svg
                className="rtl:rotate-180 w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
        {/* Content title DLL. */}
        <div className="pl-2 mt-5">
          <h1 className="font-medium text-xl lg:text-2xl lg:font-semibold font-[arial]">
            {ImageSlider[currentIndex].title}
          </h1>
          <p className="text-sm text-gray-600 text-wrap mt-1 mb-3 lg:text-base">
            {ImageSlider[currentIndex].description}
          </p>
        </div>
      </div>
    </>
  );
}
