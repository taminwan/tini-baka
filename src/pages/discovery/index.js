import { navigate } from "../../utils/navigate";

Page({
  onLoad(query) {},
  data: {
    searchTerm: "",
    listComicola: [
      {
        id: 1,
        name: "Ẩm thực miêu ký - dành cho tuổi 12+ trở lên ...",
        price: 50,
        thumbnail_url: "/images/product/product_item.jpg",
      },
      {
        id: 2,
        name: "Ẩm thực miêu ký - dành cho tuổi 12+ trở lên ...",
        price: 5,
        thumbnail_url: "/images/product/product_item.jpg",
      },
      {
        id: 3,
        name: "Ẩm thực miêu ký - dành cho tuổi 12+ trở lên ...",
        price: 5,
        thumbnail_url: "/images/product/product_item.jpg",
      },
      {
        id: 4,
        name: "Ẩm thực miêu ký - dành cho tuổi 12+ trở lên ...",
        price: 5,
        thumbnail_url: "/images/product/product_item.jpg",
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
    navigate({
      page: "discoveryDetail",
      params: {
        id: product.id,
      },
    });
  },
});
