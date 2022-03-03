<template>
  <div class="container">
    <el-container>
      <el-header style="height: 56px">
        <div class="bread">
          <img
            class="img"
            src="http://62.234.98.16/group1/M00/00/00/rBUABF-s8luAZcTwAADCr-jOulM575.png"
          />
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/layout' }"
              >首页</el-breadcrumb-item
            >
            <el-breadcrumb-item
              ><a href="/layout">个人中心</a></el-breadcrumb-item
            >
            <el-breadcrumb-item>个人中心</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="tx">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link"
              ><img
                class="img2"
                src="http://81.68.73.55/group1/M00/00/01/rBEAC11Tm_yAVEyBAAAnZs1UX6E726.jpg"
              />
            </span>
            <!-- <span id="icon"><i class="el-icon-caret-bottom"></i></span> -->
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人中心</el-dropdown-item>
              <div @click="quit"><el-dropdown-item>登出</el-dropdown-item></div>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <el-container>
        <el-aside width="201px">
              <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#222d32"
                text-color="#b6b6b6a6"
                active-text-color="#ffd04b"
                router
              >
                <el-submenu router index="/Data">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>数据中心</span>
                  </template>
                  <el-menu-item-group router>
                  <el-menu-item index="/layout">扬尘数据</el-menu-item>
                  <el-menu-item index="1-2">报表导出</el-menu-item>
                  <el-menu-item index="1-3">扬尘对比</el-menu-item>
                  <el-menu-item index="1-4">车辆管控</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <el-submenu >
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>配置中心</span>
                  </template>
                  <el-menu-item-group router>
                    <el-menu-item index="/EquinManage">设备管理</el-menu-item>
                    <el-menu-item index="2-2">设备类型</el-menu-item>
                    <el-menu-item index="2-3">拓扑结构</el-menu-item>
                    <el-menu-item index="2-4">设备分组</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <el-submenu index="3">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>权限中心</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="3-1">角色管理</el-menu-item>
                    <el-menu-item index="3-2">人员管理</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <el-submenu index="4">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>个人中心</span>
                  </template>
                </el-submenu>
              </el-menu>
        </el-aside>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    tz() {
      this.$router.push("/pz");
    },
    data() {
      this.$router.push("/layout");
    },
    quit() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.el-header {
  display: flex;
  padding: 0;
  background-color: #222d32e6;
  color: #000000;
  justify-content: space-between;
  /* line-height: 56px; */
}

.el-aside {
  border-right: 0px;
}
.el-menu{
  border-right: 0px;
  height: 100%;
}
.el-main {
  /* background-color: #e9eef3; */
  color: #333;
  /* text-align: center; */
  padding: 17px;
  box-shadow: #222d32e6;
}
body > .el-container {
  margin-bottom: 40px;
}
.el-container >>> .el-submenu__title {
  text-align: left;
}
.img {
  width: 136px;
  height: 50px;
  margin: 3px 64px 0px 0px;
}
.bread {
  display: flex;
  align-items: center;
  color: white;
}
.container >>> .el-breadcrumb__inner.is-link {
  color: #ffffff;
  font-weight: 400;
}
.el-breadcrumb__inner a {
  color: #ffffff;
  font-weight: 400;
}
.container >>> .el-breadcrumb__item:last-child .el-breadcrumb__inner {
  color: #ffffff;
}
.img2 {
  width: 28px;
  border-radius: 50%;
  margin-right: 10px;
}
.tx {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
