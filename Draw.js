import React, { useState } from 'react'
import { Button, Text } from 'react-native-paper'
import { View,StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';

export default function Draw ({route}) {

  const navigation = useNavigation();
  const[runs,Setruns] = useState(null);
  const[balls,setballs] =useState(0);
  const[Score,SetScore] = useState(null);
  const[wicket,setWicket]=useState(0);
  const perso = route.params.pwo;

  const scoregen =(max,min)=>{
    return Math.floor(min + Math.random() * (max - min));
  }
  
  const HitIt=()=>{
    console.log(perso)
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
      navigation.navigate('Chase',{navigation,Score});
      console.log("Total Score "+Score);
    }
  }
  //check if the balls<=6 and the number of wickets are less than 3  if so then throw the ball and score run
  //if the run is 0 then incrase the wicket  or else add up to the score variable .
  //
  
  return (
    <View style={styles.rect}>
     <Text>{perso} will Bat now</Text>
      <Text>Batting</Text>
      <Text>Ball :{balls}</Text>
      <Text>Wicket : {wicket}</Text>
      <Text>Runs : {runs}</Text>
      <Text>Total Score {Score}</Text>
      <Button title="back" color="#e87a72" onPress={HitIt}>Hit!!🎾</Button>
  
    </View>
  );
}

const styles = StyleSheet.create({
  Deod: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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

});