
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from  'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import BookTransaction from './screen/bookTransaction'
import SearchScreen from './screen/searchScreen'
export default class App extends React.Component {
  render(){
    return (
      <AppContainer/>

      );
    }

  }
  const tabNavigator = createBottomTabNavigator({
Transaction:{screen:BookTransaction},
Search : {screen:SearchScreen}
  })
  const AppContainer = createAppContainer(tabNavigator)


