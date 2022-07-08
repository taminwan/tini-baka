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

export const getWatchoutProducts = () => {
  return fakeRequest({ 
  });
};
