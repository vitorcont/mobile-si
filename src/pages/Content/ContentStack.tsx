import { createStack } from '@mobile/services/navigation';
import React from 'react';
import { CreateReport } from './CreateReport';

const ContentStack = () => {
  const Content = createStack();

  return (
    <Content.Navigator screenOptions={{ headerShown: false }} initialRouteName="Content">
      <Content.Screen name="CreateReport" component={CreateReport} />
    </Content.Navigator>
  );
};

export default ContentStack;
