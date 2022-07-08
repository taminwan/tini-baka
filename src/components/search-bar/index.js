Component({
  data: {
    focus: false,
  },
  props: {
    className: "",
    value: "",
    placeholder: "Tìm kiếm",
    onInput: () => {},
    onConfirm: () => {},
    onClear: () => {},
  },
  methods: {
    onInput(...params) {
      this.props.onInput(...params);
    },
    onConfirm(e) {
      const { value } = e.detail;
      this.props.onConfirm({ detail: { value: value || this.props.value } });
    },

    onClear() {
      this.props.onClear();
    },
  },
});
