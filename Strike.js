import React, { useState } from 'react'
import { Button, Text } from 'react-native-paper'
import { View,StyleSheet } from 'react-native'
export default function Bowling () {
  var scorev = [0,1,2,3,4,5,6]
  const[score,SetScore] = useState(scorev[Math.floor(Math.random()* scorev.length)]);
  const[count,setCount] =useState(0);
  const[total,settotal] = useState(0);
  const[wicket,setWicket]=useState(0);
  const HitIt=()=>{
    SetScore(scorev[Math.floor(Math.random()* scorev.length)]);
    if(count<=6)  
    {
      console.log(" "+score);
        // setWicket(wicket+1);
        // console.log(" "+wicket);
      settotal(total+score);
      console.log("total score "+total);
  }else{
      return;
    }
    setCount(count+1);
    console.log("count value "+count);
    
  }
  
  return (
    <View style={styles.Deod}>
      <Text>Batting</Text>
      <Button title="back" color="#e87a72" onPress={HitIt}>MOMg</Button>
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