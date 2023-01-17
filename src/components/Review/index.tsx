import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import ArrowIcon from "../ArrowIcon";
import Glow from "../Glow";
import { CardPolygon } from "../Polygon";
import BoxFrame from "../BoxFrame";

const reviews = [
  {
    title: "Best courses ever",
    desc: 'Good course, up to this point, still ongoing. The only downside, why I gave 4,5 stars, because the "teacher" sometimes feel like, he is lost, and takes up quite a time, to correct himself, and check back etc.',
    img: "https://i.pinimg.com/474x/76/68/c4/7668c4634c1e868a963bcedb353db870--beautiful-moon-beautiful-places.jpg",
  },
  {
    title: "Lorem ipsum domet",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque veritatis, odit dolores ad facere in nihil unde eligendi neque aut. Et, praesentium impedit placeat ipsum recusandae eos in voluptas, nemo omnis illum, quo autem ex mollitia.",
    img: "https://d27yqp28rsqhzg.cloudfront.net/follower/fc6af6c0-7674-4bbc-9360-41702b11fea6.jpg",
  },
  {
    title: "Domet ipsum lorem",
    desc: "Animi modi reiciendis dolores quas veniam, quaerat in totam assumenda quibusdam iste inventore corporis nesciunt enim voluptatum perspiciatis quasi repudiandae ipsa, at dicta? Odit quasi sint, dolore quisquam ab nostrum in dolor.",
    img: "https://i.pinimg.com/236x/9b/b5/93/9bb593d3fcf3704dab58f326ab6dceae--gods-creation-beautiful-nature-scenes.jpg",
  },
  {
    title: "Ipsum lorem domet",
    desc: "Dolorem veritatis sint assumenda veniam ipsam dolor esse. Quod mollitia debitis, magnam nostrum ullam dolore praesentium corporis nesciunt delectus iste, dignissimos at eos deleniti nobis! Culpa similique recusandae, numquam nesciunt quam quasi.",
    img: "https://i.pinimg.com/236x/bf/7a/df/bf7adfc9ae089ab29e5af3f59ce40f23.jpg",
  },
];

const Review = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    align: "end",
  });
  const [index, setIndex] = useState(0);

  const handleScroll = useCallback(() => {
    if (!emblaApi) return;
    setIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setIndex]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", handleScroll);
      handleScroll();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [emblaApi]);

  const prev = () => emblaApi?.scrollPrev();
  const next = () => emblaApi?.scrollNext();

  return (
    <section id="review" className="container relative mb-36 pt-10">
      <h1 className="title">Review</h1>
      <div className="mt-12 flex flex-col sm:flex-row sm:space-x-6">
        <div className="flex-[0_0_30%]">
          <h3 className="mb-4 font-clash text-2xl font-medium">
            {reviews[index].title}
          </h3>
          <p>{reviews[index].desc}</p>
        </div>
        <div className="relative mt-6 overflow-hidden sm:mt-0 sm:flex-[0_0_calc(70%-24px)]">
          <div className="mb-4 flex items-center justify-between pl-3">
            <div className="flex items-start space-x-2">
              <span className="text-2xl">{index + 1}/</span>
              <span>{reviews.length}</span>
            </div>
            <div className="flex space-x-6">
              <div
                onClick={prev}
                className="b-linear-blue group relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg"
              >
                <ArrowIcon className="rotate-180" />
                <BoxFrame />
              </div>
              <div
                onClick={next}
                className="b-linear-blue group relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg"
              >
                <BoxFrame />
                <ArrowIcon />
              </div>
            </div>
          </div>
          <div className="embla w-full" ref={emblaRef}>
            <div className={`embla__container flex h-[442px] items-stretch`}>
              {reviews.map((rew, i) => (
                <div
                  style={{
                    background: `url(${rew.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                  }}
                  key={i}
                  className={`card embla__slide relative mx-3 overflow-hidden transition-[flex,border-radius] duration-300 ${
                    index === i
                      ? "flex-[0_0_min(90%,392px)]"
                      : "flex-[0_0_184px]"
                  } ${index == i ? "rounded-[32px]" : "rounded-[20px]"}`}
                >
                  <CardPolygon />
                  <div className="p-10"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Glow className="-right-1/2 -bottom-1/4" />
    </section>
  );
};

export default Review;
