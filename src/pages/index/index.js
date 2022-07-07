Page({
  data: {
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
  onLoad(query) {
  },
  onReady() {
  },
  onShow() {
  },
  onHide() {
  },
  onUnload() {
  }
});