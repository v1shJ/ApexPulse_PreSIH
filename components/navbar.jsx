import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <SafeAreaView className="bg-gray-900 mt-10">
      <View className="flex-row justify-between items-center h-15 px-4 bg-gray-700 mb-3">
        <TouchableOpacity className="p-2" onPress={toggleMenu}>
          {isMenuOpen ? (
            <Image
              source={require('../assets/closenav.png')}
              className="w-6 h-6 tint-white"
            />
          ) : (
            <Image
              source={require('../assets/Nav-Icon.png')}
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

        <View className="justify-center items-center">
          <TouchableOpacity className="p-2">
            <Image
              source={require('../assets/profile.png')}
              className="w-8 h-8 rounded-full"
            />
          </TouchableOpacity>
        </View>
      </View>

      {isMenuOpen && (
        <View className="bg-gray-700 py-2">
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
        </View>
      )}
    </SafeAreaView>
  );
};

export default Navbar;
