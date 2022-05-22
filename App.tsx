import { Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { CreateReport } from '@mobile/pages/Content/CreateReport';
import store from '@mobile/store';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux';

const App = () => {
  let [fontsloaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsloaded) return <AppLoading />;

  return (
    <Provider store={store}>
      <StatusBar style="light" />
      {/* <AppContent /> */}
      <CreateReport />
    </Provider>
  );
};

export default App;
