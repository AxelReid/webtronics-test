const BoxFrame: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={`absolute inset-0 group-hover:brightness-150 ${className}`}
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="40"
        height="40"
        rx="8"
        fill="white"
        fillOpacity="0.05"
        className="group-hover:[fill-opacity:0.1]"
      />
      <rect
        x="0.5"
        y="0.5"
        width="39"
        height="39"
        rx="7.5"
        stroke="url(#paint0_linear_1043_179)"
        strokeOpacity="0.7"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1043_179"
          x1="4.4"
          y1="3.76528"
          x2="27.1452"
          y2="46.795"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#15BFFD" />
          <stop offset="1" stopColor="#9C37FD" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default BoxFrame;
