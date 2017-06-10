// pages/submit/submit.js
// Require Leancloud library (the av-weapp-min.js file you just add).
const AV = require('../../utils/av-weapp-min.js');

// Require form model
const Form = require('../../model/form.js');

var app = getApp()

Page({
  data: {
    userInfo: {},
    loading: false
  },

  // Form Submission
  bindFormSubmit: function (e) {
    // Local storage
    console.log(e)
    console.log(e.detail.value.fml)
    var fml = e.detail.value.fml
    var name = e.detail.value.name
    // var review = e.detail.value.review
    // var recommendation = e.detail.value.recommendation
    // var learntocode = e.detail.value.learntocode
    // var heardAbout = e.detail.value.heardAbout
    // var nickName = e.detail.value.nickName
    // var email = e.detail.value.email
    // var phone = e.detail.value.phone

    // Leancloud permissions
    var acl = new AV.ACL();
    acl.setPublicReadAccess(true);
    acl.setPublicWriteAccess(true);

    // Leancloud storage
    setTimeout(function () {
      new Form({
        name: name,
        fml: fml
      }).setACL(acl).save().catch(console.error);

      // Redirect user
      wx.reLaunch({
        url: '/pages/index/index?form=1'
      });
    }, 2000);
  


  },

  onLoad: function (options) {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },

  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})





// // pages/submit/submit.js

// // var app = getApp()


// Page({

//   /**
//    * 页面的初始数据
//    */
//   data: {
//     userInfo: {}
//   },

//   bindViewTap: function () {
//     wx.navigateTo({
//       url: '../logs/logs'
//     })
//   },
//   /**
//    * 生命周期函数--监听页面加载
//    */
//   onLoad: function (options) {

//     console.log('onLoad')
//     console.log(userInfo)
//     var that = this
//     //调用应用实例的方法获取全局数据
//     app.getUserInfo(function (userInfo) {
//       //更新数据
//       that.setData({
//         userInfo: userInfo
//       })
//     })


//   },

//   /**
//    * 生命周期函数--监听页面初次渲染完成
//    */
//   onReady: function () {

//   },