import React from 'react';

import { createStack } from '@mobile/services/navigation';

import Login from './Login';

const AuthStack = () => {
  const StartStack = createStack();

  return (
    <StartStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Login"
    >
      <StartStack.Screen name="Login" component={Login} />
    </StartStack.Navigator>
  );
};

export default AuthStack;
