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

let image1 = require('../Image/yi.jpg');
let image2 = require('../Image/er.jpg');
let image3 = require('../Image/san.jpg');
let image4 = require('../Image/si.jpg');
let image5 = require('../Image/wu.jpg');

import Util from './Util';

// import { MainScreen} from '../start';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class extends Component {
  static navigationOptions = {
    header:null
  };
  constructor(props) {
    super(props);
  };
  render() {
    //const { navigate } = this.props.navigation;
    return (
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        bounces={false}
        pagingEnabled={true}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        >
        <Image source={image1} style={styles.backgroundImage}>
        <TouchableNativeFeedback 
          onPress={
            () => {
              navigate('Main', {name: 'Chat'});
            }
        }>
        <Text style={styles.tiao}>跳过</Text>
        </TouchableNativeFeedback>
    </Image>

    <Image source={image2} style={styles.backgroundImage}>
        <TouchableNativeFeedback 
            onPress={
              () => {
              navigate('Main', {name: 'Chat'});
              }
            }>
        <Text style={styles.tiao}>跳过</Text>
        </TouchableNativeFeedback>
    </Image>

    <Image source={image3} style={styles.backgroundImage}>
        <TouchableNativeFeedback 
            onPress={
              () => {
              navigate('Main', {name: 'Chat'});
              }
            }>
        <Text style={styles.tiao}>跳过</Text>
        </TouchableNativeFeedback>
    </Image>

    <Image source={image4} style={styles.backgroundImage}>
        <TouchableNativeFeedback 
          onPress={
              () => {
              navigate('Main', {name: 'Chat'});
             }
           }>
        <Text style={styles.tiao}>跳过</Text>
        </TouchableNativeFeedback>
    </Image>

    <Image source={image5} style={styles.backgroundImage}>
        <TouchableNativeFeedback 
           style={{marginTop:20}}
           onPress={
            () => {
            navigate('Main', {name: 'Chat'});
            }
          }>
        <Text style={styles.open}>开启艺术之旅</Text>
        </TouchableNativeFeedback>
    </Image>
      </ScrollView>
    );
  }
};




const styles = StyleSheet.create({
  contentContainer: {
    width: Util.size.width*5,
    height: Util.size.height,
  },
  backgroundImage: {
    width: Util.size.width,
    height: Util.size.height,
  },
  open:{
    width:185,
    height:45,
    backgroundColor:'rgba(0, 0, 0, 0.5)',
    borderRadius:50,
    position:'absolute',
    bottom:17,
    left:87,
    color:'white',
    fontSize:20,
    textAlign:'center',
    lineHeight:35,
  },
  tiao:{
    width:50,
    height:22,
    backgroundColor:'rgba(0, 0, 0, 1)',
    color:'white',
    borderRadius:50,
    position:'absolute',
    right:10,
    top:5,
    textAlign:'center',
    lineHeight:20,
  }
  });

