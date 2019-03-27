
import React, { PureComponent } from 'react';
import {
    Text,
    Button,
    View,
    TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import Permissions from 'react-native-permissions';
import NAV from '../../constants/Navigation';


class MyPage extends PureComponent {
    static navigationOptions = {
        title: NAV.MY.title,
    };

    componentDidMount() {
        Permissions.check('photo').then((response) => {
            // Response is one of: 'authorized', 'denied', 'restricted', or 'undetermined'
            // this.setState({ photoPermission: response })
            console.log(response);
        });
    }

    render() {
        return (
            <View>
                <TouchableOpacity onPress={this.toVip}>
                    <Text>
去支付
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.toCity}>
                    <Text>
去联动
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.toDownload}>
                    <Text>
去下载
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.toCamera}>
                    <Text>
去拍照
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.toAlbum}>
                    <Text>
去图片预览
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.toTouchid}>
                    <Text>
去识别
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.toMatter}>
                    <Text>
去modal
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }

    toVip = () => {
        this.props.navigation.navigate(NAV.VIP.name);
    }

    toDownload = () => {
        this.props.navigation.navigate(NAV.DOWNLOAD.name);
    }

    toCity = () => {
        this.props.navigation.navigate(NAV.CITY.name);
    }

    toCamera = () => {
        this.props.navigation.navigate(NAV.CAMERA.name);
    }

    toAlbum = () => {
        this.props.navigation.navigate(NAV.ALBUM.name);
    }

    toTouchid = () => {
        this.props.navigation.navigate(NAV.TOUCHID.name);
    }

    toMatter = () => {
        this.props.navigation.navigate(NAV.MATTER.name);
    }
}

export default connect()(MyPage);
