// pages/forget/forget.js
var app = getApp();
var that;
Page({

  /**
   * 页面的初始数据
   */
  
  data: {
     forget:{
       'time':"2019-5-5-15.20",
       'place':"栎5",
       'person':"张昆&范强",
       'event':"谈生意"
     },
     username:"张昆",
     //数组格式定义数据，访问的时候books[0]就是 '三国演义'
     books:[
       '三国演义',
       '水浒传'
     ],
    writeDiary:false,
    loading: false,
    windowHeight: 0,
    windowWidth: 0,
    limit: 10,
    diaryList: [],
    modifyDiarys: false,
    TodayList: [
      { description: "今天上白银"},
      { description: "明天打上单"},
      { description: "用死歌赢一盘"},
      { description: "打一个小时lol"},
    ],
    input: "新添加的备忘妹妹不开心啦"
  },




  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    that = this;
  },
  noneWindows: function () {
    that.setData({
      writeDiary: false,
    })
  },

  save: function () {
    wx.setStorageSync('TodayList', this.data.TodayList);
    wx.setStorageSync('writeDiary', this.data.writeDiary);
   
  },

  /**
 * 增加一条记录
 */
  toAddDiary: function (e) {

    that.setData({
      writeDiary: true
    })
   

  },


  addDiary: function (event) {
    var title = event.detail.value.title;
    var content = event.detail.value.content;
    var formId = event.detail.formId;
    console.log("event", event);
    if (!title) {
      common.showTip("标题不能为空", "loading");
    }
    else if (!content) {
      common.showTip("内容不能为空", "loading");
    }
    else {


      var todo = that.data.TodayList;

      todo.push({ description: title, completed: false });
      //更新数据
      that.setData({ TodayList: todo });
      that.setData({ writeDiary: !that.data.writeDiary });
      //输出日志信息
      console.log(that.data.TodayList)
      //保存记录到本地
      that.save();
          
      that.setData({
        loading: true});
      common.showTip('添加日记成功');
          that.onShow();
      
    }

  },


  /**
   * 清除一条记录
   */
  removeTodoHandle: function (e) {
    var todo = this.data.TodayList;
    var index = e.currentTarget.id;
    //删除数据
    todo.splice(index, 1);
    console.log(todo);
    //设置数据
    this.setData({
      TodayList: todo
    });
    this.save();
  },

  /**
 * 更改任务状态
 * */
  toggleTodoHandle: function (e) {
    var todo = this.data.TodayList;
    //获取e传输的id
    var index = e.currentTarget.id;
    //改变complete状态
    todo[index].completed = !todo[index].completed;
    //更改数据
    this.setData({
      TodayList: todo
    });
    this.save();
  },

})