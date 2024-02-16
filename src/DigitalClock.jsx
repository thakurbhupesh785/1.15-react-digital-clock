import React, {useState, useEffect} from 'react';

function DigitalClock () {

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() =>{
      setTime(new Date());
    },1000)

    return () => {
      clearInterval(intervalId)
    }
  },[]);

  function showTime () {
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    const meriden = hours >= 12 ?'PM' : 'AM';

    hours = hours % 12 || 12;

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meriden}`
  }

  function padZero (number) {
    return( number < 10 ? '0':'') + number;
  }

  return (
    <div className='container'>
      <div className='clock'>
        <span>{showTime()}</span>
      </div>
    </div>
  );

}

export default DigitalClock