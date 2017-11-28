import React, {Component} from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    ToastAndroid,

} from 'react-native';

const Realm = require('realm');

class CustomButton extends Component {
    render() {
        return (
            <TouchableHighlight
                style={styles.button}
                underlayColor="#a5a5a5"
                onPress={this.props.onPress}>

                <Text style={styles.buttonText}>{this.props.text}</Text>
            </TouchableHighlight>
        );
    }
}


let realm;
const CarSchema = {
    name: 'Car',
    primaryKey: 'id',
    properties: {
        id: 'int',
        car_type: 'string',
        car_name: 'string',
        driver_name: 'string',
    }
};
class Test extends Component {
    constructor(props) {
        super(props);
        //初始化Realm
        realm = new Realm({schema: [CarSchema]});
        this.state = {
            content: (Realm.defaultPath),
            carlength: 0
        };
    }

    render() {
        return (
            <View style={{marginTop: 20}}>
                <Text style={styles.welcome}>
                    Realm基础使用实例-增删改查
                </Text>
                <CustomButton
                    text="表新增"
                    onPress={()=> {
                        realm.write(()=> {
                            realm.create('Car', {id: 1, car_type: 'QQ', car_name: 'SB001', driver_name: '张三'}, true);
                            realm.create('Car', {id: 2, car_type: '宝马', car_name: 'SB002', driver_name: '李四'}, true);
                            realm.create('Car', {id: 3, car_type: '奔驰', car_name: 'SB003', driver_name: '王五'}, true);
                            realm.create('Car', {id: 4, car_type: '劳斯莱斯', car_name: 'SB004', driver_name: '张六'}, true);
                            realm.create('Car', {id: 5, car_type: '比亚迪', car_name: 'SB005', driver_name: '理七'}, true);
                            ToastAndroid.show('添加数据完成', ToastAndroid.SHORT);
                        })
                        this.setState({
                            carlength: realm.objects('Car').length
                        })
                    }}/>

                <CustomButton
                    text="表修改 更新id = 2的数据"
                    onPress={()=> {
                        //更新id = 2的数据
                        realm.write(()=> {
                            let cars = realm.objects('Car');
                            let car = cars.filtered('id==2');
                            ToastAndroid.show('car====' + car, ToastAndroid.SHORT);
                            if (car.length > 0) {
                                realm.create('Car', {id: 2, driver_name: 'feiyang'}, true)
                                var contentx = ('Car的数据为，'
                                + '\n 编号=' + car[0].id
                                + '\n car_type=' + car[0].car_type
                                + '\n car_name=' + car[0].car_name
                                + '\n driver_name=' + car[0].driver_name);
                                this.setState({
                                    content: contentx
                                })
                            }
                        });
                    }}
                />

                <CustomButton
                    text="表数据删除-删除id=3的数据"
                    onPress={()=> {
                        realm.write(()=> {
                            let cars = realm.objects('Car');
                            let car = cars.filtered('id==3');
                            if (car.length > 0)
                                realm.delete(car);
                        });
                    }}
                />
                <CustomButton
                    text="表数据删除-删除所有数据"
                    onPress={()=> {
                        realm.write(()=> {
                            let cars = realm.objects('Car');
                            realm.delete(cars);
                        });
                    }}
                />
                <CustomButton
                    text="查询所有数据"
                    onPress={()=> {
                        let cars = realm.objects('Car');
                        let car;
                        var contexts = '';
                        for (var index = 1; index <= this.state.carlength; index++) {
                            car = cars.filtered('id==' + index)
                            if (car.length > 0) {
                                contexts = ('Car的数据为'
                                    + '==' + car[0].id
                                    + '==' + car[0].car_type
                                    + '==' + car[0].car_name
                                    + '==' + car[0].driver_name) + '\n' + contexts;
                            }
                        }
                        this.setState({
                            content: contexts
                        })

                    }}
                />
                <CustomButton
                    text="根据id=2 进行查询数据"
                    onPress={()=> {
                        let cars = realm.objects('Car');
                        let car = cars.filtered('id==2');
                        if (car) {
                            var contentx = ('Car的数据为，'
                            + '==' + car[0].id
                            + '==' + car[0].car_type
                            + '==' + car[0].car_name
                            + '==' + car[0].driver_name);
                            this.setState({
                                content: contentx
                            })
                        }
                    }}
                />
                <Text>
                    {this.state.content}
                </Text>
            </View>
        )

    }


}


const styles = StyleSheet.create({
    welcom: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    button: {
        margin: 3,
        backgroundColor: 'white',
        padding: 10,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#cdcdcd'
    },
});