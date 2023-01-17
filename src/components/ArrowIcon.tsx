const ArrowIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 12 20"
      className={`h-5 w-3 ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 19.5L10.5 10L1 0.5" stroke="white" />
    </svg>
  );
};

export default ArrowIcon;
