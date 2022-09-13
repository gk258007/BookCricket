import React from 'react'
export default function  Tie({navigation,props}){
    const[runs,Setruns] = useState(null);
    const[balls,setballs] =useState(0);
    const[Score,SetScore] = useState(null);
    const[wicket,setWicket]=useState(0);
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
  return (
    <View style={styles.Deod}>
    <Text>TIE-BREAKER!!</Text>
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
