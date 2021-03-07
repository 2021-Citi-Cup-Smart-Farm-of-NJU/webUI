<template>
<div class="container">
  <el-form ref="form" :model="form" label-width="120px" size="medium" >
    <el-form-item label="报案人姓名">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="报案人电话">
      <el-input v-model="form.phone"></el-input>
    </el-form-item>
    <el-form-item label="报案人身份">
      <el-select v-model="form.identity" placeholder="请选择身份">
        <el-option label="个人" value="single"></el-option>
        <el-option label="团体" value="group"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="实际被保险人姓名">
      <el-input v-model="form.trueName"></el-input>
    </el-form-item>
    <el-form-item label="实际被保险人证件">
      <el-input v-model="form.certificate"></el-input>
    </el-form-item>

  </el-form>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="出险地点">
      <el-input v-model="form.location"></el-input>
    </el-form-item>
    <el-form-item label="出险时间">
      <el-col :span="11">
        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
      </el-col>
      <el-col class="line" :span="2">-</el-col>
      <el-col :span="11">
        <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
      </el-col>
    </el-form-item>
    <el-form-item label="投保区域">
      <el-select v-model="form.region" placeholder="请选择投保区域">
        <el-option label="个人" value="single"></el-option>
        <el-option label="团体" value="group"></el-option>
      </el-select>
    </el-form-item>

  </el-form>
</div>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    name: '',
                    phone:'',
                    identity:'',
                    trueName:'',
                    certificate:'',
                    location:'',
                    date1: '',
                    date2: '',
                    region: '',

                }
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            }
        }

    }
</script>

<style scoped>
.container{
  margin: 50px 10px;
  font-size: 25px;


}
el-form-item{
  height: 50px;
}
</style>
