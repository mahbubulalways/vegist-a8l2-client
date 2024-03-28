"use client";
import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface Props {
  endTime: Date; // Assuming endTime is of type Date
}

const FlashSaleTimer: React.FC<Props> = ({ endTime }) => {
  const calculateTimeLeft = () => {
    const difference = +endTime - +new Date();
    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  return (
    <div className="pt-10 text-center">
      {timeLeft.days === 0 &&
      timeLeft.hours === 0 &&
      timeLeft.minutes === 0 &&
      timeLeft.seconds === 0 ? (
        <span className="font-medium">Offer is not available now</span>
      ) : (
        <>
          <h1 className="font-medium pb-3">
            This offer will be valid till the following date
          </h1>
          <span className="text-2xl text-red-800 font-extrabold">
            {timeLeft.days}D:
          </span>
          &nbsp;
          <span className="text-2xl text-blue-800 font-extrabold">
            {timeLeft.hours}H:
          </span>
          &nbsp;
          <span className="text-2xl text-green-800 font-extrabold">
            {timeLeft.minutes}M:
          </span>
          &nbsp;
          <span className="text-2xl text-purple-800 font-extrabold">
            {timeLeft.seconds}S
          </span>
        </>
      )}
    </div>
  );
};

export default FlashSaleTimer;
