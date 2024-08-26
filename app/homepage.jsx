import React, { useState } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { styled } from "nativewind";
import Map from '../components/Map'
import useLocation from '../hooks/useLocation'

const StyledButton = styled(TouchableOpacity);      // Can add styles only to styled(TouchableOpacity)

export default function App() {
  const {coords, error, loading} = useLocation();           // gets user location from a function (hook) -> in hooks/useLocation.js
  const [working, setWorking] = useState(false);            // working state, true or false

  // Sample data, later from API
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

  if (coords == null || loading) {
    return <Text className="text-white">Loading...</Text>;
  }

  if (error) {
    return <Text className="text-red-500">Error: {error}</Text>;
  }


  return (
    <ScrollView className="bg-black flex-1">
      <Text className="text-white mt-20 text-3xl font-bold px-2">Hello, {user.name}</Text>
      <Text className="text-white text-yellow-400 text-lg font-bold px-2">Employed at {user.company}</Text>
      <Text className="text-white text-lg text mb-5 px-2">
        Currently working at {company.office} office.
      </Text>
      {/* Ternary operator which toggles work status */}
      {working ? (
        <Text className="text-white text-red-400 text-xl text-center">
          You are currently at work.
        </Text>
      ) : (
        <Text className="text-white text-green-400 text-xl text-center">
          You are currently not at work.
        </Text>
      )}

      <View>
        <Text className="text-white mt-5 px-4 text-2xl font-bold">Set work location</Text>
        <View className="flex-row space-x-4 mt-5 px-5">
          <StyledButton
            className="bg-blue-500 items-center px-4 py-2 rounded-lg"
            style={{ width: 88 }}
          >
            <Text className="text-white">Onsite</Text>
          </StyledButton>
          <StyledButton
            className="bg-blue-500 items-center px-4 py-2 rounded-lg"
            style={{ width: 88 }}
          >
            <Text className="text-white">Remote</Text>
          </StyledButton>
        </View>
      </View>

      <View>
        <Text className="text-white mt-5 px-4 text-2xl font-bold">Report problem</Text>
        <View className="flex-row space-x-4 mt-5 px-4">
          <StyledButton className="bg-green-500 px-4 py-2 rounded-lg items-center"
            style={{ width: 150 }}
          >
            <Text className="text-white">Reque Leave</Text>
          </StyledButton>
          <StyledButton className="bg-red-600 px-4 py-2 rounded-lg items-center"
            style={{width: 150}}
          >
            <Text className="text-white">Report Emergency</Text>
          </StyledButton>
        </View>
      </View>
      
      {/* Map component */}
      <Map latitude={coords.latitude} longitude={coords.longitude}/> 
    </ScrollView>
  );
}
