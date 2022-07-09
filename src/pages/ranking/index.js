import {
  getBiddingProductDetails,
  getRankingList,
  getBiddingProductIntro,
  getRankingListOfWinner,
} from "../../services/index";
import { switchTab } from "../../utils/navigate";

Page({
  data: {
    bidProduct: {},
    rankingList: [],
    productIntro: {},
    modal: {},
    isLoading: true,
    userName: "",
    userAvatar: "",
  },

  async loadData() {
    this.setData({
      isLoading: true,
    });

    try {
      const [bid_product, ranking_list, product_intro] = await Promise.all([
        getBiddingProductDetails(),
        getRankingList(),
        getBiddingProductIntro(),
      ]);

      this.setData({
        bidProduct: bid_product,
        rankingList: ranking_list,
        productIntro: product_intro,
        isLoading: false,
      });
    } catch (error) {
      console.log("Error: ", error);
      this.setData({
        isLoading: false,
      });
    }

    const app = getApp();
    var _userName = "";
    var _userAvatar = "";
    if (app.hasUserData) {
      _userName = app.userName;
      _userAvatar = app.userAvatar;
    }
    this.setData({
      userName: _userName,
      userAvatar: _userAvatar,
    });
  },

  async loadWinnerData() {
    try {
      const app = getApp();
      var _userName = "";
      var _userAvatar = "";
      if (app.hasUserData) {
        _userName = app.userName;
        _userAvatar = app.userAvatar;
      } else {
        _userName = "YOU_ARE_HERE";
        _userAvatar =
          "https://salt.tikicdn.com/ts/tiniapp/f1/8f/92/8ad3c2e0f1236800a1fa67b122bc366c.png";
      }

      const [ranking_list] = await Promise.all([
        getRankingListOfWinner(_userName, _userAvatar),
      ]);

      console.log("Winner ranking reponse: ", ranking_list);

      this.setData({
        rankingList: ranking_list,
        isLoading: false,
      });
    } catch (error) {
      console.log("Error: ", error);
      this.setData({
        isLoading: false,
      });
    }
  },

  onLoad(query) {},
  onReady() {
    my.hideBackHome({ hide: true });
    this.loadData();
  },
  onShow() {},
  onHide() {},
  onUnload() {},

  resetModal() {
    this.setData({
      modal: {},
    });
  },
  onButtonClick(e) {
    this.setData({
      modal: {},
    });

    console.log(e.target.dataset.item.action);
    if (e.target.dataset.item.action == "ok") {
      this.onConfirmBiddingClick(4000);
    }
    if (e.target.dataset.item.action == "go_cart") {
      my.navigateBack();
      switchTab({
        page: "warehouse",
      });
    }
  },
  onConfirmBiddingClick(price) {
    var audio = my.createAudioContext("audio1");
    audio.play();
    this.loadWinnerData();
    setTimeout(() => {
      this.onWin();
    }, 2000);
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
  changeImageSize(e) {
    this.setModalState({
      topImageSize: e.target.dataset.size,
    });
  },
  onMaskClick() {
    this.resetModal();
  },
  onTap(e) {
    this.setModalState(e.target.dataset.modal);
  },
  onWin() {
    this.setModalState({
      type: "image2",
      showClose: true,
    });
  },
  handleBack() {
    my.navigateBack();
  },
});
