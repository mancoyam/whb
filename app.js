var util = require('./utils/util.js');
var api = require('./config/api.js');
var user = require('./services/user.js');

//app.js
App({
  onLaunch: function () {
    //获取用户的登录信息
    user.checkLogin().then(res => {
      this.globalData.userInfo = wx.getStorageSync('userInfo');
      this.globalData.token = wx.getStorageSync('token');
    }).catch(() => {
      
    })
  },
  globalData: {
    userInfo: null,
    token: ''
  }
})