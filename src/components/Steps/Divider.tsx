interface Props {
  i: number;
  length: number;
  odd: boolean;
}
const Divider: React.FC<Props> = ({ i, length, odd }) => {
  const first = !i;
  const last = i === length - 1;

  return (
    <div
      className={`relative isolate flex w-14 ${
        first ? "items-end" : "items-start"
      } justify-start sm:w-20 md:w-32 md:justify-center lg:w-56`}
    >
      <div
        className={`absolute 
        top-[calc(50%-12px)] 
        -left-2.5 
        z-0 
        h-6 w-6 rounded-full bg-indigo-500 md:left-[calc(50%-12px)]`}
      />
      <div className={`${first || last ? "h-1/2" : "h-full"} w-1 bg-zinc-50`} />
      <div
        className={`absolute top-1/2 -z-[1] w-[calc(85%-12px)] border-t-2
        border-dashed border-indigo-500 md:w-[calc(45%-12px)] ${
          odd ? "md:left-1/2" : "left-0 md:left-auto md:right-1/2"
        } flex items-center`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="20"
          viewBox="0 0 24 24"
          preserveAspectRatio="none"
          className={`absolute -right-6 mb-px rotate-180 fill-indigo-500 ${
            odd ? "" : "md:-left-6 md:rotate-0"
          }`}
        >
          <path d="M14 6l-6 6l6 6v-12"></path>
        </svg>
      </div>
    </div>
  );
};

export default Divider;
