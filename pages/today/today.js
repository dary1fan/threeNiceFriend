// pages/hobby/hobby.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
        
      plans:[
        {
          time:[],
          task:[]
        }
      ]
      ,
       plan:[
         {
           time:'7:00-8:00',
           task:'起床吃饭'
         },
         {
           time: '8:00-9:00',
           task: '看书'
         }, 
         {
           time: '9:00-11:00',
           task: '编程'
         }, 
         {
           time: '11:00-12:00',
           task: '吃午饭'
         },
         {
           time: '12:00-14:00',
           task: '午休'
         },
         {
           time: '14:00-17:00',
           task: '打篮球'
         }
       ]
  },

  addplan: function (event) {
    wx.navigateTo({
      url: '/pages/today/addplan/addplan',
    })
  },

  deletehobby: function (event) {
    var plans = this.data.plans;
    var current = event.currentTarget.dataset.index;//获取选中的列表项下标
    console.log(current);
    plans.splice(current, 1);
    this.setData({
      plans: plans,
    })
  }
  ,


  finish:function(event){
    console.log(event.currentTarget.dataset.time);
  }
  ,
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {

  },

})