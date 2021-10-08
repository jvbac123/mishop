<template>
  <div>
    <div class="login-outer">
      <div class="login-frame">
        <div style="text-align: center">
          <h3>系统管理登陆</h3>
        </div>
        <el-form ref="form" :model="form" :rules="rules" >
          <el-form-item prop="username">
            <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item  prop="password" >
            <el-input v-model="form.password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="login-button" type="primary" @click="onSubmit"
              >登陆</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import { a_login } from "@/api/api";

export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "change" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "change" },
        ],
      },
    };
  },
  methods: {
    onSubmit() {
      this.$refs["form"].validate((valid) => {
        if (valid) {
          a_login(this.form).then((resp) => {

            if ( resp["data"]["code"] === 500 ) {

              this.$message.error(resp["data"]["message"]);

              //to

            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>
<style>
body {
  background-color: #f0f0f0;
}

.login-outer {
  width: 400px;
  margin: 150px auto 0 auto;
  padding: 10px;
}
.login-frame {
  width: 400px;
}
.login-title {
  margin-bottom: 30px;
  text-align: center;
}
.login-button {
  width: 100%;
}
</style>
