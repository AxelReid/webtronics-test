import React from "react";
import { CardPolygon } from "../Polygon";
import NgLogo from "public/images/angular.png";
import ReactLofo from "public/images/react.png";
import VueLogo from "public/images/vue.png";
import JsLogo from "public/images/js.png";
import Image from "next/image";
import Glow from "../Glow";

const cards = [
  { logo: NgLogo, name: "Angular" },
  { logo: ReactLofo, name: "React" },
  { logo: VueLogo, name: "Vue.js" },
  { logo: JsLogo, name: "JavaScript" },
];

const Programs = () => {
  return (
    <section id="programs" className="container relative mb-40 pt-10">
      <div className="mx-auto max-w-[534px]">
        <h1 className="title">Programming technologies</h1>
        <p className="mt-4 text-center">
          By the end, you’ll have the portfolio and interview skills you need to
          start your new career.
        </p>
      </div>
      <div className="mx-auto mt-14 grid w-fit grid-cols-2 gap-6 min-[850px]:grid-cols-4">
        {cards.map((card, i) => (
          <div
            key={i}
            className="relative aspect-[1.8/2.3] w-[181px] px-2.5 py-6"
          >
            <CardPolygon />
            <Image src={card.logo} alt={card.name} className="w-full" />
            <h4 className="mt-4 text-center font-clash text-2xl font-medium">
              {card.name}
            </h4>
          </div>
        ))}
      </div>
      <Glow className="-left-1/4 -bottom-[90%]" />
      <Glow className="-right-1/2 -bottom-0" />
    </section>
  );
};

export default Programs;
