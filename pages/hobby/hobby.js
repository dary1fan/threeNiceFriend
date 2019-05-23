// pages/hobby/hobby.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hobbys: []
  },

  addhobby:function(event){
    wx.navigateTo({
      url: '/pages/hobby/addhobby/addhobby',
    })
  },

  daka: function (event) {
    wx.navigateTo({
      url: '/pages/hobby/finished/finished',
    })
  },

  deletehobby:function(event){
    var hobbys=this.data.hobbys;
    var current=event.currentTarget.dataset.index;//获取选中的列表项下标
    console.log(current);
    hobbys.splice(current,1);
    this.setData({
      hobbys:hobbys,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {

  },

})