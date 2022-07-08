import { getBiddingProducts, getWatchoutProducts } from '../../services/index';


Page({
  data: {
    bidProduct: {},
    watchoutProducts: [],
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
      const [bid_product, watchout_products] = await Promise.all([
        getBiddingProducts(),
        getWatchoutProducts(),
      ]);

      console.log('Bid products reponse: ', bid_product)
      console.log('Watchout products reponse: ', watchout_products)

      this.setData({
        bidProduct: bid_product,
        watchoutProducts: watchout_products,
        isLoading: false,
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