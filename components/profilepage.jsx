import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
const StyledButton = styled(TouchableOpacity);
import { styled } from "nativewind";

const ProfilePage = ({username}) => {
  return (
    <View className="bg-gray-900 relative -top-36">
      <View className="bg-gray-800 rounded-xl shadow border border-gray-700">
        <View className="px-4 py-5 sm:px-6">
          <Text className="text-lg leading-6 font-medium text-violet-400">
            Profile
          </Text>
        </View>
        <View className="border-t border-gray-700 px-4 py-3 sm:p-0">
          <View className="sm:divide-y sm:divide-gray-700">
            <View className="py-3 sm:py-5 sm:flex sm:flex-row sm:gap-4 sm:px-6">
              <Text className="text-sm font-medium text-gray-400 sm:w-1/3">
                Name
              </Text>
              <Text className="mt-1 text-sm text-white sm:mt-0 sm:w-2/3">
                {username}
              </Text>
            </View>
            <View className="py-3 sm:py-5 sm:flex sm:flex-row sm:gap-4 sm:px-6">
              <Text className="text-sm font-medium text-gray-400 sm:w-1/3">
                Phone number
              </Text>
              <Text className="mt-1 text-sm text-white sm:mt-0 sm:w-2/3">
                9889323493
              </Text>
            </View>
            <View className="py-3 sm:py-5 sm:flex sm:flex-row sm:gap-4 sm:px-6">
              <Text className="text-sm font-medium text-gray-400 sm:w-1/3">
                Email address
              </Text>
              <Text className="mt-1 text-sm text-white sm:mt-0 sm:w-2/3">
                useremail@example.com
              </Text>
            </View>
            <View className="py-3 sm:py-5 sm:flex sm:flex-row sm:gap-4 sm:px-6">
              <Text className="text-sm font-medium text-gray-400 sm:w-1/3">
                Company
              </Text>
              <Text className="mt-1 text-sm text-white sm:mt-0 sm:w-2/3">
                VJTI
              </Text>
            </View>
          </View>
        </View>
      </View>
            <View className="mt-4">
              <StyledButton className="bg-red-600 px-4 py-2 rounded-lg items-center">
                <Text className="text-white">Edit Profile</Text>
              </StyledButton>
            </View>

      {/* <View>
       Here we can add statistic of the employee. Maybe an option to see the graph of month (jan, feb) vs the number of days u attended
      </View> */}
    </View>
  );
};

export default ProfilePage;
