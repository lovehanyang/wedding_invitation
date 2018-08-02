// pages/map/index.js
const app = getApp()
var server = app.globalData.server;
var appid = app.globalData.appid;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},

    movieList:

      [{
          other: "",
          time: 1532519734589,
          title: "海边",
          vid: "e0354z3cqjp",
          src: "http://pcgm4rcvg.bkt.clouddn.com/marry/video1532782634171.mp4"
        },
        {
          other: "",
          time: 1532519734589,
          title: "绿地",
          vid: "e0354z3cqjp",
          src: "http://pcgm4rcvg.bkt.clouddn.com/marry/video1532871405425.mp4"
        },
        {
          other: "",
          time: 1532519734589,
          title: "喷泉",
          vid: "e0354z3cqjp",
          src: "http://pcgm4rcvg.bkt.clouddn.com/marry/video1532963841560.mp4"
        }
      ]
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
  }
})