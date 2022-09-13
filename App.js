import * as React from 'react';
import {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ded from './Ded';
import Strike from './Strike';
import Veedu from './Veedu';
import Chase from './Chase';
import Scorr from './Scoreboard';
const Stack = createNativeStackNavigator();

const App = () => {
  
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
      name="Home"
      component={Ded}
      options={{ title: 'TOSS' }}/>
      <Stack.Screen name="Veedu" component={Veedu} />
      <Stack.Screen name="Strike" component={Strike} /> 
      <Stack.Screen name="Chase" component={Chase}/>
      <Stack.Screen name="Scorr" component={Scorr}/>
      </Stack.Navigator>
</NavigationContainer>
  );
};

export default App;