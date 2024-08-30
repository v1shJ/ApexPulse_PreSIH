import React, { useEffect, useState, Suspense, lazy } from "react";
import haversineDistance from "../utils/haversine.js";

import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Platform,
} from "react-native";

import { styled } from "nativewind";
import useLocation from "../hooks/useLocation.js";
import ErrorBoundary from "../components/MapErrorBoundary.jsx";
const StyledButton = styled(TouchableOpacity);

const Map = lazy(() => import("../components/Map"));

export default function Homepage({ username }) {
  const { coords, error, loading } = useLocation();
  const [working, setWorking] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);

  const company = {
    name: "Veermata Jijabai Technological Institute",
    location: {
      latitude: 19.02193369781635,
      longitude: 72.8557752754173,
    },
  };

  useEffect(() => {
    if (coords) {
      console.log(coords);
      const distance = haversineDistance(
        coords.latitude,
        coords.longitude,
        company.location.latitude,
        company.location.longitude
      );
      console.log(distance);
      if (distance < 400) {
        setWorking(true);
      } else {
        setWorking(false);
      }
    }
    if (Platform.OS !== "web" && coords) {
      setMapLoaded(true); // Set state to trigger rendering of the Map component
    }
  }, [coords]);

  //Sample data, later from API

  if (error) {
    return <Text className="text-red-500">Error: {error}</Text>;
  }

  if (loading || !coords) {
    return <Text className="text-white">Loading...</Text>;
  }

  return (
    <>
      <ScrollView className="bg-black">
        <View className="gap-1">
          <View className="bg-gray-900 p-2 items-center rounded-lg">
            <Text className="text-white mt-2 text-2xl font-bold px-2  text-center">
              Hello, {username}
            </Text>
            <Text className="text-yellow-500 text-lg font-bold px-2  text-center">
              Employed at {company.name}
            </Text>
            {company.office && (
              <Text className="text-white text-lg mb-5 px-2">
                Currently working at {company.office} office.
              </Text>
            )}
            {working ? (
              <Text className="text-blue-200 text-xl text-center">
                You are currently at work.
              </Text>
            ) : (
              <Text className="text-green-400 text-xl text-center">
                You are currently not at work.
              </Text>
            )}
          </View>
          <View className="bg-gray-900 p-4 items-center rounded-lg">
            <Text className="text-white text-2xl font-bold text-center my-2">
              Set work location
            </Text>
            <View className="flex-row px-5 justify-evenly gap-5">
              <StyledButton className="bg-blue-500 items-center px-4 py-2 rounded-lg">
                <Text className="text-white">Onsite</Text>
              </StyledButton>
              <StyledButton className="bg-blue-500 items-center px-4 py-2 rounded-lg">
                <Text className="text-white">Remote</Text>
              </StyledButton>
            </View>
          </View>
          <View className="bg-gray-900 rounded-lg">
            <Text className="text-white mt-5 px-4 text-2xl font-bold text-center">
              Report problem
            </Text>
            <View className="flex-row gap-4 p-4 justify-center">
              <StyledButton className="bg-green-500 px-4 py-2 rounded-lg items-center">
                <Text className="text-white">Request Leave</Text>
              </StyledButton>
              <StyledButton className="bg-red-600 px-4 py-2 rounded-lg items-center">
                <Text className="text-white">Report Emergency</Text>
              </StyledButton>
            </View>
          </View>
        </View>
        {mapLoaded && coords && (
          <Suspense
            fallback={<Text className="text-white">Loading map...</Text>}
          >
            <ErrorBoundary>
              <Map latitude={coords.latitude} longitude={coords.longitude} />
            </ErrorBoundary>
          </Suspense>
        )}
      </ScrollView>
    </>
  );
}
