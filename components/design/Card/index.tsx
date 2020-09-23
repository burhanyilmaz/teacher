import React from 'react';
import {View, Text} from 'react-native';

interface ICard {
  title: string;
}

const Card = ({title}: ICard) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default Card;
