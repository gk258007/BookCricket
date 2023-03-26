import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Text } from 'react-native-paper'
import { StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const SCREEN_WIDTH = Dimensions.get("window").width;

export default function Scoreboard({route}) {
  const navigation = useNavigation();
  const score = route.params.Score;
  const val = route.params.val;
  const res = route.params.res;
  const names = route.params.perso;
  const op = route.params.resms;
  console.log(op)

  function sharebtn(){
    navigation.navigate('Veedu',{navigation});
  }
  function gohomebtn(){
    navigation.navigate('Welcome',{navigation});
  }
  function playagain(){
    navigation.navigate('Team',{navigation});
  }



  return (
    <View style={styles.rect}>
      <View style={styles.vs}>
      <Image style={styles.image}source={require("./assets/VS.png")}/>
      </View>  
      <Text style={{fontFamily:'IBM Plex Mono',fontSize:23,left:'20%',top:'3%'}}>{names[0]}</Text>
      <Text style={{fontFamily:'IBM Plex Mono',fontSize:23,left:'70%',top:'-2%'}}>{names[1]}</Text>  
        {/* <Text>Final Scoreboard:{score} </Text>
        <Text>Target Score was :{val}</Text> */}
        <Text style={{fontFamily:'IBM Plex Mono', fontSize:22,textAlign:'center',top:50}}>{op}</Text>
        <View style={styles.extrasfiled}>
        <Image style={styles.extras} source={require("./assets/back.png")}/>
        </View>
        <View style={{width:'20%',height:'50%',top:'77%',left:'7%',position:'absolute'}}>
       <TouchableOpacity onPress={sharebtn}>
       <Image style={{width:66,height:64}}source={require("./assets/sharebtn.png")}/>
       </TouchableOpacity>
       </View >
       <View style={{width:'20%',height:'50%',top:'74%',left:'40%',position:'absolute'}}>
       <TouchableOpacity onPress={playagain}>
       <Image style={{width:66,height:64}}source={require("./assets/goback.png")}/>
       </TouchableOpacity>
       </View>
       <View style={{width:'20%',height:'50%',top:'77%',left:'74%',position:'absolute'}}>
        <TouchableOpacity onPress={gohomebtn}>
        <Image style={{width:66,height:64}}source={require("./assets/homebtn.png")}/>
        </TouchableOpacity>
       </View>
        <View style={styles.extrbtn}>
        <Image style={styles.trophy} source={require("./assets/Trophy.png")}></Image>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
  Fed: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  extrasfiled:{
    position:'absolute',
    top:'64%',
    alignSelf:'center',
    height:SCREEN_WIDTH * 0.64,
    width:SCREEN_WIDTH * 1
  },
  extrbtn:{
    position:'absolute',
    top:'54%',
    left:SCREEN_WIDTH * 0.19,
    height:SCREEN_WIDTH * 0.41,
    width:SCREEN_WIDTH * 0.37
  },
  texxted:{
    top:'-3%',
    width:'30%',
    height:'10%',
    left:'10%'
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
  trophy:{
    top:'-55%',
    left:'25%',
    position:'absolute',
    height:'100%',
    width:'100%'
  },
  vs:{
    alignSelf:'center',
    position:'absolute',
    height:'70%',
    width:'70%'
  },
  extras:{
    height:'100%',
    width:'100%'
  },
  texxtc:{
    left:'2%',
    position:'absolute'
  },
  image:{
    position:'absolute',
    width:'15%',
    height:'20%',
    marginLeft:'35%'
  }, 
  player:
        {
          fontFamily: 'IBM Plex Mono',
          top:'10%',
          fontSize:20,
          marginLeft:'2%'
        },
        player2:{
          position:'absolute',
          textAlign:'center',
          fontFamily: 'IBM Plex Mono',
          fontSize:20,
          top:'-15%',
          marginLeft:'1%'
        },
        texxtc:{
          width:'30%',
          height:'10%',
          top:'-12%',
          marginLeft:'60%'
        },
  

})
