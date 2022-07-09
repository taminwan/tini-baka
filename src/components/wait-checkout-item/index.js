Component({
	props: {
    className: '',
    isLoading: false,
    product: {},
    onWaitProductClick: () => {},
  },

	methods: {
    _onWaitProductClick() {
      this.props.onWaitProductClick(this.props.product);
    },
  }
});