import React, { useEffect, useState } from 'react'
import { Button, Text } from 'react-native-paper'
import { View,StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import {Image} from 'expo-image'


export default function Bowling ({route}) {

  const navigation = useNavigation();
  const[runs,Setruns] = useState(null);
  const[balls,setballs] =useState(0);
  const[Score,SetScore] = useState(null);
  const[wicket,setWicket]=useState(0);
  const perso = route.params.play;
  const winer = route.params.pwo;
  const [othp,setOthp] = useState("");

  useEffect(()=>{
    for(var i=0;i<perso.length;i++)
    {
    if(winer!=perso[i]){
      setOthp(perso[i])
      // console.log("The opponednt",othp)
    }else{
      const sum = perso[i]
    }
    }
  })


  const scoregen =(max,min)=>{
    return Math.floor(min + Math.random() * (max - min));
  }
  
  const HitIt=()=>{
    //console.log(perso)
    if(wicket<=3 && balls<6)
    {
      //runs gets incremented
      Setruns(scoregen(0,6))
      if(runs==0)
      {
        setballs(balls+1)
        setWicket(wicket+1)
      }else{
        setballs(balls+1)
        SetScore(Score+runs)
      }
    }else{
      alert("GAME OVER");
      navigation.navigate('Chase',{Score,navigation,perso,othp});
      //console.log("Total Score "+Score);
    }
  }
  //check if the balls<=6 and the number of wickets are less than 3  if so then throw the ball and score run
  //if the run is 0 then incrase the wicket  or else add up to the score variable .
  
  return (
    <View style={styles.rect}>
     <Image style={styles.image}source={require("./assets/VS.png")}/>
     <View style={styles.texxtc}>
     <Text style={styles.player2}>{perso[0]}</Text>
     </View>
     <View style={styles.texxted}>
     <Text style={styles.player}>{perso[1]}</Text> 
     </View>
     <Text style={{fontSize:15,textAlign:'center',top:'-13%',fontFamily:'IBM Plex Mono'}}>We have {winer} on Strike</Text>
     <View style={{width:'50%',height:'50%',alignSelf:'center',position:'absolute',top:'25%'}}>
     <View style={{width:'100%',height:'28%'}}>
      <Image style={styles.board} source={require('./assets/Scoreboard.png')}></Image>
     </View>
     </View>
     <View style={styles.score}>
     <Text style={styles.total}>{Score}</Text>
     <Text style={styles.run}>{runs}</Text>
     </View>
      {/* <Text>Ball :{balls}</Text>
      <Text>Wicket : {wicket}</Text>*/} 
      <Image style={styles.vector} source={require("./assets/Vector.png")} />
      <Image style={styles.imagestd} source={require("./assets/cricket-stadium.png")}/>
        <TouchableOpacity style={styles.strikebtn} onPress={HitIt}>
        <Image style={{height:'40%',width:'25%'}}source={require("./assets/strikbtn.png")}/>  
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  texxtc:{
    width:'60%',
    height:'10%',
    top:'-2%',
    marginLeft:'70%'
  },
  run:{
    fontSize:40,
    top:'20%',
    fontFamily:'IBM Plex Mono',
    color:'#0B063A'
  },
  image:{
    width:'19%',
    height:'10%',
    top:'6%',
    alignSelf:'center'
  },  
  total:{
    fontSize:50,
    fontFamily:'FlipClock'
  },
  strikebtn:{
    top:'20%',
    left:'40%'
  },
  imagestd:{
    position:'absolute',
    alignSelf:'center',
     width: '100%',
     height: '55%' ,
     top:'47%'
   },
   score:{
    alignSelf:'center',
    top:'2%',
   },
  texxted:{
    top:'-3%',
    width:'30%',
    height:'10%',
    left:'10%'
  },
  board:{
    alignSelf:'center',
    height:'30%',
    width:'120%'
  },
  player:
        {
          fontFamily: 'IBM Plex Mono',
          top:'-80%',
          color:'#0B063A',
          fontSize:20,
        },
        player2:{
          fontFamily: 'IBM Plex Mono',
          fontSize:20,
          color:'#0B063A',
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
  texxt:{
    fontFamily: 'IBM Plex Mono',
    textAlign:'center',
    fontSize:15    
  },
  vector:{
    top:16,
    right:50,
    height:20,
    width:20
  }

});