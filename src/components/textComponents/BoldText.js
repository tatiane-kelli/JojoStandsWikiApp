import React from 'react';
import { Text as RNText } from 'react-native';

function BoldText({ style, ...props }) {
  return <RNText style={[{ fontFamily: 'RobotoCondensed-SemiBold' }, style]} {...props} />;
};

export default BoldText;