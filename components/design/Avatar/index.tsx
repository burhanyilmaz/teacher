import React from 'react';
import {Image} from 'react-native';

interface IRoundedAvatar {
  uri: string;
  size: number;
  borderWidth?: number;
}

const Avatar = ({uri, size, borderWidth = 0}: IRoundedAvatar) => {
  return (
    <Image
      source={{uri}}
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        borderWidth,
      }}
    />
  );
};

export default Avatar;
