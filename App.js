
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {createAppContainer} from "react-navigation";
import {createBottomTabNavigator} from "react-navigation-tabs";
import FbScreen from "./screens/fb";
import InstaScreen from "./screens/insta";


export default class App extends React.Component {
  render(){
  return (
   

   <AppContainer />
   
  );
}
}
const TabNavigation=createBottomTabNavigator({
  Facebook:{screen:FbScreen},
  Instagram:{screen:InstaScreen},
})
const AppContainer=createAppContainer(TabNavigation)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
