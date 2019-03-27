
function Nav(name, title) {
    this.name = name;
    this.title = title;
}

Nav.prototype.toString = function () {
    return this.name;
};

export default {
    GUIDE: new Nav('Guide', ''),
    LOGIN: new Nav('Login', '登录'),
    HOME: new Nav('Home', '育儿'),
    MY: new Nav('My', '我的'),
    VIP: new Nav('Vip', 'VIP'),
    CITY: new Nav('City', '联动'),
    DOWNLOAD: new Nav('Download', '下载'),
    CAMERA: new Nav('Camera', '相机'),
    ALBUM: new Nav('Album', '预览图片'),
    TOUCHID: new Nav('Touchid', '识别'),
    // MATTER: new Nav('Matter', 'matter'),
};
