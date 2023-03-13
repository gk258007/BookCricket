import React, { useState } from 'react'
import { Text, TextInput } from 'react-native-paper'
import { Button } from 'react-native-paper'
import ShadowView from 'react-native-shadow-view'
import { StyleSheet, TouchableOpacity } from 'react-native'
import {Image} from 'expo-image'
import { SafeAreaView } from 'react-native-safe-area-context'

export default  function Homepage({navigation,props})
{
    const [player_name, onChange] = React.useState("");
    const [player_name2, onChanged] = React.useState("");
    const [warning,setWarning] = useState("");

 function LessGo(){
    if(player_name.length==0 && player_name2.length==0)
    {
        setWarning("Please Enter Player names")
    }else{
        navigation.navigate('Home',{navigation,player_name,player_name2})
    }
}

  return (
    <SafeAreaView style={styles.rect}>
        <Text style={styles.label}>{"Player 1"}</Text>
        <TextInput
        style={styles.input}
        onChangeText={onChange}
        theme={{colors:{text:'black',primary:'black'}}}
        value={player_name}/>
        <Text style={styles.label}>{"Player 2"}</Text>
        <TextInput  
         theme={{colors:{text:'black',primary:'black'}}}
        style={styles.input}
        onChangeText={onChanged}
        value={player_name2}/>
        {/* <Text> {player_name}</Text>
        <Text> {player_name2}</Text> */}
        <TouchableOpacity  onPress={LessGo}>
          <ShadowView style={{
        width: 124,
        top:250,
        height: 60,
        backgroundColor: 'white',
        borderRadius: 10,
        top:-15,
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
          <Text style={styles.btntext}>Lets go</Text>
          </ShadowView>
          </TouchableOpacity>
          <Text>{warning}</Text>
        <Image style={styles.img}  source={require("./assets/Ellipse.png")}></Image>
        </SafeAreaView>
        
  )
}

const styles = StyleSheet.create({
    input: {
        opacity:3,
        backgroundColor:'transparent',
        fontSize:18,
        fontFamily: 'IBM Plex Mono',
        borderColor:'black',
        alignSelf:'center',
        height: 70,
        overflow:'hidden',
        width:336,
        margin: 10,
        zIndex:0,
        borderRadius:8,
        borderWidth:1,
    },
    label:{
        top: 20,
        backgroundColor:'#DBDABD',
        marginStart:10,
        shadowColor:"#DBDABD",
        alignSelf:"flex-start",
        paddingHorizontal:3,
        marginTop:1,
        left: 45,
        zIndex:1,
        elevation:1, 
    },
    btntext:{
        alignSelf:'center',
        fontFamily:'IBM Plex Mono',
        fontSize:20,
        top:-1
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
    img:{
        alignSelf:'center',
        top:'10%',
        width:'100%',
        height:'60%'
    }
})

