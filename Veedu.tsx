import React from 'react'
import { Text} from 'react-native';
import { StyleSheet,View,Button} from 'react-native';

 const Veedu = (props,route) => {
  const result = props.route.params.tosswd
  
    const batting=({}) =>{
       props.navigation.navigate('Strike');
    }


    const redirectback=({}) =>{
      console.log("going back");
      props.navigation.navigate('Home');
    }

  return (
   <View style={styles.Deod}>
    {/* <Text>{player_name}VS{player_name2}</Text> */}
     <Text style={styles.setFontSizeOne}>OTHA DEEIIII 🗿{result}</Text>
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