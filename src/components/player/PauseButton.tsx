interface AlternatePlayButtonProps {
  width?: string;
  height?: string;

  clickHandler?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  textColor?: string;
  className?: string;
}

const AlternatePlayButton: React.VFC<AlternatePlayButtonProps> = ({

  clickHandler,
  textColor = "text-gray-600",
  width,
  height,
  className
}): JSX.Element => {
  return (
    <section
      className={` leading-tight font-bold flex justify-center items-center `}
    >
      <button
        className={`${textColor} ${width} ${height} ${className} backdrop-blur-sm rounded-full py-1 hover:bg-gray-200 focus:outline-none flex px-2 items-center justify-center bg-white bg-opacity-25`}
        onClick={clickHandler}
      >
        <svg
          viewBox="0 0 11 19"
          width="24"
          height="24"
          fill={textColor}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.5 0C0.671573 0 0 0.671573 0 1.5V17.5C0 18.3284 0.671573 19 1.5 19C2.32843 19 3 18.3284 3 17.5V1.5C3 0.671573 2.32843 0 1.5 0ZM9.5 0C8.67157 0 8 0.671573 8 1.5V17.5C8 18.3284 8.67157 19 9.5 19C10.3284 19 11 18.3284 11 17.5V1.5C11 0.671573 10.3284 0 9.5 0Z"
            fill={textColor}
          />
        </svg>
      </button>
    </section>
  );
};

export default AlternatePlayButton;
