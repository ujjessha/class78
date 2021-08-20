import * as React from 'react';
import { Text, View, StyleSheet, } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "./screens/homeScreen";
import IssLocation from "./screens/issLocation"
import Meteors from "./screens/meteors"
const Stack=createStackNavigator()
export default function App(){
  return(
<NavigationContainer >
<Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="home">
<Stack.Screen
name="home"
component={HomeScreen}
/><Stack.Screen
name="issScreen"
component={IssLocation}
/>
<Stack.Screen
name="meteor"
component={Meteors}
/>
</Stack.Navigator>
 </NavigationContainer>
  )
}


