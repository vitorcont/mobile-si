import React from 'react';

import { createStack } from '@mobile/services/navigation';

import Login from './Login';
import RecoverPassword from './RecoverPassword';
import SignUp from './SignUp';

const AuthStack = () => {
  const StartStack = createStack();

  return (
    <StartStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
      <StartStack.Screen name="Login" component={Login} />
      <StartStack.Screen name="SignUp" component={SignUp} />
      <StartStack.Screen name="RecoverPassword" component={RecoverPassword} />
    </StartStack.Navigator>
  );
};

export default AuthStack;
