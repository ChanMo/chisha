var app = getApp();

Page({
  onShareAppMessage: function(){
    return {
      title: '驰荣科技',
      desc: '全国首家主张“以创意驱动服务”的小程序研发公司',
      path: '/pages/card/card'
    }
  },
  call: function(){
    wx.makePhoneCall({
      phoneNumber: '18663733253'
    })
  }
});
