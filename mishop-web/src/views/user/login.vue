<template>
  <NavBar title="登录"/>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field label="用户名" placeholder="用户名"/>
      <van-field label="密码" placeholder="密码"/>
      <van-field name="switch" label="一周内免登录">
        <template #right-icon>
          <van-switch v-model="checked" size="20" />
        </template>
      </van-field>
    </van-cell-group>
      <van-button round  native-type="submit" type="primary">登录</van-button>
      <div class="panel">
        <div>没有账户？
          <a href="#">立即注册</a>
        </div>
          <a href="#">忘记密码?</a>
      </div>
  </van-form>

</template>

<script>
import NavBar from "../../components/NavBar.vue";
export default {
  name: "login.vue",
  components: {NavBar},
  data(){
    return {
      checked:true
    }
  },
  methods:{
     onSubmit(){

    }
  }
}
</script>

<style>
.van-button{
  width: calc(100% - 30px);
  margin: 15px;
}
.van-cell-group{
  margin-top: 15px;
}
.panel{
  display: flex;
  justify-content:space-around;

}

</style>