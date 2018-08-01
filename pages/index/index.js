//index.js
//获取应用实例
const app = getApp()
var appid = app.globalData.appid;

Page({
  data: {
    userInfo: {},
    music_url: 'http://pcgm4rcvg.bkt.clouddn.com/marry/music/yudao.aac',
    isPlayingMusic: true,
  

    testimgUrls: [
      'http://pcgm4rcvg.bkt.clouddn.com/marry/img1.jpg',
      'http://pcgm4rcvg.bkt.clouddn.com/marry/img2.jpg',
      'http://pcgm4rcvg.bkt.clouddn.com/marry/img3.jpg',
      'http://pcgm4rcvg.bkt.clouddn.com/marry/img4.jpg',
      'http://pcgm4rcvg.bkt.clouddn.com/marry/img5.jpg',
      'http://pcgm4rcvg.bkt.clouddn.com/marry/img6.jpg',
      'http://pcgm4rcvg.bkt.clouddn.com/marry/img7.jpg',
      'http://pcgm4rcvg.bkt.clouddn.com/marry/img8.jpg',
      'http://pcgm4rcvg.bkt.clouddn.com/marry/img9.jpg',
      'http://pcgm4rcvg.bkt.clouddn.com/marry/img10.jpg',
      'http://pcgm4rcvg.bkt.clouddn.com/marry/img11.jpg',
      'http://pcgm4rcvg.bkt.clouddn.com/marry/img12.jpg',
  
    ],


  },
  onLoad: function() {
    var that = this

    wx.getUserInfo({
      success: function(res) {
        that.setData({
          userInfo: res.userInfo
        })
      }
    })

    // wx.playBackgroundAudio({
    //   dataUrl: this.data.music_url,
    //   title: '',
    //   coverImgUrl: ''
    // })
  },
  onReady: function() {
    // 页面渲染完成
  },
  onShow: function() {
    // 页面显示
  },
  onHide: function() {
    // 页面隐藏
  },
  onUnload: function() {
    // 页面关闭
  },
  onShareAppMessage: function(res) {
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
  play: function(event) {
    if (this.data.isPlayingMusic) {
      wx.pauseBackgroundAudio();
      this.setData({
        isPlayingMusic: false
      })
    } else {
      wx.playBackgroundAudio({
        dataUrl: this.data.music_url,
        title: 'join lovehanyang’s wedding',
        coverImgUrl: ''
      })
      this.setData({
        isPlayingMusic: true
      })
    }
  },
})