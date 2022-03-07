<template>
  <div class="cantainer">
    <div class="check1">
      <div>
        <el-checkbox
          :indeterminate="isIndeterminate"
          v-model="checkAll"
          @change="handleCheckAllChange"
          class="total"
          >全选</el-checkbox
        >
      </div>
      <div class="roll">
        <el-checkbox-group
          v-model="checkedCities"
          @change="handleCheckedCitiesChange"
        >
          <el-checkbox
            v-for="city in cities"
            :label="city"
            :key="city"
            class="checkBox"
            >{{ city }}</el-checkbox
          >
        </el-checkbox-group>
      </div>
    </div>
    <div>
      <div class="check2">
        <div class="button">
          <el-button plain>实时对比</el-button>
          <el-button plain>近24小时</el-button>
          <el-button plain>近一周</el-button>
          <el-button plain>近一个月</el-button>
        </div>

        <h6 class="time">时间粒度：</h6>
        <div class="one">
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <h6 class="time">对比参数：</h6>
        <el-select v-model="value1" placeholder="请选择">
          <el-option
            v-for="item in options1"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="check3"></div>
    </div>
  </div>
</template>

<script>
const cityOptions = [
  "GB--厂区办公楼南侧",
  "ZK1--国标站周围20米",
  "ZK2--国标站周围20米",
  "W4--厂区东北边界",
  "W6--厂区东南边界",
  "W9--厂区西边界",
  "W16--3#高炉循环水泵站西北角路口",
  "W17--煤气柜东南角路口",
  "W22--白云石料库",
  "W24--球团焦炭库",
  "W26--2#储煤库",
  "T3--烧结矿原料库喂料口",
  "T4--烧结矿原料库落料点",
  "T5--焦粒和高炉返矿筛分",
  "T6--烧结焦粉喂料口",
  "T7--烧结焦粉落料点",
  "T8--铁矿转运点1#",
  "T9--焦粉仓落料点",
  "T10--焦粉转运点1#",
  "T11--焦粉转运点2#",
];
export default {
  components: {},
  data() {
    return {
      options: [
        {
          value: "1小时",
          label: "1小时",
        },
      ],
      options1: [
        {
          value: "PM2.5",
          label: "PM2.5",
        },
        {
          value: "PM10",
          label: "PM10",
        },
        {
          value: "TSP",
          label: "TSP",
        },
      ],
      value: "1小时",
      value1: "PM10",
      checkAll: false,
      checkedCities: [
        "GB--厂区办公楼南侧",
        "ZK1--国标站周围20米",
        "ZK2--国标站周围20米",
      ],
      cities: cityOptions,
      isIndeterminate: true,
    };
  },
  computed: {},
  created() {},
  mounted() {
    this.init1();
  },
  methods: {
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    },
    init1() {
      this.myChart = this.$echarts.init(
        document.getElementsByClassName("check3")[0]
      );
      // 绘制图表
      var option = {
        title: {
          text: "Stacked Line",
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        // toolbox: {
        //   feature: {
        //     saveAsImage: {},
        //   },
        // },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "Email",
            type: "line",
            stack: "Total",
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: "Union Ads",
            type: "line",
            stack: "Total",
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: "Video Ads",
            type: "line",
            stack: "Total",
            data: [150, 232, 201, 154, 190, 330, 410],
          },
          {
            name: "Direct",
            type: "line",
            stack: "Total",
            data: [320, 332, 301, 334, 390, 330, 320],
          },
          {
            name: "Search Engine",
            type: "line",
            stack: "Total",
            data: [820, 932, 901, 934, 1290, 1330, 1320],
          },
        ],
      };
      this.myChart.setOption(option);
    },
  },
};
</script>

<style scoped>
.total {
  margin: 20px 20px 45px 20px;
}
.checkBox {
  /* background-color: red; */
  width: 246px;
  margin-bottom: 5px;
  padding: 10px;
  border-top: 1px solid #eeeeee;
}
.cantainer {
  display: flex;
}
.box {
  width: 1000px;
  height: 1000px;
  display: flex;
}
.check1 {
  padding: 0 10px;
  margin-left: 5px;
  width: 250px;
  height: 823px;
  box-shadow: 1px 1px 5px #888;
}
.roll {
  overflow-x: hidden;
  overflow-y: scroll;
  width: 100%;
  height: 640px;
}
/*滚动条样式*/
.roll::-webkit-scrollbar {
  width: 3.5px;
  /* height: 1px !important; */
}
.roll::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.3);
}
/* .roll::-webkit-scrollbar-track {
  border-radius: 0;
  background: rgba(0, 0, 0, 0.1);
} */
.check2 {
  padding: 2%;
  background-color: #fff;
  display: flex;
  margin-left: 15px;
  align-items: center;
  box-shadow: 1px 1px 5px #888;
  height: 80px;
  width: 950px;
}
.check3 {
  display: flex;
  padding: 2%;
  background-color: #fff;
  box-shadow: -1px 1px 5px #888;
  margin-left: 15px;
  margin-top: 20px;
  width: 950px;
  height: 520px;
}
.button {
  width: 300px;
  margin-left: 20px;
  margin-right: 80px;
}
.el-button + .el-button {
  margin: 0;
}
.cantainer >>> .el-input__inner {
  width: 110px;
}
.time {
  display: flex;
  color: #515a6e;
  font-weight: normal;
}
.one {
  width: 220px;
}
</style>
