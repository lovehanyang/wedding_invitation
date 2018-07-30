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

  markertap(e) {

    var lng = "114.842384"
    var lat = "38.023914"
    console.log(lat)
    wx.openLocation({
      latitude: parseFloat(lat),
      longitude: parseFloat(lng),
      scale: 18,
      name: "渔人码头宴会厅",
      address: "河北省 石家庄市 藁城区 "
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this

    wx.getUserInfo({
      success: function(res) {
        that.setData({
          userInfo: res.userInfo
        })
      }
    })

    //地图信息
    var lng = "114.842384"
    var lat = "38.023914"

    // var lng = res.data.mainInfo.lng
    // var lat = res.data.mainInfo.lat
    that.setData({
      lng: lng, // 全局属性，用来取定位坐标
      lat: lat,
      markers: [{
        iconPath: "/images/nav.png",
        id: 0,
        latitude: lat, // 页面初始化 options为页面跳转所带来的参数 
        longitude: lng,
        width: 50,
        height: 50
      }],
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    

  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    var that = this;
    //console.log(that.data);
    return {
      title: that.data.mainInfo.share,
      imageUrl: that.data.mainInfo.thumb,
      path: 'pages/index/index',
      success: function(res) {
        wx.showToast({
          title: '分享成功',
        })
      },
      fail: function(res) {
        // 转发失败
        wx.showToast({
          title: '分享取消',
        })
      }
    }
  },
})