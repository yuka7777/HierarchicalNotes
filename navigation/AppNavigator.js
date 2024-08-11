import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import NoteScreen from '../screens/NoteScreen';
import FolderScreen from '../screens/FolderScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Note" component={NoteScreen} />
      <Stack.Screen name="Folder" component={FolderScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
