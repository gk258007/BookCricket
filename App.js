import * as React from 'react';
import {useCallback,useEffect} from 'react';
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
import {useFonts} from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';



// import { Flip } from './Flip';
const Stack = createNativeStackNavigator();

const App = () => {
  const [fontsLoaded] = useFonts({
    "Inter-Black": require('./assets/fonts/RobusDemo.otf'),
    "IBM Plex Mono": require('./assets/fonts/IBMPlexMono-Bold.ttf'),
   });
  useEffect(() =>{
    async function prepare(){
      await SplashScreen.preventAutoHideAsync();
    }
  })
   const onLayoutRootView = useCallback(async ()=>{
    if(fontsLoaded){
      await SplashScreen.hideAsync();
    }
   }, [fontsLoaded]);
   if(!fontsLoaded){
    return undefined;
   } else{
    SplashScreen.preventAutoHideAsync();
   }
  return (
  <NavigationContainer    >
    <Stack.Navigator>
   <Stack.Screen  name="Welcome" options={{headerStyle:{
    backgroundColor:'#7FA2D1'
   },headerTintColor:"#7FA2D1",
   headerTitleAlign:'center',
   headerTitleStyle:{color:'black'}}}  component={Welcomescreen}/>  
    <Stack.Screen name="Team" options={{headerStyle:{
    backgroundColor:'#7FA2D1'
   },headerTintColor:"#7FA2D1",
   headerTitleAlign:'center',
   headerTitleStyle:{color:'black'}}} component={Homepage}/> 
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