//index.js
// Require leancloud and object 
const AV = require('../../utils/av-weapp-min.js');
const Form = require('../../model/form.js');


var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    fmltext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta sem malesuada magna mollis euismod.",
    votes: 1,
    forms: []
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  onReady: function () {
    new AV.Query('Form')
      .descending('createdAt')
      .find()
      .then(forms => this.setData({ forms }))
      .catch(console.error);
  },
})


// Page({
//   data: {
//     forms: []
//   },
//   onReady: function () {
//     new AV.Query('Form')
//       .descending('createdAt')
//       .find()
//       .then(forms => this.setData({ forms }))
//       .catch(console.error);
//   },
// })

