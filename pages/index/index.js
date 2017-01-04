var app = getApp()
Page({
  data: {
    typeList: ['牛肉板面','兰州拉面','重庆小面','河南烩面','阳春面','国士无双面']
  },
  onLoad: function(){
    wx.getLocation({
      type: 'wgs84',
      success: function(res){
        var latitude = res.latitude;
        var longitude = res.longitude;
        //wx.showModal({
        //  title: '当前位置',
        //  content: latitude + ',' + longitude
        //});
      }
    });
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
    var result = typeList[index];
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
