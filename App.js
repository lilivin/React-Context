import { Text, View } from 'react-native';
import React from 'react';
import { User } from './components/User';
import StylesProvider from './state/styles-context';
export const UserContext = React.createContext();

export default function App() {
  return (
    <StylesProvider>
      <View>
        <Text>Open up App.js to start working on ysour app!</Text>
        <User />
      </View>
    </StylesProvider>
  );
}
