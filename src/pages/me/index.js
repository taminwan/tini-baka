const app = getApp();

Page({
  onLoad(query) {},
  onReady() {
    this.getUserInfo()
  },
  onShow() {},
  onHide() {},
  onUnload() {},
  data: {
    code: "",
    userId: -1,
    userName: '',
    userAvatar: '',
    hasUserData: false,
  },

  getAuthCode() {
    my.getAuthCode({
      success: (res) => {
        console.log("success", res);
        this.setData({
          code: res.authCode,
        });
      },
      fail: (res) => {
        console.log("fail", res);
      },
    });
  },

  getUserInfo() {
    my.getUserInfo({
      success: (res) => {
        console.log("success", res);
        
        app.userId = res.customerId;
        app.userName = res.name;
        app.userAvatar= res.avatar;
        app.hasUserData = true

        this.setData({
          userAvatar: res.avatar,
          userId: res.customerId,
          userName: res.name,
          hasUserData: true
        });
      },
      fail: (res) => {
        console.log("fail", res);
      }
    });
  }
});
