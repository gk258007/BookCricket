import {useState} from 'react'
import React from 'react';
import { Text, Button,View ,StyleSheet} from 'react-native';


export default function Ded({navigation}){
  var coin = ['Heads🤖','Tails🐗']
  const[toss,SetToss]  = useState(coin[Math.floor(Math.random() * coin.length)]);
  const[usrc,SetUsrc] = useState(coin[Math.floor(Math.random() * coin.length)]);
  var res = ['Won','Lost']
  var[tosswd,SetTosswd] = useState(res[Math.floor(Math.random() * res.length)]);

     const Flip = ({})=>{
        SetToss(coin[Math.floor(Math.random() * coin.length)])
       console.log("the flipped coin"+toss);
        if(usrc === toss)
        {
          navigation.navigate('Veedu',{tosswd,navigation});
            SetTosswd('Won')
            console.log({toss})
        }else{
            SetTosswd('Lost')
            console.log({toss})
            navigation.navigate('Veedu',{tosswd,navigation});
        }
        
    }
    const Choose = () =>{
        SetUsrc(coin[0])
        console.log("the user chose "+usrc);
    }
    const Headchoice = () =>{
        SetUsrc(coin[1])
    }
    const move = ()=>{

    }
  return (
    
      <View style={style.Deod}>
    <Text>"The user Chose  {usrc}</Text>
    <Button  id="choh" title="HEaD" onPress={Choose}></Button> 
    <Button title="TailS" onPress={Headchoice}></Button>
    <Button 
    title='Chose to go ' 
    onPress={Flip}></Button>

    </View>
     
  );
}
const style = 
    StyleSheet.create({
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