<template>
  <div>分类</div>
  <van-sidebar v-model="active">
    <van-sidebar-item v-for="i in 10" :title="'标签'+i" />
  </van-sidebar>
</template>

<script>


export default {
  data() {
    return {
      items:[
        { text: '浙江', children: [],  },
        { text: '江苏', children: [],  },
      ],
      active:0,
      activeIndex:0,
    };
  },
};
</script>

<style scoped>

</style>