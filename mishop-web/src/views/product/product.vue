<template>
  <NavBar />
  <div class="bcp img mb mt">
    <img alt="image"/>
    <div class="img-panel">1/10</div>
  </div>
  <div class="bcp tb">
    <h3>{{ info.name }}</h3>
    <p>{{ info.dec }}</p>
    <div class="price">
      <p>{{ info.price }}</p>
    </div>
  </div>

    <van-cell class="mt" title="数量：">
      <template #value>
        <van-stepper v-model="value" max="999" min="1" />
      </template>
    </van-cell>

  <div class="mt ">
    <van-cell is-link title="图文详情"/>
    <van-cell is-link title="规格参数" />
    <van-cell is-link title="用户评价"/>
  </div>
  <div class="foot">
    <div class="fl l">
      <a>
        <van-icon class="icon" name="star-o"/>
        <span>收藏</span>
      </a>
      <a>
        <van-icon class="icon" name="cart-o"/>
        <span>购物车</span>
      </a>
    </div>
    <div class="fl r">
      <div class="fl btn1">加入购物车</div>
      <div class="fl btn2">立即购买</div>
    </div>
  </div>
</template>

<script>
import NavBar from "../../components/NavBar.vue";
export default {
  name: "product",
  components:{NavBar},
  data() {
    return {
      info: {
        name: "ProductName",
        dec: "ProductDescription",
        price: "3899.00"
      },
      value:1
    }
  }

}
</script>

<style scoped>
.tb {
}

.bcp {
  background-color: #fff;
  padding: 10px;
}

.fl {
  float: left;
}

.mt {
  margin-top: 10px;
}

.mb {
  margin-bottom: 10px;
}



.tb h3 {
  font-size: 16px;
}

.tb p {
  font-weight: normal;
  color: #93a0ae;
  margin: 0;
}

.price p {
  color: #f15353;
  font-size: 20px;
  font-weight: bold;

}

.price p:before {
  content: "¥";
  font-size: 16px;
  margin-right: 3px;
  font-style: normal;
}

.foot {
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0;
  background-color: #f6f6f6;
}

.foot > * {
  height: 50px;
  line-height: 50px;
  text-align: center;
}

.foot .l {
  width: 40%;
}
.foot .l a{
  float: left;
  width: 50%;
}
.foot .l .icon {
  display: block;
  font-size: 22px;
  line-height: 22px;
  color: #909092;
}
.foot .l span {
  display: block;
  line-height: 20px;
  color: #909092;
}

.foot .l>* {
  position: relative;
  height: 40px;
  padding: 5px 0 0 0;
  border-top: 1px solid #e5e5e5;
  text-decoration: none;
}

.foot .r {
  width: 60%;
  height: 100%;
}


.r .btn1, .r .btn2 {
  width: 50%;
  color: white;
}

.btn1 {
  background-color: #ff6666;
}

.btn2 {
  background-color: #ffb03f;
}
.img {
  height: 180px;

  position:relative;
}
.img-panel{
  position: absolute;
  width: 45px;
  height: 20px;
  color: white;
  line-height: 20px;
  text-align: center;
  border-radius: 5px;
  background-color:#ccc;
  bottom: 5px;
  right: 5px;
}
</style>