Page({
  onLoad(query) {},
  onReady() {},
  onShow() {},
  onHide() {},
  onUnload() {},
  data: {
    code: "",
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
});
