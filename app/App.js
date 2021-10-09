import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
// internal dependencies
import Profile from './components/icons/Profile';
// styles
import { styles } from './styles/utils';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>I love Kellie she is cool</Text>
      <StatusBar style="auto" />
      <Profile />
    </View >
  );
}

export default App;
