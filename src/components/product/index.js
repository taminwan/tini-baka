Component({
  props: {
    className: "",
    isLoading: false,
    product: {
      id: "",
      name: "",
      thumbnail_url: "",
      price: 0,
    },
    onTapProduct: () => {},
  },

  methods: {
    _onTapProduct() {
      this.props.onTapProduct(this.props.product);
    },
  },
});
