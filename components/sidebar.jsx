// Sidebar.jsx
import React, { useRef, useEffect } from "react";
import { View, Text, TouchableOpacity, Animated } from "react-native";
import { NativeWindStyleSheet } from "nativewind";

// Configure NativeWindStyleSheet
NativeWindStyleSheet.setOutput({
  default: "native",
});

const Sidebar = ({setLoggedIn}) => {
  // References for animated values
  const slideAnim = useRef(new Animated.Value(-250)).current; // Start off-screen
  const opacityAnim = useRef(new Animated.Value(0)).current; // Start with 0 opacity

  useEffect(() => {
    // Animate slide-in and fade-in effect
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: 0, // End at screen position
        duration: 300, // Duration of slide animation
        useNativeDriver: true, // Use native driver for performance
      }),
      Animated.timing(opacityAnim, {
        toValue: 1, // Fade to fully visible
        duration: 300, // Duration of fade animation
        useNativeDriver: true, // Use native driver for performance
      }),
    ]).start();
  }, [slideAnim, opacityAnim]);

  return (
    <Animated.View
      style={[
        { 
          transform: [{ translateX: slideAnim }], // Apply sliding animation
          opacity: opacityAnim, // Apply fade-in animation
        },
        "", 
      ]}
      className="mt-1 w-3/4 h-full top-0 left-0 z-10"
    >
      <TouchableOpacity className="h-full bg-gray-700 flex-col rounded-md">
        <TouchableOpacity className="p-4 border-b border-black">
          <Text className="text-white text-lg">About company</Text>
        </TouchableOpacity>
        <TouchableOpacity className="p-4 border-b border-black">
          <Text className="text-white text-lg">Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity className="p-4 border-b border-black">
          <Text className="text-white text-lg">Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity className="p-4 border-b border-black">
          <Text className="text-white text-lg">Calendar</Text>
        </TouchableOpacity>
        <TouchableOpacity className="p-4 border-b border-black">
          <Text className="text-white text-lg" onPress={() => setLoggedIn(false)}>Logout</Text>
        </TouchableOpacity>
      </TouchableOpacity> 
    </Animated.View>
  );
};

export default Sidebar;
