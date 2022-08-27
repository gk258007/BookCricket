import React, { useState } from 'react'
import { Button, Text } from 'react-native-paper'
import { View,StyleSheet } from 'react-native'
export default function Bowling () {
  var scorev = [0,1,2,3,4,5,6,7,8,9,0,0,0,0]
  int[runs,Setruns] = useState<Int>("");
  const[balls,setballs] =useState(1);
  const[Score,SetScore] = useState(0);
  const[wicket,setWicket]=useState(0);
  const HitIt=()=>{
    
    if(balls<=6)  
    {Setruns(Math.floor(Math.random() * (6 - 1 + 1)) + 1)
      console.log("The runs "+runs);
      if(runs==0 && wicket<=3) 
      {
        console.log("Wicket");
        setWicket(wicket+1);
        console.log(" ",+wicket)
        return;
      }
      
        // setWicket(wicket+1);
        // console.log(" "+wicket);
        SetScore(Score+runs);
      console.log("Score score "+Score);
  }else{
      return;
   } 
    setballs(balls+1);
    console.log("balls value "+balls);
    
  }
  
  return (
    <View style={styles.Deod}>
      <Text>Batting</Text>
      <Text>Ball :{balls-1}</Text>
      <Text>Wicket{wicket}</Text>
      <Text>Score : {runs}</Text>
      <Text>Score Score {Score}</Text>
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