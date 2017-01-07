/**
 * chisha main page
 */

var app = getApp()

Page({
  data: {
    typeList: [
      {'name':'陕西biangbiang面'},
      {'name':'陕西油泼面'},
      {'name':'山西刀削面'},
      {'name':'重庆小面'},
      {'name':'河南烩面'},
      {'name':'兰州拉面'},
      {'name':'牛肉板面'}
    ]
    /**
    typeList: ['陕西biangbiang面','陕西油泼面','山西刀削面','重庆小面','河南烩面','兰州拉面','牛肉板面']
    **/
  },
  onLoad: function(){
    var that = this;
    app.getUserInfo(function(userInfo){});
    /**
    wx.request({
      url: 'https://hong.chirongkeji.com/chisha/get_food_list/',
      success: function(res){
        that.setData({
          typeList: res.data.food_list
        })
        console.log(res.data);
      }
    });
    **/
    //wx.getLocation({
    //  type: 'wgs84',
    //  success: function(res){
    //    var latitude = res.latitude;
    //    var longitude = res.longitude;
    //  }
    //});
  },
  onShareAppMessage: function(){
    return {
      title: '吃啥',
      desc: '从此告别吃啥问题，吃麻麻香，胃口好，更健康',
      path: '/pages/index/index'
    }
  },
  choiceForMenu: function(event){
    console.log(event);
    this.setData({
      'typeList[1].status': 'true'
    });
    console.log(this.data);
  },
  choice: function(){
    var typeList = this.data['typeList'];
    console.log(typeList);
    var index = Math.ceil(Math.random()*typeList.length) - 1;
    //var result = typeList[index][1];
    var result = typeList[index]['name'];
    wx.showModal({
      title: '点到啥就吃啥:',
      content: result,
      success: function(res){
        if(res.confirm){
        }
      }
    })
  }
})
