<template>
  <div class="container">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="全部数据" name="first"></el-tab-pane>
      <el-tab-pane label="国标" name="second"></el-tab-pane>
      <el-tab-pane label="微站" name="third"></el-tab-pane>
      <el-tab-pane label="TSP" name="fourth"></el-tab-pane>
    </el-tabs>
    <el-table :data="tableData" style="width: 100%" v-loading="loading">
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
        :page-sizes="[10, 20, 30, 40]"
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
      currPage: 1,
      pageSize: 10,
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
    this.paging1();
  },
  methods: {
    handleClick(tag) {
      console.log(tag);
    },
    paging1() {
      this.$axios
        .get("http://106.55.171.176:7001/realDataPage?pageSize=10&currPage=1")
        .then((res) => {
          this.tableData = res.data.data;
          this.loading = false;
          // this.number = res.data.data.length;
          console.log(this.number);
        });
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.loading = true;
      this.$axios
        .get("http://106.55.171.176:7001/realDataPage", {
          params: {
            currPage: this.currPage,
            pageSize: this.pageSize,
          },
        })
        .then((res) => {
          this.tableData = res.data.data;
          this.loading = false;
        });
    },
    handleCurrentChange(val) {
      this.currPage = val;
      this.loading = true;
      this.$axios
        .get("http://106.55.171.176:7001/realDataPage?", {
          params: {
            currPage: this.currPage,
            pageSize: this.pageSize,
          },
        })
        .then((res) => {
          this.tableData = res.data.data;
          this.loading = false;
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
  /* height: 100%; */
}
.block {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}
</style>
