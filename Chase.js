import React, { useEffect, useState } from 'react'
import { Button, Text } from 'react-native-paper'
import { View,StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import {Image} from 'expo-image'


export default function Chase(props,{route}){
  const navigation = useNavigation();
    const[runs,Setruns] = useState(null);
    const[balls,setballs] =useState(0);
    const[Score,SetScore] = useState(null);
    const[wicket,setWicket]=useState(0);
    const val = props.route.params.Score+1
    const perso = props.route.params.perso;
    const oppo = props.route.params.othp;
    const [winner,setWinner] = useState("");

    




    const scoregen =(max,min)=>{
    return Math.floor(min + Math.random() * (max - min));
  }

  const HitIt=()=>{
    console.log("Wicket "+wicket)
    if(wicket<=3 && balls<6)
    {
      //runs gets incremented
      Setruns(scoregen(0,6))
      if(runs==0)
      {
        setballs(balls+1)
        setWicket(wicket+1)
        console.log("Wicket"+wicket)
      }else{
        setballs(balls+1)
        SetScore(Score+runs)
        //for testing the Draw functinality
        //SetScore(val-1);
      }
    }else{
      if(Score >= props.route.params.Score+1)
      {
        console.log(oppo)
        const resms=`Winer is ${oppo}`
        navigation.navigate('Scorr',{navigation,Score,val,perso,resms})
        console.log("Total Score "+Score);
      }else if(Score == props.route.params.Score)
      {
        console.log("Draw match")
        Alert.alert(
          "Draw Match",
          "Do you want to end or play a Super Ball",
          [
            {text:'End the game ', onPress:() => navigation.navigate('Scorr',{navigation,Score,val,res:"DRAW"})},
            {text:'Play another game', onPress:() => navigation.navigate('Draw',{navigation,oppo})},
          ],
          {cancelable: false}
        )
      }else{
        for(var i=0;i<perso.length;i++)
        {
          if(oppo!==perso[i])
        {
          console.log("winner",perso[i])
          const winner = perso[i]
          const resms = `Winner is ${winner}`
          console.log("total score "+Score,"Target was",props.route.params.Score+1)
        navigation.navigate('Scorr',{navigation,Score,val,perso,resms})
        }
        }
        //const resms = `Winner is ${res}`
        
      }
    }
  }

  return (
   <View style={styles.rect}>
    <Image style={styles.image}source={require("./assets/VS.png")}/>
     <View style={styles.texxtc}>
     <Text style={styles.player2}>{perso[0]}</Text>
     </View>
     <View style={styles.texxted}>
     <Text style={styles.player}>{perso[1]}</Text> 
     </View>
     <View style={styles.banner}>
     <Text style={{fontFamily:'IBM Plex Mono',fontSize:20}}>Batting {oppo}</Text>
     </View>
    <Text style={{textAlign:'center',fontFamily:'IBM Plex Mono'}} >Total score to chase {val}</Text>
    <View style={styles.score}>
     <Text style={styles.total}>{Score}</Text>
     <Text style={styles.run}>{runs}</Text>
     </View>
      {/* <Text>Ball :{balls}</Text>
      <Text>Wicket : {wicket}</Text>
      <Text>Runs : {runs}</Text> */}
      {/* <Button title="back" color="#e87a72" onPress={twoalert}>Hit!!🎾</Button> */}
      <View style={{width:'50%',height:'50%',alignSelf:'center',position:'absolute',top:'25%'}}>
      <View style={{width:'100%',height:'28%'}}>
      <Image style={styles.board} source={require('./assets/Scoreboard.png')}></Image>
     </View>
      </View>
      <Image style={styles.vector} source={require("./assets/Vector.png")} />
      <Image style={styles.imagestd} source={require("./assets/cricket-stadium.png")}/>
        <TouchableOpacity style={styles.strikebtn} onPress={HitIt}>
        <Image style={{height:'40%',width:'25%'}}source={require("./assets/strikbtn.png")}/>  
        </TouchableOpacity>
   </View>
   
  )
}

const styles = StyleSheet.create({
    Deod: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    run:{
      fontSize:40,
      top:'20%',
      fontFamily:'IBM Plex Mono',
      color:'#0B063A'
    },
    banner:{
      position:'absolute',
      top:'18%',
      alignSelf:'center'
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
    score:{
      alignSelf:'center',
      top:'2%',
     },
    texxtc:{
      width:'60%',
      height:'10%',
      top:'-2%',
      marginLeft:'70%'
    },image:{
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
          }

  
  });