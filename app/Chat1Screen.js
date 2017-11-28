import React from 'react';
import {
    View,
    Text,
} from 'react-native';

export default class ChatScreen extends React.Component {
    static navigationOptions = {
        headerTitle: '发布1',
        tabBarLabel: '发布',
      };
    render() {
        const {params} = this.props.navigation.state;
        return (
            <View>
                <Text>Chat with d,j,sn fjds fjsn</Text>
            </View>
        );
    }
}