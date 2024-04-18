import { BottomBarPaper } from '@/components/Sections/BottomBarPaper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';

export default function TabLayout() {
  return (

    <BottomBarPaper
      safeAreaInsets={{ bottom: 0 }}
      screenOptions={
        {
          // API Reference: https://reactnavigation.org/docs/material-bottom-tab-navigator#options
        }          // API Reference: https://reactnavigation.org/docs/material-bottom-tab-navigator#options

      }
    >
    <BottomBarPaper.Screen
      name='Feed'
      options={{
        tabBarLabel: 'Feed',
        tabBarIcon(props:any) {
          return (
            <MaterialCommunityIcons
              color={props.color}
              size={24}
              name={props.focused ? 'rss-box' : 'rss'}
            />
          )
        },
      }}
    />
    <BottomBarPaper.Screen
      name='Create'
      options={{
        tabBarLabel: 'Create',
        tabBarIcon(props:any) {
          return (
            <MaterialCommunityIcons
              color={props.color}
              size={24}
              name={props.focused ? 'plus-box' : 'plus-box-outline'}
            />
          )
        },
      }}
    />
    <BottomBarPaper.Screen
      name='Inbox'
      options={{
        tabBarLabel: 'Inbox',
        tabBarIcon(props:any) {
          return (
            <MaterialCommunityIcons
              color={props.color}
              size={24}
              name={props.focused ? 'bell' : 'bell-outline'}
            />
          )
        },
      }}
    />
    </BottomBarPaper>
  );
}
