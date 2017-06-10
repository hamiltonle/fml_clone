//index.js
// Require leancloud and object 
const AV = require('../../utils/av-weapp-min.js');
const Form = require('../../model/form.js');

var app = getApp()
Page({
  data: {
    userInfo: {},
    local_votes: [],
    votes: 0,
    forms: []
  },
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  add: function (e) {

    this.setData({
      votes: this.data.votes + 1
    })

    var clickId = e.currentTarget.dataset.id
    console.log(this)
    console.log("print e")
    console.log(e)
    console.log("print data")
    console.log(e.target.dataset.id)

    console.log(clickId)
    console.log("vote works")
    console.log(this.data.forms[0])
    var forms_array = this.data.forms

    var i = 0;
    while (i < forms_array.length) {
      console.log(forms_array[i].id)
      
      if (forms_array[i].id == clickId) {
        console.log("matches") 
        console.log(i)

        // update className，第二个参数是 objectId
        var found_acl = AV.Object.createWithoutData('Form', clickId);
        console.log(found_acl)

        found_acl.set('votes', 0);
        found_acl.save().then(function (found_acl) {
          found_acl.increment('votes', 1);
          found_acl.fetchWhenSave(true);
          return found_acl.save();
        }).then(function (found_acl) {
          // 使用了 fetchWhenSave 选项，save 成功之后即可得到最新的 views 值
        }, function (error) {
          // 异常处理
        });

        // var select = this.data.forms.findIndex(Form => Form.id === e.target.id)

        // // Increment in the local data storage
        // this.data.form[select].votes = this.data.form[select].votes + 1

        // // Update local data
        // this.setData({
        //   stories: this.data.stories
        // })









      }
      i++;
    }

  },
  onLoad: function () {
    new AV.Query('Form')
      .descending('createdAt')
      .find()
      .then(forms => this.setData({ forms }))
      .catch(console.error);
  },
})
