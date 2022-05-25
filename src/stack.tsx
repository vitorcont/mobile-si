import React from 'react';
import AuthStack from './pages/Auth/AuthStack';
import ContentStack from './pages/Content/ContentStack';
import { createStack } from './services/navigation';

const Navigator = () => {
  const MainStack = createStack();

  return (
    <MainStack.Navigator initialRouteName="Auth" screenOptions={{ headerShown: false }}>
      <MainStack.Screen name="Auth" component={AuthStack} />
      <MainStack.Screen name="Content" component={ContentStack} />
    </MainStack.Navigator>
  );
};

export default Navigator;
