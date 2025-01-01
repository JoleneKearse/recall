import { useState, useEffect } from "react";
import { startTimer, pauseTimer } from "../utils/Timer";

const Timer = () => {
  const [time, setTime] = useState<number>(0);
  const [isTiming, setIsTiming] = useState<boolean>(true);

  useEffect(() => {
    setTime(startTimer());
  }, [isTiming]);

	return (
		<article className="font-unlock text-accent-red-300 flex justify-center items-center gap-4 h-16 w-32 m-20"> 
			<p id="timer" className="text-3xl">{time}</p>
			<button className="grow-0" id="pauseBtn" onClick={pauseTimer}>
        <svg
          width="151"
          height="281"
          viewBox="0 0 151 281"
          fill="none"
          className="w-6"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.00002 156C-7.60345 93.7868 50.0002 0 50.0002 0C21.6496 113.095 19.0482 177.893 76.0001 281C76.0001 281 75.5454 280.565 74.7113 279.729C65.4129 270.447 8.72637 211.871 1.00002 156Z"
            fill="currentColor"
          />
          <path
            d="M76.0001 156C67.3967 93.7868 125 0 125 0C96.6497 113.095 94.0483 177.893 151 281C151 281 150.545 280.565 149.711 279.729C140.413 270.447 83.7265 211.871 76.0001 156Z"
            fill="currentColor"
          />
        </svg>
      </button>
		</article>
	);
};

export default Timer;
