import Image from "next/image";
import Glow from "../Glow";
import Bg from "public/images/bg-image.png";

const Hero = () => {
  return (
    <>
      <section className="relative pb-48">
        <div className="container relative pt-52">
          <div className="relative max-w-[1180px]">
            <div className="flex flex-col-reverse md:flex-row md:items-end md:space-x-14">
              <h1 className="whitespace-nowrap font-clash text-[12vw] font-semibold leading-none lg:text-[150px]">
                Front-End
              </h1>
              <p className="mb-4">
                Make UIs and websites beautiful, functional, and fast. Cover all
                the topics that expensive bootcamps teach (and more).
              </p>
            </div>
            <div className="flex flex-col-reverse items-start gap-2 md:flex-row md:items-center md:gap-6">
              <button className="max-md:py-4 max-md:px-5 max-md:text-sm">
                Start my career change
              </button>
              <h1 className="ml-auto whitespace-nowrap font-clash text-[12vw] font-semibold leading-[1.1] md:ml-0 lg:text-[150px]">
                Developer
              </h1>
            </div>
            <div className="flex justify-end">
              <b className="text-2xl font-semibold">Courses</b>
            </div>
            {/* <Glow className="bottom-0 right-0" /> */}
          </div>
          <Glow className="-left-1/3 -bottom-full" />
          <Glow className="-right-1/3 -bottom-full" />
        </div>
      </section>
      <Image src={Bg} alt="" className="absolute top-0 left-0 -z-50" />
    </>
  );
};

export default Hero;
