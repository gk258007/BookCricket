import React, { useState } from 'react'
import { Button, Text } from 'react-native-paper'
import { View,StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

export default function Chase(props,{route}){
  const navigation = useNavigation();
    const[runs,Setruns] = useState(null);
    const[balls,setballs] =useState(0);
    const[Score,SetScore] = useState(null);
    const[wicket,setWicket]=useState(0);
    const val = props.route.params.Score+1

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
        
        navigation.navigate('Scorr',{navigation,Score,val,res:"WON"})
        console.log("Total Score "+Score);
      }else if(Score == props.route.params.Score)
      {
        console.log("Draw match")
        Alert.alert(
          "Draw Match",
          "Do you want to end or play a Super Ball",
          [
            {text:'End the game ', onPress:() => navigation.navigate('Scorr',{navigation,Score,val,res:"DRAW"})},
            {text:'Play another game', onPress:() => navigation.navigate('Draw',{navigation})},
          ],
          {cancelable: false}
        )
       
      }else{
        console.log("total score "+Score)
        navigation.navigate('Scorr',{navigation,Score,val,res:"LOST"})
        
      }
    }
  }

  return (
   <View style={styles.Deod}>
    <Text>Total score to chase {val}</Text>
    <Text>Batting</Text>
      <Text>Ball :{balls}</Text>
      <Text>Wicket : {wicket}</Text>
      <Text>Runs : {runs}</Text>
      <Text>Total Score {Score}</Text>
      {/* <Button title="back" color="#e87a72" onPress={twoalert}>Hit!!🎾</Button> */}
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