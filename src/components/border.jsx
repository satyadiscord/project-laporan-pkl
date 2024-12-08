export default function Border({ images }) {
  return (
    <>
      <div className="border-2 rounded-full w-[200px] h-[200px] m-auto sm:w-[227px] sm:h-[227px] md:w-[255px] md:h-[255px] lg:w-[350px] lg:h-[350px] xl:w-[500px] xl:h-[500px]">
        <img
          src={images}
          alt="unplash"
          className="w-full h-full rounded-full bg-vover bg-center object-cover"
        />
      </div>
    </>
  );
}
