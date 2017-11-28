/**
 * Created by ithinkeryz on 2017/5/15.
 */

import React, { Component } from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    AsyncStorage,
    Image
} from 'react-native';

//import Main from './Main/Main'

import {Navigator} from 'react-native-deprecated-custom-components'

import Guide from './views/yindao'

import Main from './views/firstPage'

class LaunchView extends React.Component{
    constructor(props) {
        super(props);
        //navigation = this.props.navigation;
    };
    static navigationOptions = {
        header: null
    };
    render(){
        //const { navigate } = this.props.navigation;
        return (
            //<Image source={{uri:'LaunchImage'}} style={{width:Common.screenW,height:Common.screenH}}/>
            <View style={{alignItems:'center',justifyContent:"center",marginTop:200}}>
                <Text style={{color:'red',fontSize:50}}> hello , girl</Text>
            </View>
        )
    }

    componentDidMount() {
        // 延迟点
        setTimeout(this.openApp.bind(this),0);
        // this.openApp();
    }

    openApp(){
        AsyncStorage.getItem('isFirst',(error,result)=>{

            if (result == 'false') {
                console.log('不是第一次打开');

                /*this.props.navigator.replace({
                    component:Guide
                })*/


            } else  {

                console.log('第一次打开');

                // 存储
                AsyncStorage.setItem('isFirst','false',(error)=>{
                    if (error) {
                        alert(error);
                    }
                });

                /*this.props.navigator.replace({
                    component:Guide
                })*/
            }
        });
    }
}

export default class App extends Component {
    static navigationOptions = {
        header: null
    };
    constructor(props) {
        super(props);
        navigation = this.props.navigation;
    };
    


    render() {
        // 判断是不是第一次打开


        return (
            /*<Navigator  initialRoute={{
                component: LaunchView
            }}
                        renderScene={this._renderScene.bind(this)}

                        style={{flex:1}}
            />*/
            <View style={{alignItems:'center',justifyContent:"center",marginTop:200}}>
                <Text style={{color:'red',fontSize:50}}> hello , girl</Text>
            </View>
        );


    }
     componentDidMount() {
        // 延迟点
        setTimeout(this.openApp.bind(this),0);
        // this.openApp();
    }

    openApp(){
        const { navigate } = this.props.navigation;
        AsyncStorage.getItem('isFirst',(error,result)=>{

            if (result == 'false') {
                console.log('不是第一次打开');

                /*this.props.navigator.replace({
                    component:Guide
                })*/
               navigate('Luck');

            } else  {

                console.log('第一次打开');

                // 存储
                AsyncStorage.setItem('isFirst','false',(error)=>{
                    if (error) {
                        alert(error);
                    }
                });

                /*this.props.navigator.replace({
                    component:Guide
                })*/
                navigate('Luck');
            }
        });
    }

}
