<template>
  <div>

      <router-view/>
      <div style="height: 5rem;"></div>

    <van-tabbar v-model="active">
      <van-tabbar-item v-for="i in $route.matched[0].children"
          :icon="i.icon"
          :to="i.path"
          route
      >
        {{ i.title }}
      </van-tabbar-item>

    </van-tabbar>
  </div>
</template>
<script>
export default {
  name: "MainLayout",

  data() {
    return {
      active: 0
    }
  },
  created() {
    //console.log(this.$route.matched[0].children)
  },
  methods: {}

}
</script>

<style scoped>

</style>