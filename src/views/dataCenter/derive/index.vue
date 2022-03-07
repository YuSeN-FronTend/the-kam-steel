<template>
  <div class="container">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="number" label="序号" width="150">
      </el-table-column>
      <el-table-column prop="date" label="报表日期" width="200">
      </el-table-column>
      <el-table-column prop="name" label="报表名称" width="300 ">
      </el-table-column>
      <el-table-column prop="PM2" label="PM2.5均值" width="130">
      </el-table-column>
      <el-table-column prop="PM10" label="PM10均值" width="130">
      </el-table-column>
      <el-table-column prop="TSP" label="TSP均值" width="130">
      </el-table-column>
      <el-table-column prop="online" label="设备总在线率" width="130">
      </el-table-column>
      <el-table-column prop="overproof" label="超标率" width="130">
      </el-table-column>
      <el-table-column prop="total" label="总分" width="130"> </el-table-column>
      <el-table-column prop="operate" label="操作" width="130">
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        background
        :current-page="currentPage"
        :page-sizes="[ten]"
        :page-size="ten"
        layout="total, sizes, prev, pager, next, jumper"
        :total="page"
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
      currentPage: 1,
      ten: 10,
      page: 15,
    };
  },
  computed: {},
  created() {},
  mounted() {
    this.showDate();
  },
  methods: {
    showDate() {
      this.$axios.get("/user/derive").then((res) => {
        this.tableData = res.data.data;
      });
    },
  },
};
</script>

<style scoped>
.container {
  margin: 1%;
  box-shadow: -1px 1px 5px #888;
  width: 1200px;
  height: 100vh;
  padding: 2%;
}
.container >>> .el-table th.el-table__cell {
  background: rgb(240, 245, 250);
  color: black;
  text-align: center;
}
.container >>> .el-table td.el-table__cell,
.el-table th.el-table__cell.is-leaf {
  text-align: center;
  padding: 20px;
}
.block {
  margin-right: 0;
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}
</style>
