import request, { fakeRequest } from "./request";

export const getBiddingProducts = () => {
  return fakeRequest([
    {
      id: 6816541,
      name: "Tỷ phú bán giày (được CEO Tiki ký tặng độc quyền)",
      thumbnail: "/images/for_demo/ti_phu.png",
      no_bidding_counter: "9.123.124",
      bid_seconds: 24,
      latest_bidding_name: "Sonbui Son",
      latest_bidding_amount: "1.260",
      isAllowToBid: true,
    },
    {
      id: 6816542,
      name: "[Limited] A CLASH OF KINGS - tặng kèm token Iron Throne",
      thumbnail: "/images/for_demo/GOT.png",
      no_bidding_counter: "9.123.124",
      bid_seconds: 24,
      latest_bidding_name: "Sonbui Son",
      latest_bidding_amount: "1.260",
      isAllowToBid: true,
    },
  ]);
};

export const getBiddingProductDetails = () => {
  return fakeRequest({
    id: 6816541,
    name: "Tỷ phú bán giày (được CEO Tiki ký tặng độc quyền)",
    thumbnail: "/images/for_demo/ti_phu.png",
    no_bidding_counter: "9.123.124",
    bid_seconds: 24,
    latest_bidding_name: "Sonbui Son",
    latest_bidding_amount: "1.260",
    isAllowToBid: true,
  });
};

export const getRankingList = () => {
  return fakeRequest([
    {
      name: "tung.tran",
      avatar:
        "https://salt.tikicdn.com/ts/tiniapp/26/03/94/34cdc4c75c5fdd7939fdeae5938ae676.png",
      price: "3.313,45",
      icStatus: 1,
    },
    {
      name: "van.vuk",
      avatar:
        "https://salt.tikicdn.com/ts/tiniapp/f1/8f/92/8ad3c2e0f1236800a1fa67b122bc366c.png",
      price: "313,12",
      icStatus: 0,
    },
    {
      name: "sonbui",
      avatar:
        "https://salt.tikicdn.com/cache/w100/ts/upload/9c/ca/37/d6e873b1421da32b76654bb274e46683.png.webp",
      price: "31",
      icStatus: 1,
    },
    {
      name: "Minwan",
      avatar:
        "https://salt.tikicdn.com/cache/w100/ts/upload/9c/ca/37/d6e873b1421da32b76654bb274e46683.png.webp",
      price: "3",
      icStatus: 1,
    },
    {
      name: "tinhhuynh",
      avatar:
        "https://salt.tikicdn.com/ts/tiniapp/26/03/94/34cdc4c75c5fdd7939fdeae5938ae676.png",
      price: "0,5",
      icStatus: 1,
    },
  ]);
};

//"https://salt.tikicdn.com/ts/tiniapp/f1/8f/92/8ad3c2e0f1236800a1fa67b122bc366c.png"
export const getRankingListOfWinner = (userName, userAvatar) => {
  return fakeRequest([
    {
      name: userName,
      avatar: userAvatar,
      price: "4000",
      icStatus: "1",
    },
    {
      name: "tung.tran",
      avatar:
        "https://salt.tikicdn.com/ts/tiniapp/26/03/94/34cdc4c75c5fdd7939fdeae5938ae676.png",
      price: "3.313,45",
      icStatus: "",
    },
    {
      name: "van.vuk",
      avatar:
        "https://salt.tikicdn.com/ts/tiniapp/f1/8f/92/8ad3c2e0f1236800a1fa67b122bc366c.png",
      price: "313,12",
      icStatus: "",
    },
    {
      name: "sonbui",
      avatar:
        "https://salt.tikicdn.com/cache/w100/ts/upload/9c/ca/37/d6e873b1421da32b76654bb274e46683.png.webp",
      price: "31",
      icStatus: "",
    },
    {
      name: "Minwan",
      avatar:
        "https://salt.tikicdn.com/cache/w100/ts/upload/9c/ca/37/d6e873b1421da32b76654bb274e46683.png.webp",
      price: "3",
      icStatus: "",
    },
    {
      name: "tinhhuynh",
      avatar:
        "https://salt.tikicdn.com/ts/tiniapp/26/03/94/34cdc4c75c5fdd7939fdeae5938ae676.png",
      price: "0,5",
      icStatus: "",
    },
  ]);
};

export const getBiddingProductIntro = () => {
  return fakeRequest({
    author: "Shin Jin Woo",
    artist: "Hong Soon Sik",
    type: "Hành Động",
    data: "'Ở Hàn Quốc này, kẻ mạnh chính là luật. Có tiền thì vô tội, không tiền thì có tội'\n'Ở Hàn Quốc này, kẻ mạnh chính là luật. Có tiền thì vô tội, không tiền thì có tội'.\nCon gái của Kim Jin bị người ta bạo hành tập thể dẫn đến mất khả năng làm mẹ, nhưng những kẻ gây tội lại được tại ngoại vì có bố mẹ ...",
  });
};

export const getStalktProducts = () => {
  return fakeRequest([
    {
      seller: {
        name: "BAKA Official",
        time: "3 Tháng 7, 2022 - 13:24 ",
        avatar: "/images/baka_avatar.png",
      },
      from: "Góc BID",
      content: "Chú Thuật chưa bao giờ hết hot",
      thumbnail: "/images/for_demo/chu_thuat_5.png",
      title: "[Limited] Chú Thuật Hồi Chiến - Full 5 tập - 1 bộ duy nhất",
      isAllowToBid: true,
      no_bidding_counter: "9.123",
    },
    {
      seller: {
        name: "user.name123",
        time: "3 March, 2022 at 13:24 ",
        avatar:
          "https://salt.tikicdn.com/ts/tiniapp/26/03/94/34cdc4c75c5fdd7939fdeae5938ae676.png",
      },
      from: "Góc review",
      content: "Đã đọc rồi thì không dứt ra được nha",
      thumbnail: "/images/for_demo/conan.png",
      title: "",
      isAllowToBid: false,
      no_bidding_counter: "",
    },
  ]);
};

export const getWarehouseWaitListing = () => {
  return fakeRequest([
    {
      price: "12000",
      thumbnail: "/images/for_demo/ti_phu.png",
      title: "Tỷ phú bán giày (được CEO Tiki ký tặng độc quyền)",
      isAllowToBuy: true,
      time: "",
    },
    // {
    //   price: "50",
    //   thumbnail: "/images/product/product_item.jpg",
    //   title: "Ẩm thực miêu ký - dành cho tuổi 12+ trở lên ...",
    //   isAllowToBuy: true,
    //   time: "",
    // },
  ]);
};

export const getCollectionListing = () => {
  return fakeRequest([
    {
      content: "Đã đọc rồi thì không dứt ra được nha",
      thumbnail: "/images/product/product_item.jpg",
      title: "Ẩm thực miêu ký - dành cho tuổi 12+ trở lên ...",
      isAllowToBuy: false,
      progress: 23,
      price: 12.5,
    },
  ]);
};
