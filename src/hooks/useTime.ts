import { useEffect, useState } from "react";

export const useTime = (): Date => {
  const [time, updateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => updateTime(new Date()), 1000);

    return () => { clearInterval(intervalId) };
  }, []);

  return time;
};
