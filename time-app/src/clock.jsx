import React, { useState, useEffect } from 'react';
import format from 'date-fns/format';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  });

  const Time = format(time, 'HH:mm:ss');

  return (
    <div className="clock">
      <h1>{Time}</h1>
    </div>
  );
}

export default Clock;