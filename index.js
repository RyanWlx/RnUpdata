import React, {Component} from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    ToastAndroid,
    Alert,
    NativeModules

} from 'react-native';


import huangliDataw  from './data/testHuangli.js';

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
let realmTest;
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
const TestSchema = {
    name: 'Test',
    primaryKey: 'id',
    properties: {
        id: 'string',
        jx: 'string',
        gz: 'string',
        ji: 'string',
    }
};
//加入app升级的变量
let AppConst = {
    version:'1.0.0'
}
class Test extends Component {
    constructor(props) {
        super(props);
        //初始化Realm
        realm = new Realm({path:'test.realm', schema: [CarSchema]});
        console.log('9991',realm);
        realmTest = new Realm({path:'testRealm.realm', schema: [TestSchema]});
        console.log('9990',JSON.stringify(realmTest.path));
        this.state = {
            content: (Realm.defaultPath),
            carlength: 0,
            contentTest:'000'
        };
    }
    getHuangliData(){
        console.log('9999',huangliDataw.RECORDS.length);
        for (var i = 0 ;i < huangliDataw.RECORDS.length ; i++){
            var _id = huangliDataw.RECORDS[i].id;
            var _jx = huangliDataw.RECORDS[i].jx;
            var _gz = huangliDataw.RECORDS[i].gz;
            var _ji = huangliDataw.RECORDS[i].ji;
            var _obj = {id: _id, jx: _jx, gz: _gz, ji: _ji};
            realmTest.write(()=> {
                realmTest.create('Test',_obj , true);
            })

            
            //realmTest.create('Test', {id: 4, jx: '劳斯莱斯', gz: 'SB004', ji: '张六'}, true);
        }
        let Tests = realmTest.objects('Test');
        let TestM;
        var contentTest = '';
        for (var index = 1; index <= huangliDataw.RECORDS.length; index++) {
            var _indexString = '"'+index+'"';
            TestM = Tests.filtered('id==' + _indexString);
            if (TestM.length > 0) {
                contentTest = ('Car的数据为'
                    + '==' + TestM[0].id
                    + '==' + TestM[0].jx
                    + '==' + TestM[0].gz
                    + '==' + TestM[0].ji) + '\n' + contentTest;
            }

        }
        this.setState({
            contentTest: contentTest
        })
        
    }
    updataNative(){
        NativeModules.UpdateAndroid.doUpdate('index.android.bundle_2.0', (progress)=> {
            let pro = Number.parseFloat('' + progress);
            console.log("2222:",pro)
        });
    }
    _versionCheck() {
        let _this = this;
        //let versionUrl = '/data/upDataInfo.json';
        let versionUrl = null;
        fetch(versionUrl, {  
            method: "POST",  
            mode: "cors",  
            headers: {  
                "Content-Type": "application/x-www-form-urlencoded"  
            },  
            body: 'key=1'  
        }).then(function (res) {  
            console.log("fetch request ", JSON.stringify(res));  
             
  
        }).catch(function (e) {  
            console.log("fetch fail000",e);  
             Alert.alert(
                '发现新版本,是否升级?',
                `版本号: 1.2.0\n版本描述: 热更新测试`,
                [
                    {
                        text: '是',
                        onPress: () => {
                           //这里调用原生方法，下载新的包,传入新的url
                           _this.updataNative();
                        }
                    },
                    {
                        text: '否'
                    }
                ]
            )
              
        }); 
    }
    render() {
        return (
            <View style={{marginTop: 20}}>
                <Text style={styles.welcome}>
                    Realm基础使用实例-增删改查
                </Text>
                <CustomButton
                    text="未更新  version:1.0.0"
                   />
                <CustomButton
                    text="表新增"
                    onPress={()=> {
                        realm.write(()=> {
                            realm.create('Car', {id: 1, car_type: 'QQ', car_name: 'SB001', driver_name: '张三'}, true);
                            realm.create('Car', {id: 2, car_type: '宝马', car_name: 'SB002', driver_name: '李四'}, true);
                            realm.create('Car', {id: 3, car_type: '奔驰', car_name: 'SB003', driver_name: '王五'}, true);
                            realm.create('Car', {id: 4, car_type: '劳斯莱斯', car_name: 'SB004', driver_name: '张六'}, true);
                            
                            ToastAndroid.show('添加数据完成', ToastAndroid.SHORT);
                        })
                        this.setState({
                            carlength: realm.objects('Car').length
                        })
                    }}/>

                <CustomButton
                    text="表修改 更新id = 22222的数据"
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
                    {this.state.contentTest}
                </Text>
            </View>
        )

    }

    componentDidMount(){
        this.getHuangliData();
        this._versionCheck();
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
AppRegistry.registerComponent('tabReactOld', () => Test);