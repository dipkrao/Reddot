import React from 'react';
import ApplicationNavigator from './src/navigation/ApplicationNaviagtor';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
      <SafeAreaProvider>
       <NavigationContainer>
          <ApplicationNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
  )
};