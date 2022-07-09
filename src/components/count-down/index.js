Component({
  data: {},
  props: {
    className: "",
    deadline: "",
  },
  methods: {
    onClear() {
      this.props.onClear();
    },
  },
});
