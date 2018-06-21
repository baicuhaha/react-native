import React from 'react';
import {Provider} from 'react-redux';

import AppNavigator from './App/routes/AppNavigator';
import { createStore } from 'redux';
import {connect} from 'react-redux';
import {
  addNavigationHelpers,
} from 'react-navigation';
import {View} from "react-native"
const mapStateToProps = state => ({
    user: state.user,
    nav: state.nav,
});

class NavApp extends React.Component {
  render() {
    return (
      <AppNavigator
      navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,
      })} />
    );
  }
}
const Root =  connect(mapStateToProps)(NavApp);

// import store from './App/store/index'
const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT': return state + 1;
    case 'DECREMENT': return state - 1;
    default: return state;
  }
};

const store = createStore(reducer);

export default class App extends React.Component {

    render() {
        let {nav,dispatch}=this.props;
        return (
            // <Provider store={store}>
            //     <Root ref={nav => {
            //         this.navigator = nav;
            //     }}
            //     dispatch={dispatch}
            //     state={nav}
            //     />
            // </Provider>
            // <View>
              <AppNavigator/>
         
            
        );
    }
}
/* <RootNavigation ref={nav => {
    this.navigator = nav;
}}/>*/