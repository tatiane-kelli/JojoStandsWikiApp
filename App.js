import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import StandList from './src/components/StandsList';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Bangers-Regular': require('./assets/fonts/Bangers-Regular.ttf'),
    'RobotoCondensed-SemiBold': require('./assets/fonts/RobotoCondensed-SemiBold.ttf'),
    'RobotoCondensed-Regular': require('./assets/fonts/RobotoCondensed-Regular.ttf'),
  });

  return (
    <View style={styles.container}>
      <StandList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
});
