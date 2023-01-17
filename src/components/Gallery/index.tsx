import Image from "next/image";
import React from "react";
import Glow from "../Glow";
import Img from "./Img";

const Gallery = () => {
  const imgWrapper = "";
  return (
    <section id="gallery" className="container relative mb-36 pt-10">
      <h1 className="title">Gallery</h1>
      <div className="mt-12 flex flex-col items-stretch gap-6 md:flex-row">
        {/* 1 */}
        <div className="flex flex-[0_0_22%] flex-col-reverse justify-between gap-6 sm:flex-row md:flex-col">
          <p className="sm:w-1/3 md:w-auto lg:mt-10">
            By the end of this course, you will be able to develop and publish
            your very own Google Chrome extension! In this course we will focus
            on coding exercises and projects.
          </p>

          <Img
            className="aspect-[6/4] flex-1 md:aspect-[2/3] lg:mt-10"
            src="/images/gallery1.jpg"
          />
        </div>
        {/* 2 */}
        <div className="flex flex-auto flex-col justify-between gap-6">
          <div className="flex items-stretch gap-6">
            <Img
              src="/images/gallery2.jpg"
              className="aspect-[6/4] flex-[0.6]"
            />
            <div className="flex flex-[0.4] flex-col space-y-6">
              <Img src="/images/gallery3.jpg" className="flex-auto" />
              <Img src="/images/gallery4.jpg" className="flex-auto" />
            </div>
          </div>
          <p>
            If you would like to learn web development and get a job in the tech
            industry, you are going to LOVE this course! Learn HTML, CSS,
            JavaScript, Bootstrap and more with over 15 hours of HD video
            tutorials! This course was designed to be extremely beginner
            friendly. We will begin with the very basics of HTML and build a
            simple web page.
          </p>
        </div>
      </div>
      <Glow className="-left-1/3 -bottom-[50%]" />
    </section>
  );
};

export default Gallery;
