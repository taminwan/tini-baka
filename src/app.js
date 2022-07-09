App({
  data: {
    userId: -1,
    userName: '',
    userAvatar: '',
    hasUser: false,
  },
  getUserInfo() {
    my.getUserInfo({
      success: (res) => {
        this.userAvatar = res.avatar;
        this.userId = res.customerId;
        this.userName = res.name;
        this.hasUserData = true;
      },
      fail: (res) => {
        console.log("fail", res);
      },
    });
  },
  onLaunch(options) {
    console.log('App onLaunch');
    this.getUserInfo();
  },
  onShow(options) {
  },
});