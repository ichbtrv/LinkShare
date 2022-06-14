import React, { useContext, useEffect, useState } from "react";
import { useRef } from "react";
import PlayButton from "./PlayButton";
import PauseButton from "./PauseButton";
import NextPreviousTrackButtons from "./NextPreviousTrackButtons";
import { clearInterval } from "timers";
import { FileContext } from "@/contexts/FileContext";
import { fileUrl } from "@/utils/fileUrl";

//then useButton Chooser to not repeat Code within each button

const AudioPlay = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const buttons = [
    <PlayButton
      width="w-14"
      height="h-14"
      className="shadow brightness-150"
      clickHandler={() => onPlay()}
    />,
    <PauseButton
      width="w-14"
      height="h-14"
      className="shadow brightness-150"
      clickHandler={() => onPause()}
    />,
  ];

  const [files] = useContext(FileContext) ?? [];
  const [currentTrack, setCurrentTrack] = useState(0);
  const [audioProgress, setAudioProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const audioRef = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== "undefined"
      ? new Audio(fileUrl(files![currentTrack]!))
      : undefined
  );

  const onPlay = () => {
    setAudioProgress(0);
    audioRef.current?.play();
    setIsPlaying(true);
  };

  const onPause = () => {
    setIsPlaying(false);
    audioRef.current?.pause();
  };

  useEffect(() => {
    if (isPlaying) {
      setInterval(
        () =>
          setAudioProgress(
            (audioRef.current!.currentTime / audioRef.current!.duration) * 100
          ),
        1000
      );
    }
    return () => clearInterval();
  }, [isPlaying, currentTrack]);

  useEffect(() => {
    setDuration(audioRef.current!.duration / 60);
  }, [audioRef.current?.duration]);
  useEffect(() => {
    setCurrentTime(audioRef.current!.currentTime / 60);
  }, [audioRef.current?.currentTime]);

  const handleNext = () => {
    if (currentTrack < files!.length - 1) {
      setCurrentTrack((ct) => ++ct);
      setAudioProgress(0);
      audioRef.current
        ? (audioRef.current.src = fileUrl(files![currentTrack + 1]!))
        : "";
      isPlaying ? onPlay() : "";
    } //else last track next button should be disabled
  };

  const handlePrev = () => {
    if (currentTrack > 0) {
      setCurrentTrack((ct) => --ct);
      audioRef.current
        ? (audioRef.current.src = fileUrl(files![currentTrack - 1]!))
        : "";
      isPlaying ? onPlay() : "";
    }
  };

  const skipThirty = () => {
    audioRef.current!.currentTime = audioRef.current?.currentTime! + 30;
  };

  const rewindThirty = () => {
    audioRef.current!.currentTime = audioRef.current?.currentTime! - 30;
  };

  const getButton = () => {
    return isPlaying ? buttons[1] : buttons[0];
  };

  return (
    <div className="flex relative">
      <div
        id="timebar"
        style={{
          width: audioRef.current?.duration === 0 ? "0%" : audioProgress + "%",
        }}
        className={`bg-teal-400 opacity-50 h-[100vh] top-0 left-0 z-10 w-[40vw] absolute`}
      />
      <div className="absolute">
        <h1 className="text-6xl">
          {currentTime
            ? Math.floor(currentTime) +
            ":" +
            Math.floor(
              Number((currentTime - Math.trunc(currentTime)).toFixed(2)) * 60
            )
            : ""}
        </h1>
        <h1 className="text-6xl">
          {duration
            ? Math.floor(duration) +
            ":" +
            Math.floor(
              Number((duration - Math.trunc(duration)).toFixed(2)) * 60
            )
            : ""}
        </h1>
      </div>
      <section className="hor-center w-[40vw] z-20 mix-blend-multiply rounded-xl m-6 bg-white relative">
        <section className="rounded-t-xl">
          <section className="flex justify-between px-4 h-24 items-center rounded-t-xl">
            <div className="text-center text-gray-600 mx-4">
              <h1 className="text-base">{files![currentTrack]!.name}</h1>
            </div>
            <a
              href={`${fileUrl(files![currentTrack]!)}`}
              target="_blank"
              download
              className=""
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="gray"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className=""
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </a>
          </section>

          <section className="flex h-28 items-center justify-center mb-2">
            <div className="inline-flex w-72 justify-evenly items-center">
              <div
                className="rounded-full p-2 pr-3 hover:cursor-pointer hover:shadow"
                onClick={rewindThirty}
              >
                -30
              </div>

              <NextPreviousTrackButtons
                width="w-10"
                height="h-10"
                previous
                clickHandler={() => handlePrev()}
                className="shadow brightness-150"
              />

              {getButton()}
              <NextPreviousTrackButtons
                width="w-10"
                height="h-10"
                clickHandler={() => handleNext()}
                className="shadow brightness-150"
              />
              <div
                className="rounded-full p-2 pr-3 hover:cursor-pointer hover:shadow"
                onClick={skipThirty}
              >
                +30
              </div>
            </div>
          </section>
        </section>
      </section>
    </div>
  );
};

export default AudioPlay;
