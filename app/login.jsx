import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { styled } from "nativewind";
const StyledButton = styled(TouchableOpacity);

export default function SignInScreen() {
  return (
    <View className="flex-1 bg-gray-50 dark:bg-gray-900 justify-center px-6 py-8">
      <View className="w-full bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700 sm:max-w-md">
        <View className="p-7 m-1 items-center space-y-4 md:space-y-6">
          <Text className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign in to your account
          </Text>
          <View>
            <View className="space-y-4 md:space-y-6">
              <View>
                <Text className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Email or Username
                </Text>
                <TextInput
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  required
                />
              </View>
              <View>
                <Text className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </Text>
                <TextInput
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="•••••••"
                  secureTextEntry
                  required
                />
              </View>
              <View className="flex-row gap-3">
                <View className="flex items-start">
                  <Text className=" text-sm text-gray-500 dark:text-gray-300">
                    Remember me
                  </Text>
                </View>
                <StyledButton className="items-end">
                  <Text className="text-sm font-medium text-gray-400 dark:text-primary-500">
                    Forgot password?
                  </Text>
                </StyledButton>
              </View>
              <StyledButton className="bg-blue-600 items-center rounded-lg bg-primary-600 focus:ring-primary-300 font-medium text-sm px-5 py-2.5 text-white text-center">
                <Text>Sign in</Text>
              </StyledButton>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
