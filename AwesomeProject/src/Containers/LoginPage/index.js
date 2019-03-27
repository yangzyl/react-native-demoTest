

import React, { PureComponent } from 'react';
import {
    Text,
    Button,
    View,
    TouchableOpacity,
    NativeModules,
    NativeEventEmitter,
} from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
// import RNIdle from 'react-native-idle';

import SearchBar from 'react-native-test-ui/SearchBar';
import Btn from 'react-native-test-ui/Btn';
import Cart from 'react-native-test-ui/Cart';
import TabView from 'react-native-test-ui/TabView';
import Spinner from 'react-native-test-ui/Spinner';
import PercentageCircle from 'react-native-test-ui/PercentageCircle';
import AlbumList from 'react-native-test-ui/AlbumList';
import LoadingModal from 'react-native-test-ui/CustomModal/LoadingModal';
import CustomToast from 'react-native-test-ui/CustomToast';
import NAV from '../../constants/Navigation';

const image1 = require('../GuidePage/guide-page-01.png');
const image2 = require('../GuidePage/guide-page-02.png');
const image3 = require('../GuidePage/guide-page-03.png');

const BGNativeModuleExample = NativeModules.RNOmplayerNew;

const myNativeEvt = new NativeEventEmitter(BGNativeModuleExample);

class LoginPage extends PureComponent {
    static navigationOptions = {
        headerLeft: null,
        title: NAV.LOGIN.title,
        gesturesEnabled: false,
    };

    componentDidMount() {
        this.listener = myNativeEvt.addListener('iseCallback', this.iseCallback.bind(this));
        // this.listener = myNativeEvt.addListener('canMakePayment', this.iseCallback.bind(this));
        // this.listener = myNativeEvt.addListener('getPicConfirm', this.iseCallback.bind(this));
        // this.listener = myNativeEvt.addListener('getPicCancle', this.iseCallback.bind(this));

        setTimeout(() => {
            BGNativeModuleExample.emitCallBack('100', '11111');
            // BGNativeModuleExample.getPic();
        }, 4000);
        // alert(1);
        // const { BGNativeModuleExample } = NativeModules;
        // console.log(NativeModules);
        // console.log(BGNativeModuleExample);
        // BGNativeModuleExample.testPrint('Jack', {
        //     height: '1.78m',
        //     weight: '7kg',
        // });
        // BGNativeModuleExample.getNativeClass((name) => {
        //     console.log(name);
        // });

        // BGNativeModuleExample.testRespondMethod('dealloc')
        //     .then((result) => {
        //         console.log(result);
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });


        // RNIdle.disableIdleTimer();
        // LoadingModal.show();
        CustomToast.show({ title: 'aaa' });
    }

    iseCallback = (data) => {
        console.log(data);
        console.log(data[1]);
    }


      click = () => {
          //   alert(2);
          RNIdle.enableIdleTimer();
      }

      render() {
          return (
              <View>
                  <Text>
                登录页面
                  </Text>
                  <Button
                      title="跳转到首页"
                      onPress={() => this.props.mainScreen()} />
                  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                      <TouchableOpacity onPress={this.click}>
                          <Text>
                    ewewewewewewewe
                          </Text>
                      </TouchableOpacity>
                  </View>
                  <SearchBar />
                  <Btn />
                  <Cart
                      onChange={(val) => { console.log(val); }}
                      defaultValue={1}
                      min={1}
                      max={100}
                      step={1} />
                  <TabView>
                      <View tabLabel="图文">
                          <Text>我是图文</Text>
                      </View>
                      <View tabLabel="音频">
                          <Text>我是音频</Text>
                      </View>
                  </TabView>
                  {/* <Spinner /> */}
                  <PercentageCircle radius={17} percent={100 * (10 / 100)} color={'#08aca2'} />
                  <AlbumList noBack={true} maxNum={5} toText={() => console.log(111)} toCamera={() => console.log(111)} photoData={[image1, image2, image3]} completePhoto={() => console.log(111)} />
              </View>
          );
      }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
    mainScreen: () => dispatch(NavigationActions.navigate({ routeName: NAV.HOME.name })),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
