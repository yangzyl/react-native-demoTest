

import React, { PureComponent } from 'react';
import {
    Text,
    Button,
    View,
    TouchableOpacity,
    CameraRoll,
    Modal,
} from 'react-native';
import { connect } from 'react-redux';

import { NavigationActions } from 'react-navigation';

import { Carousel } from 'antd-mobile';

import Echarts from 'native-echarts';

// import SYImagePicker from 'react-native-syan-image-picker';
// import AlbumView from 'teaset/components/AlbumView/AlbumView';
import SaveImage from 'react-native-save-image';
import NAV from '../../constants/Navigation';

const image1 = require('../GuidePage/guide-page-01.png');
const image2 = require('../GuidePage/guide-page-02.png');
const image3 = require('../GuidePage/guide-page-03.png');

const fetchParams = {
    first: 6,
    groupTypes: 'All',
    assetType: 'Photos',
};
const images = [{
    // Simplest usage.
    url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460',
    // You can pass props to <Image />.
    props: {
        // headers: ...
    },
}];
const option = {
    title: {
        text: 'ECharts demo',
    },
    tooltip: {},
    // legend: {
    //     data:['销量']
    // },
    xAxis: {
        data: ['感知注意',"感知注意","感知注意","感知注意"]
    },
    yAxis: {
        show: false,
    },
    series: [{
        name: '销量',
        type: 'bar',
        data: [20, 10, 15, 20],
        itemStyle: {
            color: 'rgba(50,50,50,0.7)',
        },
        barWidth: 30,
    },{
        name: 'baobao1',
        type: 'line',
        data: [20, 10, 15, 20],
        lineStyle: {
            color: 'rgb(128, 128, 128)',
            width: 2,
        },
    },
    {
        name: 'baobao2',
        type: 'line',
        data: [18, 18, 20, 18],
        lineStyle: {
            color: 'rgb(128, 128, 128)',
            width: 2,
        },
    }],
};
class Album extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: [111, 222, 3333, 444444],
        };
    }

    componentWillMount() {
        // CameraRoll.getPhotos(fetchParams)
        //     .then((data) => {
        //         console.log(data);
        //         const dataArr = data.edges.map(item => item.node.image.uri);
        //         this.setState({ data: dataArr });
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });
        // SaveImage.setAlbumName('未来脑计划');
        // SaveImage.setCompressQuality(80); // 整数品质
    }

    render() {
        return (
            <Echarts option={option} height={200} />
        );
    }
}


export default connect()(Album);
