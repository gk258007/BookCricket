import React from 'react'
import { Text } from 'react-native-paper'
import { NativeBaseProvider, View } from 'native-base'
import { Button } from 'react-native-paper'
export default function Welcomescreen() {
    function buttontest(){
        console.log("OMG")
    }
  return (
    <NativeBaseProvider >
        <View style={{backgroundColor: "black",width:450,height:800}} >
            <Text style={{color:"white",fontSize:55,textAlign:'center'}}>BookCricket</Text>
            <Button onPress={buttontest}>Less Go</Button>
        </View>
        </NativeBaseProvider>
  )
}
