import request, { fakeRequest } from './request';

export const getBiddingProducts = () => {
  return fakeRequest({ 
    id: 6816541,
    name: "[Limited] A CLASH OF KINGS - tặng kèm token Iron Throne",
    thumbnail: "/images/for_demo/GOT.png",
    no_bidding_counter: "9.123.124 người đang bid",
    bid_seconds: 24,
    latest_bidding_info: "Sonbui Son vừa bid 1.260 ASA" 
  });
};

export const getStalktProducts = () => {
  return fakeRequest([
    {
      seller: {
        name: "BAKA Official",
        time: "3 Tháng 7, 2022 - 13:24 "
      },
      from: "Góc BID",
      content: "Chú Thuật chưa bao giờ hết hot",
      thumbnail: "/images/for_demo/chu_thuat_5.png",
      title: "[Limited] Chú Thuật Hồi Chiến - Full 5 tập - 1 bộ duy nhất",
      isAllowToBid: true,
      no_bidding_counter: "9.123 người đang bid"
    },
    {
      seller: {
        name: "user.name123",
        time: "3 March, 2022 at 13:24 "
      },
      from: "Góc review",
      content: "Đã đọc rồi thì không dứt ra được nha",
      thumbnail: "/images/for_demo/conan.png",
      title: "",
      isAllowToBid: false,
      no_bidding_counter: ""
    }
  ]
  );
};
