const ToggleIcon = ({
  open,
  className,
}: {
  open: boolean;
  className?: string;
}) => {
  return (
    <div className={className}>
      {open ? (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 12.5C4 11.9477 4.44772 11.5 5 11.5H19C19.5523 11.5 20 11.9477 20 12.5C20 13.0523 19.5523 13.5 19 13.5H5C4.44772 13.5 4 13.0523 4 12.5Z"
            fill="white"
          />
        </svg>
      ) : (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.41421 12C5.41421 11.4477 5.86193 11 6.41421 11L11.0711 11L11.0711 6.34313C11.0711 5.79085 11.5188 5.34313 12.0711 5.34313C12.6234 5.34313 13.0711 5.79084 13.0711 6.34313L13.0711 11H17.7279C18.2802 11 18.7279 11.4477 18.7279 12C18.7279 12.5523 18.2802 13 17.7279 13H13.0711L13.0711 17.6569C13.0711 18.2092 12.6234 18.6569 12.0711 18.6569C11.5188 18.6569 11.0711 18.2092 11.0711 17.6569L11.0711 13L6.41421 13C5.86193 13 5.41421 12.5523 5.41421 12Z"
            fill="white"
          />
        </svg>
      )}
    </div>
  );
};

export default ToggleIcon;
