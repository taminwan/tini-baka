const app = getApp();

Page({
  onLoad(query) {},
  onReady() {
    this.getUserInfo();
  },
  onShow() {},
  onHide() {},
  onUnload() {},
  data: {
    code: "",
    userId: -1,
    userName: "",
    userAvatar: "",
    hasUserData: false,
  },

  getUserInfo() {
    my.getUserInfo({
      success: (res) => {
        app.userId = res.customerId;
        app.userName = res.name;
        app.userAvatar = res.avatar;
        app.hasUserData = true;

        this.setData({
          userAvatar: res.avatar,
          userId: res.customerId,
          userName: res.name,
          hasUserData: true,
        });
      },
      fail: (res) => {
        console.log("fail", res);
      },
    });
  },
  resetModal() {
    this.setData({
      modal: {},
    });
  },
  setModalState(nextModal) {
    const newModalState = {
      ...this.data.modal,
      ...nextModal,
    };

    this.setData({
      modal: newModalState,
    });
  },
  onMaskClick() {
    this.resetModal();
  },
  onTap(e) {
    this.setModalState(e.target.dataset.modal);
  },
});
