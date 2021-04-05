<!--
 * @Descripttion: 
 * @version: 
 * @Author: wsz
 * @Date: 2021-04-01 12:07:21
 * @LastEditors: wsz
 * @LastEditTime: 2021-04-01 14:43:07
-->
<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="pink">
      <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="pink">
      <img slot="item-icon" src="../../assets/img/tabbar/category.svg" alt="">
      <img slot="item-icon-active" src="../../assets/img/tabbar/category_active.svg" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="pink">
      <img slot="item-icon" src="../../assets/img/tabbar/shopcart.svg" alt="">
      <img slot="item-icon-active" src="../../assets/img/tabbar/shopcart_active.svg" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="deepPink">
      <img slot="item-icon" src="../../assets/img/tabbar/profile.svg" alt="">
      <img slot="item-icon-active" src="../../assets/img/tabbar/profile_active.svg" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  //由于已经配置了别名路径，所以只需要在最前面加上指定的文件名即可
  import TabBar from 'components/tabbar/TabBar'   
  //以上写法等价于如下写法：
  import TabBarItem from '@/components/tabbar/TabBarItem'

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
