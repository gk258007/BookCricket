import React from 'react'
import { Text, TouchableOpacity} from 'react-native';
import { StyleSheet,View,Button} from 'react-native';
import {Image} from 'expo-image';

 const Veedu = (props,route,navigation) => {
 const result = props.route.params.tosswd;
 const named = props.route.params.randane;
 const play = props.route.params.names;
 const path ="";
 console.log(result)
    const batting=({}) =>{
       if(result == 'Lost')
       {
        for(var i=0;i<play.length;i++)
        {
          if(named!=play[i])
          {
            const path = play[i]
            console.log(play[i],"won the toss")
            console.log("Path:",path,"Named",named)
            props.navigation.navigate('Strike',{navigation,play,pwo:path});
          }
        }
        
       }else{
        for(var i=0;i<play.length;i++)
        {
            props.navigation.navigate('Strike',{navigation,play,pwo:named});
            console.log(named,"won the match")
            console.log("Won")           
          }
        }
        
       }
       
    
    const redirectback=({}) =>{
      console.log("going back");
      props.navigation.navigate('Team');
    }


  return (
   <View style={styles.rect}>
    {/* <Text>{player_name}VS{player_name2}</Text> */}

     <Text style={styles.setFontSizeOne}>{named} {result} the Toss</Text>
     <TouchableOpacity onPress={batting} style={{alignItems:'center',top:90}}>
     <Text style={{fontFamily:'IBM Plex Mono',fontSize:20,textAlign:'center',top:12}}>Bat</Text>
     </TouchableOpacity>
     <TouchableOpacity onPress={redirectback} style={{alignItems:'center',top:100}}>
     <Text style={{fontFamily:'IBM Plex Mono',fontSize:20,textAlign:'center',top:12}}>BACK</Text>
     </TouchableOpacity>     
     <Image 
        source={require("./assets/cricketVector.png")}
        style={styles.imagee}
        />
     </View>
  );
}
const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center'
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
   setFontSizeOne: {
     fontSize: 22,
     fontFamily:'IBM Plex Mono',
     textAlign:'center'
   },
   imagee:{
    top:'22%',
    alignSelf:'center',
    height:'60%',
    width:'60%'
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
