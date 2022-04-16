import React from 'react';
import AuthStack from './pages/Auth/AuthStack';
import { createStack } from './services/navigation';

const Navigator = () => {
  const MainStack = createStack();

  return (
    <MainStack.Navigator
      initialRouteName='Auth'
      screenOptions={{ headerShown: false }}
    >
      <MainStack.Screen name='Auth' component={AuthStack} />
    </MainStack.Navigator>
  );
};

export default Navigator;
