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
  View
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';


class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Home..1
        </Text>
      </View>
    )
  }
}

class MyNotificationsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Profile..2
        </Text>
      </View>
    )
  }
}
class MyHomeScreen extends Component {
  static navigationOptions = {
    headerTitle: '首页',//对页面的配置
    tabBarLabel: '首页',
  };

  render() {
    //const {state} = this.props.navigation;
    //console.log("nnn"+{state.params.name})
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          my ...3
        </Text>
      </View>
    )
  }
}
 export default const App = TabNavigator(
{
  Home: {
    screen: MyHomeScreen,
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
},
{
  initialRouteName: 'Home',  
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#333',
  },
});

 class App2 extends Component<{}> {
  constructor(props){
    super(props);
    this.state = {
      selectedTab:'home'
    }
    console.log("nnn",this.props.navigation)
  }

  render() {

    return (
      <View style={styles.container}>
        
      </View>
    );
  }
  componentDidMount(){
    console.log("nnn",this.props.navigation)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
//export default App;
