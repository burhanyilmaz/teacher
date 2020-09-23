import React from 'react';
import {Text, Pressable} from 'react-native';

interface IButton {
  title: string;
  onPress: () => void;
}

const Button = ({title, onPress}: IButton) => {
  return (
    <Pressable
      onPress={onPress}
      style={{padding: 16, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{title}</Text>
    </Pressable>
  );
};

export default Button;
