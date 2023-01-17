const StepFrame = ({ className }: { className?: string }) => {
  return (
    <svg
      className={`absolute inset-0 -z-[1] ${className}`}
      width="100%"
      height="100%"
      viewBox="0 0 491 228"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        y="18.5"
        width="475"
        height="191"
        rx="8"
        fill="white"
        fillOpacity="0.05"
      />
      <rect
        x="0.5"
        y="19"
        width="474"
        height="190"
        rx="7.5"
        stroke="url(#paint0_linear_1043_2)"
        strokeOpacity="0.7"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M472 5.84615H345V0H472C482.493 0 491 8.28847 491 18.5128V209.487C491 219.712 482.493 228 472 228H345V222.154H472C479.18 222.154 485 216.483 485 209.487V18.5128C485 11.5172 479.18 5.84615 472 5.84615Z"
        fill="url(#paint1_linear_1043_2)"
        fillOpacity="0.7"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1043_2"
          x1="52.25"
          y1="36.4792"
          x2="105.709"
          y2="287.993"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#15BFFD" />
          <stop offset="1" stopColor="#9C37FD" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1043_2"
          x1="345"
          y1="114"
          x2="488"
          y2="114"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.081934" stopColor="#15BFFD" stopOpacity="0" />
          <stop offset="0.706057" stopColor="#15BFFD" />
          <stop offset="1" stopColor="#9C37FD" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default StepFrame;
