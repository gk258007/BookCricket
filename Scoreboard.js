import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-paper'
import { StyleSheet } from 'react-native';

export default function Scoreboard(props) {

  const score = props.route.params.Score;
  const val = props.route.params.val;
  
  return (
    <View style={styles.Fed}>
        <Text>Final Scoreboard:{score} </Text>
        <Text>Target Score was :{val}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  Fed: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
