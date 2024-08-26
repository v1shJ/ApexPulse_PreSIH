import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        router.push('/homepage');
    };

    return (
        <View className="flex-1 justify-center items-center bg-white">
            <TextInput
                className="w-64 h-10 border border-gray-300 rounded-md px-2 mt-4"
                placeholder="Email"
                secureTextEntry
                value={password}
                onChangeText={setEmail}
            />
            <TextInput
                className="w-64 h-10 border border-gray-300 rounded-md px-2 mt-4"
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <TouchableOpacity
                className="bg-blue-500 rounded-md px-4 py-2 mt-4"
                onPress={handleLogin}
            >
                <Text className="text-white">Login</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Login;