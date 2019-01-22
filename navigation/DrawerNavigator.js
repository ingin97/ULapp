import React from 'react';
import { Platform, Dimensions } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import InfoScreen from '../screens/InfoScreen';
import ProgramScreen from '../screens/ProgramScreen';

import MenuDrawer from '../components/MenuDrawer';


const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
  drawerWidth: WIDTH*0.83,
  contentComponent: ({ navigation }) => {
    return(<MenuDrawer navigation={navigation}/>)
  }
}

const DrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Info: {
      screen: InfoScreen
    },
    Program: {
      screen: ProgramScreen
    },
  },
  DrawerConfig
)

export default createAppContainer(DrawerNavigator);
