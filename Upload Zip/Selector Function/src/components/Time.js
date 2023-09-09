import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// change the timer actions imports
import { increamentTimer } from "../redux/reducers/timerReducer";

export const Time = () => {
  const dispatch = useDispatch();
  // change as per the store implementation
  const { isRunning, elapsedTime } = useSelector((state) => state.timerReducer);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        dispatch(increamentTimer());
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isRunning, dispatch]);

  return <b>{elapsedTime}</b>;
};
