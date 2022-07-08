Component({
  props: {
    className: '',
    isLoading: false,
    propsItem: {},
    onBidClick: () => {},
    onWowClick: () => {},
    onCommentClick: () => {},
  },

	methods: {
    _onBidClick() {
      this.props.onBidClick(this.props.propsItem);
    },
    _onWowClick() {
      this.props.onWowClick(this.props.propsItem);
    },
    _onCommentClick() {
      this.props.onCommentClick(this.props.propsItem);
    },
  }
});