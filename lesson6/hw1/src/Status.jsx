import React, { useState, useEffect }  from 'react';
import Online from './Online';
import Offline from './Offline';

const useNetworkStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const updateNetworkStatus = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener('online', updateNetworkStatus);
    window.addEventListener('offline', updateNetworkStatus);

    return () => {
      window.removeEventListener('online', updateNetworkStatus);
      window.removeEventListener('offline', updateNetworkStatus);
    };
  }, []);

  return isOnline;
};

const Status = () => {
  const isOnline = useNetworkStatus();

  return (
    <div className="status">
      {isOnline ? <Online /> : <Offline />}
    </div>
  );
}

export default Status;