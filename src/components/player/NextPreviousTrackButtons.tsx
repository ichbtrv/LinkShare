interface PlayerButtonProps {
  width?: string;
  height?: string;
  clickHandler?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  textColor?: string;
  previous?: boolean;
  className?: string;
}

const AlternatePlayButton: React.VFC<PlayerButtonProps> = ({
  clickHandler,
  textColor = "text-gray-600",
  width,
  height,
  previous = false,
  className

}): JSX.Element => {
  return (
    <section
      className={` hover:-translate-y-0.5  leading-tight font-bold flex justify-center items-center `}
    >
      <button
        className={`${textColor} ${width} ${height}  backdrop-blur-sm rounded-full py-1 focus:outline-none flex justify-center px-2 items-center bg-white bg-opacity-25 ${className} `}
        onClick={clickHandler}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill={textColor}
          xmlns="http://www.w3.org/2000/svg"
          className={`${previous ? 'rotate-180' : ''}`}
        >
          <path
            d="M6.5241 4.93815C5.85783 4.52814 5 5.00749 5 5.78981V18.2107C5 18.993 5.85783 19.4724 6.5241 19.0623L16.6161 12.8519C17.2506 12.4614 17.2506 11.5391 16.6161 11.1486L6.5241 4.93815Z"
            fill={textColor}
          />
          <rect x="17" y="4.00024" width="2" height="16" rx="1" fill={textColor} />
        </svg>
      </button>
    </section>
  );
};

export default AlternatePlayButton;
