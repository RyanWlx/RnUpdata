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
  StackNavigator,
} from 'react-navigation';

let image1 = require('../Image/yi.jpg');
let image2 = require('../Image/er.jpg');
let image3 = require('../Image/san.jpg');
let image4 = require('../Image/si.jpg');
let image5 = require('../Image/wu.jpg');

import Util from './Util';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class extends Component {
  constructor() {
      super();
    };
  render() {
    return (
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        bounces={false}
        pagingEnabled={true}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        >
        <Image source={image1} style={styles.backgroundImage}></Image>
        <Image source={image2} style={styles.backgroundImage}></Image>
        <Image source={image3} style={styles.backgroundImage}></Image>
        <Image source={image4} style={styles.backgroundImage}></Image>
        <Image source={image5} style={styles.backgroundImage}></Image>
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

  });

