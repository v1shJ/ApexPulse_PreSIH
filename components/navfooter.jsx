import React from 'react';
import { View, Text, TouchableOpacity,  Image, Linking } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);

export default function DownNavbar() {
  return (
    <StyledView className="bg-black shadow dark:bg-gray-800">
        <StyledView className="flex-row justify-between p-4 items-center font-medium text-white ">
          <StyledTouchableOpacity onPress={() => {}} className='ml-8'>
          <Image
              source={require('../assets/HomeIcon.png')}
              className="w-6 h-6 tint-white"
            />
          </StyledTouchableOpacity>
          <StyledTouchableOpacity onPress={() => {}}>
          <Image
              source={require('../assets/NotifIcon.png')}
              className="w-6 h-6 tint-white"
            />
          </StyledTouchableOpacity>
          <StyledTouchableOpacity onPress={() => {}} className='mr-8'>
          <Image
              source={require('../assets/CalenderIcon.png')}
              className="w-6 h-6 tint-white"
            />
          </StyledTouchableOpacity>
        </StyledView>
    </StyledView>
  );
}
