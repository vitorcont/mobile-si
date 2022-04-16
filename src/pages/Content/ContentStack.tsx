import React from 'react';

import { createStack } from '@mobile/services/navigation';

const ContentStack = () => {
  const Content = createStack();

  return (
    <Content.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Content"
    >
      <Content.Screen name="Content" component={() => <></>} />
    </Content.Navigator>
  );
};

export default ContentStack;
