import React from "react";

export default function CountdownCircle({ timer, TIME_LIMIT, remainingPathColor }) {
  function formatTimeLeft(time) {
    const seconds = Math.floor(time);

    let centisecond = Math.floor((time % 1) * 100);

    if (centisecond < 10) {
      centisecond = `0${centisecond}`;
    }

    // The output in MM:SS format
    return `${seconds}:${centisecond}`;
  }

  function calculateTimeFraction() {
    const rawTimeFraction = timer / TIME_LIMIT;
    const returnTime = rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
    return returnTime > 0 ? returnTime : 0;
  }

  return (
    <div class='base-timer'>
      <svg class='base-timer__svg' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
        <g class='base-timer__circle'>
          <circle class='base-timer__path-elapsed' cx='50' cy='50' r='45'></circle>
          <path
            id='base-timer-path-remaining'
            stroke-dasharray={`${(calculateTimeFraction() * 283).toFixed(0)} 283`}
            class={`base-timer__path-remaining ${remainingPathColor}`}
            d='
    M 50, 50
    m -45, 0
    a 45,45 0 1,0 90,0
    a 45,45 0 1,0 -90,0
  '
          ></path>
        </g>
      </svg>
      <span id='base-timer-label' class='base-timer__label'>
        {formatTimeLeft(timer)}
      </span>
    </div>
  );
}
