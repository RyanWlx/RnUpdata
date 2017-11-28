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

import Yindao from '/views/yindao'

import FirstPage from '/views/firstPage'

class LaunchView extends Component {
    render(){
        return (
            <Text>Hello , girl</Text>
        )
    }

    componentDidMount() {
        // 延迟点
        setTimeout(this.openApp.bind(this),2000);
        // this.openApp();
    }

    openApp(){
        AsyncStorage.getItem('isFirst',(error,result)=>{

            if (result == 'false') {
                console.log('不是第一次打开');

                this.props.navigator.replace({
                    component:FirstPage
                })

            } else  {

                console.log('第一次打开');

                // 存储
                AsyncStorage.setItem('isFirst','false',(error)=>{
                    if (error) {
                        alert(error);
                    }
                });

                this.props.navigator.replace({
                    component:Yindao
                })
            }
        });
    }
}

export default class App extends Component {

    // 渲染场景
    _renderScene(route, navigator){
        return (
            <route.component navigator={navigator} {...route} />
        )
    }



    render() {
        // 判断是不是第一次打开


        return (
            <Navigator  initialRoute={{
                component: LaunchView
            }}
                        renderScene={this._renderScene.bind(this)}

                        style={{flex:1}}
            />
        );


    }

}
