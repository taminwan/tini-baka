import { getBiddingProductDetails, getRankingList, getBiddingProductIntro } from '../../services/index';

Page({
  data: {
    bidProduct: {},
    rankingList: [],
    productIntro: {},
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
	}
});