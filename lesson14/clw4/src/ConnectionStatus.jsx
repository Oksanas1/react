import React, { useEffect, useState } from "react";

const ConnectionStatus = () => {
  const [ isOnline, setIsOnline ] = useState(true);

  useEffect(() => {
    window.addEventListener('offline', () => setIsOnline(false));
    window.addEventListener('online', () => setIsOnline(true));

    return () => {
      window.removeEventListener('online', () => setIsOnline(true));
      window.removeEventListener('offline', () => setIsOnline(false));
    };
  }, []);

  return (
    isOnline
      ? <div className="status">online</div>
      : <div className="status status_offline">offline</div>
  );
};

export default ConnectionStatus;