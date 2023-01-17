import Image from "next/image";
import { useState } from "react";
import { FaqPolygon } from "../Polygon";
import ToggleIcon from "../ToggleIcon";
import QA from "public/images/qa.png";
import Glow from "../Glow";

const faqs = [
  {
    question: "What is the price?",
    answer:
      "Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.",
  },
  {
    question: "What is the price?",
    answer:
      "Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.",
  },
  {
    question: "What is the price?",
    answer:
      "Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.",
  },
  {
    question: "What is the price?",
    answer:
      "Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.",
  },
];

const FAQ = () => {
  const [index, setIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="container relative mb-36 pt-10">
      <h1 className="title">
        Frequently Asked
        <br />
        Questions
      </h1>
      <div className="mt-14 flex flex-col md:flex-row">
        <div className="md:flex-[0_0_40%] xl:flex-auto">
          <p>
            Do you have any kind of questions?
            <br />
            We are here to help.
          </p>
          <Image src={QA} alt="" className="mx-auto max-w-xs  md:max-w-sm " />
        </div>
        <div className="max-w-[700px] space-y-6 md:flex-[0_0_60%]">
          {faqs.map((faq, i) => {
            const open = index === i;
            return (
              <div
                key={i}
                className={`relative px-6 ${open ? "py-7" : "py-4"}`}
              >
                <FaqPolygon open={open} />
                <div className="flex items-center justify-between">
                  <h2 className="font-clash text-2xl font-medium">
                    {faq.question}
                  </h2>
                  <div
                    className="cursor-pointer"
                    onClick={() => setIndex((prev) => (prev === i ? null : i))}
                  >
                    <ToggleIcon open={open} />
                  </div>
                </div>
                {open && <p className="mt-4">{faq.answer}</p>}
              </div>
            );
          })}
        </div>
      </div>
      <Glow className="-left-1/4 -bottom-[90%]" />

      <Glow className="-right-1/2 -bottom-0" />
    </section>
  );
};

export default FAQ;
