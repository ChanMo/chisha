var app = getApp()
Page({
  data: {
    typeList: []
  },
  onLoad: function(){
    var that = this;
    app.getUserInfo(function(userInfo){});
    wx.request({
      url: 'https://hong.chirongkeji.com/chisha/get_food_list/',
      success: function(res){
        that.setData({
          typeList: res.data.food_list
        })
        console.log(res.data);
      }
    });
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
  choice: function(){
    var typeList = this.data['typeList'];
    var index = Math.ceil(Math.random()*typeList.length) - 1;
    var result = typeList[index][1];
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
