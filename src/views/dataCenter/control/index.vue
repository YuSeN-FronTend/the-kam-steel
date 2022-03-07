<template>
  <div class="container">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="number" label="序号" width="300">
      </el-table-column>
      <el-table-column prop="mark" label="车辆牌号" width="300">
      </el-table-column>
      <el-table-column prop="gate" label="通过的大门" width="300">
      </el-table-column>
      <el-table-column prop="direction" label="方向" width="300">
      </el-table-column>
      <el-table-column prop="time" label="时间" width="300"> </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        background
        :current-page="currentPage"
        :page-sizes="[ten, twenty, fifty, hundred]"
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
      twenty: 20,
      fifty: 50,
      hundred: 100,
      page: 87949,
    };
  },
  computed: {},
  created() {},
  mounted() {
    this.showData();
  },
  methods: {
    showData() {
      this.$axios.get("/user/control").then((res) => {
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
  height: 100vh;
  padding: 2%;
}
.container >>> .el-table th.el-table__cell {
  background: rgb(240, 245, 250);
  color: black;
  text-align: center;
  padding: 15px 0;
}
.container >>> .el-table td.el-table__cell,
.el-table th.el-table__cell.is-leaf {
  text-align: center;
  padding: 15px 0;
}
.block {
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
}
</style>
