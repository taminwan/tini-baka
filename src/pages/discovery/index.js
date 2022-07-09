import { navigate } from "../../utils/navigate";

Page({
  onLoad(query) {},
  data: {
    searchTerm: "",
    listComicola: [
      {
        id: 1,
        name: "Con Đường Hồi Giáo",
        price: 50,
        thumbnail_url: "/images/for_demo/con_duong.png",
      },
      {
        id: 2,
        name: "Ikigami",
        price: 5,
        thumbnail_url: "/images/for_demo/ikigami.png",
      },
      {
        id: 3,
        name: "Sapiens",
        price: 5,
        thumbnail_url: "/images/for_demo/sapients.png",
      },
      {
        id: 4,
        name: "Tâm Lý Học Về Tiền",
        price: 5,
        thumbnail_url: "/images/for_demo/tam_ly.png",
      },
    ],
    listToiCo: [
      {
        id: 5,
        name: "Tỉ phú bán giày",
        price: 50,
        thumbnail_url: "/images/for_demo/ti_phu.png",
      },
      {
        id: 6,
        name: "Bóc tôm cho bạn",
        price: 5,
        thumbnail_url: "/images/for_demo/boc_tom.png",
      },
      {
        id: 3,
        name: "Mật Mã Tây Tạng 3",
        price: 5,
        thumbnail_url: "/images/for_demo/mat_ma.png",
      },
      {
        id: 4,
        name: "Ẩm thực miêu ký - dành cho tuổi 12+ trở lên ...",
        price: 5,
        thumbnail_url: "/images/product/product_item.jpg",
      },
    ],
    listFull: [
      {
        id: 5,
        name: "Truyện cổ trang",
        price: 50,
        thumbnail_url: "/images/for_demo/dai_bang.png",
      },
      {
        id: 3,
        name: "Ẩm thực miêu ký - dành cho tuổi 12+ trở lên ...",
        price: 5,
        thumbnail_url: "/images/product/product_item.jpg",
      },
      {
        id: 6,
        name: "Bóc tôm cho bạn",
        price: 5,
        thumbnail_url: "/images/for_demo/boc_tom.png",
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
