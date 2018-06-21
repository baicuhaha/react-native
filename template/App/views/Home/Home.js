import EnglishTown from '../EnglishTown'
import StudyCenter from '../StudyCenter'
import CourseStudy from '../CourseStudy'

import {TabNavigator,TabBarBottom} from 'react-navigation';



const Home = TabNavigator({
    CourseStudy: {
        screen: CourseStudy,
        navigationOptions:{
            tabBarLabel: '课程学习',
            tabBarVisible:false
        }
    },
    EnglishTown: {
        screen: EnglishTown,
        navigationOptions:{
            tabBarLabel: 'haha',
            tabBarVisible:false
        }
    },
    StudyCenter: {
        screen: StudyCenter,
        navigationOptions:{
            tabBarLabel: 'ssss',
            tabBarVisible:false
        }
    },

}, {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: {
        activeTintColor: "#333333",
    },
    lazy: true,
    tabBarComponent: TabBarBottom,
});

export default Home


