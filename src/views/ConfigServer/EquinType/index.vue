<template>
  <div class="container">
    <div class="header">
          <el-input v-model="input" placeholder="请输入内容"></el-input>
          <el-button  icon="el-icon-search"></el-button>
          <el-button  class="button" type="primary" @click="toCreate()" icon="el-icon-search">创建</el-button>
    </div>
    <div class="main">
      <template class="table">
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
       width="60"
       >
        </el-table-column>
       <el-table-column
       prop="name"
       label="名称"
       width="150">
       </el-table-column>
       <el-table-column
       prop="logo"
       label="标识"
       width="80">
       </el-table-column>
       <el-table-column
       prop="agreement"
       label="协议">
       </el-table-column>
       <el-table-column
       prop="state"
       label="说明"
       width="80">
       </el-table-column>
       <el-table-column
       prop="createtime"
       label="创建时间"
       width="180">
       </el-table-column>
       <el-table-column
       prop="updatetime"
       label="更新时间"
       width="150">
       </el-table-column>
       <el-table-column
       prop=""
       label="操作"
       width="180">
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
          name:'',
          logo:'',
          areegment: '',
          state:'',
          createtime:'',
          updatetime:'',
        }],
        value: ''
    };
  },
  computed: {},
  watch: {},
  methods: {
      toCreate(){
        // this.$router.push("/create")
      },
      
  },
  created() {},
  mounted() {
  },
  destroyed() {},
  activated() {},
};
</script>
<style scoped>
.header{
    box-shadow: rgb(136 136 136) -1px 1px 5px;
    height: 80px;
    /* display: flex; */
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
.main>>>.el-table thead{
 color: #000;
 text-align: center;
}
.el-button+.el-button{
  margin-left: 670px;
}


</style>