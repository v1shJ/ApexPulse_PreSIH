import React from 'react';
import { View, Text, StatusBar } from 'react-native';

const Statusbar = () => {
  return (
    <View>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="black"
      />
    </View>
  );
};

export default Statusbar;