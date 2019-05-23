// pages/hobby/addhobby/addhobby.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  submitEvent:function(event){
    var hobby=event.detail.value.hobby;//获得addhobby.wxml中输入的值
    var pages=getCurrentPages();
    console.log(pages);
    var page=pages[0];
    var hobbys=page.data.hobbys;
    hobbys.push(hobby);
    page.setData({
      hobbys:hobbys
    })
    wx.navigateBack({})
  }
})