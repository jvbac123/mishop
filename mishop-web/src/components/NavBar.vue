<template>
  <van-nav-bar :title="P_title"
               :left-arrow="!noBack"
               @click-left="$router.go(-1)"
               @click-right="$router.push('/')">
    <template #right>
        <van-icon v-if="!noBack" name="wap-home-o" size="16" />
    </template>0
  </van-nav-bar>
</template>
<script>
export default {
  props: {
    title:String,
    noBack:Boolean
  },
  data() {
    return {
      P_title:""
    }
  },
  mounted() {
    console.log(this.$route);

      this.P_title=this.$props.title;

  },
  methods: {

  }

}
</script>
<style>
:root {
  --van-nav-bar-background-color: #1989fa;
  --van-nav-bar-title-text-color: #fff;
  --van-nav-bar-icon-color:#fff;
}
</style>