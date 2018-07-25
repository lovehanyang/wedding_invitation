// pages/bless/index.js

const app = getApp()
var server = app.globalData.server;
var appid = app.globalData.appid;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this

    wx.getUserInfo({
      success: function (res) {
        that.setData({
          userInfo: res.userInfo
        })
      }
    })

    wx.request({
      url: server,
      method: 'GET',
      data: { 'c': 'info', 'appid': appid },
      header: {
        'Accept': 'application/json'
      },
      success: function (res) {
        // console.log(res.data)
        that.setData({
          mainInfo: res.data.mainInfo,
          zanLog: res.data.zanLog,
          zanNum: res.data.zanNum,
          slideList: res.data.slideList
        });
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () { 
    var that = this;
    wx.request({
      url: server,
      method: 'GET',
      data: { 'c': 'info', 'appid': appid},
      header: {
        'Accept': 'application/json'
      },
      success: function(res) {
        // console.log(res.data)
        that.setData({
          zanLog: res.data.zanLog,
          zanNum: res.data.zanNum
        });
      }
    })
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    var that = this;
    //console.log(that.data);
    return {
      title: that.data.mainInfo.share,
      imageUrl: that.data.mainInfo.thumb,
      path: 'pages/index/index',
      success: function (res) {
        wx.showToast({
          title: '分享成功',
        })
      },
      fail: function (res) {
        // 转发失败
        wx.showToast({
          title: '分享取消',
        })
      }
    }
  },
  zan: function (event) {
    var that = this;

    var userInfo = that.data.userInfo;
    var name = userInfo.nickName;
    var face = userInfo.avatarUrl;
    wx.request({
      url: server,
      data: { 'c': 'zan', 'appid': appid, 'nickname': name, 'face': face },
      header: {},
      method: "GET",
      dataType: "json",
      success: res => {
        // console.log(res.data);
        if (res.data.success) {

          that.setData({
            zanLog: res.data.zanLog,
            zanNum: res.data.zanNum
          });
          wx.showModal({
            title: '提示',
            content: res.data.msg,
            showCancel: false
          })
        } else {
          wx.showModal({
            title: '提示',
            content: res.data.msg,
            showCancel: false
          })
        }
      }
    })
  },
})