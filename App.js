import * as React from 'react';
import {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ded from './Ded';
import Strike from './Strike';
import Veedu from './Veedu';
import Chase from './Chase';
import Homepage from './Homepage';
import Scorr from './Scoreboard';
import Draw from './Draw';
import Welcomescreen from './Welcomescreen';

// import { Flip } from './Flip';
const Stack = createNativeStackNavigator();

const App = () => {
  
  return (
  <NavigationContainer>
    <Stack.Navigator>
    {/* <Stack.Screen  name="start" component={Welcomescreen}/>  */}
    <Stack.Screen name="Lobby" component={Homepage}/> 
      <Stack.Screen
      name="Home"
      component={Ded}
      options={{ title: 'TOSS' }}/>
      <Stack.Screen name="Veedu" component={Veedu} />
      {/* <Stack.Screen name="Flip" component={Flip} /> */}
      <Stack.Screen name="Strike" component={Strike} /> 
      <Stack.Screen name="Draw" component={Draw} /> 
      <Stack.Screen name="Chase" component={Chase}/>
      <Stack.Screen name="Scorr" component={Scorr}/>
      </Stack.Navigator>
</NavigationContainer>
  );
};

export default App;