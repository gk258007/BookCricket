import React, { useCallback, useState } from 'react'
import { Text } from 'react-native-paper'
import { NativeBaseProvider, View } from 'native-base'
import { StyleSheet, TouchableOpacity } from 'react-native'
import {Image} from 'expo-image'
import ShadowView from 'react-native-shadow-view'



export default function Welcomescreen({navigation}) {
  
  function move(){
    navigation.navigate('Team')
  } 
  return (
    <NativeBaseProvider >
        <View style={style.rect}>
          <View style={style.box}>
            <Text style={style.text}>Book</Text>
            <Text style={style.text}>Cricket</Text>
          </View>
          <Image style={style.image} source={require("./assets/cricket-stadium-background-vector-illustration.png")}/>
          <TouchableOpacity  onPress={move}>
          <ShadowView style={{
        width: 154,
        top:250,
        height: 60,
        backgroundColor: 'white',
        borderRadius: 10,
        top:250,
    marginLeft:120,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {
            width: 8, height: 8,
        },
        shadowOpacity: 2.00,
        shadowRadius: 0.00
    }}>
      <Image style={style.vector} source={require("./assets/Vector.png")} />
          <Text style={style.btntext}>Start</Text>
          </ShadowView>
          </TouchableOpacity>    
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
    border:1,
    borderRadius:5,
  },
  vector:{
    top:16,
    right:50,
    height:20,
    width:20
  },
  rect:{
    alignContent:'center',
   marginTop:-70,
    width: '95%',
    height: '99%',
    left: 9.99  ,
    top: 96.23  ,
    backgroundColor: "#DBDABD",
  },
  btntext:{
    alignSelf:'center',
    fontFamily:'IBM Plex Mono',
    fontSize:20,
    top:-11
  },
  text:{
    color:'white',
    fontFamily:'Inter-Black',
    fontSize:100,
  },
  image:{
   position:'absolute',
   alignSelf:'center',
    width: '100%',
    height: '50%' ,
    top:'60%'
  },
  button:{
    position:'absolute',
    fontSize:20,
    top:250,
    justifyContent:'center',
    marginLeft:120,
    borderRadius:4,
    backgroundColor:'white',
    width: 154,
    height: 60,
    boxShadow: '1px 2px 9px #F4AAB9'
  }
  
})