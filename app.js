App({
  onLaunch: function(){
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo: function(cb){
    var that = this;
    if (this.globalData.userInfo){
      typeof cb == 'function' && cb(this.globalData.userInfo)
    }else{
      wx.login({
        success: function(res_code){
          console.log(res_code);
          wx.request({
            url: 'https://hong.chirongkeji.com/chisha/get_session_key/',
            //method: 'POST',
            data: {
              'code':res_code.code
            },
            success: function(res_session){
              console.log(res_session);
              wx.getUserInfo({
                success: function(res){
                  that.globalData.userInfo = res.userInfo;

                  // update member info to server
                  wx.request({
                    url: 'https://hong.chirongkeji.com/chisha/update_member_info/',
                    //method: 'POST',
                    data: {
                      'session_key': res_session.data.msg,
                      'encrypteddata':res.encryptedData,
                      'iv':res.iv
                    },
                    success: function(res){
                      console.log(res);
                    }
                  });
                  typeof cb == 'function' && cb(that.globalData.userInfo)
                }
              });
            }
          });

        }
      });
    }
  },
  globalData: {
    userInfo: null
  }
});
