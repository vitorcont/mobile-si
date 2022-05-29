import { createStack, createBottomTab } from '@mobile/services/navigation';
import React from 'react';
import { CreateReport } from './Home/CreateReport';
import { MaterialIcons, Entypo, FontAwesome5 } from '@expo/vector-icons';

import { tabBarOptions } from './Content.style';
import { theme } from '@mobile/global/styles/theme';
import HomeStack from './Home/HomeStack';
import Map from './Map';

const ContentStack = () => {
  const Tab = createBottomTab();

  return (
    <>
      <Tab.Navigator
        tabBarOptions={tabBarOptions}
        backBehavior="initialRoute"
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: theme.colors.primary,
            paddingTop: 10,
            paddingBottom: 10,
            height: '8%',
          },
          tabBarLabelStyle: {
            fontSize: 14,
            fontFamily: theme.fonts.Bold,
          },
          tabBarInactiveTintColor: '#e4e4e4a4',
          tabBarActiveTintColor: '#ffffff',
        }}>
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarIcon: ({ color }) => <MaterialIcons name="report" size={28} color={color} />,
            tabBarLabel: 'Ocorrências',
          }}
        />
        <Tab.Screen
          name="Map"
          component={Map}
          options={{
            tabBarIcon: ({ color }) => <Entypo name="map" size={24} color={color} />,
            tabBarLabel: 'Mapa',
          }}
        />
        <Tab.Screen
          name="Profile"
          component={() => <></>}
          options={{
            tabBarIcon: ({ color }) => <FontAwesome5 name="user-circle" size={24} color={color} />,
            tabBarLabel: 'Perfil',
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default ContentStack;
