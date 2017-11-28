import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

import {TabNavigator, StackNavigator} from "react-navigation";
import ChatScreen from './app/ChatScreen'
import Chat1Screen from './app/Chat1Screen'
import { bbb,ccc } from './app/test'

class RecentChatsScreen extends React.Component {
    /*static navigationOptions = {
        headerTitle: '首页',//对页面的配置
        tabBarLabel: '首页',
        tabBarIcon:<View style={{height:30,width:30,backgroundColor:'red'}}></View>
    };*/

    render() {
        console.log('111',ccc);
        bbb();
        const {navigate} = this.props.navigation;
        return(
            <View>

                <Text>List of recent chats</Text>
                
            </View>
        )
    }
}

class AllContactsScreen extends React.Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text>List of all contacts</Text>
                
            </View>
            )

    }
}
const StackOptions = ({navigation}) => {

    console.log(navigation);
    let {state,goBack} = navigation;
    
    // 用来判断是否隐藏或显示header
    //const visible= state.params.isVisible|| true;
    let header;
    /*if (visible === true){
        header = null;
    }*/
    const headerStyle = {backgroundColor:'#4ECBFC'};
    //const headerTitle = state.params.title;
    const headerTitle = 'ooo';
    const headerTitleStyle = {fontSize:20,color:'white',fontWeight:'500'}
    const headerBackTitle = false;
    const headerLeft = (
        <Button
            isCustom={true}
            customView={
                            <Text>77</Text>
                        }
            onPress={()=>{goBack()}}
        />
    );
    return {headerStyle,headerTitle,headerTitleStyle,headerBackTitle,headerLeft,header}
};


const App = TabNavigator({
    Recent: { screen: RecentChatsScreen ,navigationOptions: {  
        tabBarLabel: '北美', 
        tabBarIcon:'<Text>777</Text>'   
    }},
    All2: { screen: AllContactsScreen
    },
},{
    initialRouteName:'Recent',
    tabBarPosition: 'bottom',
    tabBarOptions: {
        style: {
            height:49,
            backgroundColor:'#fff'
        },
        activeBackgroundColor:'white',
        activeTintColor:'red',
        inactiveBackgroundColor:'white',
        inactiveTintColor:'yellow',
        showLabel:true,
        indicatorStyle:{height:0}
    }
});

App.navigationOptions = {
    title: 'My Chats1',
    //header:null
};
const SimpleApp = StackNavigator({
    Home: { screen: App },
    Chat: { screen: ChatScreen },
    Chat1: { screen: Chat1Screen },
	}
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
import AppRedux from './app/containers/app';
AppRegistry.registerComponent('tabReactOld', () => AppRedux);
