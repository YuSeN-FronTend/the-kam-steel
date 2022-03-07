<template>
  <div class="container">
    <div class="header">
      <h1 class="font">新增设备</h1>
    </div>
    <div class="main">
   <el-form :model="AddDevice" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
     <el-form-item label="设备名称" prop="name">
     <el-input v-model="AddDevice.device.name"></el-input>
     </el-form-item>
      <!-- <el-form-item label="设备标识" prop="MN">
     <el-input v-model="ruleForm.MN"></el-input>
     </el-form-item> -->
     <el-form-item label="设备类型" prop="typeid">
     <el-select v-model="AddDevice.device.typeid" >
      <el-option label="扬尘监测" value="shanghai"></el-option>
     </el-select>
     </el-form-item>
     <el-form-item label="安装现场图片" prop="delivery">
      <el-upload
      class="avatar-uploader"
      action="https://jsonplaceholder.typicode.com/posts/"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload">
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
     </el-form-item>
     <el-form-item label="太行全景地图:" prop="x">
      <span>x</span>
      <el-input class="inputxy" v-model="AddDevice.device.location.x" placeholder="请输入内容"></el-input>
     </el-form-item>
     <el-form-item label="" prop="y">
      <span>y</span>
      <el-input class="inputxy" v-model="AddDevice.device.location.y" placeholder="请输入内容"></el-input>
     </el-form-item>
      <el-form-item label="太行平面地图:" prop="longitude">
      <span>经度</span>
      <el-input class="inputxy" v-model="AddDevice.device.location.longitude" placeholder="请输入内容"></el-input>
      </el-form-item>
      <el-form-item label="" prop="latitude">
      <span>纬度</span>
      <el-input class="inputxy" v-model="AddDevice.device.location.latitude" placeholder="请输入内容"></el-input>
     </el-form-item>
     <el-form-item label="" prop="country">
      <span>国家</span>
      <el-input class="inputxy" v-model="AddDevice.device.location.country" placeholder="请输入内容"></el-input>
      </el-form-item>
      <el-form-item label="" prop="province">
      <span>省</span>
      <el-input class="inputxy" v-model="AddDevice.device.location.province" placeholder="请输入内容"></el-input>
     </el-form-item>
     <el-form-item label="安装位置" prop="describe">
     <el-input class="inputxy" v-model="AddDevice.device.location.describe" placeholder="请输入内容"></el-input>
     </el-form-item>
     <el-form-item>
     <el-button type="primary" @click="submitForm(AddDevice)">立即创建</el-button>
     <el-button @click="resetForm()">取消</el-button>
     </el-form-item>
   </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
        AddDevice:{
          device:{
            typeid:'null',
            moteid:'test',
            name:'',
            status:'1',
            location:{
              describe:'',
              province:'',
              country:'',
              longitude:'',
              latitude:'',
              x:'',
              y:'',
            }
          },
          deviceType:{
            name:'test',
            type:'扬尘监测',
            isValid:'1',
          }
        },


       imageUrl: '',
        ruleForm: {
          region: '',
          MN:'',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          // name: [
          //   { required: true, message: '请输入设备名称', trigger: 'blur' },
          //   { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          // ],
          // MN: [
          //   { required: true, message: '请输入设备标识', trigger: 'blur' },
          //   { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          // ]
        }
      
    };
  },
  computed: {},
  watch: {},
  methods: {
     submitForm(AddDevice) {
        // this.$refs[formName].validate((valid) => {
        //   if (valid) {
        //     alert('submit!');
        //   } else {
        //     console.log('error submit!!');
        //     return false;
        //   }
        // });
        this.$axios.post("http://106.55.171.176:7001/createDevice",this.AddDevice).then((res)=>{
          console.log(res.data)
        })
        console.log(AddDevice);
      },
      resetForm() {
       this.$router.push('/EquinManage')
      },
    handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    
    },
  
  created() {},
  mounted() {},
  destroyed() {},
  activated() {},
};
</script>
<style scoped>
.main{
  padding: 15px;
}
.font{
  font-size: 25px;
  color: #515a6e;
  text-align: center;
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .inputxy{
    width: 300px;
    margin-left: 10px;
    margin-right: 10px;
  }
</style>