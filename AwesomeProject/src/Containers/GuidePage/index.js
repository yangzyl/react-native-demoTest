/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import { connect } from 'react-redux';


import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    DeviceEventEmitter,
} from 'react-native';
import Util from '../../utils/util';
import NAV from '../../constants/Navigation';

// import  AlertModal from '../../common/AlertModal';


// const { MessageBarAlert, MessageBarManager } = AlertModal;


const image1 = require('./guide-page-01.png');
const image2 = require('./guide-page-02.png');
const image3 = require('./guide-page-03.png');


class GuidePage extends Component {
    constructor() {
        super();
    }

    static navigationOptions = {
        header: null,
    };


    // componentWillUnmount() {
    //   MessageBarManager.unregisterMessageBar();
    // }
    render() {
        return (
            <ScrollView
                style={styles.wrapper}
                contentContainerStyle={styles.contentContainer}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                bounces
                pagingEnabled
                horizontal>
                <Image source={image1} style={styles.backgroundImage} />
                <Image source={image2} style={styles.backgroundImage} />
                <TouchableOpacity onPress={this.toLogin}>
                    <Image source={image3} style={styles.backgroundImage} />
                </TouchableOpacity>
            </ScrollView>
        );
    }

  toLogin = () => {
      this.props.navigation.navigate(NAV.LOGIN.name);
  }
}


const styles = StyleSheet.create({
    contentContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: Util.size.width * 3,
        height: Util.size.height,
    },
    backgroundImage: {
        width: Util.size.width - 35,
        height: Util.size.height,
        marginHorizontal: 5,
    },
    wrapper: {
        marginHorizontal: 12,
        overflow: 'visible',
    },
});
const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(GuidePage);
