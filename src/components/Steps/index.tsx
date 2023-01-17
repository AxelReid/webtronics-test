import Image from "next/image";
import Glow from "../Glow";
import StepFrame from "../StepFrame";
import Divider from "./Divider";

const steps = [
  {
    title: "Introduction to Front-End",
    desc: "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.",
  },
  {
    title: "Overview of Development",
    desc: "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.",
  },
  {
    title: "Introduction to Back-End",
    desc: "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.",
  },
  {
    title: "Overview of Development",
    desc: "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.",
  },
  {
    title: "Introduction to Dev-Ops",
    desc: "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.",
  },
  {
    title: "Overview of Development",
    desc: "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.",
  },
];

const Steps = () => {
  return (
    <section id="steps" className="container relative mb-44 pt-10">
      <h1 className="title">Steps</h1>
      <div className="mt-14 md:-space-y-[5%]">
        {steps.map((step, i) => {
          const odd = !!(i % 2);

          return (
            <div
              key={i}
              className={`relative flex justify-center ${
                odd ? "flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="md:flex-[0.5]"></div>
              <Divider i={i} length={steps.length} odd={odd} />
              <div className="flex-1 md:flex-[0.5] ">
                <div
                  className={`relative ${
                    odd ? "pr-0" : "pr-0 md:pr-5 md:pl-0"
                  } p-5`}
                >
                  <div className="p-5">
                    <div className="font-clash text-xl font-medium md:text-2xl">
                      Step {i + 1}
                    </div>
                    <h3 className="my-3 font-clash text-2xl font-semibold leading-none sm:my-4 md:text-[32px]">
                      {step.title}
                    </h3>
                    <p className="text-[#a2cbfb] max-md:text-sm">{step.desc}</p>
                  </div>
                  <StepFrame
                    className={`${
                      odd ? "rotate-180" : "rotate-180 md:rotate-0"
                    }`}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Glow className="-left-1/4 bottom-[10%]" />
    </section>
  );
};

export default Steps;
