<template>
  <div class="container">
    <div class="header">
          <el-input v-model="input" placeholder="请输入内容"></el-input>
          <el-button  icon="el-icon-search"></el-button>
          <span class="selectText">请输入设备类型:<el-select v-model="value" placeholder="请选择">
           <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            
           </el-option>
          </el-select></span>
          <el-button type="primary" @click="toCreate()" icon="el-icon-search">创建</el-button>
    </div>
    <div class="main">
      <template class="table">
        <el-tabs  class="head" v-model="activeName" >
          <el-tab-pane  label="全部" name="first"></el-tab-pane>
          <el-tab-pane label="美锦钢铁" name="second"></el-tab-pane>
          <el-tab-pane label="国际" name="third"></el-tab-pane>
          <el-tab-pane label="微站" name="fourth"></el-tab-pane>
          <el-tab-pane label="TPS" name="fifth"></el-tab-pane>
        </el-tabs>
       <el-table
       class="table"
       :data="tableData"
        height="100vh"
        border
        style="width: 97%">
       <el-table-column
       type="index"
       prop="num"
       label="序号"
       width="180"
       >
        </el-table-column>
       <el-table-column
       prop="moteid"
       label="设备编号ID"
       width="180">
       </el-table-column>
       <el-table-column
       prop="name"
       label="设备名称">
       </el-table-column>
       <el-table-column
       prop="location"
       label="安装位置">
       </el-table-column>
       <el-table-column
       prop="type"
       label="设备类型">
       </el-table-column>
       <el-table-column
       prop="status"
       label="设备状态">
       </el-table-column>
     </el-table>
     </template>
     </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      input:"",
      activeName:"",
      tableData: [{
          location:'',
          moteid:'',
          name: '',
          status:'',
          type:'',
        },],
      options: [{
          value: '选项1',
          label: '全部'
        },    {
          value: '选项2',
          label: '扬尘监测'
        }],
        value: ''
    };
  },
  computed: {},
  watch: {},
  methods: {
      toCreate(){
        this.$router.push("/create")
      },
      ShowAll(){
        this.$axios.get('http://106.55.171.176:7002/getDeviceData').then((res)=>{
          console.log(res.data.data);
          this.tableData = res.data.data
          
        })
      }
      
  },
  created() {},
  mounted() {
        this.ShowAll()
  },
  destroyed() {},
  activated() {},
};
</script>
<style scoped>
.header{
    box-shadow: rgb(136 136 136) -1px 1px 5px;
    height: 80px;
    display: flex;
}
.main{
    margin-top: 20px;
    box-shadow: rgb(136 136 136) -1px 1px 5px;
    height: 500px;
    padding-top: 15px;
}
.container{
    margin: 0.5%;
    padding-left: 20px;
    padding-right: 20px;
}
.el-input{
    width: 300px;
    height: 45px;
    margin: 15px;
    margin-right: 0;
}
.header>>>.el-input__inner{
    height: 45px;
}
.el-button el-button--default{
      background-color: transparent;
}
.el-button{
    height: 45px;
    margin: 15px;
    margin-left: 0;

}
.el-table{
    margin: 15px;
   font-size: 15px;
      color: #606266;
      height: 400px !important;
}
.selectText{
  font-weight: 700;
  margin-left: 50px;
  margin-right: 0;
  font-size: 13px;
  color: #515a6e;
  margin: auto;
}
.el-select{
  /* display: flex; */
  align-self: center;
  margin-left: 10px;
  /* margin-right: 50px; */
}
.head{
  width: 97%;
  padding-left: 15px;
}
>>>.el-table thead{
 color: #000;
 text-align: center;
}


</style>