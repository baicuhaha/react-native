/**
 * Created by PengYuFang on 2016/11/13.
 */
'use strict'
import React, {Component} from 'react';
import {View,TouchableOpacity,Text,DeviceEventEmitter} from "react-native"

import {NavigationActions,StackActions} from 'react-navigation'


const HomeAction = StackActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({routeName: 'Home'}),
    ]
})
export default class WelcomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
        }
    }
    render() {

        return (
            <View style={{ flex: 1 }}>
               <TouchableOpacity activeOpacity={1} onPress={() => {
                   DeviceEventEmitter.emit("showBtnDidShow")
                    this.props.navigation.dispatch(HomeAction);
               }}>
                <View style={{width:100,height:100,backgroundColor:"yellow"}}>
                  <Text>啊哈哈</Text>
                

                </View>
                </TouchableOpacity>

            </View>
        );
    }
    chilk(){
        this.props.navigation.dispatch(HomeAction);
    }


}