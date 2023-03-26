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
  const [p2,setP2] = useState('');
    
  
     const Flip = ({})=>{
        SetToss(coin[Math.floor(Math.random() * coin.length)])
       console.log("the flipped coin"+toss);
        if(usrc === toss)
        {
          SetTosswd('Won')
          console.log({toss})
          navigation.navigate('Veedu',{tosswd,navigation,randane,names});
           
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
        const userchoice = 'heads';
        setCoinResult(result);
        setCoinRotation(new Animated.Value(0));
        if(userchoice === result)
        {
          SetTosswd('Won')
          console.log({toss})
          navigation.navigate('Veedu',{tosswd,navigation,randane,names});
           
        }else{
            SetTosswd('Lost')
            console.log({toss})
            navigation.navigate('Veedu',{navigation,tosswd,randane,names});
        }
      });
    };
  
    const interpolatedRotation = coinRotation.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });
    
  
  return (
      <View style={style.rect}>
     <Image style={style.image}source={require("./assets/VS.png")}/>
     <View style={style.texxtc}>
     <Text style={style.player2}>{player_name2}</Text>
     </View>
     <View style={style.texxted}>
     <Text style={style.player}>{player_name}</Text> 
     </View>
     <Text style={style.texxt}>Spin the Coin</Text>
    <TouchableOpacity onPress={handleTossCoin} style={style.coin}>
        <Animated.Image
          source={coinResult === 'heads' ? HEADS_IMAGE : TAILS_IMAGE}
          style={{
            alignSelf:'center',
            width:'60%',
            height:'60%',
             transform: [{ rotateX: interpolatedRotation }],
          }}
        />
      </TouchableOpacity>
      {/* {coinResult && (
        <Text style={{ fontSize: 30, marginTop: -100 }}>
          {coinResult === 'heads' ? 'Heads' : 'Tails'}
        </Text>
      )} */}
      <View style={style.imagecontainer}>
        <Image 
        source={require("./assets/cricketVector.png")}
        style={style.imagee}
        >
        </Image>
      </View>
    </View>
  );
}
const style = 
    StyleSheet.create({
      texxtc:{
        width:'30%',
        height:'10%',
        top:'-12%',
        marginLeft:'60%'
      },
      imagecontainer:{
        height:'70%',
        width:'100%',
        top:'-10%',
      },
      imagee:{
        alignSelf:'center',
        height:'80%',
        width:'80%'
      },
      texxted:{
        top:'-25%',
        width:'30%',
        height:'10%',
        left:'8%'
      },
        texxt:{
          fontSize:18,
          fontFamily: 'IBM Plex Mono',
          position:'absolute',
          alignSelf:'center',
          top:'25%'
        },
        coin:{
          top:-45,
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