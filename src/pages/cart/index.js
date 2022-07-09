Page({
	onLoad(query) {
	},
	onReady() {
	},
	onShow() {
	},
	onHide() {
	},
	onUnload() {
	},

  resetModal() {
    this.setData({
      modal: {},
    });
  },
  onButtonClick(e) {
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
  changeImageSize(e) {
    this.setModalState({
      topImageSize: e.target.dataset.size,
    });
  },
  onMaskClick() {
    this.resetModal();
  },
  onTap(e) {
    this.setModalState(e.target.dataset.modal);
  },
});