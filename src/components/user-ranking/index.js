Component({
	props: {
    className: '',
    isLoading: false,
    userRankingInfo: {},
    onUserRankingClick: () => {},
  },

	methods: {
    _onUserRankingClick() {
      this.props.onBidClick(this.props.userRankingInfo);
    },
  }
});