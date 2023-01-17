export const CardPolygon = () => {
  return (
    <svg
      className="absolute inset-0"
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      viewBox="0 0 181 230"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_b_1043_82)">
        <path
          d="M174.694 196.301C178.668 193.275 181 188.567 181 183.573L181 16C181 7.16344 173.837 0 165 0L16 0C7.16344 0 0 7.16345 0 16L0 214C0 222.837 7.16347 230 16 230L125.049 230C128.551 230 131.957 228.851 134.743 226.729L174.694 196.301Z"
          fill="white"
          fillOpacity="0.05"
        />
        <path
          d="M180.5 183.573C180.5 188.411 178.241 192.972 174.391 195.904L134.44 226.331C131.741 228.387 128.442 229.5 125.049 229.5L16 229.5C7.43961 229.5 0.5 222.56 0.5 214L0.5 16C0.5 7.43959 7.43958 0.5 16 0.5L165 0.5C173.56 0.5 180.5 7.43958 180.5 16L180.5 183.573Z"
          stroke="url(#paint0_linear_1043_82)"
          strokeOpacity="0.7"
        />
      </g>
      <defs>
        <filter
          id="filter0_b_1043_82"
          x="-10"
          y="-10"
          width="201"
          height="250"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_1043_82"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_1043_82"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1043_82"
          x1="161.09"
          y1="208.35"
          x2="14.5698"
          y2="-9.78639"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#15BFFD" />
          <stop offset="1" stopColor="#9C37FD" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const FaqPolygon = ({ open }: { open?: boolean }) => {
  if (open)
    return (
      <svg
        className="absolute inset-0 -z-[1]"
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 703 166"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 158V31.6623L31.6623 0H695C699.418 0 703 3.58172 703 8V129.418L666.418 166H7.99998C3.58171 166 0 162.418 0 158Z"
          fill="white"
          fill-opacity="0.05"
        />
        <path
          d="M0.5 158V31.8694L31.8694 0.5H695C699.142 0.5 702.5 3.85786 702.5 8V129.211L666.211 165.5H7.99998C3.85785 165.5 0.5 162.142 0.5 158Z"
          stroke="url(#paint0_linear_44_169)"
          stroke-opacity="0.7"
        />
        <defs>
          <linearGradient
            id="paint0_linear_44_169"
            x1="77.33"
            y1="15.6259"
            x2="105.409"
            y2="240.589"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#15BFFD" />
            <stop offset="1" stop-color="#9C37FD" />
          </linearGradient>
        </defs>
      </svg>
    );

  return (
    <svg
      className="absolute inset-0 -z-[1]"
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      viewBox="0 0 703 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 54V27.6623L26.6623 0H695C699.418 0 703 3.58172 703 8V35.418L673.418 62H7.99998C3.58171 62 0 58.4183 0 54Z"
        fill="white"
        fill-opacity="0.05"
      />
      <path
        d="M0.5 54V27.864L26.8748 0.5H695C699.142 0.5 702.5 3.85786 702.5 8V35.1951L673.226 61.5H7.99998C3.85785 61.5 0.5 58.1421 0.5 54Z"
        stroke="url(#paint0_linear_44_189)"
        stroke-opacity="0.7"
      />
      <defs>
        <linearGradient
          id="paint0_linear_44_189"
          x1="77.33"
          y1="5.83619"
          x2="81.2994"
          y2="90.9827"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#15BFFD" />
          <stop offset="1" stop-color="#9C37FD" />
        </linearGradient>
      </defs>
    </svg>
  );
};
