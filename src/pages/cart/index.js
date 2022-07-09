Page({
  onLoad(query) {},
  onReady() {
    my.hideBackHome({ hide: true });
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
    // back to warehouse tab
    my.navigateBack();
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
  handleBack() {
    my.navigateBack();
  },
});
