import React from "react";
import Mentor from "./Mentor";
import Line from "public/images/line.png";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="container mb-36 pt-10">
      <h1 className="title">About Us</h1>
      <div className="mt-14 flex flex-col-reverse items-center space-x-5 lg:flex-row lg:items-start">
        <div className="w-fit">
          <h3 className="text-center font-clash text-[32px] font-semibold">
            Mentors
          </h3>
          <Image src={Line} alt="" className="mx-auto w-[70%]" />
          <div className="-mt-[10%] flex space-x-3 md:-mt-14 md:space-x-6">
            <Mentor
              className="mt-[10%] md:mt-14"
              img="/images/Wade Warren.jpg"
              name="Wade Warren"
              desc="Front-end engineers work closely with designers"
            />
            <Mentor
              img="/images/Kristin Watson.jpg"
              name="Kristin Watson"
              desc="Front-end engineers work closely with designers"
            />
            <Mentor
              className="mt-[10%] md:mt-14"
              img="/images/Robert Fox.jpg"
              name="Robert Fox"
              desc="Front-end engineers work closely with designers"
            />
          </div>
        </div>
        <p className="mb-10 text-center lg:mt-[8%] lg:mb-0 lg:max-w-md lg:text-left">
          Front-end engineers work closely with designers to make websites
          beautiful, functional, and fast. This Career Path will teach you not
          only the necessary languages and technologies, but how to think like a
          front-end engineer, too.
        </p>
      </div>
    </section>
  );
};

export default About;
