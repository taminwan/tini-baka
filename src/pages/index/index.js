import { getBiddingProducts, getStalktProducts } from '../../services/index';


Page({
  data: {
    bidProduct: {},
    stalkProducts: [],
    isLoading: true,
    tabs: [
      {
        title: '⚡ Bid',
      },
      {
        title: 'Hóng tin 👀',
      },
    ],
    activeTab: 0,
    isSwipeable: false,
  },
  handleTabClick({ index, tabsName }) {
    this.setData({
      [tabsName]: index,
    });
  },
  handleTabChange({ index, tabsName }) {
    this.setData({
      [tabsName]: index,
    });
  },

  async loadData() {
    this.setData({
      isLoading: true,
    });

    try {
      const [bid_product, stalk_products] = await Promise.all([
        getBiddingProducts(),
        getStalktProducts(),
      ]);

      console.log('Bid products reponse: ', bid_product)
      console.log('Stalk products reponse: ', stalk_products)

      this.setData({
        bidProduct: bid_product,
        stalkProducts: stalk_products,
        isLoading: false,
      });
    } catch (error) {
      console.log('Error: ', error)
      this.setData({
        isLoading: false,
      });
    }
  },

  navigateToRanking() {
    my.navigateTo({
      url: 'pages/ranking/index',
    });
  },

  onLoad(query) {
  },
  onReady() {
    console.log("READYYYYY")
    this.loadData();
  },
  onShow() {
  },
  onHide() {
  },
  onUnload() {
  }
});