import React, { useState } from 'react'
import { Button, Text } from 'react-native-paper'
import { View,StyleSheet } from 'react-native'
export default function Bowling ({navigation,props}) {
  const[runs,Setruns] = useState(null);
  const[balls,setballs] =useState(0);
  const[Score,SetScore] = useState(null);
  const[wicket,setWicket]=useState(null);
  const scoregen =(max,min)=>{
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  const HitIt=()=>{
    if(wicket<=3 && balls<6)
    {
      //runs gets incremented
      Setruns(scoregen(0,5))
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
      console.log("Total Score "+Score);
    }
  }
  const chas=()=>{
    navigation.navigate('Chase',{Score,navigation});
  }
  
  
  //check if the balls<=6 and the number of wickets are less than 3  if so then throw the ball and score run
  //if the run is 0 then incrase the wicket  or else add up to the score variable .
  //
  
  return (
    <View style={styles.Deod}>
      <Text>Batting</Text>
      <Text>Ball :{balls}</Text>
      <Text>Wicket : {wicket}</Text>
      <Text>Runs : {runs}</Text>
      <Text>Total Score {Score}</Text>
      <Button title="back" color="#e87a72" onPress={HitIt}>Hit!!🎾</Button>
      <Button title="Fii" onPress={chas}>LESS MOVE</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  Deod: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }

});