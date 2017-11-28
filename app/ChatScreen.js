import React from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';

export default class ChatScreen extends React.Component {

    static navigationOptions = {
        headerTitle: '发布2',
        tabBarLabel: '发布2',
        tabBarIcon:<View style={{height:30,width:30,backgroundColor:'red'}}></View>
    };

    render() {
       
        return (
            <View>
                <Text>Chat with dkbdskfbkdsjfbsfbskdfbhwuk</Text>
               
            </View>
        );
    }

    componentDidMount() {  
        console.log('hshfbhfhdjsnbfkjdsbjfdsbfsjkgfn00000000000') 
      } 
}
