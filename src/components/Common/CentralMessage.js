import React from 'react';
import '../../styles/components/_central-message.scss'

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
      <div className='center-message'>
        {message}
      </div>
    );
  // );
}

export default CentralMessage;
