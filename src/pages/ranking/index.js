import { getBiddingProductDetails, getRankingList, getBiddingProductIntro, getRankingListOfWinner } from '../../services/index';

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
        getBiddingProductIntro()
      ]);

      console.log('Bid products reponse: ', bid_product)
      console.log('Ranking reponse: ', ranking_list)
      console.log('Intro reponse: ', product_intro)

      this.setData({
        bidProduct: bid_product,
        rankingList: ranking_list,
        productIntro: product_intro,
        isLoading: false
      });
    } catch (error) {
      console.log('Error: ', error)
      this.setData({
        isLoading: false,
      });
    }
  },


  async loadWinnerData() {
    try {
      const [ranking_list] = await Promise.all([
        getRankingListOfWinner()
      ]);
  
      console.log('Winner ranking reponse: ', ranking_list);
  
      this.setData({
        rankingList: ranking_list,
        isLoading: false
      });
    } catch (error) {
      console.log('Error: ', error)
      this.setData({
        isLoading: false,
      });
    }
  },

	onLoad(query) {
	},
	onReady() {
    this.loadData()
	},
	onShow() {
	},
	onHide() {
	},
	onUnload() {
	},

  resetModal() {
    this.setData({
      modal: {},
    });
  },
  onButtonClick(e) {
    this.setData({
      modal: {},
    });

    // my.alert({
    //   content: 'item' + JSON.stringify(e.target.dataset),
    // });

    if(e.target.dataset.item.action == 'ok') {
      this.onConfirmBiddingClick(4000)
    }
  },
  onConfirmBiddingClick(price) {
    console.log("BIDDING: " + price)

    this.loadWinnerData()
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
});