// pages/today/addplan/addplan.js
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

  submitEvent: function (event) {
    var time = event.detail.value.time;//获得addplan.wxml中输入的值
    var task = event.detail.value.task;
    var pages = getCurrentPages();
    console.log(pages);
    var page = pages[0];
    var plans = page.data.plans;
    var obj={
      time:time,
      task:task
    } 
    plans.push(obj);
    page.setData({
      plans: plans
    })
    wx.navigateBack({})
  }
  
})