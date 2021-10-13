<template xmlns:el-form="http://www.w3.org/1999/html">
  <div class="login-page-wrap">
    <div class="welcome-text">欢迎，请登陆校园信息检索系统...</div>
<!--    <div class="content-wrap">-->
<!--      <div>-->
<!--        <label>用户名：</label>-->
<!--        <el-input placeholder="用户名" v-model="user"></el-input>-->
<!--      </div>-->
<!--      <div>-->
<!--        <label>密码：</label>-->
<!--        <el-input-->
<!--            placeholder="密码"-->
<!--            v-model="password"-->
<!--            show-password-->
<!--        ></el-input>-->
<!--      </div>-->
<!--      <el-button type="primary" round @click="_handleLogin">登陆</el-button>-->
<!--    </div>-->
    <div class="login-border-warp">
    <el-form :model="param" :rules="rules" ref="login" label-width="80px"  label-position="labelPosition" class="ms_content">
      <el-form-item prop="username" label="用户名">
        <el-input v-model="param.username" placeholder="请输入用户名/邮箱">
          <el-button slot="prepend" icon="el-icon-user"></el-button>
        </el-input>
      </el-form-item>
      <el-form-item prop="passwd" label="密码">
        <el-input v-model="param.passwd" placeholder="请输入密码" type="password">
          <el-button slot="prepend" icon="el-icon-lock"></el-button>
        </el-input>
      </el-form-item>
      <el-form-item style="width: 100%">
        <a href="/register" class="register">注册</a>
      </el-form-item>
        </el-form>
      <div class="my_button">
        <el-button type="primary" @click="submit()">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      param:{
        labelPosition:'right',
        username: 'admin',
        passwd:'123456'
      },
      rules:{
        username:[{required:true,message:"请输入用户名",trigger:'blur'}],
        passwd: [{required:true,message:"请输入密码",trigger:'blur'}]
      }
    };
  },
  methods: {
    _handleLogin() {
      this.$router.push({
        name: "Home",
      });
    },
    // login(){
    //   this.$refs.login.validate(async valid =>{
    //     if(!valid) {
    //       this.$message.error("请输入账号和密码");
    //              return false;
    //     }
    //     const {data:result} = await this.$http.post('login',this.param);
    //     if(result.meta.status !== 200)return this.$message.error(result.meta.msg);
    //     this.$message.success(result.meta.msg + result.data.username);
    //     window.sessionStorage.setItem("token",result.data.token);
    //     window.sessionStorage.setItem("activePath",'/dashboard');
    //     this.$router.push("/home");
    //   });
    // },
    submit(){
      this.$refs.login.validate(valid => {
        if(valid){
          this.$message.success("登录成功");
          this.$router.push('/Home');
        }
        else{
          this.$message.error("请输入账号和密码");
          return false;
        }
      });
    }
  },
};
</script>

<style lang="scss" scoped>
.login-page-wrap {
  width: 100%;
  height: 100%;
  background-image: url("../assets/login.png");
  background-size: cover;
  background-position: center;
  position: relative;

  .login-border-warp{
    position: absolute;
    left: 50%;
    top: 50%;
    width:450px;
    height: 300px;
    margin: -10px 0 0 -200px;
    background:rgba(255,255,255,0.3);
    border: 1px solid #fff;
    box-shadow: 0 2px 12px 0 rgba(255,255,255,1);

    .my_button{
      text-align: center;
      margin-top:-12%;
      width:100%;
      border-radius: 8px;
    }
    .ms_content{
      padding:50px 30px;
    }
    .register {
      float: right;
      margin-top:-5%;
      color: rgb(24, 144, 255);
    }
  }

  .welcome-text {
    padding: 12% 0 2%;
    text-align: center;
    font-size: 48px;
    font-weight: bold;
  }
  .content-wrap {
    text-align: center;
    margin: 4% auto;
    label {
      display: inline-block;
      width: 100px;
      text-align: right;
      font-size: 16px;
      font-weight: bold;
    }
    .el-input {
      width: 300px;
      margin: 15px 0;
    }
    .el-button {
      width: 300px;
      margin-top: 25px;
      margin-left: 100px;
      border-radius: 8px;
    }
  }
}
</style>
