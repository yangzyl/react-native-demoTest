/**
 * Created by jwh on 2017/8/15.
 */

import React, { PureComponent } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    Platform,
    // StatusBar,
    Dimensions,
} from 'react-native';


const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#00aca2',
        paddingTop: Platform.OS === 'ios' ? 34 : 15,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: 11,
    },
    headerLeft: {
        position: 'absolute',
        left: 0,
        bottom: 11,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    headerExit: {
        position: 'absolute',
        left: 60,
        bottom: Platform.OS === 'ios' ? 12 : 11,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    backIcon: {
        width: 20,
        height: 20,
    },
    backText: {
        fontSize: 17,
        color: '#fff',
    },
    headerTitle: {
        justifyContent: 'center',
        alignItems: 'center',
        width: width - 160,
        minWidth: 100,
        zIndex: -1,
    },
    headerTitleText: {
        paddingTop: 1,
        height: Platform.OS === 'ios' ? 20 : null,
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        alignItems: 'center',
        zIndex: -1,
        minWidth: 100,
        textAlign: 'center',
    },
    headerRight: {
        position: 'absolute',
        right: 0,
        bottom: 11,
        alignItems: 'center',
        flexDirection: 'row',
    },
    shareBtn: {
        marginRight: 8,
    },
    shareIcon: {
        width: 23,
        height: 23,
    },
});

export default class HeaderBar extends PureComponent {
    render() {
        return (
            <View style={this.props.header || styles.header}>
                {this.props.goBack
                    ? (
                        <TouchableOpacity style={styles.headerLeft} onPress={() => this.props.goBack()}>
                            <Text style={styles.backText}>
返回
                            </Text>
                        </TouchableOpacity>
                    )
                    : null}
                {this.props.goExit
                    ? (
                        <TouchableOpacity style={styles.headerExit} onPress={() => this.props.goExit()}>
                            <Text style={styles.backText}>
关闭
                            </Text>
                        </TouchableOpacity>
                    )
                    : null}
                <View style={styles.headerTitle}>
                    <Text style={styles.headerTitleText} numberOfLines={1}>
                        {this.props.title}
                    </Text>
                </View>
            </View>
        );
    }
}
