Component({
	props: {
    className: '',
    isLoading: false,
    product: {},
    onCollectionProductClick: () => {},
  },

	methods: {
    _onCollectionProductClick() {
      this.props.onCollectionProductClick(this.props.product);
    },
  }
});