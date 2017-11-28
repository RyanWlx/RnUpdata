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

let image1 = require('../Image/one.jpg');
let image2 = require('../Image/one.jpg');


import Util from './Util';

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
        
      </ScrollView>
    );
  }
};




const styles = StyleSheet.create({
  contentContainer: {
    width: Util.size.width*2,
    height: Util.size.height,
  },
  backgroundImage: {
    width: Util.size.width,
    height: Util.size.height,
  },

  });

