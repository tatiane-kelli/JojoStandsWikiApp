import React from 'react';
import { Text as RNText } from 'react-native';

function TitleText({ style, ...props }) {
  return <RNText style={[{ fontFamily: 'Bangers-Regular' }, style]} {...props} />;
};

export default TitleText;