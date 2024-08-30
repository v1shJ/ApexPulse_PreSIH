import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView, Animated, Easing } from 'react-native';

const Navbar = ({ setShowProfile, showProfile ,username }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sidebarHeight = useRef(new Animated.Value(0)).current;
  const sidebarOpacity = useRef(new Animated.Value(0)).current;

  // Create a mapping of image sources
  const imageSources = {
    profile: require('../assets/ProfileIcon.png'),
    home: require('../assets/HomeIcon.png'),
  };

  const profileImageSource = showProfile ? imageSources.home : imageSources.profile;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    Animated.timing(sidebarHeight, {
      toValue: isMenuOpen ? 300 : 0, // Adjust height as needed
      duration: 400,
      easing: Easing.out(Easing.ease),
      useNativeDriver: false
    }).start();

    Animated.timing(sidebarOpacity, {
      toValue: isMenuOpen ? 1 : 0,
      duration: 400,
      easing: Easing.out(Easing.ease),
      useNativeDriver: false
    }).start();
  }, [isMenuOpen]);

  return (
    <SafeAreaView className="bg-gray-900 mt-10 mb-4">
      <View className="flex-row justify-between items-center h-15 px-4 bg-gray-700">
        <TouchableOpacity className="p-2" onPress={toggleMenu}>
          {isMenuOpen ? (
            <Image
              source={require('../assets/closenav.png')}
              className="w-6 h-6 tint-white"
            />
          ) : (
            <Image
              source={require('../assets/NavIcon.png')}
              className="w-6 h-6 tint-white"
            />
          )}
        </TouchableOpacity>

        <View className="justify-center items-center">
          <Image
            source={{ uri: 'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500' }}
            className="w-8 h-8"
          />
        </View>

        <View className="justify-center items-center flex-row">
          <Text className="text-white">{username}</Text>
          <TouchableOpacity className="p-2" onPress={() => setShowProfile(!showProfile)}>
            <Image
              source={profileImageSource}
              className="w-8 h-8 rounded-full"
            />
          </TouchableOpacity>
        </View>
      </View>

      <Animated.View style={{ 
        backgroundColor: '#2d3748', 
        maxHeight: sidebarHeight, 
        opacity: sidebarOpacity,
        overflow: 'hidden'
      }}>
        <TouchableOpacity className="p-2 border-b border-gray-600">
          <Text className="text-white text-lg">About company</Text>
        </TouchableOpacity>
        <TouchableOpacity className="p-2 border-b border-gray-600">
          <Text className="text-white text-lg">Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity className="p-2 border-b border-gray-600">
          <Text className="text-white text-lg">Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity className="p-2 border-b border-gray-600">
          <Text className="text-white text-lg">Calendar</Text>
        </TouchableOpacity>
        <TouchableOpacity className="p-2 border-b border-gray-600">
          <Text className="text-white text-lg">Logout</Text>
        </TouchableOpacity>
      </Animated.View>
    </SafeAreaView>
  );
};

export default Navbar;
