const Glow = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      width="999"
      height="1056"
      viewBox="0 0 999 1056"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none absolute -z-10 ${className}`}
    >
      <g filter="url(#filter0_f_5_275)">
        <circle cx="471" cy="528" r="178" fill="#2A3E84" />
      </g>
      <defs>
        <filter
          id="filter0_f_5_275"
          x="-57"
          y="0"
          width="1056"
          height="1056"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="175"
            result="effect1_foregroundBlur_5_275"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Glow;
