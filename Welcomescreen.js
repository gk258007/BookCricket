import React from 'react'
import { Text } from 'react-native-paper'
import { NativeBaseProvider, View } from 'native-base'
import { Button } from 'react-native-paper'
import { StyleSheet } from 'react-native'
import { useFonts } from 'expo-font';
export default function Welcomescreen({navigation}) {
  const image = require('./assets/cricket-stadium-background-vector-illustration 1.png')
  const font = useFonts({
    'Robus': require('./assets/fonts/Robus-Demo.otf')
  })
    function buttontest(){
      navigation.navigate('Lobby',{navigation})
    }

  return (
    <NativeBaseProvider >
        <View style={style.rect}>
          <View style={style.box}>
            <Text style={style.text}>Book Cricket</Text>
            {/* <Image source={image}></Image> */}
          </View>
          {/* <Button onPress={buttontest}>Less Go</Button> */}
        </View>
        </NativeBaseProvider>
  )
}

const style = StyleSheet.create({
  box :{
    backgroundColor:"#FD4F00",
    position:'absolute',
    alignItems:'center',
    width: 290.16,
    height: 195.77 ,
    marginTop:30,
    marginLeft:50,
    borderWidth: 1,
    borderRadius:5,
  },
  rect:{
    alignContent:'center',
   marginTop:-70,
    width: 389 ,
    bottom:200,
    height: 600 ,
    left: 9.99  ,
    top: 96.23  ,
    backgroundColor: "#DBDABD",
  },
  text:{
    fontFamily:'Robus',
    fontSize:70,
  }
  
})