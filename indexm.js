import React, { Component } from 'react';

import { AppRegistry ,View,StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
//import Yindao  from './views/yindao';
import AppR  from './appR';
import LuckyScreen from './views/firstPage'
class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        navigation = this.props.navigation;
    }

    render() {
        return (
            <View style={fstyles.container}>
              <AppR navigation={navigation}/>
            </View>
        )
    }
}
const smApp = StackNavigator({
    Home: {screen: HomeScreen},
    Luck: {screen: LuckyScreen},
    
});
const fstyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#333333',
        width: '100%',
    },
    
});
export class GuideView extends React.Component<{}> {
    render() {
     return (
     <Yindao/>
    );
    }
  }

AppRegistry.registerComponent('tabReactOld', () => smApp);
