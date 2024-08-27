import React, { useEffect, useState, Suspense, lazy } from "react";
import { Text, View, TouchableOpacity, ScrollView, Platform } from "react-native";
import { styled } from "nativewind";
import useLocation from '../hooks/useLocation.js';
const StyledButton = styled(TouchableOpacity);

const Map = lazy(() => import('../components/Map'));

export default function App() {
  const { coords, error, loading } = useLocation();
  const [working, setWorking] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    if (Platform.OS !== 'web' && coords) {
      setMapLoaded(true); // Set state to trigger rendering of the Map component
    }
  }, [coords]);

  const user = {
    name: "Ahaan Desai",
    company: "Goldman Sachs",
  };

  const company = {
    name: "Goldman Sachs",
    office: "Mumbai",
    location: {
      latitude: 19.1537308,
      longitude: 72.851749,
    },
  };

  if (error) {
    return <Text className="text-red-500">Error: {error}</Text>;
  }

  if (loading || !coords) {
    return <Text className="text-white">Loading...</Text>;
  }

  return (
    <>
    <ScrollView className="bg-black flex-1">
      <Text className="text-white mt-20 text-3xl font-bold px-2">Hello, {user.name}</Text>
      <Text className="text-yellow-400 text-lg font-bold px-2">Employed at {user.company}</Text>
      <Text className="text-white text-lg mb-5 px-2">
        Currently working at {company.office} office.
      </Text>
      {working ? (
        <Text className="text-red-400 text-xl text-center">You are currently at work.</Text>
      ) : (
        <Text className="text-green-400 text-xl text-center">You are currently not at work.</Text>
      )}
      <View>
        <Text className="text-white mt-5 px-4 text-2xl font-bold">Set work location</Text>
        <View className="flex-row space-x-4 mt-5 px-5">
          <StyledButton className="bg-blue-500 items-center px-4 py-2 rounded-lg" style={{ width: 88 }}>
            <Text className="text-white">Onsite</Text>
          </StyledButton>
          <StyledButton className="bg-blue-500 items-center px-4 py-2 rounded-lg" style={{ width: 88 }}>
            <Text className="text-white">Remote</Text>
          </StyledButton>
        </View>
      </View>
      <View>
        <Text className="text-white mt-5 px-4 text-2xl font-bold">Report problem</Text>
        <View className="flex-row space-x-4 mt-5 px-4">
          <StyledButton className="bg-green-500 px-4 py-2 rounded-lg items-center" style={{ width: 150 }}>
            <Text className="text-white">Request Leave</Text>
          </StyledButton>
          <StyledButton className="bg-red-600 px-4 py-2 rounded-lg items-center" style={{ width: 150 }}>
            <Text className="text-white">Report Emergency</Text>
          </StyledButton>
        </View>
      </View>
      {mapLoaded && coords && (
        <Suspense fallback={<Text className="text-white">Loading map...</Text>}>
          <Map latitude={coords.latitude} longitude={coords.longitude} />
        </Suspense>
      )}
    </ScrollView>
  </>
  );
}
