import AppContent from '@mobile/AppContent';
import store from '@mobile/store';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import FlashMessage from 'react-native-flash-message';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <FlashMessage position="top" />
      <AppContent />
    </Provider>
  );
}

export default App;