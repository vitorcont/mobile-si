import { NavigationContainer } from '@react-navigation/native';
import React, { PureComponent } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { navigationRef } from '@mobile/services/navigation';
import Navigator from '@mobile/stack';

const AppContent = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer
        ref={navigationRef}
      >
        <Navigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default AppContent;
