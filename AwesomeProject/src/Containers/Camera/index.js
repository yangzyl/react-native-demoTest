

import React, { PureComponent } from 'react';
import {
    Text,
    Button,
    View,
    TouchableOpacity,
    CameraRoll,
} from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

// import SYImagePicker from 'react-native-syan-image-picker';
import NAV from '../../constants/Navigation';

const fetchParams = {
    first: 6,
    groupTypes: 'All',
    assetType: 'Photos',
};
class LoginPage extends PureComponent {
    componentDidMount() {
        // console.log(CameraRoll);
        CameraRoll.getPhotos(fetchParams)
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        return (
            <View>
                <Text>
                登录页面
                </Text>
            </View>
        );
    }
}


export default connect()(LoginPage);
