<template>
  <div class="container">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="全部数据" name="first"></el-tab-pane>
      <el-tab-pane label="国标" name="second"></el-tab-pane>
      <el-tab-pane label="微站" name="third"></el-tab-pane>
      <el-tab-pane label="TSP" name="fourth"></el-tab-pane>
    </el-tabs>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="" label="设备名称"> </el-table-column>
      <el-table-column prop="b" label="历史数据"> </el-table-column>
      <el-table-column prop="c" label="在线状态"> </el-table-column>
      <el-table-column prop="d" label="所在位置"> </el-table-column>
      <el-table-column label="数据详情">
        <el-table-column prop="pm2_5" label="PM2_5"></el-table-column>
        <el-table-column prop="pm10" label="PM10"></el-table-column>
        <el-table-column prop="tsp" label="TSP"></el-table-column>
        <el-table-column prop="airdirection" label="温度"></el-table-column>
        <el-table-column prop="airpress" label="湿度"></el-table-column>
        <el-table-column prop="airspeed" label="风速"></el-table-column>
        <el-table-column prop="humidness" label="风向"></el-table-column>
        <el-table-column prop="airpress" label="气压"></el-table-column>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      >
      </el-pagination>
    </div>
    <!-- <button @click="showData">111</button> -->
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      tableData: [
        {
          airdirection: "",
          airpress: "",
          airspeed: "",
          humidness: "",
          pm2_5: "",
          pm10: "",
          temperature: "",
          tsp: "",

        },
      ],
      activeName: "first",
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
    };
  },
  computed: {},
  created() {},
  mounted() {
    this.showData();
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    handleClick(tag) {
      console.log(tag);
      // if (tag.index === "0") {
      //   this.$axios.get("/user/home").then((res) => {
      //     this.tableData = res.data.data;
      //     // console.log(res.data.data);
      //   });
      // } else if (tag.index === "1") {
      //   this.$axios.get("/user/firstname").then((res) => {
      //     this.tableData = res.data.data;
      //     // console.log(res.data.data);
      //   });
      // }
    },
    showData() {
      this.$axios.get("http://106.55.171.176:7002/newRealData").then((res) => {
        this.tableData = res.data.data;
        console.log(res.data.data);
        
    //     // let a = [];
    //     // for( var i=0;i<28;i++){
    //     //   a.push(res.data.data[i].data)
    //     // }
    //     // console.log(a[0][0].value)
    //     // console.log(a);
        
      });
    },
  },
};
</script>

<style scoped>
.container >>> .el-table thead {
  color: #000000;
  text-align: center;
}
.container >>> .el-table th.el-table__cell > .cell {
  display: inline-block;
  text-align: center;
}
.container {
  padding: 2%;
  background-color: #fff;
  -webkit-box-shadow: -1px 1px 4px #888;
  box-shadow: -1px 1px 4px #888;
  border-radius: 2px;
  height: 100vh;
}
.block {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}
.el-main {
  height: 100vh;
}
</style>
