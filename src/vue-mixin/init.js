
export default {
    data () {

    },
    methods: {
      // 路由跳转
      go (path, query) {
          path = path.trim();// eslint-disable-line
          let urlReg = /^http(s?):\/\//;
          if (urlReg.test(path)) {
              // 拼接上bizAcctId和bizLoginToken
              return;
          }
          this.$router.push({path: path, query: query || {}});
      },
      // 路由跳转
      replace (obj) {
          // debugger
          this.setLoading(true);
          this.$router.replace(obj);
      },
    }
};