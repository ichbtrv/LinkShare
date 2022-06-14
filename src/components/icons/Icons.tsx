import React, { Dispatch, SetStateAction } from "react";
import type { ReactElement } from "react";
import MusicIcon from "./icon-music";

interface IconKey<T, S extends unknown> {
  iconKey: string;
  clickHandler?: () => [S | undefined, Dispatch<SetStateAction<S | undefined>>];
  className?: string;
}

type Icons = {
  icon: ReactElement;
  user: ReactElement;
  volume: ReactElement;
  music: ReactElement;
};

const icons: Icons = {
  icon: <svg></svg>,
  user: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-user"
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  ),
  volume: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-volume-2"
    >
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
    </svg>
  ),
  music: <MusicIcon />,
};

const Icon = <T, S>({
  iconKey,
  clickHandler,
  className = "",
}: IconKey<T, S>) => {
  return (
    <div className={className}>
      {icons[iconKey as keyof Icons] ? icons[iconKey as keyof Icons] : ""}
    </div>
  );
};

export default Icon;
