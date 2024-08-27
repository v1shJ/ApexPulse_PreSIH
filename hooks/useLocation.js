// hooks/useLocationRefetch.js
import { useState, useEffect } from 'react';
import * as Location from 'expo-location';

const useLocation = (interval = 60000) => { // default interval of 1 minute
  const [coords, setCoords] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let locationInterval;

    const fetchLocation = async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setError('Permission to access location was denied');
          return;
        }

        const location = await Location.getCurrentPositionAsync({});
        setCoords(location.coords);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLocation(); // Fetch the location immediately on mount

    locationInterval = setInterval(fetchLocation, interval); // Refetch at every interval
    return () => clearInterval(locationInterval); // Cleanup the interval on unmount
  }, [interval]);

  return { coords, error, loading };
};

export default useLocation;
