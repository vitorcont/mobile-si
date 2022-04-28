import AppContent from '@mobile/AppContent';
import store from '@mobile/store';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import FlashMessage from 'react-native-flash-message';
import { Provider } from 'react-redux';
import { Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

const App = () => {
  let [fontsloaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsloaded) return <AppLoading />;

  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <FlashMessage position="top" />
      <AppContent />
    </Provider>
  );
};

export default App;
