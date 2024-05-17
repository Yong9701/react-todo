import { useState, useEffect } from 'react';

export function useOnlineStatus() {
  const [isOnline, setIsoOnline] = useState(navigator.onLine);

  useEffect(() => {
    function handleOnline() {
      setIsoOnline(true);
    }
    function handleOffline() {
      setIsoOnline(false);
    }

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return isOnline;
}
