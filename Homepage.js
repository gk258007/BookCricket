import React from 'react'
import { Text, TextInput } from 'react-native-paper'
import { Button } from 'react-native-paper'
import { View } from 'react-native'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default  function Homepage({navigation,props})
{
    const [player_name, onChange] = React.useState("");
    const [player_name2, onChanged] = React.useState("");
 function LessGo(){
    navigation.navigate('Home',{navigation,player_name,player_name2})
}
  return (
    <SafeAreaView>
        <TextInput 
        label={"Enter Player1  Name"}
        style={styles.input}
        onChangeText={onChange}
        value={player_name}/>

        <TextInput  
        label={"Enter Player2  Name"}
        style={styles.input}
        onChangeText={onChanged}
        value={player_name2}/>
        <Text> {player_name}</Text>
        <Text> {player_name2}</Text>
        <Button onPress={LessGo}>Less play</Button>
        </SafeAreaView>
        
  )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 0,
    }
})

