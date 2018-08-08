//index.js
//获取应用实例
const app = getApp()
var appid = app.globalData.appid;
const AV = require("../../WxComment/libs/leancloud/av-weapp-min.js");
var Common = require('../../WxComment/libs/scripts/common.js');
// LeanCloud 应用的 ID 和 Key
// AV.init({
//   appId: 'Q7y6ChsRaO66w6DLJ7XR0IF9-gzGzoHsz',
//   appKey: 'tO9g5jhd0ETAx2vrRtR1NLp5',
// });


Page({
  data: {
    userInfo: {},
    music_url: 'http://pcgm4rcvg.bkt.clouddn.com/bgmusic_yudao.mp3',
    isPlayingMusic: true,
    title: '我们结婚啦',
    coverImgUrl: 'http://pcgm4rcvg.bkt.clouddn.com/marry/img/music_cover.jpg',


    testimgUrls: [
      'http://pcgm4rcvg.bkt.clouddn.com/marry/img16.jpg',
      'http://pcgm4rcvg.bkt.clouddn.com/marry/img2.jpg',
      'http://pcgm4rcvg.bkt.clouddn.com/marry/img3.jpg',
      'http://pcgm4rcvg.bkt.clouddn.com/marry/img4.jpg',
      'http://pcgm4rcvg.bkt.clouddn.com/marry/img5.jpg',
      'http://pcgm4rcvg.bkt.clouddn.com/marry/img6.jpg',
      'http://pcgm4rcvg.bkt.clouddn.com/marry/img17.jpg',
      'http://pcgm4rcvg.bkt.clouddn.com/marry/img8.jpg',
      'http://pcgm4rcvg.bkt.clouddn.com/marry/img9.jpg',
      'http://pcgm4rcvg.bkt.clouddn.com/marry/img10.jpg',
      'http://pcgm4rcvg.bkt.clouddn.com/marry/img11.jpg',
      'http://pcgm4rcvg.bkt.clouddn.com/marry/img12.jpg',
      'http://pcgm4rcvg.bkt.clouddn.com/marry/img13.jpg',
      'http://pcgm4rcvg.bkt.clouddn.com/marry/img14.jpg',
      'http://pcgm4rcvg.bkt.clouddn.com/marry/img15.jpg',

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

    var query = new AV.Query('ImageList');
    query.include('src');
    query.find().then(function(imageList) {
      // 将返回结果返回到 data 数据中，以在 wxml 渲染


      console.log('韩洋4:' + imageList.length);

      for (var i = 0, len = imageList.length; i < len; i++) {

        var str = JSON.stringify(imageList[i]);
        var obj = JSON.parse(str);
        that.data.testimgUrls.unshift(obj.src);
        console.log('韩洋9' + obj.src); //遍历输出
      }

      that.setData({
        testimgUrls: that.data.testimgUrls
      })

    }, function(err) {
      console.log(err);
    });



    /**
     * 不支持aac格式
     */
    const backgroundAudioManager = wx.getBackgroundAudioManager()
    player()

    function player() {
      backgroundAudioManager.title = that.data.title,
        backgroundAudioManager.src = that.data.music_url
      backgroundAudioManager.coverImgUrl = that.data.coverImgUrl
      backgroundAudioManager.play();

      backgroundAudioManager.onEnded(() => {
        player()
      })
    }

    // wx.playBackgroundAudio({
    //   dataUrl: this.data.music_url,
    //   title: this.data.title,
    //   coverImgUrl: this.data.coverImgUrl
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
        title: this.data.title,
        coverImgUrl: this.data.coverImgUrl
      })
      this.setData({
        isPlayingMusic: true
      })
    }
  },
})