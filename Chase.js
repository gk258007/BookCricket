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

  const redirect =() =>{
     navigation.navigate('Scorr',{navigation,Score})
   }
  
   const twoalert=()=>{
    Alert.alert(
      'Hey There!',
      'Two button alert dialog',
      [
        {text: 'Home', onPress: () => navigation.navigate('Scorr',{navigation,Score})},
        {text: 'Super over', onPress: () => navigation.navigate('Draw',{navigation}), style: 'cancel'},
      ],
      { 
        cancelable: true 
      }
    );
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
      }
    }else{
      if(Score >= props.route.params.Score+1)
      {
        
        navigation.navigate('Scorr',{navigation,Score,val,res:"WON"})
        console.log("Total Score "+Score);
      }else if(Score == props.route.params.Score)
      {

        console.log("Draw match")
       navigation.navigate('Scorr',{navigation,Score,val,res:"DRAW"})
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