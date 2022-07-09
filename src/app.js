import { getStorage } from "./utils/storage";
import { navigate } from "./utils/navigate";

App({
  data: {
    userId: -1,
    userName: "",
    userAvatar: "",
    hasUser: false,
  },
  getUserInfo() {
    my.getUserInfo({
      success: (res) => {
        this.userAvatar = res.avatar;
        this.userId = res.customerId;
        this.userName = res.name;
        this.hasUserData = true;
      },
      fail: (res) => {
        console.log("fail", res);
      },
    });
  },
  onShow(options) {},
  onLaunch(options) {
    this.getUserInfo();
    this.checkUserSuggestion();
  },

  async checkUserSuggestion() {
    try {
      const userSuggest = await getStorage("user_suggest");
      if (!userSuggest) {
        navigate({ page: "suggestion" });
      }
    } catch {}
  },
});
