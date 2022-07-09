Component({
  props: {
    className: "",
    deadline: "Jul 11 2022 12:00:00 GMT+0700 (Indochina Time)",
  },
  data: {
    hours: 0,
    minutes: 0,
    secs: 0,
  },
  didMount() {
    this.initCount();
  },
  didUnmount() {
    clearInterval(this.interval);
  },

  methods: {
    interval: null,
    onClear() {
      this.props.onClear();
    },

    initCount() {
      if (!this.props.deadline) {
        return;
      }
      if (this.interval) {
        clearInterval(this.interval);
      }
      const self = this;
      const deadline = new Date(this.props.deadline).getTime();
      const now = new Date().getTime();
      const countdownDuration = deadline - now;
      const hours = Math.floor(
        (countdownDuration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (countdownDuration % (1000 * 60 * 60)) / (1000 * 60)
      );
      const secs = Math.floor((countdownDuration % (1000 * 60)) / 1000);

      this.setData({
        hours,
        minutes,
        secs,
      });

      this.interval = setInterval(() => {
        const now = new Date().getTime();
        const countdownDuration = deadline - now;
        const hours = Math.floor(
          (countdownDuration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (countdownDuration % (1000 * 60 * 60)) / (1000 * 60)
        );
        const secs = Math.floor((countdownDuration % (1000 * 60)) / 1000);
        self.setData({
          hours,
          minutes,
          secs,
        });
      }, 1000);
    },
  },
});
