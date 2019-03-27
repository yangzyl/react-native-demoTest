

import React, { PureComponent } from 'react';
import {
    Text,
    Button,
    View,
    TouchableOpacity,
    CameraRoll,
    TouchableHighlight,
    AlertIOS,
} from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import TouchID from 'react-native-touch-id';

import NAV from '../../constants/Navigation';

const optionalConfigObject = {
    title: 'Authentication Required',
    color: '#e00606',
};

class Touchid extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentWillMount() {

    }

    _pressHandler = () => {
        TouchID.authenticate('to demo this react-native component', optionalConfigObject)
            .then((success) => {
                AlertIOS.alert('Authenticated Successfully');
            })
            .catch((error) => {
                AlertIOS.alert('Authentication Failed');
            });
    }

    render() {
        return (
            <View>
                <TouchableHighlight onPress={this._pressHandler}>
                    <Text>
                        Authenticate with Touch ID
                    </Text>
                </TouchableHighlight>
            </View>

        );
    }
}


export default connect()(Touchid);
