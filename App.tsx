import AppContent from '@mobile/AppContent';
import store from '@mobile/store';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <AppContent />
    </Provider>
  );
};

export default App;
