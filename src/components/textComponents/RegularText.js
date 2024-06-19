import React from 'react';
import { Text as RNText } from 'react-native';

function RegularText({ style, ...props }) {
  return <RNText style={[{ fontFamily: 'RobotoCondensed-Regular' }, style]} {...props} />;
};

export default RegularText;