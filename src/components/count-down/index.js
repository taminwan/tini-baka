Component({
  data: {},
  props: {
    className: "",
    deadline: "10/07/2022 12:00:00",
  },
  methods: {
    onClear() {
      this.props.onClear();
    },
  },
});
