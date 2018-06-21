import React, {Component} from 'react';
import {View,Text,TouchableOpacity,TextInput} from "react-native"

import {StackActions,NavigationActions} from 'react-navigation'
const resetActionTab = StackActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({routeName: 'Home', action: NavigationActions.navigate({ routeName: 'StudyCenter', params: {edit: true}})}),
    ]
})
export default class CourseStudy extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
        }
    }
    render() {

        return (
            <View style={{ flex: 1 }}>
            <TouchableOpacity activeOpacity={1} onPress={() => {

                console.log("切换tab-------")
                this.props.navigation.dispatch(resetActionTab);
            }}>
                <View style={{marginTop:100,marginLeft:50,width:100,height:100}}>
                  <Text>啊哈哈</Text>
                

                </View>
                </TouchableOpacity>

                 <TextInput
                    style={{ fontSize: 24 }}
                    placeholder={"hahahahaha"}
                  
                    maxLength={13}
                    ref={(node) => {
                        this.TextInput = node
                    }}
                 
                    keyboardType="phone-pad"
                    selectionColor="#DF2645"
                    blurOnSubmit={false}
                />
            </View>
        );
    }
    chilk(){
        this.props.navigation.dispatch(resetActionTab);
    }


}