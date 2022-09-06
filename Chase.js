import React, { useState } from 'react'
import { Button, Text } from 'react-native-paper'
import { View,StyleSheet } from 'react-native'
export default function Chase(props,route){
    const[runs,Setruns] = useState(null);
    const[balls,setballs] =useState(0);
    const[Score,SetScore] = useState(null);
    const[wicket,setWicket]=useState(0);
    const scoregen =(max,min)=>{
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  const HitIt=()=>{
    console.log("Wicket "+wicket)
    if(wicket<=3 && balls<6)
    {
      //runs gets incremented
      Setruns(scoregen(0,5))
      if(runs==0)
      {
        setballs(balls+1)
        setWicket(wicket+1)
        console.log("Wicket"+wicket)
      }else{
        setballs(balls+1)
        SetScore(Score+runs)
      }
    }else{
      if(Score == props.route.params.Score+1)
      {
        console.log("Total Score "+Score);
      }else if(Score == props.route.params.Score)
      {
        alert("TIE")
      }else{
        console.log("total score "+Score)
        alert("LOST THE MATCH");
      }
    }
  }
  return (
   <View style={styles.Deod}>
    <Text>Total score to chase {props.route.params.Score+1}</Text>
    <Text>Batting</Text>
      <Text>Ball :{balls}</Text>
      <Text>Wicket : {wicket}</Text>
      <Text>Runs : {runs}</Text>
      <Text>Total Score {Score}</Text>
      <Button title="back" color="#e87a72" onPress={HitIt}>Hit!!🎾</Button>
   </View>
   
  )
}

const styles = StyleSheet.create({
    Deod: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  
  });