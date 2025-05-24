import { useState, useEffect } from "react";

function useTime<T = string>(timeType: "hour" | "day"): T {
    const [time, setTime] = useState<T>(() => getTimeData<T>(timeType));
  
    useEffect(() => {
      const updateTime = () => {
        setTime(getTimeData<T>(timeType));
      };
  
      const interval = setInterval(updateTime, 1000);
      return () => clearInterval(interval);
    }, [timeType]);
  
    return time;
}

function getTimeData<T>(timeType: string): T {
    const now = new Date();
    
    switch (timeType) {
        case "hour":
            return now.getHours().toString() as T;  
        case "day":
            return now.toLocaleDateString('en-US', { weekday: 'long' }) as T;
        default:
            return now.toString() as T;
    }
}

export default useTime;