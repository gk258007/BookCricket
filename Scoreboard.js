import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-paper'

export default function Scoreboard(props) {

  const score = props.route.params.Score;
  const val = props.route.params.val;
  
  return (
    <View>
        <Text>Final Scoreboard:{score} , target score :{val} </Text>
    </View>
  )
}
