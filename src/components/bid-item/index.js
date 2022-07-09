Component({
  props: {
    className: "",
    isLoading: false,
    product: {},
    onBidClick: () => {},
  },

  methods: {
    _onBidClick() {
      this.props.onBidClick(this.props.product);
    },
  },
});
