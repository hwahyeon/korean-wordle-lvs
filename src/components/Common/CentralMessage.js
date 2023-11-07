import React, { useState, useEffect } from 'react';

function CentralMessage({ message, duration }) {
  // const [isVisible, setIsVisible] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsVisible(false);
  //   }, duration);

  //   return () => clearTimeout(timer);
  // }, [duration]);

  return (
    // isVisible && (
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          width: '70%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'black',
          color: 'white',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
          textAlign: 'center',
        }}
      >
        {message}
      </div>
    );
  // );
}

export default CentralMessage;
