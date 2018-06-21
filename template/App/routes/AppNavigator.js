
import { StackNavigator, } from 'react-navigation';
import Login from '../views/Login'
import Register from '../views/Register'
import Home from '../views/Home/Home'
import WelcomePage from "../views/WelcomePage/WelcomePage"
import React, { Component } from 'react';
import { View, Text, 
    DeviceEventEmitter,TouchableOpacity, Keyboard } from "react-native"

const AppNavigator = StackNavigator({

    Login: {
        screen: Login
    },
    Home: {
        screen: Home,
        navigationOptions: {
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#0fc684',
                borderBottomWidth: 0,
                shadowRadius: 0,
                shadowOffset: {
                    height: 0,
                },
                shadowColor: 'transparent'
            }
        }
    },
    Register: {
        screen: Register
    },
    Welcome: {
        screen: WelcomePage,

    },

}, {
        initialRouteName: 'Welcome',
        headerMode: 'screen'
    });


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
               height:100,
               showBtn:false
        }
    }
    componentWillMount() {
        //监听键盘弹出事件
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow',
            this.keyboardDidShowHandler.bind(this));
        //监听键盘隐藏事件
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide',
            this.keyboardDidHideHandler.bind(this));

        this.showBtn = DeviceEventEmitter.addListener('showBtnDidShow',
            this.showBtnHideHandler.bind(this));
    }
    keyboardDidShowHandler(event) {
        this.setState({
            height:100+event.endCoordinates.height
        })
       
    }
    keyboardDidHideHandler() {
        this.setState({
            height:100
        })
    }
    showBtnHideHandler(){
        this.setState({
            showBtn:true
        })
    }
    componentWillUnmount() {
        //卸载键盘弹出事件监听
        if(this.keyboardDidShowListener != null) {
          this.keyboardDidShowListener.remove();
        }
        //卸载键盘隐藏事件监听
        if(this.keyboardDidHideListener != null) {
          this.keyboardDidHideListener.remove();
        }
        if(this.showBtn!=null){
            this.showBtn.remove()
        }
      }
    render() {

        return (
            <View style={{ flex: 1 }}>
                <AppNavigator />
                {this.state.showBtn? <View style={{ justifyContent: "center", alignItems: "center", position: "absolute", right: 10, bottom: this.state.height, width: 100, height: 100, backgroundColor: "red" }}>
                    <TouchableOpacity activeOpacity={1} onPress={() => {
                        console.log("点击了----")
                    }}>
                        <View style={{ width: 30, height: 30, backgroundColor: "yellow" }}>
                            <Text>啊哈哈</Text>


                        </View>
                    </TouchableOpacity>
                </View>:undefined}
            </View>
        );
    }


}