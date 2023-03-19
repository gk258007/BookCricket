import {useState} from 'react'
import React from 'react';
import {Image} from 'expo-image'
import { Text, Button,View ,StyleSheet} from 'react-native';


export default function Ded({route,navigation})
{
  const {player_name,player_name2} =  route.params;
  const names = [player_name,player_name2]
  const randane = names[Math.floor(Math.random() * names.length)]
  var coin = ['Heads🤖','Tails🐗']
  const[toss,SetToss]  = useState(coin[Math.floor(Math.random() * coin.length)]);
  const[usrc,SetUsrc] = useState(coin[Math.floor(Math.random() * coin.length)]);
  var res = ['Won','Lost']
  var[tosswd,SetTosswd] = useState(res[Math.floor(Math.random() * res.length)]);

  function coinToss() {
    this.setState({ nader: "" }, () => {
      if (Math.random() < 0.5) {
        this.setState({ result: "heads" });
        console.log("heads");
      } else {
        this.setState({ result: "tails" });
        console.log("tails");
      }
    });
  }



     const Flip = ({})=>{
        SetToss(coin[Math.floor(Math.random() * coin.length)])
       console.log("the flipped coin"+toss);
        if(usrc === toss)
        {
          navigation.navigate('Veedu',{tosswd,navigation,randane,names});
            SetTosswd('Won')
            console.log({toss})
        }else{
            SetTosswd('Lost')
            console.log({toss})
            navigation.navigate('Veedu',{navigation,tosswd,randane,names});
        }
    }
    const Choose = () =>{
        SetUsrc(coin[0])
        console.log("the user chose "+usrc);
    }
    const Headchoice = () =>{
        SetUsrc(coin[1])
    }
  
  return (
      <View style={style.rect}>
     <Text style={style.player}>{player_name}</Text> 
     <Image style={style.image}source={require("./assets/VS.png")}/>
     <Text style={style.player2}>{player_name2}</Text>
    <Text style={style.texxt}>Spin the Coin</Text>
    <Image style={style.coin} source={require('./assets/coin.png')}></Image>
    </View>
  );
}
const style = 
    StyleSheet.create({
        texxt:{
          fontSize:18,
          fontFamily: 'IBM Plex Mono',
          position:'absolute',
          alignSelf:'center',
          top:'25%'
        },
        coin:{
          alignSelf:'center',
          width:103,
          height:100
        },
        rect:{
          alignContent:'center',
         marginTop:-70,
          width: '95%',
          height: '99%',
          left: 9.99 ,
          top: 96.23  ,
          backgroundColor: "#DBDABD",
        },
        image:{
          width:'29%',
          height:'20%',
          marginLeft:'35%'
        },       
        player:
        {
          fontFamily: 'IBM Plex Mono',
          top:'10%',
          fontSize:20,
          marginLeft:'2%'
        },
        player2:{
          fontFamily: 'IBM Plex Mono',
          fontSize:20,
          top:'-15%',
          marginLeft:'68%'
        }
    });