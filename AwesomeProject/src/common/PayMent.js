
import React, { PureComponent } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Modal,
    Dimensions,
    Platform,
    TouchableOpacity,
    Image,
} from 'react-native';

const { width } = Dimensions.get('window');
const height = Platform.OS === 'ios' ? Dimensions.get('window').height : Dimensions.get('window').height - 24;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    cancelStyle: {
        marginLeft: 28,
        marginRight: 27,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        height: 50,
        marginBottom: 10,
        marginTop: 26,

    },
    cancelText: {
        fontSize: 18,
        color: '#08aca2',
        textAlign: 'left',
    },
    aLiPayStyle: {
        marginLeft: 28,
        marginRight: 27,
        backgroundColor: '#ffffff',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        height: 56,
        flexDirection: 'row',
    },
    aLiPayText: {
        fontSize: 18,
        color: '#22262b',
        textAlign: 'left',
    },
    wechartStyle: {
        marginTop: 1,
        borderTopWidth: 2,
        borderColor: '#969696',
        marginLeft: 28,
        marginRight: 27,
        backgroundColor: '#ffffff',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        height: 56,
        flexDirection: 'row',
    },
    wechartText: {
        fontSize: 18,
        color: '#22262b',
        textAlign: 'left',
    },
    icon: {
        marginLeft: 70,
        marginRight: 20,
    },
});

export default class PayMent extends PureComponent {
    componentWillUnmount() {
        this.props.cancel();
    }

    render() {
        return (
            <Modal
                animationType="slide"
                transparent
                onRequestClose={() => this.props.cancel()}>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.aLiPayStyle} onPress={() => this.props.clickHandle('alipay')}>
                        <Text style={styles.aLiPayText}>
使用支付宝支付
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.wechartStyle} onPress={() => this.props.clickHandle('wx')}>
                        <Text style={styles.wechartText}>
使用微信支付
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cancelStyle} onPress={() => this.props.cancel()}>
                        <Text style={styles.cancelText}>
取消
                        </Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        );
    }
}
