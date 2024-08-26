import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Homepage from './homepage';
import Login from './login';

export default function RootLayout() {
  return (
    <Stack screenOptions={{headerShown: false}}>
    </Stack>
  );
}
