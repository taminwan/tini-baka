Component({
  props: {
    className: "",
    isLoading: false,
    product: {
      id: "",
      name: "",
      thumbnail_url: "/images/product/product_item.jpg",
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
