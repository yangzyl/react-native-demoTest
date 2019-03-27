import React from 'react';
import { connect } from 'react-redux';
import {
    addNavigationHelpers, StackNavigator, TabNavigator, TabBarBottom,
} from 'react-navigation';
import {
    StyleSheet,
    BackHandler,
    StatusBar,
    View,
} from 'react-native';
import HomePage from './Containers/HomePage';
import MyPage from './Containers/MyPage';
import LoginPage from './Containers/LoginPage';
import GuidePage from './Containers/GuidePage';
import Vip from './Containers/Vip';
import City from './Containers/CityPicker';
import Download from './Containers/Download';
import Camera from './Containers/Camera';
import Album from './Containers/Album';
import Touchid from './Containers/Touchid';
// import Matter from './Containers/Matter';


import NAV from './constants/Navigation';


const styles = StyleSheet.create({
    tabBar: {
        height: 54,
        paddingTop: 5,
        paddingBottom: 1,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderTopColor: '#dcdcdc',
        backgroundColor: '#fff',
    },
    tabBarLabel: {
        fontSize: 11,
        letterSpacing: 0,
    },
    appNavigator: {
        flex: 1,
    },
});

const MainScreenNavigator = TabNavigator({
    [NAV.HOME]: { screen: HomePage },
    [NAV.MY]: { screen: MyPage },
}, {
    key: 'Home',
    lazy: true,
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    initialRouteName: 'Home',
    animationEnabled: false,
    tabBarOptions: {
        style: styles.tabBar,
        labelStyle: styles.tabBarLabel,
        activeTintColor: '#4a4a4a',
        inactiveTintColor: '#969696',
    },
});
export const AppNavigator = StackNavigator({
    [NAV.GUIDE]: { screen: GuidePage },
    [NAV.LOGIN]: { screen: LoginPage },
    Main: { screen: MainScreenNavigator },
    [NAV.VIP]: { screen: Vip },
    [NAV.CITY]: { screen: City },
    [NAV.DOWNLOAD]: { screen: Download },
    [NAV.CAMERA]: { screen: Camera },
    [NAV.ALBUM]: { screen: Album },
    [NAV.TOUCHID]: { screen: Touchid },
    // [NAV.MATTER]: { screen: Matter },
});

const AppWithNavigationState = ({ dispatch, nav }) => (
    <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

const mapStateToProps = state => ({
    nav: state.get('nav').toJS(),
});

export default connect(mapStateToProps)(AppWithNavigationState);
