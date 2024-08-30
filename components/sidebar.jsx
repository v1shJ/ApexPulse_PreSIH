// Sidebar.jsx
import React from 'react';
import { View, Text, Image, Pressable, ScrollView } from 'react-native';
import { tw } from 'nativewind';

const Sidebar = () => {
  return (
    <View style={tw`w-64 bg-gray-50 dark:bg-gray-800 flex-1`}>
      <View style={tw`px-4 py-6`}>
        <ScrollView>
          <Pressable style={tw`flex-row items-center mb-6`}>
            <Image
              source={{ uri: 'https://flowbite.com/docs/images/logo.svg' }}
              style={tw`h-6 mr-3`}
            />
            <Text style={tw`text-xl font-semibold text-gray-900 dark:text-white`}>Flowbite</Text>
          </Pressable>
          <View style={tw`space-y-2`}>
            <Pressable style={tw`flex-row items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700`}>
              <Text style={tw`text-gray-500 mr-3`}>&#x1F4C8;</Text>
              <Text style={tw`text-gray-900 dark:text-white`}>Dashboard</Text>
            </Pressable>
            <Pressable style={tw`flex-row items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700`}>
              <Text style={tw`text-gray-500 mr-3`}>&#x1F4D1;</Text>
              <Text style={tw`text-gray-900 dark:text-white`}>Kanban</Text>
              <View style={tw`bg-gray-100 rounded-full p-1 ml-3`}>
                <Text style={tw`text-gray-800`}>Pro</Text>
              </View>
            </Pressable>
            <Pressable style={tw`flex-row items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700`}>
              <Text style={tw`text-gray-500 mr-3`}>&#x1F4E6;</Text>
              <Text style={tw`text-gray-900 dark:text-white`}>Inbox</Text>
              <View style={tw`bg-blue-100 rounded-full p-1 ml-3`}>
                <Text style={tw`text-blue-800`}>3</Text>
              </View>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Sidebar;
