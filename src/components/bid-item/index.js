Component({
  props: {
    className: "",
    isLoading: false,
    product: {},
    onBidClick: () => {},
    showBid: true,
  },

  methods: {
    _onBidClick() {
      this.props.onBidClick(this.props.product);
    },
  },
});
