import { switchTab } from "../../utils/navigate";
import { setStorage } from "../../utils/storage";

Page({
  data: {
    list: [
      "Manga",
      "Comic",
      "Manwah",
      "Tiên hiệp",
      "Webtoon",
      "Manhua",
      "Cổ đại",
      "Truyện chữ",
      "Bí ẩn",
      "Xuyên không",
      "Sci-fi",
      "Isekai",
    ],
    selected: [],
    modal: {},
  },
  onReady() {
    my.hideBackHome({ hide: true });
  },

  onSelected(e) {
    const item = e.target.dataset.suggest.item;
    if (this.data.selected.indexOf(item) !== -1) {
      const newSelected = [...this.data.selected].filter((i) => i !== item);
      this.setData({
        selected: [...new Set(newSelected)],
      });
    } else {
      const newSelected = [...this.data.selected, item];
      this.setData({
        selected: [...new Set(newSelected)],
      });
    }
  },

  handleSaveData() {
    setStorage("user_suggest", this.data.selected.join(","));
  },

  toHome() {
    this.handleSaveData();
    switchTab({
      page: "index",
      params: {
        openAsa: 1,
      },
    });
  },

  onTap(e) {
    var audio = my.createAudioContext("audio1");
    audio.play();
    this.setModalState(e.target.dataset.modal);
  },

  resetModal() {
    this.setData({
      modal: {},
    });
  },
  setModalState(nextModal) {
    const newModalState = {
      ...this.data.modal,
      ...nextModal,
    };

    this.setData({
      modal: newModalState,
    });
  },
  onMaskClick() {
    this.resetModal();
  },
});
