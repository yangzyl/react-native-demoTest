
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
import PayMent from '../../common/PayMent';
import ModalBox from '../../common/ModalBox';


const MessageBarAlert = require('../../common/AlertModal').MessageBar;
const MessageBarManager = require('../../common/AlertModal').MessageBarManager;

class Vip extends PureComponent {
    static navigationOptions = {
        title: NAV.VIP.title,
    };

    constructor(props) {
        super(props);
        this.cancelPay = this.cancelPay.bind(this);
        this.onPurchase = this.onPurchase.bind(this);
        this.state = {
            payPage: false,
        };
    }

    componentDidMount() {
        // ModalBox.open();
        // MessageBarManager.showAlert({
        //     title: "John Doe",
        //     message: "Hello, any suggestions?",
        //     titleNumberOfLines: 1,
        //     messageNumberOfLines: 0,
        // });
        MessageBarManager.showAlert({
            title: 'Your alert title goes here',
            message: 'Your alert message goes here',
            alertType: 'success',
        });
        console.log(MessageBarManager);
    }

    cancelPay() {
        this.setState({
            payPage: false,
        });
    }

    onPurchase() {
        this.setState({
            payPage: true,
        });
    }

    render() {
        const { payPage } = this.state;
        const { navigate } = this.props.navigation;

        return (
            <View>
                <TouchableOpacity onPress={() => this.onPurchase()}>
                    <Text>
（原价 ¥699）
                    </Text>
                </TouchableOpacity>
                {payPage ? <PayMent navigate={navigate} clickHandle={() => {}} cancel={this.cancelPay} /> : null}
            </View>
        );
    }
}

export default connect()(Vip);
