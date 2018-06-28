//index.js
const api = require('../../config/api.js');
const user = require('../../services/user.js');
const util = require('../../utils/util.js');
//获取应用实例
const app = getApp()

Page({
  data: {
    type: 0
  },
  onLoad: function () {
    
  },
  search: function(e) {
    let keyword = e.detail.value;
    util.request(api.Searchshops, { keyword: keyword }).then(res => {
      console.log(res)
    });
  },
  tabclick: function(e) {
    this.setData({
      type: e.currentTarget.dataset.type
    })
  }
})
