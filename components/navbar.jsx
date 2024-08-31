import React, { useState, useRef, useEffect} from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Animated,
  Easing,
  Platform,
} from "react-native";
import { PassThrough } from "readable-stream";

const Navbar = ({ setShowProfile, showProfile, username,setIsMenuOpen,isMenuOpen }) => {
  const sidebarWidth = useRef(new Animated.Value(0)).current;
  const sidebarOpacity = useRef(new Animated.Value(0)).current;

  // Create a mapping of image sources
  const imageSources = {
    profile: require("../assets/ProfileIcon.png"),
    home: require("../assets/HomeIcon.png"),
  };

  const profileImageSource = showProfile? imageSources.home: imageSources.profile;
  const margin = Platform.OS === 'web' ? 'mt-2' : 'mt-6'

  return (
    <View className="bg-gray-900">
      {/* Navbar */}
      <View className="flex-row justify-between items-center px-3 bg-gray-600">
        {!isMenuOpen? (
        <TouchableOpacity className="p-2" onPress={() => setIsMenuOpen(!isMenuOpen)}>
            <Image
              source={require("../assets/NavIcon.png")}
              className="w-6 h-6 tint-white mt-6"
            />
        </TouchableOpacity>
        ):
        (
        <TouchableOpacity className="p-2" onPress={() => setIsMenuOpen(!isMenuOpen)}>
            <Image
              source={require("../assets/closenav.png")}
              className="w-8 h-8 tint-white mt-6"
            />
        </TouchableOpacity>
        )}
        

        <View className="justify-center items-center flex-row">
          <Text className="text-white mt-6">{username}</Text>
          <TouchableOpacity
            className="p-2"
            onPress={() => setShowProfile(!showProfile)}
          >
            <Image
              source={profileImageSource}
              className="w-8 h-8 rounded-full mt-6"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
   
  );
};

export default Navbar;
