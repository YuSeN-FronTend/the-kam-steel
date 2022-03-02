<template>
  <div class="container">
    <div class="login">
      <h1 class="bt">moke测试</h1>
      <br /><br /><br />
      <div class="a">账号:<input type="text" v-model="username" /></div>
      <br />
      <div class="b">密码:<input type="password" v-model="password" /></div>
      <br />
      <button @click="login">登录</button>
    </div>
  </div>
</template>
<script>
// import { login } from "../../api/user";
export default {
  components: {},
  data() {
    return {
      username: "",
      password: "",
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    login() {
      this.$axios.get("/user/login").then((res) => {
        const a = res.data.data.username;
        const b = res.data.data.password;
        if (this.username == a && this.password == b) {
          this.$router.push("/layout");
        }
      });
    },
  },
};
</script>

<style scoped>
.container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login {
  display: flex;
  width: 500px;
  height: 350px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.bt {
  text-align: center;
}
button {
  width: 50px;
}
</style>
