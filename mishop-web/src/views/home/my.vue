<template>
  <div>

      <div class="info">
        <div class="image-panel">
          <van-image   round  width="50px"  height="50px" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        </div>
        <div class="n-p">nickname</div>
      </div>
        <van-grid>
          <van-grid-item icon="like" text="商品收藏" />
          <van-grid-item icon="underway" text="我的足迹" />
          <van-grid-item icon="wap-home" text="收获地址" />
          <van-grid-item icon="chat" text="我的评价" />
        </van-grid>


    <van-cell icon="goods-collect" title="我的订单" is-link />
    <van-cell icon="setting" title="个人设置" is-link />
    <van-cell icon="share" title="退出登录" is-link />
  </div>
</template>
<script>
export default {
  name: "my",
  data(){
    return {

    }
  }
}
</script>
<style  scoped>
  .info {
    display: flex;
    background-color: #1989fa;
    color: white;
    padding: 15px;
    line-height: 60px;
    height: 60px;
  }
  .image-panel{
    background-color:rgba(255,255,255,1);
    padding:5px;
    border-radius:50%;
  }

  .n-p {
    margin-left: 20px;
  }

</style>