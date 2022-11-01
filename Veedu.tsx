import React from 'react'
import { Text} from 'react-native';
import { StyleSheet,View,Button} from 'react-native';

 const Veedu = (props,route,navigation) => {
 const result = props.route.params.tosswd
 const named = props.route.params.randane;
 const play = props.route.params.names;
 const path ="";
    const batting=({}) =>{
       if(result == 'Lost')
       {
        for(var i=0;i<play.length;i++)
        {
          if(named!=play[i])
          {
            const path = play[i]
            console.log(play[i],"won the toss")
            props.navigation.navigate('Strike',{navigation,pwo:path});
          }
        }
        
       }else{
        props.navigation.navigate('Strike',{navigation,pwo:named});
        console.log(play,"won the match")
        console.log("Won")
       }
       
    }
    
    const redirectback=({}) =>{
      console.log("going back");
      props.navigation.navigate('Home');
    }


  return (
   <View style={styles.Deod}>
    {/* <Text>{player_name}VS{player_name2}</Text> */}
     <Text style={styles.setFontSizeOne}>{named} {result} the Toss</Text>
     <Button title="start batting" onPress={batting}></Button>
     <Button title="back" onPress={redirectback}></Button>
     </View>
  );
}
const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center'
   },
   setFontSizeOne: {
     fontSize: 86 
   },
   Deod: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    titleText:{
      color: 'red'
    }
});

export default Veedu;
