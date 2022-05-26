import { createStack } from '@mobile/services/navigation';
import React from 'react';
import { CreateReport } from './CreateReport';
import ReportsList from './ReportsList';

const HomeStack = () => {
  const StartStack = createStack();

  return (
    <StartStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="ReportsList">
      <StartStack.Screen name="ReportsList" component={ReportsList} />
      <StartStack.Screen name="CreateReport" component={CreateReport} />
    </StartStack.Navigator>
  );
};

export default HomeStack;
