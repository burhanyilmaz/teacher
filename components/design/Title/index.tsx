import React from 'react';
import {Text} from 'react-native';

interface ITitle {
  title: string;
}

const Title = ({title}: ITitle) => {
  return <Text>{title}</Text>;
};

export default Title;
