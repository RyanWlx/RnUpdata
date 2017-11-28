/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  Image,
  ImageBackground,
  Button,
  TouchableNativeFeedback,
  ScrollView,
  View
} from 'react-native';

import {
  StackNavigator
} from 'react-navigation';
import { ProfileScreen} from './views/user';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// 首页面
 class mainScreen extends Component<{}> {
  static navigationOptions = {
    header:null,
};
  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.container}>
        <ImageBackground source={require('./Image/bg.jpg')} style={{width: 370, height: 250}} >
         <View style = {styles.flex}>
         <TextInput style = {styles.inputs} 
                 returnKeyType = "search"
                 underlineColorAndroid='transparent' //设置下划线背景色透明 达到去掉下划线的效果
                 placeholder= "搜索目的地、停车场">
         </TextInput>
         <Image source={require('./Image/sousuo.png')} style={styles.tu}></Image>
         <TouchableNativeFeedback 
              onPress={
                () => {
                    navigate('Profile', {name: 'Jane'});
                }
                }>
         <Image source={require('./Image/yonghu.png')} style={styles.user}></Image>
         </TouchableNativeFeedback>
         </View>

         {/* 城市 */}
         <Text style={styles.city}>北京</Text>

         {/* 天气 */}
         <View style={[styles.weather,{flexDirection: 'row'}]}>
              <View  style={{alignItems: 'center',flexDirection: 'column',display:'flex',flexWrap:'wrap',width:100}}>
                 <View style={{flex:1,display:'flex',flexDirection:'row'}}>
                    <Image source={require('./Image/xiaoyu.png')} style={styles.yu}></Image>
                    <Text style={{color:'white',marginTop:25}}>小雨</Text>
                 </View>
                 <View style={{flex:1,flexDirection: 'row',display:'flex'}}>
                    <Text style={{color:'white',fontSize:27}}>17℃</Text>
                    <Text style={{color:'white',marginTop:12,}}>13~18℃</Text>
                 </View>
              </View>
              <View style={{alignItems: 'center',flexDirection: 'column',display:'flex',flexWrap:'wrap',width:100}}>
                 <View style={{flex:1}}>
                   <Text style={{color:'white',marginTop:25}}>今日不限行</Text>
                 </View>
                 <View style={{flex:1,flexDirection: 'row',display:'flex'}}>
                   <Text style={{color:'white',marginTop:11,}}>PM2.5</Text>
                   <Text style={{color:'white',backgroundColor:'#ECB02D',height:21,marginTop:11,}}>191重度污染</Text>
                 </View>
              </View>
         </View>
      </ImageBackground>
             
     
      <View style={{width:360,height:50,backgroundColor:'white',flexDirection: 'row',display:'flex',justifyContent:'space-around'}}>
      
          <Image source={require('./Image/yonghu1.png')} style={{width:40,height:40,marginLeft:10,marginTop:5}}></Image>
          <Text style={{color:'gray',lineHeight:35,marginLeft:5,marginTop:0}}>150****2757连续签到获得4积分</Text>
          <View style={{width:47,height:47,backgroundColor:'#33CC8D',borderRadius:100}}>
               <Text style={{color:'white',marginTop:5,marginLeft:10}}>每日签到</Text>
          </View>
      </View>
      

       {/* 扫码付费、场内找车、导航定位 */}
       <View style={[styles.xia]}>
          <View style={[styles.one]}>
             <Image source={require('./Image/rmb.png')} style={{width:50,height:50}}></Image>
             <Text style={{color:'white'}}>扫码付费</Text>
          </View>
          <View style={[styles.two]}>
             <Image source={require('./Image/qiche.png')} style={{width:50,height:50}}></Image>
             <Text style={{color:'white'}}>场内找车</Text>
          </View>
          <View style={[styles.three]}>
             <Image source={require('./Image/P.png')} style={{width:50,height:50}}></Image>
             <Text style={{color:'white'}}>找车位|目的地|导航</Text>
          </View>
      </View>
      <View>
              
      </View>
          <Image source={require('./Image/bing.jpg')} style={{width: 370, height: 250}}></Image>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputs: {
    width:300,
    height: 35,
    marginLeft: 10,
    paddingLeft: 35,
    paddingTop:5,
    marginTop:20,
    borderColor: '#CCC',
    backgroundColor:'#FFF',
    borderRadius:100, 
    },
    flex:{
    display:'flex',
    justifyContent:'space-around',
    },
    tu:{
    width:23,
    height:23,
    marginTop:-30,
    marginLeft:15,
    },
    user:{
    width:26,
    height:26,
    marginTop:-23,
    marginLeft:320,
    },
    city:{
      width:50,
      height:30,
      marginLeft:15,
      marginTop:25,
      paddingLeft:11,
      paddingTop:5,
      backgroundColor:'rgba(0, 0, 0, 0.4)',
      borderRadius:3,
      color:'white',
    },
    weather:{
      width:325,
      height:110,
      marginLeft:17,
      borderRadius:3,
      marginTop:10,
      backgroundColor:'rgba(0, 0, 0, 0.5)',
      flexDirection: 'row',
      justifyContent:'space-around',
      alignItems: 'stretch',
    },
    yu:{
      width:30,
      height:30,
      marginTop:15,
    },
    xia:{
      width:360,
      height:323,
      flexDirection: 'row',
      justifyContent:'space-around',
      flexWrap:'wrap',
    },
    one:{
      width:165,
      height:140,
      backgroundColor:'#FFC94A',
      justifyContent:'center',
      alignItems: 'center',
      flexDirection: 'column',
      borderRadius:5,
      marginTop:15,
    },
    two:{
      width:165,
      height:140,
      backgroundColor:'#45A5F5',
      justifyContent:'center',
      alignItems: 'center',
      flexDirection: 'column',
      borderRadius:5,
      marginTop:15,
    },
    three:{
      width:345,
      height:140,
      backgroundColor:'#33CC8D',
      justifyContent:'center',
      alignItems: 'center',
      flexDirection: 'column',
      marginTop:15, 
      borderRadius:5,
    }
});



export default App = StackNavigator({
  Main: {screen: mainScreen},
  Profile: {screen: ProfileScreen}
});