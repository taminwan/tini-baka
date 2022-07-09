import {
  getBiddingProductDetails,
  getRankingList,
  getBiddingProductIntro,
  getRankingListOfWinner,
} from "../../services/index";

const appConst = getApp();

Page({
  data: {
    bidProduct: {},
    rankingList: [],
    productIntro: {},
    modal: {},
    isLoading: true,
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

      console.log("Bid products reponse: ", bid_product);
      console.log("Ranking reponse: ", ranking_list);
      console.log("Intro reponse: ", product_intro);

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
  },

  async loadWinnerData() {
    try {
      const app = getApp();
      var _userName = '';
      var _userAvatar = '';
      if(app.hasUserData) {
        _userName = app.userName;
        _userAvatar = app.userAvatar;
      } else {
        _userName = 'YOU_ARE_HERE';
        _userAvatar = 'https://salt.tikicdn.com/ts/tiniapp/f1/8f/92/8ad3c2e0f1236800a1fa67b122bc366c.png';
      }

      const [ranking_list] = await Promise.all([getRankingListOfWinner(
        _userName,
        _userAvatar
      )]);

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

    if (e.target.dataset.item.action == "ok") {
      this.onConfirmBiddingClick(4000);
    }
  },
  onConfirmBiddingClick(price) {
    console.log("BIDDING: " + price);
    var audio = my.createAudioContext('audio1');
    audio.play();
    this.loadWinnerData();
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

  handleBack() {
    my.navigateBack();
  },
});
