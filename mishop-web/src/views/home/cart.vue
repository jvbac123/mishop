<template>
  <NavBar title="购物车"/>
  <ul>
    <li v-for="item in list" class="cart-item">
      <div class="info">
        <van-image class="image"/>
        <div class="info-list">
          <p>{{item.name}}</p>
          <span class="price">{{item.price}}</span>
          <div>
            <van-stepper  max="999" min="1" v-model="item.num" />
          </div>
        </div>
      </div>
      <van-icon name="delete-o" size="25" />
    </li>
  </ul>
  <div >
    <div style="margin: 10px;">
      <span>购物车里共有{{list.length}}件商品:</span>
      <span>共计:</span>
      <span style="color:#f15353;font-size: 16px;">
        <span>￥</span>
        <span style="font-size: 18px;">{{sum}}</span>
      </span>
    </div>
    <div style="display:flex;justify-content:space-around">
      <van-button class="clear-btn" icon="delete" @click="clear">清空购物车</van-button>
      <van-button class="buy-btn" icon="gold-coin-o">去结算</van-button>
    </div>
  </div>
</template>
<script>
import NavBar from "../../components/NavBar.vue";
export default {
  name: "cart",
  components: {NavBar},
  computed:{
    sum(){
      let sum=0;
      this.list.forEach(item=>{sum+=item.price*item.num})
      return sum;
    }
  },
  data(){
    return {
      list:[
        {name:"product1",num:1,price:100.11},
        {name:"product3",num:2,price:150}
      ]
    }
  },
  methods:{
    clear(){
      this.list=[]
    }
  }

}
</script>-
<style scoped>
  .cart-item{
    width: 100%;
    background-color: #fff;
    margin: 3px 0 0 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: space-between;
  }
  .cart-item>*{
    margin: 10px;
  }
  .info{
    display: flex;
  }
  .info-list>*{
    margin-top: 10px;
  }
  .cart-item p{
    color: #555;
    margin:0 0 10px 0;
  }
  .price {
    color: #f15353;
    font-size: 16px;
  }
   .price:before{
    content:"￥";
    font-size: 14px;
  }

  .image{
    width: 80px;
    height: 90px;

    margin-right: 10px;
  }
  .clear-btn{
    flex:1;
    background-color:#e3e3e3;
    color:#339;
  }
  .buy-btn{
    flex:1;
    background-color:#ff3333;
    color:#fff;
  }
</style>