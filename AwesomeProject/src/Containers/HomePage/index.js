
import React, { PureComponent } from 'react';
import {
    Text,
    Button,
    View,
    ScrollView,
    Image,
} from 'react-native';
import { connect } from 'react-redux';
import NAV from '../../constants/Navigation';
import HTMLView from 'react-native-htmlview';

const MessageBarAlert = require('../../common/AlertModal').MessageBar;
const MessageBarManager = require('../../common/AlertModal').MessageBarManager;

const string = '<p>我是内容。<strong>我是粗体</strong>，<em>我是斜体</em>。</p ><p><a href=" ">我是超链接。</a ></p ><p>随着电子商务的发展，网购市场规模巨大，开票量攀升。2016年，京东“618”下单量超2000多万，随后的“双十一”，天猫交易额达1207亿元。网购开票难的程度由此可见一斑，这不仅造成巨额税收流失，也给消费者维权带来证据障碍，同时还带来了监管难题，而电子发票的发展有望解决这一难题。</p ><p>从纸质发票时代到电子发票时代，信息技术给财税带来质的飞跃。阿里、腾讯、京东等巨头都在大力推广；支付公司也在加紧布局，一场互联网+财税的数字化变革正愈演愈烈。</p ><p>税收生态环境生变</p ><p><img src="http://fms.beta.csfjn.com:81/upload/redactor/1532513182994_1872130543935674524.png"></p ><p>随着电子商务的发展，网购市场规模巨大，开票量攀升。2016年，京东“618”下单量超2000多万，随后的“双十一”，天猫交易额达1207亿元。网购开票难的程度由此可见一斑，这不仅造成巨额税收流失，也给消费者维权带来证据障碍，同时还带来了监管难题，而电子发票的发展有望解决这一难题。</p ><p>从纸质发票时代到电子发票时代，信息技术给财税带来质的飞跃。阿里、腾讯、京东等巨头都在大力推广；支付公司也在加紧布局，一场互联网+财税的数字化变革正愈演愈烈。</p ><p>税收生态环境生变</p > ppppp';

class HomePage extends PureComponent {
    static navigationOptions = {
        title: NAV.HOME.title,
    };

    componentDidMount() {
        // MessageBarManager.registerMessageBar(this.refs.alert);
    }

    componentWillUnmount() {
        MessageBarManager.unregisterMessageBar();
    }

    renderNode = (node, index, siblings, parent, defaultRenderer) => {
        console.log(node.name);
        if (node.name === ' img') {
            console.log(node.attribs.src);
            return (
                <View key={index} style={{ width: 375, height: 100 }}>
                    <Image source={{ uri: node.attribs.src }} style={{ width: 375, height: 100 }} />
                </View>
            );
        }
        if (node.name === 'em') {
            console.log(node);
            return <Text style={{ fontStyle: 'italic' }}>{node.children[0].data}</Text>;
        }
        if (node.name === 'strong') {
            return <Text style={{ fontWeight: 'bold' }}>{node.children[0].data}</Text>;
        }
    }

    render() {
        return (
            <ScrollView>
                {/* <Image source={{ uri: 'http://fms.beta.csfjn.com:81/upload/redactor/1532513182994_1872130543935674524.png' }} style={{ width: 375, height: 100 }} /> */}
                <Text style={{ fontStyle: 'italic' }}>{'ddddd'}</Text>
                <HTMLView
                    value={string} 
                    renderNode={this.renderNode}/>
            </ScrollView>
        );
    }
}

export default connect()(HomePage);
