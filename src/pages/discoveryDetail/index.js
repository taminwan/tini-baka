import { switchTab } from "../../utils/navigate";

Page({
  onLoad(query) {
    console.log("query", query);
  },
  onReady() {
    my.hideBackHome({ hide: true });
  },
  data: {
    product: {
      id: "123",
      name: "",
      thumbnail_url: "/images/product/product_item.jpg",
      price: 0,
      chapters: [
        {
          id: "1",
          img: "/images/product/chap_img.png",
          index: "Chương 1",
          date: "22/6/2022",
          title: "Pilot",
        },
        {
          id: "2",
          img: "/images/product/chap_img.png",
          index: "Chương 1",
          date: "22/6/2022",
          title: "Pilot",
        },
        {
          id: "3",
          img: "/images/product/chap_img.png",
          index: "Chương 1",
          date: "22/6/2022",
          title: "Pilot",
        },
        {
          id: "4",
          img: "/images/product/chap_img.png",
          index: "Chương 1",
          date: "22/6/2022",
          title: "Pilot",
        },
      ],
      descrition:
        '"Ở Hàn Quốc này, kẻ mạnh chính là luật. Có tiền thì vô tội, không tiền thì có tội". Con gái của Kim Jin bị người ta bạo hành tập thể dẫn đến mất khả năng làm mẹ, nhưng những kẻ gây tội lại được tại ngoại vì có bố mẹ',
    },
    isShowmore: false,
  },

  handleBack() {
    my.navigateBack();
  },

  toMyHub() {
    my.navigateBack();
    switchTab({
      page: "warehouse",
    });
  },

  handleToggle() {
    this.setData({
      isShowmore: !this.data.isShowmore,
    });
  },
});
