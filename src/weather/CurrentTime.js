import { useEffect, useState } from "react";

import { DateTime } from "luxon";
import Spinner from "../ui/Spinner";

function CurrentTime(props) {
  const [time, setTime] = useState();

  useEffect(() => {
    let interval;

    const timeThere = DateTime.now().toUTC(props.offset / 60);
    const getTime = () => {
      return timeThere;
    };

    const tick = () => {
      setTime(getTime());
      interval = setTimeout(tick, 1000);
    };
    interval = setTimeout(tick, 1000);

    return function cleanup() {
      clearTimeout(interval);
    };
  }, [props.offset, time]);

  return (
    <div className="time__container">
      {time === undefined && <Spinner />}
      {time && (
        <>
          <span className="time__time-data">{time.toFormat("HH")}</span>
          <span className="time__time-data">{time.toFormat("mm")}</span>
        </>
      )}
    </div>
  );
}

export default CurrentTime;
