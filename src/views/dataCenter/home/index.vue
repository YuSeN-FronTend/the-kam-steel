<template>
  <div class="container" v-loading="loading">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="全部数据" name="first"></el-tab-pane>
      <el-tab-pane label="国标" name="second"></el-tab-pane>
      <el-tab-pane label="微站" name="third"></el-tab-pane>
      <el-tab-pane label="TSP" name="fourth"></el-tab-pane>
    </el-tabs>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="a" label="设备名称"> </el-table-column>
      <el-table-column prop="b" label="历史数据"> </el-table-column>
      <el-table-column prop="c" label="在线状态"> </el-table-column>
      <el-table-column prop="d" label="所在位置"> </el-table-column>
      <el-table-column label="数据详情">
        <el-table-column prop="pm2_5" label="PM2_5">
          <!-- <template slot-scope="scope">
            {{ scope.row.data[1].value + " " + scope.row.data[1].unit }}
          </template> -->
        </el-table-column>
        <el-table-column prop="pm10" label="PM10">
          <!-- <template slot-scope="scope">
            {{ scope.row.data[2].value + " " + scope.row.data[2].unit }}
          </template> -->
        </el-table-column>
        <el-table-column prop="tsp" label="TSP">
          <!-- <template slot-scope="scope">
            {{ scope.row.data[0].value + " " + scope.row.data[0].unit }}
          </template> -->
        </el-table-column>
        <el-table-column prop="temperature" label="温度">
          <!-- <template slot-scope="scope">
            {{ scope.row.data[3].value + " " + scope.row.data[3].unit }}
          </template> -->
        </el-table-column>
        <el-table-column prop="humidness" label="湿度">
          <!-- <template slot-scope="scope">
            {{ scope.row.data[4].value + " " + scope.row.data[4].unit }}
          </template> -->
        </el-table-column>
        <el-table-column prop="airspeed" label="风速">
          <!-- <template slot-scope="scope">
            {{ scope.row.data[5].value + " " + scope.row.data[5].unit }}
          </template> -->
        </el-table-column>
        <el-table-column prop="airdirection" label="风向">
          <!-- <template slot-scope="scope">
            {{ scope.row.data[7].value + " " + scope.row.data[7].unit }}
          </template> -->
        </el-table-column>
        <el-table-column prop="airpress" label="气压">
          <!-- <template slot-scope="scope">
            {{ scope.row.data[6].value + " " + scope.row.data[6].unit }}
          </template> -->
        </el-table-column>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[
          dataNumber.ten,
          dataNumber.twenty,
          dataNumber.fifty,
          dataNumber.hundred,
        ]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="number"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      tableData: [],
      activeName: "first",
      // currentPage1: 5,
      // currentPage2: 5,
      // currentPage3: 5,
      currentPage4: 1,
      dataNumber: {
        ten: 10,
        twenty: 20,
        fifty: 50,
        hundred: 100,
      },
      number: 51,
      loading: true,
    };
  },
  computed: {},
  created() {},
  mounted() {
    // this.showData();
    // this.paging();
    this.paging1();
    // this.handleSizeChange();
    // this.handleCurrentChange();
    this.one();
  },
  methods: {
    handleClick(tag) {
      console.log(tag);
      // if (tag.index === "0") {
      // this.$axios.get("/user/home").then((res) => {
      //   this.tableData = res.data.data;
      //   // console.log(res.data.data);
      // });
      // } else if (tag.index === "1") {
      //   this.$axios.get("/user/firstname").then((res) => {
      //     this.tableData = res.data.data;
      //     // console.log(res.data.data);
      //   });
      // }
    },
    // paging() {
    //   this.$axios
    //     .get("http://106.55.171.176:7001/realDataPage?pageSize=100")
    //     .then((res) => {
    //       this.tableData = res.data.data;
    //       this.number = res.data.data.length;
    //     });
    // },
    paging1() {
      this.$axios
        .get("http://106.55.171.176:7001/realDataPage?pageSize=10&currPage=1")
        .then((res) => {
          this.tableData = res.data.data;
          // this.number = res.data.data.length;
          console.log(this.number);
        });
    },
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
      console.log(this.handleSizeChange);
      this.$axios
        .get("http://106.55.171.176:7001/realDataPage", {
          params: {
            pageSize: `${val}`,
          },
        })
        .then((res) => {
          this.tableData = res.data.data;
          // this.number = res.data.data.length;
        });
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.$axios
        .get("http://106.55.171.176:7001/realDataPage?", {
          params: {
            pageSize: 10,
            currPage: `${val}`,
          },
        })
        .then((res) => {
          this.tableData = res.data.data;
          // this.number = res.data.data.length;
        });
    },
    // showData() {
    //   this.$axios.get("http://106.55.171.176:7002/newRealData").then((res) => {
    //     let data = res.data.data.splice(0, 10);
    //     data.map((item) => {
    //       item.pm2_5 += " ug/m3";
    //       item.pm10 += " ug/m3";
    //       item.tsp += " ug/m3";
    //       item.temperature += " ℃";
    //       item.airpress += " Pa";
    //       item.airdirection = "于森";
    //       item.airspeed += " m/s";
    //       item.humidness += " ug/m3";
    //     });
    //     this.tableData = data;
    //   });
    // },
    // paging() {
    //   this.$axios
    //     .get("http://106.55.171.176:7001/realDataPage?", {
    //       params: {
    //         pageSize: this.dataNumber.ten,
    //         currPage: this.total,
    //       },
    //     })
    //     .then((res) => {
    //       this.tableData = res.data.data;
    //       this.number = res.data.data.length;
    //       console.log(res.pageSize);
    // if (this.dataNumber.ten) {
    //   this.pageSize = this.dataNumber.ten;
    // } else if (this.dataNumber.twenty === true) {
    //   console.log("111");
    //   this.pageSize = this.dataNumber.twenty;
    // } else if (this.dataNumber.fifty) {
    //   this.pageSize = this.dataNumber.fifty;
    // } else {
    //   this.pageSize = this.dataNumber.hundred;
    // }
    // console.log(res.data.data);
    //     });
    // },
    one() {
      this.loading = setTimeout(() => {
        this.loading = false;
      }, 500);
    },
    // paging1() {
    //   this.$axios
    //     .get("http://106.55.171.176:7001/realDataPage?", {
    //       params: {
    //         pageSize: this.dataNumber.twenty,
    //       },
    //     })
    //     .then((res) => {
    //       this.tableData = res.data.data;
    //     });
    // },
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
  /* height: 100%; */
}
.block {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}
</style>
