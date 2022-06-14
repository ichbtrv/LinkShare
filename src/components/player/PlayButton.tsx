interface PlayerButtonProps {
  width?: string;
  height?: string;
  clickHandler?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  textColor?: string;
  className?: string;
}

const PlayButton: React.VFC<PlayerButtonProps> = ({

  clickHandler,
  textColor = "text-gray-600",
  width,
  height,
  className
}): JSX.Element => {
  return (
    <section
      className={`leading-tight font-bold flex justify-center items-center `}
    >
      <button
        className={`${textColor} ${width} ${height} backdrop-blur-sm rounded-full py-2 hover:bg-gray-200 focus:outline-none flex px-2 ml-2 items-center justify-center bg-white bg-opacity-25 ${className}`}
        onClick={clickHandler}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width="24"
          height="24"
          fill={textColor}
        >
          <path d="M190.06 414l163.12-139.78a24 24 0 000-36.44L190.06 98c-15.57-13.34-39.62-2.28-39.62 18.22v279.6c0 20.5 24.05 31.56 39.62 18.18z" />
        </svg>
      </button>
    </section>
  );
};

export default PlayButton;
