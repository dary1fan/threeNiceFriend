// pages/forget/forget.js

var Bmob = require('../../utils/bmob.js');
var common = require('../../utils/common.js');
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
      { description: "练一刻钟一生所爱" },
      { description: "不吹牛皮五秒钟" },
    ],
    input: "大嘎好，我是新加入的渣嘎飞我不开心啦"
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
    });

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
      
    });
   
   

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
      that.setData({
        loading: true
      });

      var todo = that.data.TodayList;

      todo.push({ description: title, completed: false });
      //更新数据
      that.setData({ TodayList: todo });
      that.setData({ writeDiary: !that.data.writeDiary });
      //输出日志信息
      console.log(that.data.TodayList)
      //保存记录到本地
      that.save();
          

/*  
      var currentUser = Bmob.User.current();

      var User = Bmob.Object.extend("_User");
      var UserModel = new User();

      var Memo = Bmob.Object.extend("memo");
      var memo = new Memo();
      memo.set("userid", currentUser.id);
      memo.set("what", title);//保存formId
      memo.set("details", content);
     
      if (currentUser) {
        UserModel.id = currentUser.id;
        diary.set("own", UserModel);
      }
      //添加数据，第一个入口参数是null
      memo.save(null, {
        success: function (result) {
          // 添加成功，返回成功之后的objectId（注意：返回的属性名字是id，不是objectId），你还可以在Bmob的Web管理后台看到对应的数据
          common.showTip('添加日记成功');
          that.setData({
            writeDiary: false,
            loading: false
          })

          var currentUser = Bmob.User.current();

          //成功后发送模板消息，这个只能在手机上测试，模拟器里面没有formid
          // var temp = {
          //   "touser": currentUser.get("openid"),
          //   "template_id": "B-2GcobfYnptevxY8G3SdA72YLYGZpOoJO_FEHlouWg",
          //   "page": "",
          //   "form_id": formId,
          //   "data": {
          //     "keyword1": {
          //       "value": "SDK测试内容",
          //       "color": "#173177"

          //     },
          //     "keyword2": {
          //       "value": "199.00"
          //     },
          //     "keyword3": {
          //       "value": "123456789"
          //     },
          //     "keyword4": {
          //       "value": "2015年01月05日 12:30"
          //     }
          //     ,
          //     "keyword5": {
          //       "value": "恭喜您支付成功，如有疑问请反馈与我"
          //     }
          //   }
          //   , "emphasis_keyword": "keyword1.DATA"
          // }
          // console.log(temp);
          // Bmob.sendMessage(temp).then(function (obj) {
          //   console.log('发送成功');


          // }, function (err) {

          //   common.showTip('失败' + err);
          // });


          // 成功后发送主人模板消息，这个只需把openid改正确即可接收到， Bmob后端云公众号回复openid
          var temp = {
            "touser": "oUxY3w_jURG89H5wCIvJDPjJ5s2o",
            "template_id": "-ERkPwp0ntimqH39bggQc_Pj55a18CYLpj-Ert8-c8Y",
            "url": "http://www.baidu.cn/",
            "data": {
              "first": {
                "value": "您好，Restful 失效，请登录控制台查看。",
                "color": "#c00"
              },
              "keyword1": {
                "value": "Restful 失效"
              },
              "keyword2": {
                "value": "2017-07-03 16:13:01"
              },
              "keyword3": {
                "value": "高"
              },
              "remark": {
                "value": "如果您十分钟内再次收到此信息，请及时处理。"
              }
            }
          }
          console.log(temp);
          Bmob.sendMasterMessage(temp).then(function (obj) {
            console.log('发送成功');


          }, function (err) {

            common.showTip('失败' + err);
          });



          that.onShow()
        },
        error: function (result, error) {
          // 添加失败
          common.showTip('添加备注失败，请重新发布', 'loading');

        }
      });
*/

      
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