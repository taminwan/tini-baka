import { getCollectionListing, getWarehouseWaitListing  } from '../../services/index';

Page({
  data: {
    waitProducts: [],
    collectionProducts: [],
    isLoading: true,
  },

  async loadData() {
    this.setData({
      isLoading: true,
    });

    try {
      const [wait_products, collection_products] = await Promise.all([
        getWarehouseWaitListing(),
        getCollectionListing()
      ]);

      console.log('Wait products reponse: ', wait_products)
      console.log('Collection reponse: ', collection_products)

      this.setData({
        waitProducts: wait_products,
        collectionProducts: collection_products,
        isLoading: false
      });
    } catch (error) {
      console.log('Error: ', error)
      this.setData({
        isLoading: false,
      });
    }
  },

  navigateToCart() {
    my.navigateTo({
      url: 'pages/cart/index',
    });
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