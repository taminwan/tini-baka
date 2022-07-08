Page({
  onLoad(query) {},
  onReady() {},
  onShow() {},
  onHide() {},
  onUnload() {},
  data: {
    searchTerm: "",
    listComicola: [
      {
        id: 1,
        name: "Ẩm thực miêu ký - dành cho tuổi 12+ trở lên ...",
        price: 50,
      },
      {
        id: 2,
        name: "Ẩm thực miêu ký - dành cho tuổi 12+ trở lên ...",
        price: 5,
      },
      {
        id: 3,
        name: "Ẩm thực miêu ký - dành cho tuổi 12+ trở lên ...",
        price: 5,
      },
      {
        id: 4,
        name: "Ẩm thực miêu ký - dành cho tuổi 12+ trở lên ...",
        price: 5,
      },
    ],
  },
  searchTimeout: null,

  async onChangeSearchInput(event) {
    const { value } = event.detail;

    this.setData({ searchTerm: value });
  },

  onConfirm() {},

  clearSearchInput() {
    this.onChangeSearchInput({ detail: { value: "" } });
  },

  onTapProduct(product) {
    console.log("onTapProduct", product);
  },
});
