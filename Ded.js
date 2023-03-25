import {useState} from 'react'
import React from 'react';
import {Image} from 'expo-image'
import { Text ,View ,StyleSheet, Easing, Animated, TouchableOpacity} from 'react-native';

const COIN_SIZE = 200;
const HEADS_IMAGE = require('./assets/coin.png');
const TAILS_IMAGE = require('./assets/iconback.png');


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
  const [coinResult, setCoinResult] = useState(null);
  const [coinRotation, setCoinRotation] = useState(new Animated.Value(0));

 
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


    //coin toss animation and other works 
    const handleTossCoin = () => {
      setCoinResult(null);
      const delay = Math.random() * 200; // add some randomness to the delay
      const toValue = Math.random() * 2; // add some randomness to the end value
      const tossAnimation = Animated.timing(
        coinRotation,
        {
          toValue,
          duration: 1000,
          easing: Easing.out(Easing.quad),
          useNativeDriver: true,
          delay,
        }
      );
  
      tossAnimation.start(() => {
        const result = Math.random() < 0.5 ? 'heads' : 'tails';
        setCoinResult(result);
        setCoinRotation(new Animated.Value(0));
        
        navigation.navigate('Veedu',{navigation,result,randane,names});
      });
    };
  
    const interpolatedRotation = coinRotation.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });
    
  
  return (
      <View style={style.rect}>
     <Text style={style.player}>{player_name}</Text> 
     <Image style={style.image}source={require("./assets/VS.png")}/>
     <Text style={style.player2}>{player_name2}</Text>
    <Text style={style.texxt}>Spin the Coin</Text>
    <TouchableOpacity onPress={handleTossCoin}>
        <Animated.Image
          source={coinResult === 'heads' ? HEADS_IMAGE : TAILS_IMAGE}
          style={{
            alignSelf:'center',
            width:'39%',
            height:'50%',
             transform: [{ rotateX: interpolatedRotation }],
          }}
        />
      </TouchableOpacity>
      {coinResult && (
        <Text style={{ fontSize: 30, marginTop: -100 }}>
          {coinResult === 'heads' ? 'Heads' : 'Tails'}
        </Text>
      )}
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
        coinfront:{
          width:200,
          height:200,
          alignItems:'center',
          justifyContent:'center',
          backfaceVisibility:'hidden',
        },
        coinback:{
          position:'absolute',

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