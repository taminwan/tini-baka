import { setStorage } from "../../utils/storage";
import { switchTab } from "../../utils/navigate";

const app = getApp();

Page({
  onLoad(query) {},
  onReady() {
    this.getUserInfo();
  },
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

  onButtonClick(e) {
    this.setData({
      modal: {},
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
    var audio = my.createAudioContext("audio1");
    audio.play();
    this.setModalState(e.target.dataset.modal);
  },
  clearData() {
    setStorage("user_suggest", "");
    switchTab({
      page: "index",
    });
  },
});
